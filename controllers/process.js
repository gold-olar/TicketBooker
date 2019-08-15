const Events = require('../models/Event');


const process =  async (req, res, next)=>{
    const { event_id,  no_of_tickets, email, name} = req.body;
    const event = await Events.findById(event_id)
    event.registeredPeopleEmails.push(email);
    event.registeredPeopleNames.push(name)
    event.save();
    Events.findOneAndUpdate({ _id: event_id }, { $inc: { avaialableSeats: - no_of_tickets }}, {useFindAndModify: false})
    .then(event=>{
        next();
    })

}

module.exports = process;
