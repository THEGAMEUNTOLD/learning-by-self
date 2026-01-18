const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Set HTTP response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response body
  res.write('Server is running successfully');

  // End the response
  res.end();
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
