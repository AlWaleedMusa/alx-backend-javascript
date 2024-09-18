const fs = require('fs');

/**
 * Function to count students from a CSV file.
 * @param {String} path
 */
const countStudents = (path) => {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8').trim();

    const lines = fileContent.split('\n').filter(line => line.length > 0);
    if (lines.length === 0) throw new Error('Cannot load the database');

    const fields = lines[0].split(','); // The header line
    const studentGroups = {};

    for (const line of lines.slice(1)) {
      const studentInfo = line.split(',');
      if (studentInfo.length !== fields.length) continue; // Ignore invalid lines

      const field = studentInfo[studentInfo.length - 1];
      const firstName = studentInfo[0]; // Assuming first name is in the first column

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      studentGroups[field].push(firstName);
    }

    const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentGroups)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
};

module.exports = countStudents;
