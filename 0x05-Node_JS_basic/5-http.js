#!/usr/bin/node
/**
 * crete a http server using http module
 * assigned to variable app which will be exported
 * listen on port 1245
 * It should return plain text
 * URL path / Displays 'Hello Holberton School!' as plain text in page body
 * URL path /students Displays 'This is the list of our students' followed by
 * the same content as file 3-read_file_async.js
 */

const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
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

const app = http.createServer();

const SERVER_ROUTES = [
  {
    route: '/',
    async handler(_, res) {
      const body = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', body.length);
      res.statusCode = 200;
      res.end(body);
    },
  },
  {
    route: '/students',
    async handler(_, res) {
      const response = ['This is the list of our students'];
      countStudents(path).then((data) => {
        response.push(...data);
        const body = response.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', body.length);
        res.statusCode = 200;
        res.write(Buffer.from(body));
      })
        .catch((err) => {
          response.push(err.message);
          const body = response.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', body.length);
          res.statusCode = 404;
          res.write(Buffer.from(body));
        });
    },
  },
];

app.listen(PORT, HOST);

app.on('request', async (req, res) => {
  const route = SERVER_ROUTES.find((r) => r.route === req.url);
  if (route) {
    await route.handler(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

module.exports = app;
