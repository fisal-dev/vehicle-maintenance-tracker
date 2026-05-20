require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes');
const stripeController = require('./controllers/stripeController');

const app = express();

// Connect to Database
connectDB();

// CORS Settings
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

// Stripe Webhook Endpoint (Must be registered before body parser)
app.post('/api/v1/stripe/webhook', express.raw({ type: 'application/json' }), stripeController.webhook);

// JSON and urlencoded parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main API Route
app.use('/api/v1', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
