/**
 * updateStudentGradeByCity - Updates the grade of a student for a specific city
 * @param {Array} students - Array of students
 * @param {String} city - City to filter students by
 * @param {Array} newGrades - Array of objects containing studentId and grade
 * @returns {Array} - Array of students with updated grades
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.filter((studentGrade) => studentGrade.studentId === student.id);
      return { ...student, grade: newGrade[0] ? newGrade[0].grade : 'N/A' };
    });
}
