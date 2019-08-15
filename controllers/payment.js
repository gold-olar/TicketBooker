var paystack = require('paystack')(process.env.PAYSTACK_SECRETKEY);


const CheckPay = async (req, res, next) => {
    const { reference_no } = req.body;
    const payment_status = await paystack.transaction.verify(reference_no, (body, error) => {
        return body.status;
    });
    if (payment_status) {
        next()
    } else {
        res.status(200).json({
            message: "Transaction not verified"
        });
    }


}

module.exports = CheckPay;