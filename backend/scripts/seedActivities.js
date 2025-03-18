const mongoose = require('mongoose');
require('dotenv').config();
const Activity = require('../models/Activity'); // Assuming you created the Activity model

const activities = [
    "Golf", "Swimming pool", "Tennis", "Paddeltennis", "Hiking in and around Windhoek", 
    "Gym", "Dancing", "Pilates", "Bowling (maerua mall)", "Archery", "Horseback riding", 
    "Independence museum", "Art gallery", "Craft market", "Traditional market", "Painting course", 
    "Photography course", "City tours", "Concert", "Restaurants", "Massage/spa", 
    "Yoga", "Language Courses", "Cooking course"
];

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error);
    process.exit(1);
  }
};

const seedActivities = async () => {
  try {
    const activityDocs = activities.map(activity => ({ name: activity }));
    await Activity.insertMany(activityDocs);
    console.log('✅ Activities seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding activities:', error);
  }
};

const run = async () => {
  await connectDB();
  await seedActivities();
  process.exit();
};

run();
