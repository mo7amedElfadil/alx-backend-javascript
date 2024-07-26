#!/usr/bin/node
const request = require('request');
const { expect } = require('chai');

/**
 * Integration test for the API
 * Testing the API endpoints
 * GET /
 * GET /cart/:id
 * POST /login
 * GET /available_payments
 */
describe('Integration test for API', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/11`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 11');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-1`, (_, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/42hrf3`, (_, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

    it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Mohamed'}}, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Mohamed');
      done();
    });
  });

  it('POST /login returns 404 response for empty userName', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: ''}}, (_, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns 404 response for missing userName', (done) => {
    request.post(`${API_URL}/login`, {json: {}}, (_, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * using deep.equal to compare the object returned at every level
   * i.e. comparing the object and its nested objects
   */

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });

});
