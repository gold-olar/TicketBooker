const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db');
const cors = require('cors');
require('dotenv').config()



// Connecting to mongoose
mongoose.connect(db.mongo, {
  useNewUrlParser: true,
  useFindAndModify: true
})
.then(console.log('Database is connected'));


// Routes
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const bookRouter = require('./routes/book'); 
const getEventRouter = require('./routes/getEvent');
const dashboardRouter = require('./routes/dashboard');

const app = express();

// Allowing CORS
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Use Routes 
app.use('/', indexRouter);
app.use('/get-event', getEventRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/book', bookRouter);
app.use('/dashboard', dashboardRouter);


module.exports = app;
