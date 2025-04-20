/**
 * Represents a product's pricing with an amount and a currency.
 *
 * Provides methods to get and set the amount and currency,
 * display the full price with currency details, and convert
 * the price using a given conversion rate.
 */
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new Error('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(valueObj) {
    if (typeof valueObj === 'object') {
      this._currency = valueObj;
    } else {
      throw new Error('currency must be an object');
    }
  }

  /**
   * Displays the full price with the currency name and code.
   *
   * @returns {string} The full price in the format "amount currencyName (currencyCode)".
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts the price to another currency using a conversion rate.
   *
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The rate to use for conversion.
   * @returns {number} The converted amount.
   * @throws {Error} If the amount or conversionRate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new Error('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
