import React, { useState } from "react";
import Profiles from "../assets/profiles.png";
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
  } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

function Profile({ show, handleClose }) {
  
  return (
    <>
    
      <Offcanvas show={show} onHide={handleClose} style={{zIndex: "9999"}}>
        <Offcanvas.Header closeButton>
          <b> My Account</b>
        </Offcanvas.Header>
        <Offcanvas.Title>
          <div className="d-flex justify-content-start align-items-center gap-2 ">
            <div className="ms-2">
              <img
                className="img-fluid"
                src={Profiles}
                alt="user"
                width={100}
              />
            </div>
            <div className="">
              <h4 className="mb-0" style={{ color: "#18b5fc" }}>
                User
              </h4>
              <p className="text-secondary fw-normal  ">user123@gmail.com</p>
            </div>
          </div>
        </Offcanvas.Title>
        <hr />
        <Offcanvas.Body>
          <div className="d-flex mb-3 profile-menu">
            <div className="me-2">
              <FaCartShopping style={{ color: "18b5fc" }} />
            </div>
            <div  style={{cursor: 'pointer'}}>Orders</div>
            <div className="ms-auto">
              <IoIosArrowForward />
            </div>
          </div>

          <div className="d-flex mb-3 ">
            <div className="me-2">
              <MdDownload style={{ color: "18b5fc" }} />
            </div>
            <div  style={{cursor: 'pointer'}}>Downloads</div>
            <div className="ms-auto">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="d-flex mb-3 ">
            <div className="me-2">
              <IoLocation style={{ color: "18b5fc" }} />
            </div>
            <div  style={{cursor: 'pointer'}}>Billing Address</div>
            <div className="ms-auto">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="d-flex mb-3 ">
            <div className="me-2">
              <MdLocalShipping style={{ color: "18b5fc" }} />
            </div>
            <div  style={{cursor: 'pointer'}}>Shipping Address</div>
            <div className="ms-auto">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="d-flex mb-3 ">
            <div className="me-2">
              <RiAccountCircleFill style={{ color: "18b5fc" }} />
            </div>
            <div  style={{cursor: 'pointer'}}>Account Details</div>
            <div className="ms-auto">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="d-flex mb-3 ">
            <div className="me-2">
              <IoLogOutOutline style={{ color: "18b5fc" }} />
            </div>
            <div  style={{cursor: 'pointer'}}>Logout</div>
            <div className="ms-auto">
              <IoIosArrowForward />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Profile;
