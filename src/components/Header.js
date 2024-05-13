import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/Yuaacart-Logo.png";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { BsTextIndentLeft } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import {
  // Button,
  Container,
  // FormControl,
  // InputGroup,
  Nav,
} from "react-bootstrap";
import Profile from "./Profile";
// import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import api from "../config/URL";

function Header({ key, isLoggedIn, onLogout }) {
  const expand = "lg";
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [TotalItems, setTotalItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleProfileClose = () => setShowProfile(false);
  const handleProfileShow = () => setShowProfile(true);

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  const gettotalItems = async () => {
    try {
      const response = await api.get("totalitems");
      // console.log("items", response.data);
      sessionStorage.setItem("cartId", response.data.cart_id);
      setTotalItems(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await api.get("categories");
      // console.log("items", response.data);
      setCategories(response.data.data.category);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
    gettotalItems();
  }, [key]);

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
                  {/* <Profile show={handleProfileShow} handleClose={handleProfileClose}/> */}
                  {isLoggedIn ? (
                    <Link onClick={handleProfileShow} className="heading pb-2">
                      My Account
                    </Link>
                  ) : (
                    <Link to={"/login"} className="heading pb-2">
                      My Account{" "}
                    </Link>
                  )}
                </Nav.Link>
                <Nav.Link>
                  {isLoggedIn ? (
                    <Link to={"/checkout"} className="heading pb-2">
                      Checkout
                    </Link>
                  ) : (
                    <Link to={"/login"} className="heading pb-2">
                      Checkout
                    </Link>
                  )}
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
      <Navbar className="bg-primary py-3 mb-3 secNavBar-Component">
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
            {categories &&
              categories.map((category) => (
                <NavDropdown.Item>
                  <Link
                    to={`/catrgoryproduct/${category.slug}`}
                    className=" text-black "
                  >
                    {category.name}
                  </Link>
                </NavDropdown.Item>
              ))}
          </NavDropdown>

          {/* <div className="d-flex " style={{ minWidth: "50%" }}>
            <InputGroup>
              <FormControl
                placeholder="Search Products.."
                aria-label="Search Products"
                className="rounded-pill border-0"
              />
              &nbsp;&nbsp;
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
          */}
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
              {isLoggedIn ? (
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item>
                  <Link to="/login" className="text-black">
                    Login
                  </Link>
                </NavDropdown.Item>
              )}
            </NavDropdown>
            <Nav.Link>
              <Link to="/cart">
                <IoCartOutline className="heading text-white" size={25} />
                <span class="position-absolute top-5 start-80 translate-middle badge rounded-pill bg-danger">
                  {TotalItems.total_items || 0}
                </span>
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
