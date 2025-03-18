const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token decoded:', decoded); // Log the decoded token for debugging
    req.user = decoded; // Store user info in req object
    next();
  } catch (error) {
    console.error('Token verification error:', error); // Log the error
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { protect };