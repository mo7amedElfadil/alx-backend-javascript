#!/usr/bin/node
/**
 * @function calculateNumber - round a and b and return the sum
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number} - the sum of a and b
 */
function calculateNumber(type, a, b) {
  switch (type) {
    case 'SUM': {
      return Math.round(a) + Math.round(b);
    }
    case 'SUBTRACT': {
      return Math.round(a) - Math.round(b);
    }
    case 'DIVIDE': {
      const roundedB = Math.round(b);
      if (roundedB === 0) {
        return 'Error';
      }
      return Math.round(a) / roundedB;
  }
    default:
      break;
  }
}

module.exports = calculateNumber;
