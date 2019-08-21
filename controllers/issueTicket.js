const Events = require('../models/Event');
const randomstring = require("randomstring");
const mailer = require('nodemailer');

const process = async (req, res) => {
    const { event_id, no_of_tickets, email, name } = req.body;
    const event = await Events.findById(event_id);
    let tickets = [];
    const eid = event_id.slice(22);
    for (i = 0; i < no_of_tickets; i++) {
        const ticketId = eid + randomstring.generate(8);
        event.issuedTickets.push(ticketId);
        tickets.push(ticketId);
    }
    await event.save();

    const message = `
    <h2>Hi there , ${name}, You ordered ${no_of_tickets} ticket(s).
    Here are your Ticket Id(s) </h2>
    ${tickets.map((ticket, index)=>{return(`<h3>${index + 1} - ${ticket}  </h3>`)})}
    `

    try {
        const smtpTransport = mailer.createTransport({
            host: 'smtp.gmail.com',
            // port: 465,
            // secure: true,
            service: 'Gmail',
            auth: {
                user:  process.env.EMAIL,
                pass: process.env.PASSWORD
                        }
        });
        const mail = {
            from:"capitalassure2019@gmail.com",
            to: email,
            subject: `Tickets for ${event.title} has arrived`,
            html: message
            // text: ''
        }
        smtpTransport.sendMail(mail, (error, response) => {
            if (error) {
                console.log(error)
            } else {
                //    res.json('Successfull.')
                console.log(response)
               res.json({
                   message: 'Tickets have been delivered'
               })
                smtpTransport.close();
            }
        });

    } catch (error) {
        console.log(error);
        res.json({
            message: 'Tickets were not sent for some reason',
            error: error
        }).status(400)
    } finally {
        console.log('Your message has been sent.');
       res.json({
           message: 'Tickets have been sent successfully'
       })
    }

}

module.exports = process;
