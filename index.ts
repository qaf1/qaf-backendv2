// index.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Controller Logic
const authController = async (req, res) => {
  console.log("Heloer")
  try {
    const body = {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      grant_type: 'password',
      client_id: process.env.CLIENT_KEY,
      client_secret: process.env.CLIENT_SECRET,
    };

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    };

    // External API call
    const response = await axios.post('https://test.salesforce.com/services/oauth2/token', body, {
      headers: headers,
    });

    console.log(response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: 'An error occurred while fetching data from the external API' });
  }
};

// Routes
app.get('/api/auth', authController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
