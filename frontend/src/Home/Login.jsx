import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
const navigate=useNavigate()
  let [login,setLogin]=useState({
    username:"",
    password:""
  });

let userLogin=()=>{
  if(login.username==='admin@gmail.com' && login.password==='admin'){

          navigate('/admin')
  }
  else{
    console.log(login.username,login.password)
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
                          value={login.username} onChange={(e)=>{setLogin({...login, username:e.target.value})}} />
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