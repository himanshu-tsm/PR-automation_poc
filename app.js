const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, PR Automation!');
});

const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Export both app and server instances
module.exports = { app, server };
