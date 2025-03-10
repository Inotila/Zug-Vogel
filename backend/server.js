require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/db'); // Import DB connection
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 5010;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Body parser
app.use(cors()); // Enable CORS

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the Backend!');
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).json({ message: 'Server error', error: err.message }); // Send a JSON response with the error message
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
