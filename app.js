const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db');
const cors = require('cors');
require('dotenv').config()



// Connecting to mongoose
mongoose.connect(db.mongo, {useNewUrlParser: true})
.then(console.log('Database is connected'));


// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

const app = express();

// Allowing CORS
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Use Routes 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);


module.exports = app;
