import React from 'react'
import { Link, useLocation, } from 'react-router-dom'

const User = () => {
    const location = useLocation()
    const data = location.state;
  return (
    <div>
        <div className="card mx-auto">
  <div className="card-body">
    <h5 className="card-title mb-4 fw-bolder">User</h5>
    <div className="card-text my-3">
        <span className='ms-3'>User :</span>
        <span className='ms-3'>{data.email}</span>
    </div>
    <Link to="/forgot-password" className="mt-5 ms-3 cursor-pointer">Forgot Password</Link> 
  </div>
</div>
    </div>
  )
}

export default User