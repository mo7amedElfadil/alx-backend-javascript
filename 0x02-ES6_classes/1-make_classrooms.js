import Classroom from './0-classroom';

/**
 * initializeRooms - Initializes 3 classrooms with the following capacities:
 * - Room 19: 19 students
 *   - Room 20: 20 students
 *   - Room 34: 34 students
 * @returns {Array} - An array of Classroom objects
 */
export default function initializeRooms() {
  return [
    new Classroom(19),
    new Classroom(20),
    new Classroom(34),
  ];
}
