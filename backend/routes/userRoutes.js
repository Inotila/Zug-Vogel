const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware'); // Ensure user is logged in

// Update user interests (route for interests)
router.put('/interests', protect, async (req, res) => {
    try {
        const { userId, interests } = req.body; // interests: array of activity IDs
        
        // Find user by userId and update the interests
        const user = await User.findByIdAndUpdate(
            userId,
            { interests },
            { new: true }
        ).populate('interests'); // Populate activity details

        // Return updated user object as JSON response
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating interests' });
    }
});

// Update user profile (phone number and language)
router.put('/update-profile', protect, async (req, res) => {
    try {
        const { phoneNumber, preferredLanguage } = req.body;
        
        // Find the user based on the userId (from token)
        const user = await User.findByIdAndUpdate(
            req.user.userId, // Assuming the userId is saved to the req.user object
            { phoneNumber, preferredLanguage },
            { new: true } // Return updated user object
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return success message with updated user
        res.json({ message: 'Profile updated successfully', user });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
