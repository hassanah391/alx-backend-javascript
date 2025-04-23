/**
 * takes a array of (objects) students and
 * returns an array of (objects) students
 * who are located in a specific city.
 *
 * @param {*Array} listStudents - list of the students
 * @param {*string} city - name of the city
 *
 * @returns {*Array} returns an array of objects who are located in a specific city.
 */
export default function getStudentsByLocation(listStudents, city) {
  if (Array.isArray(listStudents) && typeof city === 'string') {
    return listStudents.filter((student) => student.location === city);
  }

  return [];
}
