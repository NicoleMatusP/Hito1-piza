import React from 'react'

export default function Profile() {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1>Perfil de Usuario</h1>
      
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        usuario@email.com
      </p>

      <button style={{
        padding: '10px 20px',
        fontSize: '14px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Cerrar Sesión
      </button>
    </div>
  )
}