const verifyToken = (req, res, next)=> {  
    const header = req.cookies.auth;
    const error_msg = "Please Sign In";

    if (typeof header !== "undefined") {
        console.log('Token checked and confirmed');
        next();
        return header;
    } else {
        console.log("Token Not Found");
        res.json( {
            message: error_msg
        }).status(404);
    }
}
module.exports =  verifyToken

