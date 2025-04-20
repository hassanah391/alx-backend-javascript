/**
 * Represents a building with a specific square footage.
 *
 * This class is intended to be extended by other classes.
 * Subclasses must override the `evacuationWarningMessage` method.
 */
export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  /**
   * Placeholder method for evacuation warning messages.
   *
   * @throws {Error} If the method is not overridden by a subclass.
   */
  evacuationWarningMessage() {
    if (this.evacuationWarningMessage === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
