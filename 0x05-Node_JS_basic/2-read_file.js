#!/usr/bin/node
const fs = require('fs');

/**
 * function countStudents - reads a CSV file provided as argument
 * and computes the total number of students
 * and the number of students in each field
 * @param {string} path - path to the CSV file
 * @throws {Error} - if the file at path is not readable
 * @returns {undefined}
 */
function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs
    .readFileSync(path, 'utf8')
    .split('\n')
    .filter((line) => line.length > 0);

  const fields = {};
  const dbFieldNames = data[0].split(',');
  const studentPropValues = data.slice(1, data.length);
  const studentNameIdx = dbFieldNames.indexOf('firstname');
  studentPropValues.forEach((studentPropValue) => {
    const student = studentPropValue.split(',');
    student.forEach((field, idx) => {
      if (dbFieldNames[idx] === 'field') {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[studentNameIdx]);
      }
    });
  });

  console.log(`Number of students: ${data.length - 1}`);
  for (const field in fields) {
    if (field) {
      const listStudents = fields[field];
      console.log(`Number of students in ${field}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
    }
  }
}

module.exports = countStudents;
