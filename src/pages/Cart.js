import React from "react";
import Laps from "../assets/Laps.png";
import "../styles/custom.css";

function Cart() {
  return (
    <div className="cart-page">
      <header className="header">Header Content Goes Here</header>
      <div className="cart-container card-body shadow-lg">
        <div className="row mt-3 gx-0 ">
          <div className="d-flex justify-content-between">
            <h3>PRODUCT</h3>
            <h3>CART TOTALS</h3>
          </div>
        </div>
        <div className="row gx-0 ">
          <div className=" col-md-7 col-12 d-flex justify-content-center  card-body shadow-lg mx-1 p-2">
            <div className="d-flex justify-content-center m-1">
              <img src={Laps} alt="Laptop" />
            </div>
            <div>
              <h5>
                Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16‑core CPU
                and 40‑cor…)
              </h5>
              <span className="mb-0" style={{ border: "1px solid #000", padding: "5px", fontWeight: "bold"}}>₹3,69,990.00</span>
              <p className="mb-0">Eligible for FREE Shipping</p>
              <p className="mb-0">This will be a gift</p>
              <p className="mb-0">
                <input type="checkbox" id="giftCheckbox" />{" "}
                <label htmlFor="giftCheckbox">
                  This will be a gift Learn more
                </label>
              </p>
              <div>
                <span className="d-flex">
                  Qty:{" "}
                  <input
                    type="number"
                    className="form-control"
                    style={{ width: "10%", height: "2rem" }}
                  />
                </span>{" "}
                <span className="action" id="share">
                  Remove items
                </span>
              </div>
            </div>
            {/* <div className="col-md-5 col-12 ">
              <p>₹3,69,990.00</p>
            </div> */}
          </div>

          <div className=" col-md-3 col-12 card-body shadow-lg justify-content-center">
          <p className="mb-0">Subtotal (1 item): <strong>₹3,69,990.00</strong></p>

            <hr />
            <p className="mb-0">Add a Coupon</p>
            <hr />
            <p className="mb-0">Shipping Add an address for shipping options</p>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>Total</h5>{" "}
              <h5 className="d-flex justify-content-end">₹14,566.00</h5>
            </div>
            <p className="d-flex justify-content-center ">
              Proceed to Checkout
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">Footer Content Goes Here</footer>
    </div>
  );
}
export default Cart;
