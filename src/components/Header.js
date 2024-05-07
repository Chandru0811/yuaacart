import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/Yuaacart-Logo.png'
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Profile from './Profile';
import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';

function Header() {
  const expand = "lg"
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClose = () => setShowProfile(false);
  const handleProfileShow = () => setShowProfile(true);
  console.log("Offcanvas",Offcanvas.defaultProps)
  return (
    <>
       <Navbar key={expand} expand={expand} className=" mb-3"  style={{backgroundColor:"#ebf6ff"}}>
          <Container fluid>
          <Navbar.Brand>
          <Link to="/">
            <img src={Logo} alt="WWG" className="img-fluid " style={{ width: '150px', height: 'auto' }}  />
            </Link>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Yuaacart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=''style={{marginRight:"10%"}}>
                <Nav className="justify-content-end flex-grow-1 gap-2 ">
                <Nav.Link onClick={handleProfileShow} className='heading'>My Account</Nav.Link>
                  <Nav.Link ><Link to={"/checkout"}className='heading'>Checkout</Link></Nav.Link>
                  <Nav.Link className='heading'>FAQ</Nav.Link>
                  <Nav.Link className='heading'>Contact us</Nav.Link>
                  <NavDropdown className='heading'
                    title={<FaRegUser className='heading'/>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                   align="start"
                    
                  >
                    <NavDropdown.Item><Link to="/login">Login</Link></NavDropdown.Item>
                  
                  </NavDropdown>
                  <Nav.Link className='heading'><IoCartOutline size={20}/></Nav.Link>
                 
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Profile show={showProfile} handleClose={handleProfileClose} />
    </>
  );
}

export default Header;