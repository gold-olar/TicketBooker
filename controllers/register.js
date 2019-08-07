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
  



const registerHost = async (req, res) => {
    const { name, accountNumber, email, password } = req.body;
    const existing_host = await Host.find({ email: email })
    if (existing_host.length > 0) {
        res.json({
            message: 'User Already Exists, Please proceed to Login.',
        })
    } else {
        const newHost = new Host({
            name: name,
            accountNumber: accountNumber,
            email: email,
            password: password
        })
        const saltRounds = 10;
        bcrypt.hash(newHost.password, saltRounds, function (err, hash) {
            if (err) throw err;
            newHost.password = hash;
            newHost.save()
                .then(host => [
                    res.status(201).json({
                        message: 'Registered',
                        host_name: host.name,
                        host_accountNumber: host.accountNumber,
                    })
                ]);
        });

    }
}

const test_image = 'https://pbs.twimg.com/media/EBUxBGuU4AELO4k?format=jpg&name=900x900'

const registerEvent = async (req, res) => {
    const { title, organizer,banner, category, host, venue, availableSeats, date } = req.body;
    const bannerUrl = await cloudinary.uploader.upload( test_image , function(error, result) { 
        if (err) throw err;

        console.log(result)
        return result;
     });

    const newEvent = new Event({
        title: title,
        category: category,
        host: host,
        organizer: organizer,
        venue: venue,
        availableSeats: availableSeats,
        date: date,
        banner: bannerUrl
    })
    newEvent.save()
    .then(event=>{
        res.status(201).json({
            message : 'Event Registered',
            
        })
    })

}


module.exports = {
    registerHost,
    registerEvent
}

