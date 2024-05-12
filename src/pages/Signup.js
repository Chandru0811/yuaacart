import React from 'react'
import Logo from '../assets/Yuaacart-Logo.png'
import {  useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from "yup";
import api from '../config/URL';
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required('*Employee name is required'),
    email: Yup.string().email('Invalid email format').required('*Enter your valid email'),
    mobile_no: Yup.string().required('*Enter your mobile no').matches(/^\d+$/, 'Invalid mobile number'),
    password: Yup.string().required('Please enter your password.').min(8, 'Your password is too short.'),
    password_confirmation: Yup.string()
      .required('Please retype your password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile_no: '',
      password: '',
      password_confirmation: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
       
        const response = await api.post("auth/register", values, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("values",values);
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/login");
          
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error);
      }
    },
  });
  return (


    <section className="signIn">
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex justify-content-center">
          <img className="img-fluid mt-4" src={Logo} alt="YuaaCart" style={{ width: '10%' }} />
        </div>
        <div className="card bg-white my-4 mx-auto p-3" style={{ maxWidth: '20rem' }}>
          <h3 className="w-100 d-flex flex-column">Create Account</h3>
          <div className="form-group mt-2">
            <p>Enter Your UserName</p>
            <input
              type="text"
              name="name"
              className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="invalid-feedback">{formik.errors.name}</div>
            )}
          </div>
          <div className="form-group mt-2">
            <p>Enter Your Email</p>
            <input
              type="text"
              name="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group mt-2">
            <p>Mobile No</p>
            <input
              type="text"
              name="mobile_no"
              className={`form-control ${formik.touched.mobile_no && formik.errors.mobile_no ? 'is-invalid' : ''}`}
              value={formik.values.mobile_no}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile_no && formik.errors.mobile_no && (
              <div className="invalid-feedback">{formik.errors.mobile_no}</div>
            )}
          </div>
          <div className="form-group mt-2">
            <p>Enter Your Password</p>
            <input
              type="password"
              name="password"
              className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="invalid-feedback">{formik.errors.password}</div>
            )}
          </div>
          <div className="form-group mt-2">
            <p>Confirm Password</p>
            <input
              type="password"
              name="password_confirmation"
              className={`form-control ${
                formik.touched.password_confirmation && formik.errors.password_confirmation ? 'is-invalid' : ''
              }`}
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password_confirmation && formik.errors.password_confirmation && (
              <div className="invalid-feedback">{formik.errors.password_confirmation}</div>
            )}
          </div>

          <button type="submit" className="btn my-2" style={{ background: '#4EA7FB' }}>
            Continue
          </button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Signup