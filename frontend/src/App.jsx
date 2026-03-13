import React from 'react'
import Home from './Home/home'
import Admin from './admin/admin'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Home/Login'
function App() {
  return (
    <div className='container-fluid border border-dark w-100 m-0 p-0' style={{height:"100vh"}}>
    
   <BrowserRouter>
       

        <Routes>
           
              <Route path='/' element={<Home/>}>
                    <Route path='/login' element={<Login/>}/>
              </Route>

              <Route path='/admin/*' element={<Admin/>}/>
        </Routes>                   
   </BrowserRouter>
    </div>
  )
}

export default App