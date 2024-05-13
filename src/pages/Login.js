import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Logo from "../assets/Yuaacart-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../config/URL";

const validationSchema = Yup.object({
  email: Yup.string().required("*Employee id is required"),
  password: Yup.string().required("*Employee name is required"),
});

function Login({ onLogin }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      const formdata = new FormData();
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      try {
        const response = await api.post("auth/login", formdata);
        // console.log(response)
        if (response.data.statusCode === 200) {
          toast.success("Login Successfully");
          sessionStorage.setItem("token", response.data.data.token);
          onLogin();
          navigate("/checkout");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        if (error?.response?.status === 404) {
          toast.error(error?.response?.data?.message);
          // toast.error(error?.response?.data?.data?.email[0]);
        } else {
          toast.error(error?.response?.data?.data?.message);
        }
      }
    },
  });
  return (
    <section className="signup">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <img
            className="img-fluid mt-4"
            src={Logo}
            alt="YuaaCart"
            style={{ width: "15%" }}
          />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex justify-content-center">
            <div
              className="card bg-white my-4 p-3 mt-2"
              style={{ maxWidth: "20rem" }}
            >
              <h3 className="w-100 d-flex flex-column">Sign in</h3>
              <div className="form-group mt-2">
                <p>UserName/Email</p>
                <input
                  type="text"
                  {...formik.getFieldProps("email")}
                  className={`form-control  ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                ></input>
                {formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                )}
              </div>
              <div className="form-group mt-2">
                <p>Password</p>
                <input
                  type="password"
                  {...formik.getFieldProps("password")}
                  className={`form-control  ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                ></input>
                {formik.touched.password && formik.errors.password && (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              <button
                className="btn my-3"
                type="submit"
                style={{ background: "#4EA7FB" }}
              >
                Continue
              </button>
              <p>
                By continuing, you agree to Yuaacart{" "}
                <a href="!#" className="link-style">
                  Conditions of Use
                </a>{" "}
                and{" "}
                <Link to={"/privacyandpolicy"} className="link-style">
                  Privacy Policy.
                </Link>
              </p>
            </div>
          </div>
        </form>
        <div className=" d-flex justify-content-center align-items-center">
          <div
            style={{
              flex: "0.1",
              borderBottom: "1px solid #c0b9b9",
              maxWidth: " 7.5%",
            }}
          ></div>
          <p
            className="px-1"
            style={{ marginBottom: "0rem", color: "#969595" }}
          >
            New to YuaaCart
          </p>
          <div
            style={{
              flex: "0.1",
              borderBottom: "1px solid #c0b9b9",
              maxWidth: " 7.5%",
            }}
          ></div>
        </div>

        <div
          className="card bg-white my-5 mx-auto mt-3"
          style={{ maxWidth: "20rem" }}
        >
          <Link to={"/register"}>
            <button className=" btn w-100 ">
              Create Your YuaaCart Account
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
