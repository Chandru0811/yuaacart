import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/Yuaacart-Logo.png'
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  const expand = "lg"
  return (
    <>
       <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="WWG" className="img-fluid " style={{ width: '150px', height: 'auto' }}  />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Yuaacart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=''style={{marginRight:"10%"}}>
                <Nav className="justify-content-end flex-grow-1 gap-2 ">
                  <Nav.Link href="#action1">HP Laptops</Nav.Link>
                  <Nav.Link >DELL Laptops</Nav.Link>
                  <Nav.Link >LENOVO Laptops</Nav.Link>
                  <NavDropdown
                    title={<FaRegUser />}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                   align="start"
                    
                  >
                    <NavDropdown.Item >Logout</NavDropdown.Item>
                  
                  </NavDropdown>
                  <Nav.Link ><IoCartOutline /></Nav.Link>
                 
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;