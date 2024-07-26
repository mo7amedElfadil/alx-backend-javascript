#!/usr/bin/node
/**
 * @module Utils
 * @description Utility functions for testing
 *

 *
 */

const Utils = {
  /**
   * @function calculateNumber - round a and b and return the sum
   * @param {string} type - the type of operation
   * @param {number} a - the first number
   * @param {number} b - the second number
   * @returns {number} - the sum of a and b
   * @returns {number} - the difference of a and b if type is SUBTRACT
   * @returns {number} - the quotient of a and b if type is DIV
   * @returns {string} - 'Error' if b is 0
   * @returns {undefined} - if type is not SUM, SUBTRACT, or DIV
   */
  calculateNumber: (type, a, b) => {
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
        return undefined;
    }
  }
};

module.exports = Utils;
