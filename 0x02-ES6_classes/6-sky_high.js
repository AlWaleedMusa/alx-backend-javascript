#!/usr/bin/env node

import Building from './5-building';

/**
 * Class representing a SkyHighBuilding.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Create a SkyHighBuilding.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Get the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Set the number of floors in the building.
   * @param {number} value - The number of floors.
   * @throws {TypeError} Throws an error if the value is not a number.
   */
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  /**
   * Get the evacuation warning message for the building.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
