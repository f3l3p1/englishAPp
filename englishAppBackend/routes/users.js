// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db'); // Import the db module

// Middleware to verify JWT token and extract user info
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401); // Unauthorized if no token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden if token is invalid
    req.user = user;
    next();
  });
};

// Route to get the current user based on the JWT token
router.get('/users/current', authenticateToken, async (req, res) => {
  try {
    const [users] = await db.query('SELECT * FROM Usuarios WHERE usuarioID = ?', [req.user.userId]);
    if (users.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(users[0]);
  } catch (err) {
    console.error('Error fetching current user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
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

// Login user and generate JWT
router.post('/users/login', async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const [users] = await db.query('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
    if (users.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = users[0];
    const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.usuarioID, nombre: user.nombre }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Read all users
router.get('/', async (req, res) => {
  try {
    const [users] = await db.query('SELECT * FROM Usuarios');
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
