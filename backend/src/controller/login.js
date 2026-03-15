let login = require("../model/login.js")

let jwt=require("jsonwebtoken")

exports.login=(req,res)=>{
    let {email,password}=req.body; 
    login.login(email,password).then((r)=>{
        if(r.length>0){
            const user = r[0];

                const token = jwt.sign(
                    { id: user.id,role: user.role },
                    "secretkey",
                    { expiresIn: "24h" }
                );

                res.json({
                    message: "Login successful",
                    token: token
                });
        } else {
            res.send("Invalid Email or Password")
        }
    }) .catch((err) => {
            res.send(err);
        });

}           
