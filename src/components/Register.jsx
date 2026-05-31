import React from 'react'
import { useState } from 'react'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden')
            return
        }
        // Aquí puedes agregar la lógica para enviar los datos al servidor o realizar otras acciones necesarias
        console.log('Email:', email)
        console.log('Password:', password)
    }

  return (
    <>
        <form style={{width: '400px', margin: '0 auto', padding: '20px', borderRadius: '5px', marginTop: '20px'}}>
                <h1 className="mb-4">Registro</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email" className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">Confirmar Contraseña</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm your password" className="form-control" id="exampleInputPassword2"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </>
  )
}
