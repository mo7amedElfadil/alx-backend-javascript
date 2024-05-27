/**
 * Create an iterator object that will iterate over the report object
 * to go through every employee in every department
 * @param {Object} report
 * @returns {Object} iterator object
 */
export default function createIteratorObject(report) {
  function* employeeGenerator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
  return employeeGenerator();
}
