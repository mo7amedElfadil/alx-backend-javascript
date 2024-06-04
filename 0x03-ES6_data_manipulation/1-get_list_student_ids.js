/**
 * getListStudentIds - Returns an array of student ids from a list of students
 * map - method creates a new array populated with the results of calling a
 * provided function on every element in the calling array.
 * It is used to get the ids of all students.
 * @param {Array} students - List of students
 * @returns {Array} - List of student ids
 *
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
