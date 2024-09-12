// db.js
const mysql = require('mysql2/promise');

// Create a connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'new_user',
  password: process.env.DB_PASS || 'new_password',
  database: process.env.DB_NAME || 'englishApp'
});

// Test the connection
db.getConnection()
  .then(connection => {
    console.log('Database connected successfully!');
    connection.release(); // Release the connection back to the pool
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the application if the database connection fails
  });

module.exports = db; // Export the connection pool
