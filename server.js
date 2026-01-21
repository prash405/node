const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Node Practice Project!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
