/**
 * Taks a list of students and returns the sum of thier ids.
 *
 * @param {*Array} listStudents - list of (objects) students
 * @returns {*number} - the sum of all the student ids.
 */
export default function getStudentIdsSum(listStudents) {
  if (Array.isArray(listStudents)) {
    return listStudents.reduce((acc, student) => acc + student.id, 0);
  }
  return [];
}
