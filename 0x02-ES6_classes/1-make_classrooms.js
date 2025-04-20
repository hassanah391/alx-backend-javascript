import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom objects with predefined sizes.
 *
 * @returns {classRooms[]} An array containing three ClassRoom instances.
 */
export default function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  const classRooms = [room1, room2, room3];

  return classRooms;
}
