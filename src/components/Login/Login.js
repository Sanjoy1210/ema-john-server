import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/shop';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
  }
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="email" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="password" id="" placeholder="Your Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>new to ema-john <Link to="/register">Create Account</Link> </p>
        <div>----------- or ---------</div>
        <button
          onClick={handleGoogleLogin}
          className="btn-regular"
        >Google Sign in</button>
      </div>
    </div>
  );
};

export default Login;