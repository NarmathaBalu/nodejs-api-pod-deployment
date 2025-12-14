const express = require('express');
const app = express();

// Basic endpoints
app.get('/health', (req, res) => res.json({ status: 'UP' }));
app.get('/api/hello', (req, res) => res.json({ message: 'Hello from Node.js API' }));

// Load additional routes
require('./routes')(app);

const PORT = 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
