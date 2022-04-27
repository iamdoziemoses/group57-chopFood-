import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.styles.css';
  

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar bg="#865307" variant={'dark'} expand="lg" className='nav'>
                    <Container className='navBar'>
                        <Navbar.Brand href="#home">chopFood</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <Link to="/" className='link'>Home</Link>
                            <Link to="/about" className='link'>About</Link>
                            <Link to="/products" className='link'>Products</Link>
                            <Link to="/contact" className='link'>Contact</Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
              </Navbar>
            </div>
        );
    }
}
 
export default NavBar;