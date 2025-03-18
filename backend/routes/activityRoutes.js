const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware'); // Assuming this middleware is set up for authentication
const Activity = require('../models/Activity');
const User = require('../models/User');

// Get all activities
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities' });
  }
});

// Endpoint to update selected activities for a user
router.put('/select-activities', protect, async (req, res) => {
  const { interests } = req.body; // Expecting an array of activity IDs

  if (!interests || !Array.isArray(interests)) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    const user = await User.findById(req.user.userId); // Assuming req.user.id contains the logged-in user's ID

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

     // Step 1: Fetch the activity names from the Activity collection using the provided activity IDs
     const activities = await Activity.find({ name: { $in: interests } });
    
       // Step 2: Check if all the activities exist
       if (activities.length !== interests.length) {
        return res.status(400).json({ message: 'Some activities not found' });
      }
 
         // Step 3: Update the user's interests with the activity names
    user.interests = interests; // Store the activity names directly
    await user.save();

    res.json({ message: 'Activities updated successfully', interests: user.interests });  // Send back updated interests
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Endpoint to get user profile with populated interests
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .populate('interests', 'name'); // Populate interests with the 'name' of the activity

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user); // Send back user with populated interests
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
