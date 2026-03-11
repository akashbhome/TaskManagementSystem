let usermodel =require("../model/userModel.js")

// -----------Add User-------------------------------------------------
exports.addUser=(req,res)=>{
    let {name,email,phone,password,role}=req.body;

    usermodel.addUser(name,email,phone,password,role).then((r)=>{

                if(r.affectedRows>=1){
                        res.send("User Added Successfully")
                }
                else{
                        res.send("User Not Added")
                }

                }).catch((err)=>{
                        res.send(err)
    } ) 

}

// -------------View User------------------------------------------------
exports.viewUser=(req,res)=>{

        usermodel.viewUser().then((r)=>{
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