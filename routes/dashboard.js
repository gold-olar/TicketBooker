const express = require ('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

router.post('/', (req, res)=>{
	const {token} = req.body;
	console.log(token);
	jwt.verify(token, secret, (err, authData)=>{
		if (err){
			res.json({
				message: 'Please Sign in again'
			})
		}else{
			res.json(authData);
		}
	})
});

module.exports = router;
