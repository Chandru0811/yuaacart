import React from 'react'

function Checkout() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="container-fluid my-4">
            <h4>
              <b>Checkout</b>
            </h4>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Order Summary</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <select
                type="text"
                className="form-size form-select"
                id="stage">
                <option selected></option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Got a Coupon</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="coupon"
                id="coupon" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Subtotal</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="subtotal"
                id="subtotal" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Shipping</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="shipping"
                id="shipping" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Have a gift card?</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <select
                type="text"
                className="form-size form-select"
                id="stage">
                <option selected></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Total</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="total"
                id="total" />
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="container-fluid my-5">
            <h4>
              <b>Contact Information</b>
            </h4>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>First Name</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="firstname"
                id="firstname" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Last Name</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="lastname"
                id="lastname" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Address</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="address"
                id="address" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Appartment,suite,etc</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="appartment"
                id="appartment" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Country/Region</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="country"
                id="country" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>State</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="state"
                id="state" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>PIN Code</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="pincode"
                id="pincode" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <lable>Phone</lable> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="phone"
                id="phone" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <label>Use Same Address for billing</label>
            <div className="d-flex align-items-center justify-content-start sm-device">
              <input
                type="checkbox"
                className="form-check-input ms-2 "></input>
            </div>
          </div>

        </div>
      </div>

      <div className="container">

        <div className="container-fluid my-5">
          <h4>
            <b>Payment Options</b>
          </h4>
        </div>

        <div className='container'>
          <div className='card bg-white my-5 mx-auto p-3 '>
            <div className="form-group mt-2">
              <input
                type="checkbox"
                className="form-check-input me-2"></input>
              <label>Direct bank transfer</label>
            </div>

            <div className="form-group mt-2">
              <input
                type="checkbox"
                className="form-check-input me-2 ">
              </input>
              <label>Cash on delivery</label>
            </div>
          </div>
          <input
            type="checkbox"
            className="form-check-input me-2 ">
          </input>
          <label>Add a note to your order</label>
          <hr></hr>
          <p> By proceeding with your purchase you agree to our
            <a href="!#" className='link-style'>Terms and Conditions</a> and <a href="!#" className='link-style'>Privacy Policy.</a>
          </p>

          <div className=' d-flex justify-content-center align-items-center mb-3'>
            <button className='btn btn-primary'>Place Order</button>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Checkout