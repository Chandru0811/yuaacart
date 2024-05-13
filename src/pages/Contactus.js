import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../config/URL";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("*Name is required"),
  email: Yup.string()
    .email("*Invalid email address")
    .required("*Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "*Phone number must contain only numbers")
    .required("*Phone Number is required"),
  message: Yup.string().required("*Message is required"),
});

function Contactus() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("email", values.email);
      formdata.append("phone", values.phone);
      formdata.append("message", values.message);
      try {
        const response = await api.post("contactus", formdata);
        if (response.data.statusCode === 200) {
          toast.success(response.data.data.contactus);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(
          "Error Submitting data ",
          error?.response?.data?.data?.message
        );
      }
    },
  });

  return (
    <section>
      <div className="container">
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

        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <b>Name</b>
              <span className="text-danger">*</span> &nbsp;&nbsp;
              <div className=" sm-device">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`form-control ${
                    formik.touched.name && formik.errors.name
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                )}
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <b>Email</b>
              <span className="text-danger">*</span> &nbsp;&nbsp;
              <div className="sm-device">
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  id="email"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                )}
              </div>
            </div>

            <div className="col-lg-12  mb-3">
              <b>Phone</b> &nbsp;&nbsp;
              <div className="">
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.phone && formik.errors.phone
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="phone"
                  id="phone"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="invalid-feedback">{formik.errors.phone}</div>
                )}
              </div>
            </div>

            <div className="col-lg-12  mb-4">
              <b>Message</b>
              <span className="text-danger">*</span> &nbsp;&nbsp;
              <div className="">
                <textarea
                  type="text"
                  className={`form-control ${
                    formik.touched.message && formik.errors.message
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="message"
                  id="message"
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="invalid-feedback">
                    {formik.errors.message}
                  </div>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="btn btn-outline-secondary col-1 mb-3 custom-btn rounded-pill "
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contactus;
