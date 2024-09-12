// jwtHelper.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ userId: user.usuarioID, nombre: user.nombre }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1h' // Token expires in 1 hour
  });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied, token missing!' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = decoded; // Save the decoded token payload to req.user
    next();
  });
};

module.exports = { generateToken, verifyToken };
