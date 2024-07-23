#!/usr/bin/node
const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const path = process.argv[2] || '';

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
        const result = [];
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
        result.push(`Number of students: ${cleanData.length - 1}`);
        for (const field in fields) {
          if (field) {
            const listStudents = fields[field];
            result.push(`Number of students in ${field}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
          }
        }
        resolve(result);
      }
    });
  });
}

app.get('/', (_, res) => {
  const body = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.statusCode = 200;
  res.send(body);
});

app.get('/students', (_, res) => {
  countStudents(path).then((data) => {
    const result = ['This is the list of our students'];
    result.push(...data);
    const body = result.join('\n');
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.write(Buffer.from(body));
  }).catch((err) => {
    const result = ['This is the list of our students'];
    result.push(err.message);
    const body = result.join('\n');
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.write(Buffer.from(body));
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
