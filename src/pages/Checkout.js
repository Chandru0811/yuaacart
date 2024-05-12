import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import api from '../config/URL'

function Checkout() {

  const { id } = useParams();
  const navigate = useNavigate()

  const validationSchema = Yup.object({

    orderSummary: Yup.string().required("*Summary is required"),
    gotACoupon: Yup.string().required("*Coupon is required"),
    subTotal: Yup.string().required("*SubTotal is required"),
    shipping: Yup.string().required("*Shipping a deduction name"),
    giftCard: Yup.string().required("*Have A Gift Card is required"),
    total: Yup.number()
      .required("*total amount is required")
      .typeError("*Must be a number"),
    firstName: Yup.string().required("*First Name is required"),
    lasttName: Yup.string().required("*Lastt Name is required"),
    address: Yup.string().required("*Address is required"),
    appartment: Yup.string().required("*Appartment is required"),
    country: Yup.string().required("*Country is required"),
    state: Yup.string().required("*State is required"),
    pinCode: Yup.string().required("*Pin Code is required")
      .typeError("*Must be a number"),
    Phone: Yup.string().required("*Phone Number is required"),
    paymentOptions: Yup.string().required("*Payment Options is required"),

  });

  const formik = useFormik({

    initialValues: {
      orderSummary: "",
      gotACoupon: "",
      subTotal: "",
      shipping: "",
      giftCard: "",
      total: "",
      firstName: "",
      lasttName: "",
      address: "",
      appartment: "",
      country: "",
      state: "",
      pinCode: "",
      Phone: "",
      paymentOptions: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      // try {
      //   const response = await api.post(`checkout/${id}`, values, {
      //     headers: {
      //       "Content-Type": "application/json",
      //       //Authorization: `Bearer ${token}`,
      //     },
      //   }
      //   );
      //   if (response.status === 201) {
      //     console.log(response.data)
      //     navigate("/productlist")
      //   }
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }
    },
  });


  return (
    <section>
      <form onSubmit={formik.handleSubmit}>
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
                  className={`form-select ${formik.touched.orderSummary &&
                    formik.errors.orderSummary
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("orderSummary")}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
              {formik.touched.orderSummary && formik.errors.orderSummary && (
                <div className=" text-danger">
                  {formik.errors.orderSummary}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Got a Coupon</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  className={`form-control  ${formik.touched.gotACoupon && formik.errors.gotACoupon
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("gotACoupon")}
                />
              </div>
              {formik.touched.gotACoupon && formik.errors.gotACoupon && (
                <div className=" text-danger">
                  {formik.errors.gotACoupon}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Subtotal</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  className={`form-control  ${formik.touched.subTotal && formik.errors.subTotal
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("subTotal")}
                />
              </div>
              {formik.touched.subTotal && formik.errors.subTotal && (
                <div className="text-danger">
                  {formik.errors.subTotal}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Shipping</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  className={`form-control  ${formik.touched.shipping && formik.errors.shipping
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("shipping")}
                />
              </div>
              {formik.touched.shipping && formik.errors.shipping && (
                <div className="text-danger">
                  {formik.errors.shipping}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Have a gift card?</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <select
                  type="text"
                  className={`form-select ${formik.touched.giftCard && formik.errors.giftCard
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("giftCard")}
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {formik.touched.giftCard && formik.errors.giftCard && (
                <div className="text-danger">
                  {formik.errors.giftCard}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Total</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  className={`form-control ${formik.touched.total && formik.errors.total
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("total")}
                />
              </div>
              {formik.touched.total && formik.errors.total && (
                <div className="text-danger">
                  {formik.errors.total}
                </div>
              )}
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
                  id="firstName"
                  className={`form-control iconInput  ${formik.touched.firstName && formik.errors.firstName
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("firstName")}
                />
              </div>
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-danger">
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Last Name</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  id="lastNmae"
                  className={`form-control iconInput  ${formik.touched.lasttName && formik.errors.lasttName
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("lasttName")}
                />
              </div>
              {formik.touched.lasttName && formik.errors.lasttName && (
                <div className="text-danger">
                  {formik.errors.lasttName}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Address</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  id="address"
                  className={`form-control iconInput  ${formik.touched.address && formik.errors.address
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("address")}
                />
              </div>
              {formik.touched.address && formik.errors.address && (
                <div className="text-danger">
                  {formik.errors.address}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Appartment,suite,etc</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  id="appartment"
                  className={`form-control iconInput  ${formik.touched.appartment && formik.errors.appartment
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("appartment")}
                />
              </div>
                {formik.touched.appartment && formik.errors.appartment && (
                  <div className="text-danger">
                    {formik.errors.appartment}
                  </div>
                )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Country/Region</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  id="country"
                  className={`form-control iconInput  ${formik.touched.country && formik.errors.country
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("country")}
                />
              </div>
              {formik.touched.country && formik.errors.country && (
                <div className="text-danger">
                  {formik.errors.country}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>State</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  id="state"
                  className={`form-control iconInput  ${formik.touched.state && formik.errors.state
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("state")}
                />
              </div>
              {formik.touched.state && formik.errors.state && (
                <div className="text-danger">
                  {formik.errors.state}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>PIN Code</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  id="pinCode"
                  className={`form-control iconInput  ${formik.touched.pinCode && formik.errors.pinCode
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("pinCode")}
                />
              </div>
              {formik.touched.pinCode && formik.errors.pinCode && (
                <div className="text-danger">
                  {formik.errors.pinCode}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <lable>Phone</lable> &nbsp;&nbsp;
              <div className="d-flex align-items-center justify-content-end  sm-device">
                <input
                  type="text"
                  id="phone"
                  className={`form-control iconInput  ${formik.touched.Phone && formik.errors.Phone
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("Phone")}
                />
              </div>
              {formik.touched.Phone && formik.errors.Phone && (
                <div className="text-danger">
                  {formik.errors.Phone}
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <label>Use Same Address for billing</label>
              <div className="d-flex align-items-center justify-content-start sm-device">
                <input
                  type="checkbox"
                  className="form-check-input ms-2 ">
                </input>
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
            <div className="my-4">
              <div className='card bg-white mx-auto p-3 '>
                <div className="form-group mt-2">
                  <input
                    type="radio"
                    name="paymentOptions"
                    id="directbank"
                    value="directbank"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-radio-input me-2"
                  />
                  <label htmlFor="directbank">Direct bank transfer</label>
                </div>

                <div className="form-group mt-2">
                  <input
                    type="radio"
                    name="paymentOptions"
                    id="cashon"
                    value="cashon"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-radio-input me-2"
                  />
                  <label htmlFor="cashon">Cash on delivery</label>
                </div>
              </div>
              {formik.touched.paymentOptions &&
                formik.errors.paymentOptions && (
                  <div className=" text-danger">
                    {formik.errors.paymentOptions}
                  </div>
                )}
            </div>
            <input
              type="checkbox"
              className="form-check-input me-2">
            </input>
            <label>Add a note to your order</label>
            <hr></hr>
            <p> By proceeding with your purchase you agree to our
              <a href="!#" className='link-style'>Terms and Conditions</a> and <a href="!#" className='link-style'>Privacy Policy.</a>
            </p>

            <div className=' d-flex justify-content-center align-items-center mb-3'>
              <button className='btn btn-primary' type="submit">Place Order</button>
            </div>
          </div>
        </div>

      </form>

    </section>
  )
}

export default Checkout