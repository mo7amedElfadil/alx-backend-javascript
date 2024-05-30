import Car from './10-car';
/**
 * EVCar class - defines an electric car with a range
 * @extends Car
 * @param {string} brand
 * @param {string} motor
 * @param {string} color
 * @param {number} range
 * @cloneCar - returns a new instance of the parent class
 */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(range) {
    this._range = range;
  }

  // returns a new instance of the parent class
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
