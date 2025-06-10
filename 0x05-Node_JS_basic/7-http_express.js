const express = require('express');
const fs = require('fs');

const app = express();
const databasePath = process.argv[2]; // Get database file from command-line argument

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
      let result = `Number of students: ${studentCount}\n`;

      const fields = {};
      students.forEach((student) => {
        const field = student[student.length - 1].trim();
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      Object.keys(fields).forEach((field) => {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });

      resolve(result.trim());
    });
  });
}

// Route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');

  try {
    const data = await countStudents(databasePath);
    res.end(data);
  } catch (error) {
    res.end('Cannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245...');
});

module.exports = app;
