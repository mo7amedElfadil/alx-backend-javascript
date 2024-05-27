/**
 * createEmployeesObject - creates an object with the department
 *  name as a key and the employees as a value
 * @param {string} departmentName
 * @param {Array<string>} employees
 * @return {Object}
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
