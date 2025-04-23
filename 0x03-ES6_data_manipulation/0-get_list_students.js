/**
 * Returns an array of student objects.
 * Each student object contains the following properties:
 * - id: A unique identifier for the student (number).
 * - firstName: The first name of the student (string).
 * - location: The location of the student (string).
 *
 * @returns {Array<Object>} Array of student objects.
 */
export default function getListStudents() {
  const listStudents = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];

  return listStudents;
}
