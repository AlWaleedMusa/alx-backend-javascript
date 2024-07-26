#!/usr/bin/env node

/**
 * Class representing a Car.
 */
export default class Car {
  /**
   * Create a Car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * Get the brand of the car.
   * @returns {string} The brand of the car.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Set the brand of the car.
   * @param {string} value - The brand of the car.
   */
  set brand(value) {
    this._brand = value;
  }

  /**
   * Get the motor type of the car.
   * @returns {string} The motor type of the car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Set the motor type of the car.
   * @param {string} value - The motor type of the car.
   */
  set motor(value) {
    this._motor = value;
  }

  /**
   * Get the color of the car.
   * @returns {string} The color of the car.
   */
  get color() {
    return this._color;
  }

  /**
   * Set the color of the car.
   * @param {string} value - The color of the car.
   */
  set color(value) {
    this._color = value;
  }

  /**
   * Get the species of the class.
   * @returns {Function} The class itself.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Clone the car.
   * @returns {Car} A new instance of the Car class.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
