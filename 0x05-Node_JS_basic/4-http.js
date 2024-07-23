#!/usr/bin/node
/**
 * crete a http server using http module
 * assigned to variable app which will be exported
 * listen on port 1245
 * Displays 'Hello Holberton School!' in the page body for
 * any endpoint as plain text
 */

const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOST);

module.exports = app;
