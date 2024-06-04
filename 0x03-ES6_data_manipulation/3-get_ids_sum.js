/**
 * getStudentIdsSum - returns the sum of all student ids
 * reduce - method applies a function against an accumulator and each
 * element in the array (from left to right) to reduce it to a single value.
 * If initialValue is provided, then accumulator will be equal to initialValue,
 * and currentValue will be equal to the first value in the array.
 * If no initialValue is provided, then accumulator will be equal to the first
 * value in the array, and currentValue will be equal to the second value in
 * the array.
 * It is used to sum all student ids.
 * if the array is empty, it returns 0.
 * @param {Array} students - array of student objects
 * @returns {Number} - sum of all student ids
 *
 */
export default function getStudentIdsSum(students) {
  return students.reduce((acc, student) => acc + student.id, 0);
}
