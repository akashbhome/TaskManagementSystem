let task=require("../model/taskModel.js")

// -----------Add User-------------------------------------------------
exports.addTask=(req,res)=>{
    let {name}=req.body;

         task.addTask(name).then((r)=>{

                if(r.affectedRows>=1){
                        res.send("Task Added Successfully")
                }
                else{
                        res.send("Task Not Added")
                }

                }).catch((err)=>{
                        res.send(err)
    } ) 

}

// -------------View User------------------------------------------------
exports.viewTask=(req,res)=>{

        task.viewTask().then((r)=>{
                if(r.length===0){
                        res.send("Task not found")
                }
                else{
                        res.send(r);
                }
        }).catch((err)=>{
                res.send(err)
        })

}

// -------------Search User---------------------------------------------
exports.searchTask=(req,res)=>{
        let {search}=req.query;
        task.searchTask(search).then((r)=>{
                if(r.length===0){
                        res.send("Task not found")
                }
                else{
                        res.send(r);
                }
        }).catch((err)=>{
                res.send(err)
        })

}

//-------------Update User------------------------------------------------
exports.updateTask=(req,res)=>{

    let {id,name}=req.body;
    task.updateTask(id,name).then((r)=>{

                if(r.affectedRows>=1){
                        res.send("Task Update Successfully")
                }
                else{
                        res.send("Task Not Update")
                }

                }).catch((err)=>{
                        res.send(err)
    } ) 
}

// --------------Delete User--------------------------------------------
exports.deleteTask=(req,res)=>{

        let {id}=req.query;
        task.deleteTask(id).then((r)=>{

                if(r.affectedRows>=1){
                        res.send("Task Delete Successfully")
                    }
                else{
                        res.send("Task Not Delete")
                    }
        }).catch((err)=>{
                        res.send(err)
                })

}

// ------------------------------------------ End User ---------------------------------------------------