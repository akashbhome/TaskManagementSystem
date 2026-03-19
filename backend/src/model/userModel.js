let db=require("../config/db.js")

// -----------Add User-------------------------------------------------
exports.addUser=(name,email,phone,password,role)=>{

    return new Promise((resolve,reject)=>{
            db.query("insert into user(name,email,phone,password,role) values(?,?,?,?,?)",[name,email,phone,password,role],(err,result)=>{
                        if(err){
                            reject(err)
                        }
                        else{
                            resolve(result)
                        }
                }
            )
    })
}

// -------------View User------------------------------------------------
exports.viewUser=()=>{
        
    return new Promise((resolve,reject)=>{
                db.query("select * from user where role='user'",(err,result)=>{
                            if(err){
                                reject(err)
                            }
                            else{
                                resolve(result)
                            }
                    }
                )
    })
}


// -------------Search User---------------------------------------------
exports.searchUser=(search)=>{
        let value=`%${search}%`
    return new Promise((resolve,reject)=>{
                db.query("select * from user where (name like ? or email like ? or phone like ?) and role='user'",[value,value,value],(err,result)=>{
                            if(err){
                                reject(err)
                            }
                            else{
                                resolve(result)
                            }
                    }
                )
    })
}


//-------------Update User------------------------------------------------
exports.updateUser=(id,name,email,phone,password,role)=>{

    return new Promise((resolve,reject)=>{
            db.query("update user set name=?,email=?,phone=?,password=? where id=? and role=?",[name,email,phone,password,id,role],(err,result)=>{
                        if(err){
                            reject(err)
                        }
                        else{
                            resolve(result)
                        }
                }
            )
    })
}


// --------------Delete User--------------------------------------------
exports.deleteUser=(id)=>{

    return new Promise((resolve,reject)=>{
            db.query("delete from user where id =?",[id],(err,result)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
    })

}

// ----------------------------------------------- End User ----------------------------------------------------------