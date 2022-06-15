import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import '../style-sheets/Header.css';

import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'; 
import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
      <div className='container mb-5 header-container'>
        
        <div className='row'>

          <div className='col-sm-3 header-logo'><img src={Logo}></img></div>
          <div className='col-sm-9 header-nav'></div>          
        </div>

        <div className='row'>
          
          <Navbar collapseOnSelect expand="sm" variant="light">
            <Container>
              
              <Nav className="me-auto">
                  
                  <Link className="nav-link" to="/">HOME</Link>
                  <Link className="nav-link" to="/menu">MENU</Link>
                  <Link className="nav-link" to="/about">ABOUT US</Link>
                  <Link className="nav-link" to="/reservation">RESERVATIONS</Link>
                  {/* <Link className="nav-link" to="/pictures">PICTURES</Link> */}
                  <Link className="nav-link" to="/reservationsadmin">ADMIN</Link>
              </Nav>
            </Container>
          </Navbar>

        </div>
      </div>
    
  )
}

export default Header