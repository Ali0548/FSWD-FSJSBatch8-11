import React from 'react'
import Test from './test'
import Test2 from './test2'



// Admin, User, Teacher, Student
const User = (props) => {
    const { user, web } = props
  return (
    <>
    <div className="card my-3">
        <div className="card-header">
            <he className="card-title">
                {user} Login {web} 
            </he>
        </div>
        <div className="card-body">
            <div className="form-group">
                <label htmlFor="">Enter Email</label>
                <input type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Enter Password</label>
                <input type="password" className="form-control" />
            </div>
        </div>
    </div>
    </>
  )
}

export default User