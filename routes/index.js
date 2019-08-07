const express = require('express');
const router = express.Router();

router.get('/get-events', function(req, res, next) {
 res.status(200).json('hello')
});

module.exports = router;
