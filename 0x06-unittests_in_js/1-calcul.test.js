const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // Test cases for sum of rounded of a and b
  it('should return sum when adding two integers', () => {
    assert.equal(calculateNumber('SUM', 1.0, 3), 4);
  });

  it('should round second argument before adding', () => {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('should round first argument before adding', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3), 4);
  });

  it('should round both arguments before adding', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should round up when decimal part is .5 or greater', () => {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
  });

  // Test cases for substraction of rounded of a and b
  it('should subtract rounded values when first value is smaller', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should subtract rounded values when first value is zero', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 5), -5);
  });
  it('should subtract rounded values when first value is larger', () => {
    assert.equal(calculateNumber('SUBTRACT', 8.8, 4.8), 4);
  });

  // Test cases for Divide of rounded of a and b
  it('should divide rounded values with exact result', () => {
    assert.equal(calculateNumber('DIVIDE', 4.2, 2.4), 2);
  });
  it('should divide rounded values when numerator is zero', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 5), 0);
  });
  it('should divide rounded values with decimal result', () => {
    assert.equal(calculateNumber('DIVIDE', 8.8, 4.8), 1.8);
  });
  it('should return "Error" when dividing by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 9, 0), 'Error');
  });

});
