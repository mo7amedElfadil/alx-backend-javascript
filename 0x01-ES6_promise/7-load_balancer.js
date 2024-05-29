/**
 * loadBalancer accepts 2 promises and returns the value of the promise that resolves first.
 *
 * @param {Promise} chinaDownload - The promise that resolves in China.
 * @param {Promise} USDownload - The promise that resolves in the US.
 * @returns {Promise} - A promise that resolves first.
 *
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
