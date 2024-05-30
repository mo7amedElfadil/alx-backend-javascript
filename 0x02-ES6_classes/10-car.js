/**
 * Car class - defines a car with a brand, motor and color
 * @param {string} brand
 * @param {string} motor
 * @param {string} color
 * @cloneCar - returns a new instance of the same class
 */
export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // getter for constructor to return the class when called with a
  // Symbol.species, providing a customisable entry-point for what type to create
  static get [Symbol.species]() {
    return this;
  }

  // returns a new instance of the same class
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
