import React from "react";
import { FaUser, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Login.css";
const Register = () => {
  return (
    <div className="wrapper register">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            className="input"
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Email" required className="input" />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            className="input"
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" className="input" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="text" className="button">
          <FaGoogle className="icon" />
          Log in with Google
        </button>
        <button type="text" className="button">
          <FaGithub className="icon" />
          Log in with GitHub
        </button>
        <button type="submit" className="button">
          Register
        </button>
        <div className="register-link">
          <p>
            Already have an account?
            <Link to="/login">
              <a>Login</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
