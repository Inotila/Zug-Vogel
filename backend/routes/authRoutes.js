const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user
    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT Token after successful registration
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    // Return token and user info
    res.status(201).json({
      message: 'User registered successfully!',
      token,
      userId: user._id,
      name: user.name,
    });
  } catch (error) {
    console.error('Error registering user:', error); // Log the error
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt with email:', email); // Log the incoming email

    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid email or password' });
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });
  
      // Generate JWT Token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour
      });
  
      res.status(200).json({ token, userId: user._id, name: user.name });
    } catch (error) {
        console.error('Error logging in user:', error); // Log the error
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.get('/profile', protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.userId).select('-password'); // Exclude password
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
