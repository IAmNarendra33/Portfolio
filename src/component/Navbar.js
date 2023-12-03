import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../component/image/logo.png';
import { Button } from '@mui/material';

const CustomNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='text-center'>
            <img width={80} src={logo} alt="logo..." />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto cursor-pointer color-dark justify-content-center">
              
            </Nav>
            <Nav className="ml-auto cursor-pointer color-dark justify-content-center">
              <Button href='Narendra Singh Rajput_Resume.pdf' style={{ marginLeft: 'auto' }}>Download CV</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
