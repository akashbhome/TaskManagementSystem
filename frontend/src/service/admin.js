import api from "./axiosInstance";


export let saveUser=async(name,email,phone,password,role)=>{

let res = await api.post("/addUser", {name,email,phone,password,role });
  return res.data;
}

export let viewUser=async()=>{

let res = await api.get("/viewUser");
  return res.data;
}