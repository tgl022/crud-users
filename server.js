//load env variables
require('dotenv').config();

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const port = process.env.PORT || '3000';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Connect to MongoDB
mongoose.connect(process.env.DB_URI);

// Get our API routes
//const api = require('./server/api');

const app = express();

// Point static path to root and parsing
app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


/**
 * Get port from environment and store in Express.
 */
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
