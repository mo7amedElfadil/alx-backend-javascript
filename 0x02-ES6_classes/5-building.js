/**
 * Building class
 * @param {number} sqft
 * checkEvacuation {function} - Throws an error if this method is not
 * overridden by a subclass
 */
export default class Building {
  constructor(sqft) {
    this.checkEvacuation();
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = sqft;
  }

  checkEvacuation() {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }
}
