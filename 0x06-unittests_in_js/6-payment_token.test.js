#!/usr/bin/node
const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;
/**
 * @test {getPaymentTokenFromAPI}
 */

describe('getPaymentTokenFromAPI', () => {
  it("Async test with done", (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res)
          .which.is.an('object')
          .which.has.property('data')
          .is.a('string')
          .to.equal('Successful response from the API');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
