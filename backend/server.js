/**
 * @file server.js
 * @description Main server file for the application
 * @github oaslananka
 */

const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/inventory', require('./routes/inventoryRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.get('/', (req, res) => {
    res.send('Smart Warehouse Management API');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
