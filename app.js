const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, PR Automation!');
});

const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = { app, server }; // Export the server instance
