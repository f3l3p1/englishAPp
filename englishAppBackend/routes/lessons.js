// routes/lessons.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the db module

// Create a new lesson
router.post('/', async (req, res) => {
  const { titulo, descripcion } = req.body;
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
router.get('/', async (req, res) => {
  try {
    const [lessons] = await db.query('SELECT * FROM Lecciones');
    res.json(lessons);
  } catch (err) {
    console.error('Error fetching lessons:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
