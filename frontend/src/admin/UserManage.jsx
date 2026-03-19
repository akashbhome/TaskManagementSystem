import React,{useState,useEffect}from 'react'
import { saveUser,viewUser } from '../service/admin'
function UserManage() {
//--------------------Add User Function-------------------
  let [addUser,setUser]=useState({
      name:"",
      email:"",
      phone:"",
      password:"",
      role:"",


  })

  let setValues=(e)=>{
      setUser((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      })
      )
  } 

let user = async () => {
  try {
    let result = await saveUser(
      addUser.name,
      addUser.email,
      addUser.phone,
      addUser.password,
      addUser.role
    );
    alert(result.message);  
  loadUsers(); 
  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong");
  }
};
// ------------------------------------------------------------------------

//------------------View User functon----------------------------------------

let [data,setData]=useState([]);

useEffect(() => {
  loadUsers();
}, []);

let loadUsers = async () => {
      try {
        let res = await viewUser();
        console.log("API:", res);

        setData(res.data || []);  

      } catch (err) {
        console.log(err);
        setData([]);        
      }
};
  
// --------------------------------------------------------------------------
  return (

    <div className='container-fluid border w-100  p-0 m-0' style={{height:"90vh"}}>
        <div className="col-12 row p-0 w-100 h-100 border m-0">

{/* ------------------------Add User------------------------------ */}

            <div className="col-6 h-100 p-5">
                  <div className="container w-75 border bg-light shadow  p-3">
                    <center><h3>Add User</h3></center>
                    <div className="form">
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">User Name :</label>
                           <input type="text" className="form-control" name="name" value={addUser.name} placeholder='Enter User Name' onChange={setValues}/>
                      </div>
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">Enter Email ID :</label>
                           <input type="text" name='email' value={addUser.email} className="form-control" placeholder='Email' onChange={setValues}/>
                      </div>
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">Enter Phone No :</label>
                           <input type="text" name="phone" value={addUser.phone} className="form-control" placeholder='Phone No' onChange={setValues}/>
                      </div>
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">Enter Password</label>
                           <input type="text" name="password" value={addUser.password} className="form-control" placeholder='Password' onChange={setValues}/>
                      </div>
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label">Select Role</label>
                           <select name="role" id="" className='form-control' onChange={setValues}>
                             <option value="">Select </option>
                              <option value='user'>User</option>
                           </select>
                      </div>
                      <div  className='mt-3'>
                           <input type="button" className="form-control btn btn-primary" value="Submit"  onClick={user}/>
                      </div>
   
                      
                    </div>
                  </div>
            </div>

{/* ------------------------View User------------------------------------ */}
            <div className="col-6 h-100 p-3">
              <center><h2>View User</h2></center>
                    <table className='table table-striped boarder rounded rounded-pill shadow shadow-lg'>
                        <thead>
                          <tr className='table-dark border text-dark '>
                              <th>Sr No</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>phone</th>
                              <th>Update</th>
                              <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                              {data.length > 0 ? (
                                data.map((item, index) => (
                                  <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                      <button className="btn btn-success">Update</button>
                                    </td>
                                    <td>
                                      <button className="btn btn-danger">Delete</button>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan="6" className="text-center">No Users Found</td>
                                </tr>
                              )}
                            </tbody>
                    </table>
            </div>

        </div>
    </div>
  )
}

export default UserManage