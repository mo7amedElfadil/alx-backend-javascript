/**
 * Iterate through the object and return the values of the object
 * It should return every employee name in a string, separated by |
 * @param {Object} reportWithIterator
 * @returns {Array} - Array of values
 * @example
 * Bob | Jane | Sylvie
 */
export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const value of reportWithIterator) result.push(value);
  return result.join(' | ');
}
