import React,{useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { editUser } from '../service/admin';
function UpdateUser() {

    let location=useLocation()
    let navigate=useNavigate()

    let item=location.state?.item

    let [edit,setEdit]=useState({
        id:"",
        name:"",
        email:"",
        phone:"",
        password:"",
        role:""
    });

 useEffect(() => {
  if (item) {
    setEdit({
      id:item.id || "",
      name: item.name || "",
      email: item.email || "",
      phone: item.phone || "",
      password: item.password || "",
      role: item.role || ""
    });
  }
}, [item]);

    let setValues=(e)=>{
        setEdit((prev)=>({
            ...prev,
            [e.target.name]:e.target.value

        }))
    }
    let editU=async()=>{
        try{
            let result=await editUser(edit.id,edit.name,edit.email,edit.phone,edit.password,edit.role)
            alert(result.message)
            navigate("/admin/userManage")
        }
        catch (err) {
            alert(err.response?.data?.message || "Something went wrong");
        }

        
    }
  return (
                      <div className="container w-50 border bg-light shadow  mt-5 p-3">
                    <center><h3>Update User</h3></center>
                    <div className="form">
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">User Name :</label>
                           <input type="text" className="form-control" name="name" value={edit.name} placeholder='Enter User Name' onChange={setValues}/>
                      </div>
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">Enter Email ID :</label>
                           <input type="text" name='email' value={edit.email} className="form-control" placeholder='Email' onChange={setValues}/>
                      </div>
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">Enter Phone No :</label>
                           <input type="text" name="phone" value={edit.phone} className="form-control" placeholder='Phone No' onChange={setValues}/>
                      </div>
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">Enter Password</label>
                           <input type="text" name="password" value={edit.password} className="form-control" placeholder='Password' onChange={setValues}/>
                      </div>
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">Select Role</label>
                           <select name="role" id="" className='form-control' onChange={setValues}>
                              <option value={edit.role}>User</option>
                           </select>
                      </div>
                      <div  className='mt-3'>
                           <input type="button" className="form-control btn btn-primary" value="Update"  onClick={editU}/>
                      </div>
   
                      
                    </div>
                  </div>
  )
}

export default UpdateUser
