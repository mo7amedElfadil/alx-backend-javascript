/**
 * HolbertonCourse Class - Represents a Holberton course object
 * @name: string - Name of the course
 * @length: number - Length of the course in weeks
 * @students: array - List of students enrolled in the course
 * @constructor
 * @throws {TypeError} - If input is not a string (name), number (length),
 *      or array of strings (students)
 * @returns {HolbertonCourse} - A new HolbertonCourse object
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    } else if (students.some((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }

    this._students = students;
  }
}
