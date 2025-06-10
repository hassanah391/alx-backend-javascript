const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    // Split data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove header line
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    // Group students by field
    const fields = {};

    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Log each field
    Object.keys(fields).forEach((field) => {
      const studentList = fields[field];
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
