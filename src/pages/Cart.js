import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../config/URL";
import { InputGroup, FormControl } from "react-bootstrap";

function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`cartItems/${1}`);
        if (response.status === 200) {
          setData(response.data.cartitems);
        }
      } catch (error) {
        toast.error("Error Fetching Data: " + error.message);
      }
    };

    fetchData();
  }, []);
  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  return (
    <div className="cart-page">
      <div className="cart-container card-body shadow-lg">
        <div className="row mt-3 gx-0">
          <div className="d-flex justify-content-around">
            <h3>PRODUCT</h3>
            <h3>CART TOTAL</h3>
          </div>
        </div>
          <div  className="row gx-0">
        {data.map((item,index) => (
            <div key={index} className="col-md-7 col-12 d-flex justify-content-center shadow-lg mx-1 p-2" style={{ height: "400px", overflow: "" }}>
              <div className="d-flex">
                <img src={`https://sgitjobs.com/ShoppingCart/public/${item.path}`} alt={item.name} />
              </div>
              <div>
                <h5>{item.name}</h5>
                <span className="mb-0" style={{ border: "1px solid #000", padding: "5px", fontWeight: "bold" }}>
                  ₹{formatPrice(item.sale_price)}
                </span>
                <InputGroup className="m-3"style={{ width: "150px" }}>
            <InputGroup.Text>Qty:</InputGroup.Text>
            <FormControl
            className="form"
              type="number"
              min="1"
              pattern="\d+"
              Value={item.quantity}
              style={{ width: "60px" }}
            />
          </InputGroup>
              </div>
              </div>
              ))}
        
            <div className="col-md-3 col-12 card-body shadow-lg justify-content-center p-4">
              <p className="mb-0">Subtotal ( item): <strong>₹</strong></p>
              <hr />
              <p className="mb-0">Add a Coupon</p>
              <hr />
              <p className="mb-0">Shipping Add an address for shipping options</p>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Total</h5>{" "}
                <h5 className="d-flex justify-content-end">₹</h5>
              </div>
              <Link to="/checkout">
                <p className="d-flex justify-content-center ">Proceed to Checkout</p>
              </Link>
            </div>
            </div>
         
       
      </div>
    </div>
  );
}

export default Cart;

