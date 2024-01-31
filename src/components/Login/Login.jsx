import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Login = () => {
  const cookies=new Cookies();
  const [user,setUser]=useState(null)
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/auth/login',
    {
      email: email,
      password: password,
    },{headers:{"Content-Type": "application/json"}})
    // Store the JWT Token as a cookie in the headers
    setUser(response.data.token);
    cookies.set("jwt_authorization",response.data.token)

    if(response.status == 201){
        navigate('/user/profile');
    }
  }
  return (
    <div className="body">
    <div className="wrapper">
      <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            className="input"
            type="text"
            placeholder="Email"
            required
            onChange={(e)=>setEmail(e.target.value)} value={email}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
          onChange={(e)=>setPassword(e.target.value)} value={password}
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
        {/* <button type="text" className="button">
          <FaGithub className="icon" />
          Log in with GitHub
        </button> */}
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
