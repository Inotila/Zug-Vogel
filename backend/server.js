require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path'); // <-- Required for serving frontend

const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const userRoutes = require('./routes/userRoutes');
const contentfulRoutes = require('./routes/contentfulRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes.js');

const app = express();
const port = process.env.PORT || 5010;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// CORS Configuration (update for production if needed)
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin === 'http://localhost:3000' || origin === process.env.FRONTEND_URL) {
      callback(null, true);  // Allow the request if it's from localhost or production frontend
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contentful', contentfulRoutes);
app.use('/api/enquiry', enquiryRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const frontendPath = path.join(__dirname, '..', 'frontend', 'build');
  app.use(express.static(frontendPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
} else {
  // Dev root route
  app.get('/', (req, res) => {
    res.send('Hello from the Backend!');
  });
}

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

// Start server

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
