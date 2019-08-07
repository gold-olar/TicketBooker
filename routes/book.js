const express = require('express');
const router = express.Router();
const Events = require('../models/Event');

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Events.findByIdAndUpdate(id,)
  
});

module.exports = router;
