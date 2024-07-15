import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="container">
        <div className="form">
          <img src="https://pnghq.com/wp-content/uploads/pnghq.com-instagram-logo-splatter-p-7.png" alt="" />
          <form action="/login-success">
            <input type="text" placeholder='Phone number, username, or email'/>
            <input type="password" placeholder='Password'/>
            <button>Log in</button>
            <hr />
            <a className=' text-blue-900 mt-5' href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221p4iuwp1i9mimo59lwba2jmxvqsq7x3fbjgc645bdsc13gwfv6%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dcc3aed74-9901-43ba-8ca6-80c33d122837%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221p4iuwp1i9mimo59lwba2jmxvqsq7x3fbjgc645bdsc13gwfv6%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"><i className="fa-brands fa-square-facebook"></i> Log in with Facebook</a>
            <a className=' text-black text-sm mt-4 mb-0' href="https://www.instagram.com/accounts/password/reset/">Forgot password?</a>
          </form>
        </div>
        <div className="signup">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </>
  );
}

export default Login;
