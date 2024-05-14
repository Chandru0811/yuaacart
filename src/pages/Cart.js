import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import api from "../config/URL";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Cart({ isLoggedIn }) {
  const [data, setData] = useState([]);
  // console.log("Data", data);
  const cartId = sessionStorage.getItem("cartId");

  const fetchData = async () => {
    try {
      const response = await api.get(`cartItems/${cartId}`);
      // console.log(response.data);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      toast.warning("No Product in a cart");
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container-fluid cartPage">
      <div className="row mb-3">
        <div className="col-md-8 col-12 mb-3">
          <div className="subTotal-card">
            <h4>
              <b>PRODUCT</b>
            </h4>
            <div className="productCart-card">
              {data.cartitems &&
                data.cartitems.map((item, index) => (
                  <div key={index} className="shadow-sm card px-3 mb-2">
                    <div className="row">
                      <div className="col-md-5 col-12">
                        <img
                          src={`https://sgitjobs.com/ShoppingCart/public/${item.path}`}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-7 col-12 d-flex flex-column justify-content-center align-items-start">
                        <h5>{item.name}</h5>
                        <div className="d-flex align-items-center mt-2 mb-3">
                          <p style={{ marginBottom: "0px" }}>
                            <s>${parseFloat(item.list_price).toFixed(2)}</s>
                          </p>{" "}
                          &nbsp;&nbsp;
                          <span
                            className="mb-0"
                            style={{
                              border: "1px solid #000",
                              padding: "5px",
                              fontWeight: "bold",
                            }}
                          >
                            ${parseFloat(item.sale_price).toFixed(2)}
                          </span>
                        </div>
                        <InputGroup className="my-3" style={{ width: "150px" }}>
                          <InputGroup.Text>Qty:</InputGroup.Text>
                          <FormControl
                            className="form"
                            type="number"
                            min="1"
                            pattern="\d+"
                            defaultValue={item.quantity}
                            style={{ width: "60px" }}
                          />
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 ">
          <div className="subTotal-card">
            <h4>
              <b>CART TOTAL</b>
            </h4>
            <div className="shadow-sm card p-4">
              <p className="mb-0">
                Subtotal ({data?.itemDetails?.item_count} item):{" "}
                <strong>
                  $ {parseFloat(data?.itemDetails?.total).toFixed(2)}
                </strong>
              </p>
              <hr />
              <p className="mb-0">Add a Coupon</p>
              <hr />
              <p className="mb-0">
                Shipping Add an address for shipping options
              </p>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Total</h5>{" "}
                <h5 className="d-flex justify-content-end">
                  $ {parseFloat(data?.itemDetails?.total).toFixed(2)}
                </h5>
              </div>
              {isLoggedIn ? (
                <Link to="/checkout">
                  <p className="d-flex justify-content-center ">
                    Proceed to Checkout
                  </p>
                </Link>
              ) : (
                <Link to="/login">
                  <p className="d-flex justify-content-center ">
                    Proceed to Checkout
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
