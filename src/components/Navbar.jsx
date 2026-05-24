import React from 'react'

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
          <button className="btn btn-outline-light btn-sm" type="submit">🍕 Home</button>
        </li>
        {token ? (
          <>
          <li className="nav-item">
            <button className="btn btn-outline-light btn-sm" type="submit">🔓 Profile</button>
          </li>
          <li className="nav-item">
          <button className="btn btn-outline-light btn-sm" type="submit">🔒 Logout</button>
          </li>
          </>
        ) : (
          <>
          <li className="nav-item">
            <button className="btn btn-outline-light btn-sm" type="submit">🔐 Login</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light btn-sm" type="submit">🔐 Register</button>
          </li>
          </>
        )}
      </ul>
        <button className="btn btn-info btn-sm" type="submit">🛒 Total: ${total.toLocaleString('es-CL')}</button>
      </div>
    </div>
</nav>
    </>
  )
}

export default Navbar
