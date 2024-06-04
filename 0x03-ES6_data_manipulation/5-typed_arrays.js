/**
 *  createInt8TypedArray - creates a new Int8Array of the specified length,
 *  filled with the specified value at the specified position.
 *  @param {number} length - the length of the Int8Array.
 *  @param {number} position - the position of the value.
 *  @param {number} value - the value to fill the Int8Array with.
 *  @return {DataView} - the new Int8Array.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw new Error('Position outside range');
  }
  const dataView = new DataView(new ArrayBuffer(length), 0, length);
  dataView.setInt8(position, value);
  return dataView;
}
