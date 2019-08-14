const Events = require('../models/Event');


const checkSeats = async (req, res, next) => {
    const { id } = req.params;
    const { no_of_tickets } = req.body;

    const mainEvent = await Events.findById(id);
    const aval_spaces = mainEvent.avaialableSeats;
    //Check if ticket remain
    if (aval_spaces === 0) {
        res.status(200).json({
            message: `Sorry, ${mainEvent.title} has been fully booked.`,
        })
    }
    // Check if we get up to that amount
    else if (aval_spaces - no_of_tickets < 0) {
        // Whats status code for not allowed ahbeg .. 403 ??
        res.status(403).json({
            message: `Sorry, we have only ${aval_spaces} tickets left`
        })
    } else {
        next();
    }


}

module.exports = checkSeats;

