import React from 'react'
import Logo from '../assets/Yuaacart-Logo.png'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <section className="signup">
      <div className='container'>
        <div className=" d-flex justify-content-center">
          <img className="img-fluid mt-4" src={Logo} alt="YuaaCart" style={{ width: "10%" }} />
        </div>

        <div className='d-flex justify-content-center'>
          <div className='card bg-white my-4 p-3 mt-2' style={{ maxWidth: '20rem' }}>
            <h3 className='w-100 d-flex flex-column'>Sign in</h3>
            <div className="form-group mt-2">
              <p>UserName/Email</p>
              <input
                type="text"
                className="form-control "></input>
            </div>
            <div className="form-group mt-2">
              <p>Password</p>
              <input
                type="text"
                className="form-control"></input>
            </div>

            <button className="btn my-2 " style={{ background: "#4EA7FB" }}>
              Continue
            </button>
            <p>By continuing, you agree to Amazon's{" "}
              <a href="!#" className='link-style'>Conditions of Use</a> and <a href="!#" className='link-style'>Privacy Notice.</a></p>
          </div>
        </div>
        <div className=' d-flex justify-content-center align-items-center'>
          <div style={{ flex: '0.1', borderBottom: '1px solid #c0b9b9', maxWidth: " 7.5%" }}></div>
          <p className='px-1' style={{ marginBottom: "0rem", color: "#969595" }}>New to YuaaCart</p>
          <div style={{ flex: '0.1', borderBottom: '1px solid #c0b9b9', maxWidth: " 7.5%" }}></div>
        </div>

        <div className='card bg-white my-5 mx-auto mt-3' style={{ maxWidth: '20rem' }}>
          <Link to={"/register"}>
          <button className=" btn w-100 ">Create Your YuaaCart Account</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login