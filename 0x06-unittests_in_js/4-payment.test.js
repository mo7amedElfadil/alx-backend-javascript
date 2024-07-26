#!/usr/bin/node
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
/**
 * @test {sendPaymentRequestToApi}
 * @description test with sinon stub
 */

describe('sendPaymentRequestToApi', () => {
  it('Stub and spy on console.log', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    calculateNumberStub.returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleSpy.restore();


  })
});
