const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');

// Configure MySQL connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'new_user',
    password: 'new_password', 
    database: 'englishApp'
});

// Function to hash all plain text passwords
async function hashPasswords() {
    try {
        const [users] = await db.query('SELECT * FROM Usuarios');
        for (const user of users) {
            // Check if the password is not hashed
            if (!user.contrasena.startsWith('$2b$')) {
                const hashedPassword = await bcrypt.hash(user.contrasena, 10);
                await db.query('UPDATE Usuarios SET contrasena = ? WHERE usuarioID = ?', [hashedPassword, user.usuarioID]);
                console.log(`Updated password for user ID: ${user.usuarioID}`);
            }
        }
        console.log('Password hashing complete.');
    } catch (error) {
        console.error('Error hashing passwords:', error);
    } finally {
        db.end();
    }
}

// Run the function
hashPasswords();
