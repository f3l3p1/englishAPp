// Import required modules
const express = require('express');
const mysql = require('mysql2'); // Use mysql2 for better compatibility with MySQL 8+
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// Enable CORS to allow requests from the frontend (running on port 8100)
app.use(cors({
    origin: 'http://localhost:8100',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

// Use body-parser to parse incoming JSON requests
app.use(bodyParser.json());

// Use cookie-parser
app.use(cookieParser());

// Configure sessions
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key', // Use a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using https
}));

// Configure MySQL connection using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'new_user',
    password: process.env.DB_PASS || 'new_password', // Replace with the actual password
    database: process.env.DB_NAME || 'englishApp' // Replace with the actual database name
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Import Routes
const routes = require('./routes'); // Correct path to your routes.js file
app.use('/api', routes); // Set the base path for the routes

// Endpoint for user login
app.post('/login', (req, res) => {
    console.log('Login request received:', req.body);
    const { correo, contrasena } = req.body;
    const sql = 'SELECT * FROM Usuarios WHERE correo = ?';

    db.query(sql, [correo], async (err, results) => {
        if (err) {
            console.error('Database error during checking:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = results[0];

        try {
            // Use bcrypt.compare to validate the password
            const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Save user info in the session
            req.session.userId = user.usuarioID;
            req.session.userName = user.nombre;
            req.session.save((err) => {
                if (err) {
                    console.error('Error saving session:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }
                res.status(200).json({ message: 'Login successful', user });
            });
        } catch (error) {
            console.error('Error during password comparison:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// Endpoint for logout
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error logging out:', err);
            return res.status(500).json({ error: 'Logout failed' });
        }
        res.clearCookie('connect.sid'); // Clear session cookie
        res.status(200).json({ message: 'Logged out successfully' });
    });
});

// Middleware to protect routes
function ensureAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

// Example of a protected route
app.get('/api/protected', ensureAuthenticated, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.session.userName });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
