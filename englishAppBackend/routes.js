const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise'); // Use mysql2 with promise support
const bcrypt = require('bcrypt'); // Import bcrypt for hashing passwords

// Configure MySQL connection using environment variables
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'new_user',
    password: process.env.DB_PASS || 'new_password', // Replace with actual password
    database: process.env.DB_NAME || 'englishApp' // Replace with actual database name
});

// CRUD for Users

// Create a new user
router.post('/users', async (req, res) => {
    const { nombre, nombreUsuario, correo, contrasena } = req.body;
    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(contrasena, 10); // 10 is the salt rounds
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
        if (users.length === 0) return res.status(404).send('User not found');
        res.json(users[0]);
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Update a user by ID
router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { nombre, nombreUsuario, correo, contrasena } = req.body;
    try {
        // Hash the password before updating if provided
        let hashedPassword = contrasena;
        if (contrasena) {
            hashedPassword = await bcrypt.hash(contrasena, 10);
        }
        const [result] = await db.query(
            'UPDATE Usuarios SET nombre = ?, nombreUsuario = ?, correo = ?, contrasena = ? WHERE usuarioID = ?',
            [nombre, nombreUsuario, correo, hashedPassword, userId]
        );
        if (result.affectedRows === 0) return res.status(404).send('User not found');
        res.json({ message: 'User updated successfully' });
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
        if (result.affectedRows === 0) return res.status(404).send('User not found');
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// CRUD for Lessons

// Create a new lesson
router.post('/lessons', async (req, res) => {
    const { titulo, descripcion } = req.body; // Example fields
    try {
        const [result] = await db.query(
            'INSERT INTO Lecciones (titulo, descripcion, fechaCreacion) VALUES (?, ?, NOW())',
            [titulo, descripcion]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        console.error('Error creating lesson:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Read all lessons
router.get('/lessons', async (req, res) => {
    try {
        const [lessons] = await db.query('SELECT * FROM Lecciones');
        res.json(lessons);
    } catch (err) {
        console.error('Error fetching lessons:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Read a lesson by ID
router.get('/lessons/:id', async (req, res) => {
    const lessonId = req.params.id;
    try {
        const [lessons] = await db.query('SELECT * FROM Lecciones WHERE leccionID = ?', [lessonId]);
        if (lessons.length === 0) return res.status(404).send('Lesson not found');
        res.json(lessons[0]);
    } catch (err) {
        console.error('Error fetching lesson:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Update a lesson by ID
router.put('/lessons/:id', async (req, res) => {
    const lessonId = req.params.id;
    const { titulo, descripcion } = req.body;
    try {
        const [result] = await db.query(
            'UPDATE Lecciones SET titulo = ?, descripcion = ? WHERE leccionID = ?',
            [titulo, descripcion, lessonId]
        );
        if (result.affectedRows === 0) return res.status(404).send('Lesson not found');
        res.json({ message: 'Lesson updated successfully' });
    } catch (err) {
        console.error('Error updating lesson:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Delete a lesson by ID
router.delete('/lessons/:id', async (req, res) => {
    const lessonId = req.params.id;
    try {
        const [result] = await db.query('DELETE FROM Lecciones WHERE leccionID = ?', [lessonId]);
        if (result.affectedRows === 0) return res.status(404).send('Lesson not found');
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting lesson:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
