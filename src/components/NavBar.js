import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  const estiloNavbar = {
    background: '#E0EAFC',
    background: '-webkit-linear-gradient(to right, #CFDEF3, #E0EAFC)',
    background: 'linear-gradient(to right, #CFDEF3, #E0EAFC)',


    color: '#fff', // Color del texto
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={estiloNavbar}>
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">122-"A"</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active" exact>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/creditos" className="nav-link" activeClassName="active">
                  Créditos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar