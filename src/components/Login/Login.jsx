import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="body">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input
            className="input"
            type="text"
            placeholder="Username"
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input className="input" type="checkbox" />
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
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?
            <Link to="/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
