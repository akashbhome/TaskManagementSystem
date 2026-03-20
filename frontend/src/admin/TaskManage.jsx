import React ,{useState,useEffect}from 'react'
import { addTask,viewTask,deleteTask} from '../service/task';

import { useNavigate } from 'react-router-dom';
function TaskManage() {
// ---- Add Task--------------------
  let [task,setTask]=useState({
    task_name:""
  });
  console.log(task.task_name)
  let saveTask=async()=>{
      let result=await addTask(task.task_name)

      alert(result.message)
      loadtask()
  }

  //--------------view Task----------

  let [view,setView]=useState([])

  useEffect(()=>{
        loadtask()
  },[])

  let loadtask=async()=>{

    let result=await viewTask();

    setView(result)

  }

  //------------delete task----------------

  let taskdelete=async(task_id)=>{

      try {
          let result=await deleteTask(task_id)
          alert(result.message)
            loadtask(); 
          } catch (err) {
            alert("Delete failed");
          }
  }

// --------------update Task-----------------------

let navigate=useNavigate()

let editTask=(item)=>{
  navigate('/admin/updatetask',{state:item})
}

   

  return (
    <div className='container-fluid border w-100  p-0 m-0' style={{height:"90vh"}}>
        <div className="col-12 row p-0 w-100 h-100 border m-0">
            <div className="col-6 h-100 p-5">
                  <div className="container w-75 border bg-light shadow  p-3">
                    <center><h3>Add Task</h3></center>
                    <div className="form">
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label"> Task Name:</label>
                           <input type="text" name='task_name' value={task.task_name} className="form-control"  placeholder='Enter Task Name' onChange={(e)=>{setTask({...task,task_name:e.target.value})}}/>
                      </div>
                      <div  className='mt-3'>
                           <input type="button" className="form-control btn btn-primary" value="Submit" onClick={saveTask}/>
                      </div>
   
                      
                    </div>
                  </div>


            </div>
            <div className="col-6 h-100 p-3">
              <center><h2>View Task</h2></center>
                    <table className='table table-striped boarder rounded rounded-pill shadow shadow-lg'>
                        <thead>
                          <tr className='table-dark border rounded rounded-pill text-dark '>
                              <th>Sr No</th>
                              <th>Name</th>
                              <th>Update</th>
                              <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                              view.length > 0 ? (
                                view.map((item, index) => (
                                  <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.task_name}</td>
                                    <td>
                                      <button className='btn btn-success' onClick={()=>editTask(item)}>Update</button>
                                    </td>
                                    <td>
                                      <button className='btn btn-danger' onClick={()=>taskdelete(item.task_id)}>Delete</button>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan="4" className="text-center">No Data Found</td>
                                </tr>
                              )
                            }
                          </tbody>
                    </table>
            </div>

        </div>

    
    </div>
  )
}

export default TaskManage