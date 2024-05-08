import React, { useState, useEffect, useRef } from "react";
// import Laptop from "../assets/laptop.jpg";
// import product1 from "../assets/product1.webp";
// import product2 from "../assets/product2.jpg";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.jpg";
import pro6 from "../assets/pro6.jpg";
import { Link } from "react-router-dom";
import ProductList from "./Products/ProductCarouselList";
import { Tab, Tabs } from "react-bootstrap";

export default function Discription() {
  const [mainImage, setMainImage] = useState(pro1);
  const imgRef = useRef();
  const paneRef = useRef();
  const inlineContainerRef = useRef();

  useEffect(() => {
    let Drift;
    if (typeof window !== "undefined") {
      Drift = require("drift-zoom").default;
    }
    new Drift(imgRef.current, {
      paneContainer: paneRef.current,
      inlineContainer: inlineContainerRef.current
    });
  }, []);

  const handleChange = (image) => {
    setMainImage(image);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h3>
          DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-8650U (Quad-Core, 8MB
          Cache, 4.20GHz) 8GB Ram I 512GB
        </h3>
        <div className="row m-5">
          <div className="col-md-6 col-12 ">
            <div className="d-flex justify-content-center align-items-center "
              style={{ minWidth: " 76%" }}>
              <div class="zoom-image">
                <img
                  class="zoom-image__img"
                  ref={imgRef}
                  src={mainImage}
                  data-zoom={mainImage}
                  alt="Zoom here :)"
                  className="img-fluid "
                  style={{ maxHeight: "95%" }}
                />
                <div className="" ref={inlineContainerRef} style={{ width: "50px", height: "50px" }} />
                <div className="" ref={paneRef} style={{ width: "50px", height: "50px" }} />
              </div>
              {/* <img src={mainImage} alt="WWG" className="img-fluid "  style={{maxHeight: "95%"}}/> */}
            </div>
            <div
              className=" d-flex pt-3 gap-2"
              style={{ width: "50px", height: "auto" }}
            >
              <img
                src={pro2}
                alt="Product 1"
                className="img-fluid"
                style={{ cursor: 'pointer' }}
                onClick={() => handleChange(pro2)}
              />
              <img
                src={pro3}
                alt="Product 2"
                className="img-fluid"
                style={{ cursor: 'pointer' }}
                onClick={() => handleChange(pro3)}
              />
              <img
                src={pro4}
                alt="Product 2"
                className="img-fluid"
                style={{ cursor: 'pointer' }}
                onClick={() => handleChange(pro4)}
              />
              <img
                src={pro5}
                alt="Product 2"
                className="img-fluid"
                style={{ cursor: 'pointer' }}
                onClick={() => handleChange(pro5)}
              />
              <img
                src={pro6}
                alt="Product 2"
                className="img-fluid"
                style={{ cursor: 'pointer' }}
                onClick={() => handleChange(pro6)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">

            <h4>
              {" "}
              DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-8650U (Quad-Core,
              8MB Cache, 4.20GHz) 8GB Ram I 512GB
            </h4>
            <p>
              <s>₹80,000.00</s> ₹43,999.00
            </p>
            <p>
              8th Gen Intel® Core™ i7-8650U (Quad-Core, 8MB Cache, 4.20GHz) 8GB
              Ram I 512GB NVME SSD 13.3″ FHD TOUCH Display I Dual Camera I Win 10
              Pro -VPro Enabled 1 Year Warranty 90 Days Accessories
            </p>
            <input
              type="number"
              className="form-control w-25"
              min="1"
              pattern="\d+"
              defaultValue="1"
            ></input>
            <div className=" d-flex gap-3 pt-3 ">
              <Link to="/cart">
                <button className="btn " style={{ backgroundColor: "rgb(0 107 255)", color: "white" }}>Add To Cart</button>
              </Link>

              <Link to="/checkout">
                <button className="btn" style={{ backgroundColor: "#18b5fc", color: "white" }}>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3">
          <Tab eventKey="home" title="Description" >
            <p>Here is the detailed specification of the laptop you provided:</p>
            <ul>
              <li>Processor: 8th Gen Intel Core i7-8650U (Quad-Core, 8MB Cache, 4.20GHz)</li>
              <li>RAM: 8GB</li>
              <li>Storage: 512GB NVME SSD</li>
              <li>Display: 13.3″ FHD TOUCH Display</li>
              <li>Camera: Dual Camera</li>
              <li>Operating System: Windows 10 Pro -VPro Enabled</li>
              <li>Warranty: 1 Year</li>
              <li>Accessories Warranty: 90 Days</li>
            </ul>
            <p>Please let me know if you need any further information or assistance.</p>
          </Tab>
          <Tab eventKey="profile" title="Reviews">
            <p>There are no reviews yet.</p>
          </Tab>
        </Tabs>

      </div>


      <div className="px-1 py-4">
        <h3>Related products</h3>
        <ProductList />
      </div>
    </div>
  );
}
