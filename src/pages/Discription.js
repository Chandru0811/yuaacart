import React, { useState } from "react";
import Laptop from "../assets/laptop.jpg";
import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.jpg";

export default function Discription() {
  const [mainImage, setMainImage] = useState(Laptop);

  const handleChange = (image) => {
    setMainImage(image);
  };
  return (
    <div className=" container">
      <h3>
        DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-8650U (Quad-Core, 8MB
        Cache, 4.20GHz) 8GB Ram I 512GB
      </h3>
      <div className="row m-5">
        <div className="col-md-6 col-12">
          <img src={mainImage} alt="WWG" className="img-fluid " />
          <div
            className=" d-flex pt-3 "
            style={{ width: "50px", height: "auto" }}
          >
            <img
              src={product1}
              alt="Product 1"
              className="img-fluid"
              onClick={() => handleChange(product1)}
            />
            <img
              src={product2}
              alt="Product 2"
              className="img-fluid"
              onClick={() => handleChange(product2)}
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
            <button className="btn btn-primary ">Add To Card</button>
            <button className="btn btn-warning ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
