const express = require('express');
const router = express.Router();
const register = require('../controllers/register');


// Register Host
router.post('/host', register.registerHost);


// Register Event
router.get('/event', register.registerEvent);
   




module.exports = router;
