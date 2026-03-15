let db=require("../config/db.js")

exports.login=(email,password)=>{

    return new Promise((resolve,reject)=>{      
        db.query("select * from user where email=? and password=?",[email,password],(err,result)=>{
            if(err){
                reject(err) 

            }
            else{
                resolve(result)
            }   
        })
    })
}