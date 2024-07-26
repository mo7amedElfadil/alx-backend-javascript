#!/usr/bin/node
const request = require('request');
const { expect } = require('chai');

/**
 * Integration test for the API
 * Testing the API endpoints
 * GET /
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
});
