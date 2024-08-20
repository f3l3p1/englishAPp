const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const token = jwt.sign({ id: user.usuarioID }, process.env.JWT_SECRET, { expiresIn: '1h' });


// Connect to the database
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

// Endpoint for user registration
app.post('/register', async (req, res) => {
    const { name, username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO Usuarios (name, username, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, username, email, hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Endpoint for user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM Usuarios WHERE email = ?';

    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.usuarioID }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token, user });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
