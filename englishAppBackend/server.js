const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:8100',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

// Use body-parser to parse JSON requests
app.use(bodyParser.json());
app.use(cookieParser());

// Configure sessions
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// Serve static files from the 'uploads' directory for profile pictures
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// JWT secret key
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'youraccesstokensecret';

// Login endpoint
app.post('/api/login', (req, res) => {
    const { correo, contrasena } = req.body;
    const sql = 'SELECT * FROM Usuarios WHERE correo = ?';

    db.query(sql, [correo], async (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = results[0];

        try {
            const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Generate a JWT token
            const token = jwt.sign({ userId: user.usuarioID, nombre: user.nombre }, accessTokenSecret, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token, user });
        } catch (error) {
            console.error('Error during password comparison:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next();
    });
};

// Use the router module for user and lesson routes
const router = require('./routes'); // Ensure the correct path
app.use('/api', router); // Register /api prefix for routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
