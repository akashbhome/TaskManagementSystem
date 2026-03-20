
const jwt = require("jsonwebtoken");

function auth(req,res,next){

    let header = req.headers["authorization"];

    if(!header){
        return res.send("Token Not Found");
    }

    let token = header.split(" ")[1]; // remove Bearer

    jwt.verify(token,"secretkey",(err,decoded)=>{

        if(err){
            return res.send("Invalid Token");
        }

        req.user = decoded;
        next();

    });
}

module.exports = auth;