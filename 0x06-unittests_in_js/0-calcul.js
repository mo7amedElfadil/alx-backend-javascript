#!/usr/bin/node
/**
 * @function calculateNumber - round a and b and return the sum
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number} - the sum of a and b
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
