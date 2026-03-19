import React from 'react'

function TaskManage() {
  return (
    <div className='container-fluid border w-100  p-0 m-0' style={{height:"90vh"}}>
        <div className="col-12 row p-0 w-100 h-100 border m-0">
            <div className="col-6 h-100 p-5">
                  <div className="container w-75 border bg-light shadow  p-3">
                    <center><h3>Add Task</h3></center>
                    <div className="form">
                      <div className='mt-2'>
                           <label htmlFor="" className="form-label"> Task Name:</label>
                           <input type="text" className="form-control"  placeholder='Enter Task Name'/>
                      </div>
                      <div  className='mt-3'>
                           <input type="button" className="form-control btn btn-primary" value="Submit" />
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
                          <tr className=''>
                            <td>1</td>
                            <td>Akash</td>
                            <td><button className='btn btn-success'>update</button></td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                          </tr>
                        </tbody>
                    </table>
            </div>

        </div>

    
    </div>
  )
}

export default TaskManage