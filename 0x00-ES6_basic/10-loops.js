/**
 * Append a string to each value in an array
 * @param {Array} array
 * @param {string} appendString
 * @returns {Array}
 */
export default function appendToEachArrayValue(array, appendString) {
  /* eslint no-param-reassign: "error" */
  let i = 0;
  for (const value of array) {
    array[i] = appendString + value;
    i += 1;
  }
  return array;
}
