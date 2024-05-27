/**
 * createReportObject - This function should
 *   return an object containing the key allEmployees and
 *   a method property called getNumberOfDepartments.
 *   allEmployees is a key that maps to an object containing
 *   the department name and a list of all the employees in that department.
 * @param {Array} employeesList
 * @return {Object}
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
