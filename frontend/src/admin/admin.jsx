import React from 'react'
import AdminNav from './AdminNav'
import AdminSide from './AdminSide'
import AdminDashboard from './adminDashboard'
import { Route, Routes,useLocation } from 'react-router-dom'
import UserManage from './UserManage'
import TaskManage from './TaskManage'

function Admin() {

  const location = useLocation();

  const id = location.state?.id || localStorage.getItem("userId");

  console.log(id);
  return (
    <div className='container-fluid w-100 p-0'>
        <div className="row p-0 m-0"  style={{height:"99vh"}}>
                <div className="col-2 bg-light p-0">
                   <AdminSide/>
                </div>
                <div className="col-10 p-0">
                        <AdminNav/>
                        <Routes>
                             <Route index element={<AdminDashboard/>}/>
                             <Route path="/usermanage" element={<UserManage/>}/>
                             <Route path="/taskmanage" element={<TaskManage/>}/>
                        </Routes>
                </div>  
        </div>
    </div>
  )
}

export default Admin