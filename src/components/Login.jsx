import React from 'react'

export default function Login() {
  return (
    <>
        <form style={{width: '400px', margin: '0 auto', padding: '20px', borderRadius: '5px', marginTop: '20px'}}>
            <h1 className="mb-4">Login</h1>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" placeholder="Enter your email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" placeholder="Enter your password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </>
  )
}
