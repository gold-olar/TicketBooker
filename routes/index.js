const express = require('express');
const router = express.Router();
const Events = require('../models/Event');

router.get('/get-events', (req, res) => {
  Events.find().then(events=>{
    res.status(200).json({
      message: 'All Events',
      events: events
    })
  })
  
});



module.exports = router;
