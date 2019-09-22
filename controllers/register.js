const bcrypt = require('bcryptjs');
const Host = require('../models/Host');
const Event = require('../models/Event');
const cloudinary = require('cloudinary');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;


// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.API_SECRET
});

// Register Host
const registerHost = async (req, res) => {
    const { name, accountNumber, bankName,  email, password } = req.body;
    const existing_host = await Host.find({ email: email })
    if (existing_host) {
        res.json({
            message: 'User Already Exists, Please proceed to Login.',
        })
    } else {
        const newHost = new Host({
            name, accountNumber, email, password, bankName
        })
        const saltRounds = 10;
        bcrypt.hash(newHost.password, saltRounds, function (err, hash) {
            if (err) throw err;
            newHost.password = hash;
            newHost.save()
                .then(host => [
                    res.status(201).json({
                        message: 'Registered',
                        host: newHost
                    })
                ]);
        });

    }
}

// Register Event
const registerEvent = async (req, res) => {
    const { title, organizer, banner, category, host, venue, avaialableSeats, date, price } = req.body;

    const newEvent = new Event({
        title: title,
        category: category,
        host: host,
        organizer: organizer,
        venue: venue,
        avaialableSeats: avaialableSeats,
        date: date,
        price:price
        // banner: bannerUrl
    })
    const bannerUrl = await cloudinary.uploader.upload(banner, function (err, result) {
        if (err) {
            console.log(err)
        } else {
            return result;
        }
    });
    newEvent.banner = bannerUrl.url
    newEvent.save()
        .then(event => {
            res.status(201).json({
                message: 'Event Registered',
                event: newEvent,
            })
        })

}


module.exports = {
    registerHost,
    registerEvent
}

