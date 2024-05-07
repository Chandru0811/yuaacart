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
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Got a Coupon</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="coupon"
                id="coupon" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Subtotal</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="subtotal"
                id="subtotal" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Shipping</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="shipping"
                id="shipping" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Have a gift card?</lable> &nbsp;&nbsp;
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
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Total</lable> &nbsp;&nbsp;
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
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>First Name</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="firstname"
                id="firstname" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Last Name</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="lastname"
                id="lastname" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Address</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="address"
                id="address" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Appartment,suite,etc</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="appartment"
                id="appartment" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Country/Region</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="country"
                id="country" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>State</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="state"
                id="state" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>PIN Code</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="pincode"
                id="pincode" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <lable>Phone</lable> &nbsp;&nbsp;
              <input
                type="text"
                className="form-size form-control"
                name="phone"
                id="phone" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-start sm-device">
              <label>Use Same Address for billing</label>
              <input
                type="checkbox"
                className="form-check-input ms-2 "></input>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid my-5">
        <h4>
          <b>Payment Options</b>
        </h4>
      </div>

      <div className='container justify-content-center'>
        <div className='card bg-white my-5 mx-auto p-3 ' style={{ maxWidth: '20rem' }}>
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
        <p>
          By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy
        </p>
        <button className='btn btn-primary '>Place Order</button>
      </div>

    </section>
  )
}

export default Checkout