import React from 'react'; 
import {
  Navbar,
  Image,
  Nav
} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import logo from '../../public/images/logo.png';

 function MyNavbar(){   
      return(  
         <div>  
       <Navbar expand="lg" className="deepam-navbar">
        <Navbar.Brand href="#home"><Image src={logo} fluid className="icon" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#about">About</Nav.Link>
          <NavDropdown title="Project" id="basic-nav-dropdown" className='db_dropdown'>
              <NavDropdown.Item href="https://e-shopping-store.herokuapp.com/">Ecommerce Store</NavDropdown.Item>
              <NavDropdown.Item href="http://deepambahre-blog.herokuapp.com/">
              Our Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="https://bcmplanetsociety.herokuapp.com/">Society App</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/attainu/Movie-Review/tree/dev">Movie Review</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/attainu/robin-social-media">Social Post</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>     
         </div>  
      );  
}  
export default MyNavbar; 