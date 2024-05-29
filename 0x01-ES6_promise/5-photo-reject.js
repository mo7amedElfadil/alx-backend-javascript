/**
 * uploadPhoto - returns a promise rejecting with an error message
 * @param {string} filename
 * @returns {Promise<string>}
 */

export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
