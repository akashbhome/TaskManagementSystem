import api from "./axiosInstance";

// -----------------Add Task------------------------

export let addTask=async(name)=>{

    let res=await api.post("/addTask",{name})
    return res.data;
}

// ----------------view Task-------------------

export let viewTask=async()=>{

    let res=await api.get("/viewTask")
    return res.data;
}

// ----------------delete Task--------------

export let deleteTask=async(id)=>{

    let res=await api.delete("/deleteTask",{params:{id}})

    return res.data
}

// ------------Update Task--------------------

export let editTask=async(id,name)=>{

    let res=await api.put("/updateTask",{id,name})

    return res.data
}       