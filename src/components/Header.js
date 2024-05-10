import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/Yuaacart-Logo.png";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { BsTextIndentLeft } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import {
  Badge,
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
} from "react-bootstrap";
import Profile from "./Profile";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const expand = "lg";
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClose = () => setShowProfile(false);
  const handleProfileShow = () => setShowProfile(true);
  console.log("Offcanvas", Offcanvas.defaultProps);
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="NavBar-Component bg-white "
        // style={{ backgroundColor: "#ebf6ff" }}
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={Logo}
                alt="WWG"
                className="img-fluid "
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
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
            <Offcanvas.Body className="" style={{ marginRight: "10%" }}>
              <Nav className="justify-content-end flex-grow-1 gap-2 ">
                <Nav.Link>
                  {/* onClick={handleProfileShow}  */}

                  <Link to={"/login"} className="heading pb-2">
                    {" "}
                    My Account{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/checkout"} className="heading pb-2">
                    Checkout
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/faq"} className="heading pb-2">
                    {" "}
                    FAQ
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/contactus"} className="heading pb-2">
                    Contact us
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Second Navbar */}
      <Navbar className="bg-primary mb-3 secNavBar-Component">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-between" />

          <NavDropdown
            title={
              <div className=" d-flex">
                <BsTextIndentLeft className="heading text-white" size={22} />
                <h6 className="text-white">Top Categories</h6>
              </div>
            }
            id={`offcanvasNavbarDropdown-expand-${expand} `}
          >
            <NavDropdown.Item>
              <Link to="" className=" text-black ">
                Uncategorized
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="" className=" text-black ">
                Dell Laptops
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

          <div className="d-flex " style={{ minWidth: "50%" }}>
            <InputGroup>
              <FormControl
                placeholder="Search Products.."
                aria-label="Search Products"
                className="rounded-pill border-0"
              />
              <Button
                className="rounded-pill"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                <FiSearch />
              </Button>
            </InputGroup>
          </div>
          <div className=" d-flex gap-3 ">
            <NavDropdown
              title={
                <FaRegUser
                  className="heading text-white Drop start  "
                  size={20}
                />
              }
              id={`offcanvasNavbarDropdown-expand-${expand} dropdown-button-drop-start`}
              // align="start"
              drop="start"
              variant="secondary"
            >
              <NavDropdown.Item>
                <Link to="/login" className=" text-black ">
                  Login
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/cart">
                <IoCartOutline className="heading text-white" size={25} />
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="">
                <FaRegHeart className="heading text-white " size={20} />
              </Link>
            </Nav.Link>
          </div>
        </Container>
      </Navbar>

      <Profile show={showProfile} handleClose={handleProfileClose} />
    </>
  );
}

export default Header;
