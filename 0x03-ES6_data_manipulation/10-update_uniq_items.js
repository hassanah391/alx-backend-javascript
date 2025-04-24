/**
 * Updates the values of a Map where the value is 1 to 100.
 *
 * @param {Map<any, number>} items - A Map containing key-value pairs.
 * @throws {Error} - Throws an error if the input is not a Map.
 * @returns {void} - Modifies the input Map directly.
 */
export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of items) {
    if (value === 1) {
      items.set(key, 100);
    }
  }
}
