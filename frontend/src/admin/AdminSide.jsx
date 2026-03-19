import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
function AdminSide() {

    const navigate = useNavigate()
    const handleAssignChange = (e) => {

    const value = e.target.value

    if (value === "single") {
      navigate("/admin/usermanage")
    } else if (value === "team") {
      navigate("/admin/taskmanage")
    }
  }
  return (
    <div className='w-100 bg-dark h-100 p-3'>

                <img src="/image/task.jpg" alt="image not found"  className='w-75 mx-4 mb-4 border rounded rounded-circle'/><br />

      <ul className="nav flex-column">

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
            Create Employee
          </Link>
        </li>
        <li className="nav-item mb-2 border border-light link">
          <Link className="nav-link link" to="/admin/taskmanage">
            Tasks
          </Link>
        </li>

        <li className="nav-item mb-2 border border-light link">
          <select className='form-control link bg-black' onChange={handleAssignChange}>
                <option value="" disabled>Assign Task</option>
                <option value="single">Single Task</option>
                <option value="team">Team Task</option>
          </select>
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