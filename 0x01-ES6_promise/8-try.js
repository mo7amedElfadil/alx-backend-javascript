/**
 * divideFunction - Divide two numbers. Throws an error if the denominator is 0.
 * @param {number} numerator
 * @param {number} denominator
 * @returns {number} The result of the division.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
