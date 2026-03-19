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
                    token: token,
                    id: user.id,        // ✅ send id
                    role: user.role     // ✅ send role
                });
        } else {
            res.status(401).json({
                    message: "Invalid Email or Password"
                });
        }
    }) .catch((err) => {
            res.send(err);
        });

}           
