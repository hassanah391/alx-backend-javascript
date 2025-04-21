/**
 * Represents an airport with a name and a code.
 *
 * Provides methods to retrieve the airport's name and code,
 * and overrides the default string tag for custom stringification.
 */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Gets the name of the airport.
   *
   * @returns {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Gets the code of the airport.
   *
   * @returns {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Custom string tag override for Object stringification.
   *
   * @returns {string} The code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
