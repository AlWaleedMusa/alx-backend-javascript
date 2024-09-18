const http = require('http');

// Configuration settings
const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';

// Create the server
const app = http.createServer();

// Event listener for handling incoming requests
app.on('request', (req, res) => {
  const message = 'Hello Holberton School!';

  // Set headers and status code for the response
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(message));
  res.statusCode = 200;

  // Send the response
  res.end(message);
});

// Start the app
app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
});

// Export the server for external usage
module.exports = app;
