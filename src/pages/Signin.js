import React from 'react'
import Logo from '../assets/Yuaacart-Logo.png'

function Signin() {
  return (
    <section className="signIn">
      <div className='container justify-content-center'>
        <div className=" d-flex justify-content-center ">
          <img className="img-fluid" src={Logo} alt="YuaaCart" />
        </div>
        <div className='card bg-white my-5 mx-auto p-3 ' style={{ maxWidth: '20rem' }}>
          <p className='w-100 d-flex flex-column'>Sign in</p>
          <div className="form-group mt-2">
            <label>UserName/Email</label>
            <input
              type="text"
              className="form-control "></input>
          </div>
          <div className="form-group mt-2">
            <label>Password</label>
            <input
              type="text"
              className="form-control"></input>
          </div>

          <button className="btn my-2 " style={{ background: "#4EA7FB" }}>
            Continue
          </button>
          <p>By continuing, you agree to Amazon's
            <a href="!#">Conditions of Use</a> and <a href="!#">Privacy Notice.</a></p>
        </div>
        <div className='card bg-white my-5 mx-auto' style={{ maxWidth: '20rem' }}>
          <button className=" btn">Create Your YuaaCart Account</button>
        </div>
      </div>
    </section>
  )
}

export default Signin