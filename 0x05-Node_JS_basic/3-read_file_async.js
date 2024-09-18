const fs = require('fs').promises;

/**
 * Asynchronously counts students from a CSV file.
 * @param {String} path - The file path to the CSV database.
 * @returns {Promise<void>} - A promise that resolves when the function completes.
 */
const countStudents = async (path) => {
try {
  // Read the file asynchronously using fs.promises
  const data = await fs.readFile(path, 'utf-8');
  
  // Split the file data into lines and filter out any empty lines
  const lines = data.trim().split('\n').filter(line => line.length > 0);
  if (lines.length === 0) throw new Error('Cannot load the database');

  const fields = lines[0].split(','); // The header row
  const studentGroups = {};

  // Process each student entry (excluding the header)
  for (const line of lines.slice(1)) {
    const studentInfo = line.split(',');
    if (studentInfo.length !== fields.length) continue; // Ignore invalid lines

    const field = studentInfo[studentInfo.length - 1]; // Field is the last column
    const firstName = studentInfo[0]; // Assuming first name is in the first column

    // Initialize the group for each field if it doesn't exist
    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    studentGroups[field].push(firstName);
  }

  // Log the total number of students
  const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  // Log each group (field) and the corresponding students
  for (const [field, students] of Object.entries(studentGroups)) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }

} catch (error) {
  // Handle errors such as file not existing or being unreadable
  throw new Error('Cannot load the database');
}
};

module.exports = countStudents;
