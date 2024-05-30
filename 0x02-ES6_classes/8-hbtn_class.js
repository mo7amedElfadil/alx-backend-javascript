/**
 * HolbertonClass - class
 *   when class is cast into a string, it should return the name of the class
 *   when class is cast into a number, it should return the size
 * @size: number
 * @location: string
 * @constructor
 * @get size
 * @set size
 * @get location
 * @set location
 * @static validateInput
 */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    HolbertonClass.validateInput(value, 'size');
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    HolbertonClass.validateInput(value, 'location');
    this._location = value;
  }

  static validateInput(value, name) {
    if (name === 'size' && typeof value !== 'number') {
      throw new TypeError(`${name} must be a number`);
    } else if (name === 'location' && typeof value !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
  }

  // returns the location when the object is coerced to a string
  // returns the size when the object is coerced to a number
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return this.location;
    if (hint === 'number') return this.size;
    return null;
  }
}
