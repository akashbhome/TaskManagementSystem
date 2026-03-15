import React from 'react'
import { Link } from 'react-router-dom'
function AdminSide() {
  return (
    <div className='w-100 h-100 p-3'>

                <img src="/image/task.jpg" alt="image not found"  className='w-75 mx-4 mb-4 border rounded rounded-circle'/><br />

      <ul className="nav flex-column border bg-white rounded">

        <li className="nav-item mb-2 border border-light link">
          <Link className="nav-link link" to="/admin">
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2 border border-light link">
          <Link className="nav-link link" to="/admin/usermanage">
            Employee
          </Link>
        </li>
        <li className="nav-item mb-2 border border-light link">
          <Link className="nav-link link" to="/admin/usermanage">
            Employee Group
          </Link>
        </li>
        <li className="nav-item mb-2 border border-light link">
          <Link className="nav-link link" to="/admin/taskmanage">
            Tasks
          </Link>
        </li>
         <li className="nav-item mb-2 border border-light link">
          <Link className="nav-link link" to="/admin/taskmanage">
            Assign Tasks 
          </Link>
        </li>
        <li className="nav-item mt-2 border border-light link">
          <Link className="nav-link text-danger" to="/">
            Logout
          </Link>
        </li>

      </ul>

    </div>
  )
}

export default AdminSide