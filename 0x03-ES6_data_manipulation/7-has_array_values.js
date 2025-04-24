/**
 * Checks if all elements of a subset are present in a given Set.
 *
 * @param {*Set} set - The Set to check against.
 * @param {*Set} subset - a subset check for in the Set.
 * @returns {*boolean} - Returns true if all elements of the subset are in the Set, otherwise false.
 * @throws {Error} - Throws an error if the first argument is not a Set
 * or the second argument is not a set also.
 */
function isSubset(superSet, subSet) {
  if (!(superSet instanceof Set)) {
    if (!(subSet instanceof Set)) {
      throw new Error('You have to pass a Set');
    }
  }

  for (const element of subSet) {
    if (!superSet.has(element)) {
      return false;
    }
  }
  return true;
}

/**
 * Determines if a Set contains all the values from an array.
 *
 * @param {*Set} set - The Set to check.
 * @param {*Array} array - The array of values to check for in the Set.

 * @returns {*boolean} - Returns true if the Set contains
 * all the values from the array, otherwise false.
 * @throws {Error} - Throws an error if the `set` is not a Set or `array` is not an Array.
 */
export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new Error('set argument must be an instance of Set');
  }
  if (!Array.isArray(array)) {
    throw new Error('array argument must be an instance of Array');
  }

  const subset = new Set(array);
  return isSubset(set, subset);
}
