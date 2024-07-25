#!/usr/bin/node
/**
 * test for calcul.js
 */
const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when summing 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 1 when summing 1.4 and 0', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 0), 1);
    });
    it('should return -3 when summing 1.4 and -4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, -4.5), -3);
    });
    it('should return -4 when summing 1.4 and -4.6', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, -4.6), -4);
    });
    it('should return -3 when summing 1.4 and -4.4', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, -4.4), -3);
    });
    it('should return -2 when summing 1.6 and -4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.6, -4.5), -2);
    });
    it('should return -2 when summing 1.5 and -4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, -4.5), -2);
    });
    it('should return 4 when summing 1 and 3', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return 5 when summing 1 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should return 5 when summing 1.2 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('should return 6 when summing 1.5 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('should return 5 when summing 1 and 3.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.5), 5);
    });
    it('should return 4 when summing 1 and 3.4', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.4), 4);
    });
    it('should return 0 when summing 0.1 and 0.3', function() {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when subtracting 4.5 from 1.4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return 1 when subtracting 0 from 1.4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 0), 1);
    });
    it('should return 5 when subtracting -4.5 from 1.4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.5), 5);
    });
    it('should return 6 when subtracting -4.6 from 1.4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.6), 6);
    });
    it('should return 5 when subtracting -4.4 from 1.4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.4), 5);
    });
    it('should return 6 when subtracting -4.5 from 1.6', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.6, -4.5), 6);
    });
    it('should return 6 when subtracting -4.5 from 1.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, -4.5), 6);
    });
    it('should return -2 when subtracting 3 from 1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should return -3 when subtracting 3.7 from 1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('should return -3 when subtracting 3.7 from 1.2', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('should return -2 when subtracting 3.7 from 1.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('should return -3 when subtracting 3.5 from 1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.5), -3);
    });
    it('should return -2 when subtracting 3.4 from 1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.4), -2);
    });
    it('should return 0 when subtracting 0.3 from 0.1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when dividing 1.4 by 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return Error when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return -0.25 when dividing 1.4 by -4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
    });
    it('should return -0.2 when dividing 1.4 by -4.6', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -4.6), -0.2);
    });
    it('should return -0.25 when dividing 1.4 by -4.4', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -4.4), -0.25);
    });
    it('should return -0.5 when dividing 1.6 by -4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.6, -4.5), -0.5);
    });
    it('should return -0.5 when dividing 1.5 by -4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, -4.5), -0.5);
    });
    it('should return 0.3333333333333333 when dividing 1 by 3', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    });
    it('should return 0.25 when dividing 1 by 3.7', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it('should return 0.25 when dividing 1.2 by 3.7', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });
    it('should return 0.5 when dividing 1.5 by 3.7', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });
    it('should return 0.25 when dividing 1 by 3.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.5), 0.25);
    });
    it('should return 1/3 when dividing 1 by 3.4', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.4), 1/3);
    });
    it('should return Error when dividing 0.1 by 0.3', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.3), 'Error');
    });
  });
});
