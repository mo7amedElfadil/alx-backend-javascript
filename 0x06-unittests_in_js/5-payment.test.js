#!/usr/bin/node
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
/**
 * @test {sendPaymentRequestToApi}
 * @description test with sinon stub using hooks
 *
 */

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('spy on console.log with value 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('spy on console.log with value 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });

});
