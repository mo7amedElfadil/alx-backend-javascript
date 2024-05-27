import getBudgetObject from './7-getBudgetObject';

/**
 * Returns a full budget object
 * @param {number} income
 * @param {number} gdp
 * @param {number} capita
 * @returns {Object}
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
