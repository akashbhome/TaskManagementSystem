import api from "./axiosInstance";


export let saveUser=async(name,email,phone,password,role)=>{

let res = await api.post("/addUser", {name,email,phone,password,role });
  return res.data;
}

export let viewUser=async()=>{

let res = await api.get("/viewUser");
  return res.data;
}


export let deleteUser=async(id)=>{

let res = await api.delete("/deleteUser",{params:{id}});
  return res.data;
}

export let editUser=async(id,name,email,phone,password,role)=>{

  console.log(id,name,email,phone,password,role)
  let res=await api.put("/updateUser",{id,name,email,phone,password,role})
  return res.data;
}