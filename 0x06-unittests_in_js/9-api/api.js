#!/usr/bin/node
const express = require('express');
const app = express();
const port = 7865;

/**
 * API endpoints
 * GET /
 * GET /cart/:id
 */
app.get('/', (_, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = parseInt(req.params.id);
  res.statusCode = 200;
  res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
