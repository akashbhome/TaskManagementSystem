let db=require("../config/db.js")

// -----------Add User-------------------------------------------------
exports.addTask=(name)=>{

    return new Promise((resolve,reject)=>{
            db.query("insert into task(task_name) values(?)",[name],(err,result)=>{
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
exports.viewTask=()=>{
        
    return new Promise((resolve,reject)=>{
                db.query("select * from task",(err,result)=>{
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
exports.searchTask=(search)=>{
        let value=`%${search}%`
    return new Promise((resolve,reject)=>{
                db.query("select * from task where task_name like ? ",[value],(err,result)=>{
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
exports.updateTask=(id,name)=>{

    return new Promise((resolve,reject)=>{
            db.query("update task set task_name=? where task_id=? ",[name,id],(err,result)=>{
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
exports.deleteTask=(id)=>{

    return new Promise((resolve,reject)=>{
            db.query("delete from task where task_id =?",[id],(err,result)=>{
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