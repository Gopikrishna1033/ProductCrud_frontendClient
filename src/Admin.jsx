import React from 'react'
import { Link } from 'react-router-dom'
function Admin() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <Link to={"/createproduct"}><button className='btn btn-success'> Create Product</button></Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Admin