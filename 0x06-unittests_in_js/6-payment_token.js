#!/usr/bin/node
/**
 * support async testing
 * @function getPaymentTokenFromAPI - get payment token from API
 * @param {boolean} success - if true, resolve with 'Successful response from the API' otherwise do nothing
 * @returns {Promise<string>} - resolve with 'Successful response from the API'
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
  });
}

module.exports = getPaymentTokenFromAPI;
