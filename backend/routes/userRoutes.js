const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticate = require('../middleware/authMiddleware'); // Ensure user is logged in

// Update user interests
router.put('/interests', authenticate, async (req, res) => {
    try {
        const { userId, interests } = req.body; // interests: array of activity IDs
        const user = await User.findByIdAndUpdate(
            userId,
            { interests },
            { new: true }
        ).populate('interests'); // Populate activity details

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating interests' });
    }
});

module.exports = router;
