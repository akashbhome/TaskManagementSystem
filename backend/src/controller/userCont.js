let usermodel =require("../model/userModel.js")

// -----------Add User-------------------------------------------------
exports.addUser=(req,res)=>{
    let {name,email,phone,password,role}=req.body;

    usermodel.addUser(name,email,phone,password,role).then((r)=>{

                if(r.affectedRows>=1){
                        res.status(200).json({
                                message: "User Added Successfully"
                                });
                }
                else{
                     res.json({
                        message: "User Not Added Or Duplicate User"
                        });
                }

                }).catch((err) => {
                                if (err.code === "ER_DUP_ENTRY") {
                                res.status(400).json({
                                message: "Email already exists"
                                });
                                } else {
                                res.status(500).json({
                                message: "Server Error"
                                });
                                }
                        });

}

// -------------View User------------------------------------------------
exports.viewUser = (req, res) => {
                usermodel.viewUser()
                .then((r) => {
                res.json({
                        data: r  
                });
                })
                .catch((err) => {
                res.status(500).json({
                        message: "Server Error",
                        error: err.message
                });
                });
};

// -------------Search User---------------------------------------------
exports.searchUser=(req,res)=>{
        let {search}=req.query;
        usermodel.searchUser(search).then((r)=>{
                if(r.length===0){
                        res.send("user not found")
                }
                else{
                        res.send(r);
                }
        }).catch((err)=>{
                res.send(err)
        })

}

//-------------Update User------------------------------------------------
exports.updateUser=(req,res)=>{

    let {id,name,email,phone,role}=req.body;
    usermodel.updateUser(id,name,email,phone,role).then((r)=>{

                if(r.affectedRows>=1){
                        res.send("User Update Successfully")
                }
                else{
                        res.send("User Not Update")
                }

                }).catch((err)=>{
                        res.send(err)
    } ) 
}

// --------------Delete User--------------------------------------------
exports.deleteUser=(req,res)=>{

        let {id}=req.query;
        usermodel.deleteUser(id).then((r)=>{

                if(r.affectedRows>=1){
                        res.send("User Delete Successfully")
                    }
                else{
                        res.send("User Not Delete")
                    }
        }).catch((err)=>{
                        res.send(err)
                })

}

// ------------------------------------------ End User ---------------------------------------------------