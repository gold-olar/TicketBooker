const verifyToken = (req, res, next)=> {
    const header = req.cookies.auth;
    const error_msg = "Please Sign In";

    if (typeof header !== "undefined") {
        console.log('Token checked and confirmed');

       
        next();
        return header;
    } else {
        console.log("Token Not Found");
        res.render('error', {
            message: error_msg
        });
    }
}
module.exports =  verifyToken

