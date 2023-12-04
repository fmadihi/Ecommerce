import React from 'react'
import './CSS/LoginSigneUp.css'

const LoginSigneUp = () => {
  return (
    <div className='loginsigneup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to use the terms of use & privasy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSigneUp
