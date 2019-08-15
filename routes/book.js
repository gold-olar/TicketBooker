const express = require('express');
const router = express.Router();
// const checkSeats = require('../controllers/checkSeats');
const CheckPay = require ('../controllers/payment');
const processPay = require('../controllers/process');


//Check if Tickets are available, thsi is now a front end palava 
//  integrate payment, now FE PALAVA
//  if successfull, reduce number of tickets..
router.post('/:id',  CheckPay, processPay )




module.exports = router;





    