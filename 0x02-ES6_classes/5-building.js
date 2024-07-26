#!/usr/bin/env node

export default class Building {
  /**
   * Creates a new class named Building.
   * @param {Number} sqft
   */
  constructor(sqft) {
    this._sqft = sqft;
  }

  /**
   * Get the square footage of the building.
   * @returns {Number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method that must be implemented by classes that extend Building.
   * @throws {Error} Throws an error with the message
   */
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
