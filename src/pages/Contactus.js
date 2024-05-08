import React from "react";

function Contactus() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="container-fluid my-4">
            <h3>
              <b>Contact us</b>
            </h3>
          </div>
          
          <div className="container-fluid my-4">
            <p>
              Have a question or comment? Enter your details, and we’ll be happy
              to get back to you.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <b>Name</b><span className="text-danger">*</span> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="name"
                id="name"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <b>Email</b><span className="text-danger">*</span> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  sm-device">
              <input
                type="text"
                className="form-size form-control"
                name="email"
                id="email"
              />
            </div>
          </div>

          <div className="col-lg-12  mb-3">
            <b>Phone</b> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  ">
              <input
                type="text"
                className="form-size form-control"
                name="phone"
                id="phone"
              />
            </div>
          </div>

          <div className="col-lg-12  mb-4">
            <b>Message</b><span className="text-danger">*</span> &nbsp;&nbsp;
            <div className="d-flex align-items-center justify-content-end  ">
              <textarea
                type="text"
                className="form-size form-control h-25 "
                name="message"
                id="message"
              />
            </div>
          </div>
          <div>
          <button type="button" class="btn btn-outline-secondary col-1 mb-3 custom-btn rounded-pill ">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
