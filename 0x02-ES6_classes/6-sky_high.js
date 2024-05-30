import Building from './5-building';

/**
 * SkyHighBuilding class
 * @extends Building
 * @param {number} sqft
 * @param {number} floors
 * @evacuationWarningMessage {function} - Returns a string with a warning
 */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new Error('Floors must be a number');
    }
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
