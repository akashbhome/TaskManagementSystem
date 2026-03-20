import React ,{useState} from 'react'
import { useEffect } from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import { editTask } from '../service/task';

function UpdateTask() {

        let [task, setTask] = useState({
                    task_id:"",
                     task_name: ""
        });

        const location = useLocation();
        const navigate = useNavigate();

        let item = location.state;

        useEffect(() => {
            if (item) {
            setTask({
                task_id:item.task_id,
                task_name: item.task_name
            });
            }
        }, [item]);

        let editT=async()=>{
                try{
                    let result=await editTask(task.task_id,task.task_name)
                    alert(result.message)
                    navigate("/admin/TaskManage")
                }
                catch (err) {
                    alert(err.response?.data?.message || "Something went wrong");
                }
        
                
            }

  return (
    <div className="container w-50 mt-5 border bg-light shadow  p-4">
                    <center><h3>Update Task</h3></center>
                    <div className="form">
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label"> Task Name:</label>
                           <input type="text" name='task_name' value={task.task_name} className="form-control"  placeholder='Enter Task Name' onChange={(e)=>{setTask({...task,task_name:e.target.value})}}/>
                      </div>
                      <div  className='mt-3'>
                           <input type="button" className="form-control btn btn-primary" value="Update Task" onClick={editT}/>
                      </div>
   
                      
                    </div>
                  </div>
  )
}

export default UpdateTask
