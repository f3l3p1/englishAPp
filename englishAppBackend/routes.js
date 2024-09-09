const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

// Configure MySQL connection using environment variables
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'new_user',
    password: process.env.DB_PASS || 'new_password',
    database: process.env.DB_NAME || 'englishApp'
});

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where images will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with extension
    }
});

const upload = multer({ storage: storage });

// CRUD for Users

// Create a new user
router.post('/users', async (req, res) => {
    const { nombre, nombreUsuario, correo, contrasena } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const [result] = await db.query(
            'INSERT INTO Usuarios (nombre, nombreUsuario, correo, contrasena, fechaRegistro) VALUES (?, ?, ?, ?, NOW())',
            [nombre, nombreUsuario, correo, hashedPassword]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Read all users
router.get('/users', async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM Usuarios');
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Read a user by ID
router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const [users] = await db.query('SELECT * FROM Usuarios WHERE usuarioID = ?', [userId]);
        if (users.length === 0) return res.status(404).json({ error: 'User not found' });
        res.json(users[0]);
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Update a user by ID, including profile picture
router.put('/users/:id', upload.single('profilePicture'), async (req, res) => {
    const userId = req.params.id;
    const { nombre, nombreUsuario, correo, contrasena } = req.body;
    const profilePicture = req.file ? req.file.filename : null;

    try {
        let hashedPassword = contrasena;
        if (contrasena) {
            hashedPassword = await bcrypt.hash(contrasena, 10);
        }

        // Update user query
        let updateQuery = 'UPDATE Usuarios SET nombre = ?, nombreUsuario = ?, correo = ?, contrasena = ?';
        const queryParams = [nombre, nombreUsuario, correo, hashedPassword];

        // If there's a profile picture, add it to the query
        if (profilePicture) {
            updateQuery += ', fotoPerfil = ?';
            queryParams.push(profilePicture);
        }

        updateQuery += ' WHERE usuarioID = ?';
        queryParams.push(userId);

        const [result] = await db.query(updateQuery, queryParams);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });

        res.json({ message: 'User updated successfully', profilePicture });
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const [result] = await db.query('DELETE FROM Usuarios WHERE usuarioID = ?', [userId]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
