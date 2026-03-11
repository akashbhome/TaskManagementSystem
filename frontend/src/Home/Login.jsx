import React from 'react'
import './Login.css'

function Login() {
  return (
    

      <div className="container d-flex justify-content-center mt-5 align-items-center">

        <div className="col-lg-4 col-md-6 col-sm-10">

          <div className="login-card">

            <h3 className="text-center mb-4 text-light">Login</h3>

            <div className="mb-3">
              <label className="form-label text-light">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Username"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
              />
            </div>

            <button className="btn btn-primary w-100 mt-2">
              Login
            </button>

          </div>

        </div>

      </div>

 
  )
}

export default Login