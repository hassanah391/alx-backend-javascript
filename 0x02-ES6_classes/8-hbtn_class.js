/**
 * Represents an ALX class with a size and location.
 *
 * Provides methods to retrieve the size and location of the class,
 * and implements a custom behavior for type conversion using `Symbol.toPrimitive`.
 */
export default class ALXClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new Error('Size must be a number');
    }

    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new Error('Location must be a string');
    }
  }

  /**
   * Gets the size of the class.
   *
   * @returns {number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Gets the location of the class.
   *
   * @returns {string} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Custom behavior for type conversion using `Symbol.toPrimitive`.
   *
   * @param {string} hint - The type hint for the conversion ('number', 'string', or 'default').
   * @returns {number|string} The size if the hint is 'number',
   * the location if the hint is 'string',
   *  or the size by default.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this._size;
  }
}
