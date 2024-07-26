#!/usr/bin/node
const express = require('express');
const app = express();
const port = 7865;
app.use(express.json());

/**
 * API endpoints
 * GET /
 * GET /cart/:id
 * POST /login
 * GET /available_payments
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

app.get('/available_payments', (_, res) => {
  const payments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.set("Content-Type", "application/json");
  res.statusCode = 200;
  res.json(payments);
});

app.post('/login', (req, res) => {
    const userName = req.body.userName;
    if (userName) {
      res.send(`Welcome ${userName}`);
    } else {
      res.status(404).send();
    }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
