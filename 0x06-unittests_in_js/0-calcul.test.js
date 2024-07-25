#!/usr/bin/node
/**
 * test for calcul.js
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

function test() {
  assert.strictEqual(calculateNumber(1.4, 4.5), 6);
  assert.strictEqual(calculateNumber(1.4, 0), 1);
  assert.strictEqual(calculateNumber(1.4, -4.5), -3);
  assert.strictEqual(calculateNumber(1.4, -4.6), -4);
  assert.strictEqual(calculateNumber(1.4, -4.4), -3);
  assert.strictEqual(calculateNumber(1.6, -4.5), -2);
  assert.strictEqual(calculateNumber(1.5, -4.5), -2);
  assert.strictEqual(calculateNumber(1, 3), 4);
  assert.strictEqual(calculateNumber(1, 3.7), 5);
  assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  assert.strictEqual(calculateNumber(1, 3.5), 5);
  assert.strictEqual(calculateNumber(1, 3.4), 4);
  assert.strictEqual(calculateNumber(0.1, 0.3), 0);
}

test();
