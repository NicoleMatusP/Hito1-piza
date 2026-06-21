import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div style={{ 
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}>
      
      <div style={{ fontSize: '80px', marginBottom: '30px' }}>
        🍕
      </div>

      <h1 style={{ fontSize: '48px', margin: '0 0 15px 0', color: '#333' }}>
        404
      </h1>

      <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px', maxWidth: '500px' }}>
        Esta página se perdió en el horno
      </p>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '10px 24px',
            fontSize: '14px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
        >
          Inicio
        </button>

        <button 
          onClick={() => navigate('/cart')}
          style={{
            padding: '10px 24px',
            fontSize: '14px',
            backgroundColor: 'white',
            color: '#333',
            border: '1px solid #333',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#333'
            e.target.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white'
            e.target.style.color = '#333'
          }}
        >
          Carrito
        </button>
      </div>
    </div>
  )
}
