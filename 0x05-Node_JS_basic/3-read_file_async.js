#!/usr/bin/node
const fs = require('fs');

/**
 * function countStudents - reads a CSV file provided as argument asynchronously
 * and computes the total number of students
 * and the number of students in each field
 * @param {string} path - path to the CSV file
 * @throws {Error} - if the file at path is not readable
 * @returns {undefined}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const cleanData = data
          .split('\n')
          .filter((line) => line.length > 0);

        const fields = {};
        const dbFieldNames = cleanData[0].split(',');
        const studentPropValues = cleanData.slice(1, cleanData.length);
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

        console.log(`Number of students: ${cleanData.length - 1}`);
        for (const field in fields) {
          if (field) {
            const listStudents = fields[field];
            console.log(`Number of students in ${field}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
