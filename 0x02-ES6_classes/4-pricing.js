import Currency from './3-currency';

/**
 * Pricing class - represents a price in a specific currency
 * @param {number} amount
 * @param {Currency} currency
 * @constructor
 * @throws {Error} - if currency is not an instance of Currency
 * @throws {Error} - if amount is not a number
 * @throws {Error} - if conversionRate is not a number
 * @displayFullPrice - returns a string representation of the price
 * @convertPrice - converts the price to a different currency
 */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be an instance of Currency');
    }
  }

  static validateNumber(value, name) {
    if (typeof value !== 'number') {
      throw new Error(`${name} must be a number`);
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    Pricing.validateNumber(amount, 'Amount');
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    Pricing.validateCurrency(currency);
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    Pricing.validateNumber(amount, 'Amount');
    Pricing.validateNumber(conversionRate, 'Conversion rate');
    return amount * conversionRate;
  }
}
