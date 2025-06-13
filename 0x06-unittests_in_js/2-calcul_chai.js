function calculateNumber(type, a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    throw new TypeError('a and b must be numbers');
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }

  if (type === 'DIVIDE') {
    if (Math.round(b) === 0)
      return 'Error';
    return Math.round(a) / Math.round(b);
  }

  if (type === 'SUM') {
  return Math.round(a) + Math.round(b);
  }
}

module.exports = calculateNumber;
