import React from 'react'
import Logo from '../assets/Yuaacart-Logo.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (


    <section className="signIn">
      <div className='container'>
        <div className=" d-flex justify-content-center ">
        <img className="img-fluid mt-4" src={Logo} alt="YuaaCart" style={{ width: "10%" }} />
        </div>
        <div className='card bg-white my-4 mx-auto p-3 ' style={{ maxWidth: '20rem' }}>
          <h3 className='w-100 d-flex flex-column'>Create Account</h3>
          <div className="form-group mt-2">
            <p>Eneter Your UserName</p>
            <input
              type="text"
              className="form-control "></input>
          </div>
          <div className="form-group mt-2">
            <p>Eneter Your Email</p>
            <input
              type="text"
              className="form-control"></input>
          </div>
          <div className="form-group mt-2">
            <p>Eneter Your Password</p>
            <input
              type="text"
              className="form-control"></input>
          </div>
          <div className="form-group mt-2">
            <p>Eneter Your Confirm Password</p>
            <input
              type="text"
              className="form-control"></input>
          </div>

          <button className="btn my-2 " style={{ background: "#4EA7FB" }}>
            Continue
          </button>
        </div>
        <div className=' d-flex justify-content-center align-items-center'>
          <div style={{ flex: '0.1', borderBottom: '1px solid #c0b9b9', maxWidth: " 5%" }}></div>
          <p className='px-1' style={{ marginBottom: "0rem", color: "#969595" }}>Already have an account?</p>
          <div style={{ flex: '0.1', borderBottom: '1px solid #c0b9b9', maxWidth: " 5%" }}></div>
        </div>

        <div className='card bg-white my-5 mx-auto mt-3' style={{ maxWidth: '20rem' }}>
          <Link to={"/login"}>
          <button className=" btn w-100 ">Signup</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Signup