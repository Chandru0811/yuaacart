import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="d-flex flex-column align-items-center py-3"
      style={{ backgroundColor: "rgba(61, 99, 234, 0.90)", color: "#fff" }}
    >
      <span className="footerCopyrights">Copyrights @ Yuaacart &nbsp;&nbsp;
      <Link to={"/privacyandpolicy"} style={{color: '#fff'}}>Privacy Policy</Link></span>
    </div>
  );
}
