#!/usr/bin/node
import { readDatabase } from '../utils';

/**
 * @class StudentsController - class for students controller
 */
class StudentsController {
  /**
   * getAllStudents - get all students
   *
   * @param {Object} req  request
   * @param {Object} res  response
   * @return {Object}  all students
   */
  static async getAllStudents(_, res) {
    try {
      const path = process.argv[2] || '';
      const data = await readDatabase(path);
      const keys = Object.keys(data);
      const fields = keys.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      const response = ['This is the list of our students'];
      for (const field of fields) {
        response.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      }
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * getAllStudentsByMajor - get all students by major
   * @param {Object} req  request
   * @param {Object} res  response
   * @return {Object}  all students by major
   */
  static async getAllStudentsByMajor(req, res) {
    const path = process.argv[2] || '';
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const data = await readDatabase(path);
      if (!data[major]) {
        res.status(500).send('Cannot load the database');
        return;
      }
      const response = `List: ${data[major].join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
