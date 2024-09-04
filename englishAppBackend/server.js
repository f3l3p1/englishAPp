// Import required modules
const express = require('express');
const mysql = require('mysql2'); // Use mysql2 for better compatibility with MySQL 8+
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
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

// Configure MySQL connection using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'new_user',
    password: process.env.DB_PASS || 'new_password', // Replace 'your_password' with the actual password
    database: process.env.DB_NAME || 'englishApp' // Replace 'your_database_name' with the actual database name
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
            const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user.usuarioID }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token, user });
        } catch (error) {
            console.error('Error during password comparison:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// Endpoint for sending recovery email
app.post('/send-recovery-email', async (req, res) => {
    const { correo } = req.body;

    // Check if the user exists in the database
    const sql = 'SELECT * FROM Usuarios WHERE correo = ?';
    db.query(sql, [correo], async (err, results) => {
        if (err) {
            console.error('Database error during email check:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'No account found with that email address.' });
        }

        const user = results[0];
        const token = crypto.randomBytes(20).toString('hex');
        const tokenExpiry = Date.now() + 3600000; // 1 hour expiry

        // Store the token and expiry in the database
        const updateSql = 'UPDATE Usuarios SET resetPasswordToken = ?, resetPasswordExpires = ? WHERE correo = ?';
        db.query(updateSql, [token, tokenExpiry, correo], (err, result) => {
            if (err) {
                console.error('Error updating reset token:', err);
                return res.status(500).json({ error: 'Database error' });
            }

            // Set up Nodemailer transporter
            const transporter = nodemailer.createTransport({
                service: 'Gmail', // Use your email provider
                auth: {
                    user: process.env.EMAIL_USER, // Your email address
                    pass: process.env.EMAIL_PASS // Your email password or app password
                }
            });

            // Prepare the email options
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: correo,
                subject: 'Password Recovery',
                text: `Click here to reset your password: http://localhost:4200/reset-password/${token}` // Replace with actual reset link
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending recovery email:', error);
                    return res.status(500).json({ error: 'Error sending recovery email.' });
                }
                res.status(200).json({ message: 'Recovery email sent! Please check your inbox.' });
            });
        });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
