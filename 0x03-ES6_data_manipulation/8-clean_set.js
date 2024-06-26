/**
 * cleanSet - returns a string of all set values that start with a specific string
 * values that start with startString are appended without the startString
 * @param {Set} set
 * @param {string} startString
 * @return {string}
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  if (startString === '') {
    return '';
  }
  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
}
