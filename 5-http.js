const http = require('http');
const fs = require('fs');

// Configuration
const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';
const DATABASE_PATH = process.argv.length > 2 ? process.argv[2] : '';

// Function to count students based on a CSV file
const loadStudentData = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    return reject(new Error('Cannot load the database'));
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      return reject(new Error('Cannot load the database'));
    }

    const outputLines = [];
    const lines = data.toString('utf-8').trim().split('\n');
    const studentGroups = {};
    const headers = lines[0].split(',');
    const studentAttributes = headers.slice(0, headers.length - 1);

    lines.slice(1).forEach((line) => {
      const studentData = line.split(',');
      const studentDetails = studentData.slice(0, studentData.length - 1);
      const department = studentData[studentData.length - 1];

      if (!studentGroups[department]) {
        studentGroups[department] = [];
      }

      const studentRecord = studentAttributes.reduce((acc, attribute, idx) => {
        acc[attribute] = studentDetails[idx];
        return acc;
      }, {});

      studentGroups[department].push(studentRecord);
    });

    const totalStudents = Object.values(studentGroups)
      .reduce((sum, group) => sum + group.length, 0);
    outputLines.push(`Number of students: ${totalStudents}`);

    Object.entries(studentGroups).forEach(([department, students]) => {
      const names = students.map((student) => student.firstname).join(', ');
      outputLines.push(`Number of students in ${department}: ${students.length}. List: ${names}`);
    });

    resolve(outputLines.join('\n'));
  });
});

// Route Handlers
const ROUTES = [
  {
    path: '/',
    handleRequest(req, res) {
      const greeting = 'Hello Holberton School!';
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(greeting),
      });
      res.end(greeting);
    },
  },
  {
    path: '/students',
    handleRequest(req, res) {
      const messageParts = ['This is the list of our students'];

      loadStudentData(DATABASE_PATH)
        .then((report) => {
          messageParts.push(report);
          const responseText = messageParts.join('\n');
          res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Content-Length': Buffer.byteLength(responseText),
          });
          res.end(responseText);
        })
        .catch((err) => {
          messageParts.push(err.message);
          const errorMessage = messageParts.join('\n');
          res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Content-Length': Buffer.byteLength(errorMessage),
          });
          res.end(errorMessage);
        });
    },
  },
];

// HTTP Server
const server = http.createServer((req, res) => {
  const route = ROUTES.find((r) => r.path === req.url);

  if (route) {
    route.handleRequest(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
});

module.exports = server;
