// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:8100', // Update with your frontend URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Configure sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'my_super_secret_key_123',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const userRoutes = require('./routes/users');
const lessonRoutes = require('./routes/lessons');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/lessons', lessonRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
