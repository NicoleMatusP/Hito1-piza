import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const total = 25000;
    const token = false;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav gap-3 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="btn btn-outline-light btn-sm">👤 Profile</Link>
        </li>
        {token ? (
          <>
          <li className="nav-item">
            <Link to="/profile" className="btn btn-outline-light btn-sm">🔓 Profile</Link>
          </li>
          <li className="nav-item">
          <Link to="/logout" className="btn btn-outline-light btn-sm">🔒 Logout</Link>
          </li>
          </>
        ) : (
          <>
          <li className="nav-item">
            <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
          </li>
          </>
        )}
      </ul>
        <Link to="/cart" className="btn btn-info btn-sm">🛒 Total: ${total.toLocaleString('es-CL')}</Link>
      </div>
    </div>
</nav>
    </>
  )
}

export default Navbar
