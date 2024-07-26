#!/usr/bin/node
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
/**
 * @test {sendPaymentRequestToApi}
 * @description test with sinon spy
 */

describe('sendPaymentRequestToApi', () => {
  it('expect to call Utils.calculateNumber with 100 and 20', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.returned(120)).to.be.true;
    spy.restore;
  })
});
