#!/usr/bin/env node

import Currency from './3-currency';

/**
 * Class representing Pricing.
 */
export default class Pricing {
  /**
   * Create a Pricing instance.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Get the amount of the pricing.
   * @returns {number} The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the amount of the pricing.
   * @param {number} value - The amount of the pricing.
   * @throws {TypeError} Throws an error if the value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Get the currency of the pricing.
   * @returns {Currency} The currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set the currency of the pricing.
   * @param {Currency} value - The currency of the pricing.
   * @throws {TypeError} Throws an error if the value is not an instance of Currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = value;
  }

  /**
   * Display the full price in the format "amount currency_name (currency_code)".
   * @returns {string} The full price representation.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Convert the price using a conversion rate.
   * @param {number} amount - The amount to be converted.
   * @param {number} conversionRate - The conversion rate to be applied.
   * @returns {number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
