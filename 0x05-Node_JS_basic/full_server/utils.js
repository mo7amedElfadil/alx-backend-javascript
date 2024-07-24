import fs from 'fs';
/**
 * function readDatabase - accepts a file path
 * Reads the data asynchronously and returns a promise
 * when file is not accessible, rejects the promise with the error
 * when file is accessible, resolves the promise with the object of arrays of the
 * firstname of students per field
 * @param {string} filePath
 * @returns {Promise}
 * @throws {Error}
 */

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
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
        resolve(fields);
      }
    });
  });
}

export default readDatabase;
