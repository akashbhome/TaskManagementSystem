import React from 'react'
import Login from './Login'
import {Route, Routes, Link} from 'react-router-dom'

function Home() {
  return (
    <div className="container-fluid p-0 home h-100">

        <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">

            <h5 className="text-light m-0">TaskManager</h5>
            <Link className="btn btn-primary rounded-pill border px-4" to="/login">Login </Link>

        </nav>

        <div className="container pt-5">
           <Routes>
                <Route path='/login' element={<Login/>}/>
           </Routes>
        </div>

    </div>
  )
}

export default Home