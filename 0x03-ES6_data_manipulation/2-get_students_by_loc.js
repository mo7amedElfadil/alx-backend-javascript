/**
 * getStudentsByLocation - Returns an array of students that are
 * located in a specific city.
 * filter - method creates a new array with all elements that pass the test
 * implemented by the provided function.
 * @students: an array of student objects
 * @city: a string representing a city
 * @returns {Array} - an array of students located in the city
 */
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((student) => student.location === city);
}
