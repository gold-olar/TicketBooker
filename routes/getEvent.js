const express = require('express');
const router = express.Router();
const Events = require('../models/Event');



router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const event = await Events.findOne({
        _id: id
    })
    res.status(200).json({
        event: event
    })
})

module.exports = router;
