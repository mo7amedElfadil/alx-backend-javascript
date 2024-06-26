/**
 * WeakMap is a collection of key/value pairs in which the keys are weakly referenced.
 * The keys must be objects and the values can be arbitrary values.
 * The keys in WeakMap are weakly referenced, which means that if there are
 * no other references to the key, the key can be garbage collected.
 * WeakMap is not enumerable, which means that you can’t iterate over its elements.
 */
export const weakMap = new WeakMap();

/**
 * queryAPI function is used to query an API endpoint.
 * @param {string} endpoint
 * @returns {void}
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
