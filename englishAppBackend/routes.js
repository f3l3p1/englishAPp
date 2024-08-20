const express = require('express');
const router = express.Router();

let users = []; // Almacenamiento temporal en memoria
let lessons = []; // Almacenamiento temporal en memoria

// CRUD para Usuarios

// Crear un nuevo usuario
router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

// Leer todos los usuarios
router.get('/users', (req, res) => {
    res.json(users);
});

// Leer un usuario por ID
router.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado');
    res.json(user);
});

// Actualizar un usuario por ID
router.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado');

    Object.assign(user, req.body);
    res.json(user);
});

// Eliminar un usuario por ID
router.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});

// CRUD para Lecciones

// Crear una nueva lección
router.post('/lessons', (req, res) => {
    const lesson = req.body;
    lessons.push(lesson);
    res.status(201).json(lesson);
});

// Leer todas las lecciones
router.get('/lessons', (req, res) => {
    res.json(lessons);
});

// Leer una lección por ID
router.get('/lessons/:id', (req, res) => {
    const lesson = lessons.find(l => l.id === parseInt(req.params.id));
    if (!lesson) return res.status(404).send('Lección no encontrada');
    res.json(lesson);
});

// Actualizar una lección por ID
router.put('/lessons/:id', (req, res) => {
    const lesson = lessons.find(l => l.id === parseInt(req.params.id));
    if (!lesson) return res.status(404).send('Lección no encontrada');

    Object.assign(lesson, req.body);
    res.json(lesson);
});

// Eliminar una lección por ID
router.delete('/lessons/:id', (req, res) => {
    lessons = lessons.filter(l => l.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
s