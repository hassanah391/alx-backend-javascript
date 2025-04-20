/**
 * Represents a building with a specific square footage.
 *
 * This class serves as a base class for other building types.
 * Subclasses must implement the `evacuationWarningMessage` method.
 */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this._sqft = sqft;
  }

  /**
   * Sets the square footage of the building.
   *
   * @param {number} sqft - The square footage of the building.
   * @throws {TypeError} If sqft is not a number.
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  /**
   * Gets the square footage of the building.
   *
   * @returns {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }
}
