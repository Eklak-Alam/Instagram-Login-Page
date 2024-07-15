import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <div className="container">
        <div className="form">
          <img src="https://pnghq.com/wp-content/uploads/pnghq.com-instagram-logo-splatter-p-7.png" alt="" />          
            <h3 className=' text-gray-700'>Sign up to see photos and videos <br/> from your friends.</h3>
          <button><i className="fa-brands fa-square-facebook"></i> Log in with Facebook</button>
          <p className='mt-0 mb-2'>or</p>
          <form action="/signup-success">
            <input type="text" placeholder='Mobile Number or Email'/>
            <input type="text" placeholder='Full Name'/>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <p>People who use our service may have uploaded your contact information to Instagram. <a className=' text-blue-600' href="https://www.facebook.com/help/instagram/261704639352628">Learn More</a></p>
            <p>By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy.</p>
            <button className='mb-5'>Sign up</button>
          </form>
        </div>
        <div className="signup">
          <p>Have an account? <Link to="/">Log in</Link></p>
        </div>
      </div>
    </>
  );
}

export default Signup;
