const express = require('express');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

// Define a route for the server
app.use(mongoSanitize());
app.use(express.json());
app.use('/api', require('./routes'));

mongoose.connect(MONGODB_URL, {}).then(() => {
    console.log('connect mongo database')
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});