import React from 'react'
import Home from './Home/home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className='container-fluid border border-dark w-100 m-0 p-0' style={{height:"100vh"}}>
    
   <BrowserRouter>
        <Home/>
   </BrowserRouter>
    </div>
  )
}

export default App