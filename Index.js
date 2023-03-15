const express = require('express');
const mongoose = require('mongoose');

const mongoString = 'mongodb+srv://Nirbhay1998:nirab222@cluster0.mudaov8.mongodb.net/Shop';
const routes = require('./Routes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use('/', routes)
app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})