import React from "react";
import { FaUser, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, redirect } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios"
const Register = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/auth/signup',
    {headers:{"Content-Type": "application/json"}},
    {
      email: email,
      password: password,
    })
    console.log(response.data);
  }
  return (

    <div className="body">
    <div className="wrapper register">
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            onChange={(e)=>setName(e.target.value)}
            value={name}
            id="name"
            type="text"
            placeholder="Username"
            required
            className="input"
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input onChange={(e)=>setEmail(e.target.value)} value={email}
            id="email" type="text" placeholder="Email" required className="input" />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input 
          onChange={(e)=>setPassword(e.target.value)} 
          value={password}
            id="password"
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
    </div>
  );
};


export default Register;
