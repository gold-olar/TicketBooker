const Events = require('../models/Event');
const randomstring = require("randomstring");
const nodemailer = require('nodemailer');

const process = async (req, res) => {
    const { event_id, no_of_tickets, email, name } = req.body;
    const event = await Events.findById(event_id);
    let tickets = [];
    const eid = event_id.slice(22);
    for (i = 0; i < no_of_tickets; i++) {
        const ticketId = eid + randomstring.generate(10);
        event.issuedTickets.push(ticketId);
        tickets.push(ticketId);
    }
    event.save();
//    Send Tickets To Email of Payer

}

module.exports = process;
