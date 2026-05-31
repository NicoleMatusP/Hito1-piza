import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.trim() || !password.trim()) {
            setError('Todos los campos son obligatorios (no pueden estar vacíos)');
            alert('Todos los campos son obligatorios (no pueden estar vacíos)');
            return
        }

        if (password.length < 6) {
            setError("El password debe tener al menos 6 caracteres");
            alert("El password debe tener al menos 6 caracteres");
            return;
        }

        setError("");
        alert("Haz iniciado sesión correctamente");

        console.log('Email:', email)
        console.log('Password:', password)
    }

  return (
    <>
        <form style={{width: '400px', margin: '0 auto', padding: '20px', borderRadius: '5px', marginTop: '20px'}}>
            <h1 className="mb-4">Login</h1>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" placeholder="Enter your email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" placeholder="Enter your password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Login</button>
        </form>
    </>
  )
}
