const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));

      const studentCount = students.length;
      console.log(`Number of students: ${studentCount}`);

      const fields = {};
      students.forEach((student) => {
        const field = student[student.length - 1].trim();
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
