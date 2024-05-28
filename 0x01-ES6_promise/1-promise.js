/**
 * getFullResponseFromAPI - resolves or rejects a promise based on
 * the value of the success parameter
 * @param {boolean} success
 * @returns {Promise}
 */

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
    reject(new Error('The fake API is not working currently'));
  });
}
