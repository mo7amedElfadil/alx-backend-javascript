#!/usr/bin/node
/**
 * test for calcul.js
 */
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when summing 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return 1 when summing 1.4 and 0', function() {
      expect(calculateNumber('SUM', 1.4, 0)).to.equal(1);
    });
    it('should return -3 when summing 1.4 and -4.5', function() {
      expect(calculateNumber('SUM', 1.4, -4.5)).to.equal(-3);
    });
    it('should return -4 when summing 1.4 and -4.6', function() {
      expect(calculateNumber('SUM', 1.4, -4.6)).to.equal(-4);
    });
    it('should return -2 when summing 1.6 and -4.5', function() {
      expect(calculateNumber('SUM', 1.6, -4.5)).to.equal(-2);
    });
    it('should return 5 when summing 1 and 3.7', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when subtracting 4.5 from 1.4', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 1 when subtracting 0 from 1.4', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 0)).to.equal(1);
    });
    it('should return 6 when subtracting -4.6 from 1.4', function() {
      expect(calculateNumber('SUBTRACT', 1.4, -4.6)).to.equal(6);
    });
    it('should return -2 when subtracting 3.7 from 1', function() {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when dividing 1.4 by 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return Error when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('should return -0.25 when dividing 1.4 by -4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25);
    });
    it('should return 0.3333333333333333 when dividing 1 by 3', function() {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
    });
    it('should return 0.25 when dividing 1 by 3.7', function() {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });
  });
});
