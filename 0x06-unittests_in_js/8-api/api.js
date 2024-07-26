#!/usr/bin/node
const express = require('express');
const app = express();
const port = 7865;

/**
 * API endpoints
 * GET /
 */
app.get('/', (_, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
