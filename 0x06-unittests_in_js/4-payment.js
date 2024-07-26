#!/usr/bin/node
const Utils = require('./utils');

/**
 * @function sendPaymentRequestToApi - Send a payment request to an API
 * @param {number} totalAmount - The total amount to pay
 * @param {number} totalShipping - The total shipping amount
 * @return {void}
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
