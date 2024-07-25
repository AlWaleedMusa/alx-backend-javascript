#!/usr/bin/env node

/**
 * Class representing a Currency.
 */
export default class Currency {
  /**
   * Create a Currency.
   * @param {string} code - The code of the currency.
   * @param {string} name - The name of the currency.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Get the code of the currency.
   * @returns {string} The code of the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code of the currency.
   * @param {string} value - The code of the currency.
   * @throws {TypeError} Throws an error if the value is not a string.
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
   * Get the name of the currency.
   * @returns {string} The name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the currency.
   * @param {string} value - The name of the currency.
   * @throws {TypeError} Throws an error if the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Display the full currency in the format "name (code)".
   * @returns {string} The full currency representation.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
