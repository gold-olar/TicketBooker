const express = require('express');
const router = express.Router();
const Host = require('../models/Host');
const Event = require('../models/Event');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;


router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const loginHost = await Host.findOne({ email: email })
    if (loginHost) {
        bcrypt.compare(password, loginHost.password, async (error, ismatch) => {
            if (ismatch) {
                const allEvents = await Event.find({ host: loginHost.email });
                jwt.sign({ host: loginHost.email }, secret, { expiresIn: '12h' }, (err, token) => {
                    res.cookie('auth', token);
                    res.status(200).json({
                        message: 'Login Successful',
                        events: allEvents,
                    })

                })
            } else {
                res.json({ message: 'Wrong Password' })
            }
        })
    } else {
        res.status(404).json({
            message: 'User Not Found,Please Register.'
        })
    }


});

module.exports = router;
