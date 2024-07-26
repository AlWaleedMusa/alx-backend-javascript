#!/usr/bin/env node

/**
 * Class representing a HolbertonClass.
 */
export default class HolbertonClass {
  /**
   * Create a HolbertonClass.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * Get the size of the class.
   * @returns {number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Set the size of the class.
   * @param {number} value - The size of the class.
   */
  set size(value) {
    this._size = value;
  }

  /**
   * Get the location of the class.
   * @returns {string} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Set the location of the class.
   * @param {string} value - The location of the class.
   */
  set location(value) {
    this._location = value;
  }

  /**
   * Convert the class to a primitive value.
   * @param {string} hint - The type hint for the conversion ('number' or 'string').
   * @returns {number|string} The size if hint is 'number', the location if hint is 'string'.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
