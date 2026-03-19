import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../service/login';
import './Login.css'

function Login() {
const navigate=useNavigate()
  let [login,setLogin]=useState({
    email:"",
    password:""
  });

let userLogin=async()=>{
   let result=await loginUser(login.email,login.password);
   localStorage.setItem("userId", result.id);
  // if(result.role==='admin'){
  //   // if(login.password==='admin' && login.email==="admin@123"){
  //      navigate('/admin', { state: { id: result.id } })
  //     // navigate('/admin')
  // }
  // else if(result==='user'){
  //   alert(user);

  // }
  // else{
  //   console.log(login.username,login.password)
  //     alert("User not Found")
  // }

  if (result?.role === 'admin') {
  navigate('/admin', { state: { id: result.id } })
      } 
      else if (result?.role === 'user') {
        alert("User Login")
      } 
      else {
        alert("User not Found")
      }
}
  return (
    

      <div className="container d-flex justify-content-center mt-5 align-items-center">

        <div className="col-lg-4 col-md-6 col-sm-10">

          <div className="login-card">

                <h3 className="text-center mb-4 text-light">Login</h3>

                <div className="mb-3">
                    <label className="form-label text-light">Username</label>
                    <input type="text" className="form-control" placeholder="Enter your Username"
                          value={login.email} onChange={(e)=>{setLogin({...login, email:e.target.value})}} />
                </div>

                <div className="mb-3">
                    <label className="form-label text-light">Password</label>
                    <input type="password" className="form-control" placeholder="Enter your Password" value={login.password}
                          onChange={(e)=>{setLogin({...login, password:e.target.value})}} />
                </div>

                <button className="btn btn-primary w-100 mt-2" onClick={userLogin}> Login </button>
          </div>

        </div>

      </div>

  )
}

export default Login