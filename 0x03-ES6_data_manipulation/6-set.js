/**
 * setFromArray - Creates a new Set instance from an array.
 * @param {Array} array - The array to create the set from.
 * @returns {Set} - The new Set instance.
 */
export default function setFromArray(array) {
  const set = new Set();
  for (const item of array) {
    set.add(item);
  }
  return set;
}
