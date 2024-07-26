#!/usr/bin/node
/**
 * @function calculateNumber - round a and b and return the sum
 * @param {string} type - the type of operation
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number} - the sum of a and b if type is SUM
 * @returns {number} - the difference of a and b if type is SUBTRACT
 * @returns {number} - the quotient of a and b if type is DIV
 * @returns {string} - 'Error' if b is 0
 * @returns {undefined} - if type is not SUM, SUBTRACT, or DIV
 */
function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
}

module.exports = calculateNumber;
