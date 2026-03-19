import React from 'react'

function AdminDashboard() {
  return (
    <>
      <div className='container w-100 p-5' style={{height:'89.8vh'}} >
        
              <div className='d-flex w-100 col-12 h-50 mb-5 border p-5 shadow justify-content-between dash_box flex-wrap'>
                  <div className=" col-5 bg-light border shadow rounded rounded-circle">
                              <div className='container w-25 mt-5 bg-dark border rounded rounded-circle h-25'></div>
                  </div>

                  <div className="col-5 bg-light border rounded rounded-circle shadow">
                            <div className='container w-25 mt-5 bg-dark border rounded rounded-circle  h-25'></div>
                  </div>

              </div>

              <div className='p-5 border shadow mt-5 dash_box w-100'>

              </div>
        
        </div>    
    
    
    </>
  )
}

export default AdminDashboard