const express = require('express');
const router = express.Router();
const register = require('../controllers/register');
const verifyToken = require('../controllers/verifyToken');


// Register Host
router.post('/host', register.registerHost);


// Register Event
router.post('/event', verifyToken, register.registerEvent);
   




module.exports = router;
