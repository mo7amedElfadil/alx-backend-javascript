/**
 * Airport class
 * @param {string} name
 * @param {string} code
 */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    Airport.validateString(value, 'name');
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    Airport.validateString(value, 'code');
    this._code = value;
  }

  static validateString(value, name) {
    if (typeof value !== 'string') {
      throw new Error(`${name} must be a string`);
    }
  }

  // returns the airport code when the object is coerced to a string
  get [Symbol.toStringTag]() {
    return this.code;
  }
}
