/**
 * returns an array of ids from a list of object.
 *
 * @param {Object} array - An array of objects
 *
 * @returns {Array} an array of ids from a list of object
 */
export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((element) => element.id);
  }

  return [];
}
