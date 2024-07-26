const express = require('express');
const cors = require('cors');
const users = require('./routes/users')
const cars = require('./routes/cars')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', users)
app.use('/cars', cars)

module.exports = app;