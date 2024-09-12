// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../firebaseAdmin'); // Import Firestore

// Create a new user
router.post('/', async (req, res) => {
  const { nombre, nombreUsuario, correo, contrasena } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const newUser = { nombre, nombreUsuario, correo, contrasena: hashedPassword, fechaRegistro: new Date() };
    const userRef = await db.collection('Usuarios').add(newUser);
    res.status(201).json({ id: userRef.id, ...newUser });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Database error' });
  }
});
// routes/users.js
router.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const userQuery = await db.collection('Usuarios').where('correo', '==', correo).get();
    if (userQuery.empty) return res.status(401).json({ error: 'Invalid credentials' });

    const user = userQuery.docs[0].data();
    const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: userQuery.docs[0].id, nombre: user.nombre }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// routes/users.js
router.get('/', async (req, res) => {
  try {
    const usersSnapshot = await db.collection('Usuarios').get();
    const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Database error' });
  }
});
