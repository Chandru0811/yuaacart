import React from 'react'
import Logo from '../assets/Yuaacart-Logo.png'
function Login() {
  return (
    <section className="signIn">
      <div className='container justify-content-center'>
        <div className=" d-flex justify-content-center ">
          <img className="img-fluid" src={Logo} alt="YuaaCart" />
        </div>
        <div className='card bg-white my-5 mx-auto p-3 ' style={{ maxWidth: '20rem' }}>
          <p className='w-100 d-flex flex-column'>Create Account</p>
          <div className="form-group mt-2">
            <label>Eneter Your UserName</label>
            <input
              type="text"
              className="form-control "></input>
          </div>
          <div className="form-group mt-2">
            <label>Eneter Your Email</label>
            <input
              type="text"
              className="form-control"></input>
          </div>
          <div className="form-group mt-2">
            <label>Eneter Your Password</label>
            <input
              type="text"
              className="form-control"></input>
          </div>
          <div className="form-group mt-2">
            <label>Eneter Your Confirm Password</label>
            <input
              type="text"
              className="form-control"></input>
          </div>

          <button className="btn my-2 " style={{ background: "#4EA7FB" }}>
            Continue
          </button>
          <p>Already have an account?
            <a href="!#">Sign in</a></p>
          <p>By creating an account or logging in, you agree to Amazon’s
            <a href="!#">Conditions of Use</a>and <a href="!#">Privacy Policy.</a></p>
        </div>
      </div>
    </section>
  )
}

export default Login