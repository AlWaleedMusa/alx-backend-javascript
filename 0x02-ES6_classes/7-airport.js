#!/usr/bin/env node

/**
 * Class representing an Airport.
 */
export default class Airport {
  /**
   * Create an Airport.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Get the name of the airport.
   * @returns {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the airport.
   * @param {string} value - The name of the airport.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Get the code of the airport.
   * @returns {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code of the airport.
   * @param {string} value - The code of the airport.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Get the string tag for the airport.
   * @returns {string} The code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
