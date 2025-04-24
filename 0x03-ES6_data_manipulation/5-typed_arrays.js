/**
 * Creates an Int8 typed array with a specified length, sets a value at a given position,
 * and returns a DataView of the buffer.
 *
 * @param {*number} length - The length of the buffer to create.
 * @param {*number} position - The position in the buffer to set the value.
 * @param {*number} value - The value to set at the specified position.
 * @throws {Error} If the position is outside the range of the buffer.
 * @returns {*DataView} A DataView representing the buffer.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
