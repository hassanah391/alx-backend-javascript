const http = require('http');
const fs = require('fs');

const databasePath = process.argv[2]; // Get the database file path from command-line arguments

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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then((data) => {
        res.end(data);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245...');
});

module.exports = app;
