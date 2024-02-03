import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState,useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import signInWithGoogle from "./handleGoogleLogin";
const Login = () => {
  const cookies = new Cookies();
  const [user,setUser]=useState('');
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/auth/login',
    {
      email: email,
      password: password,
    },{headers:{"Content-Type": "application/json"}})
    // Store the JWT Token as a cookie in the headers
    cookies.set("jwt",response.data.token);

    if(response.status == 201){
      console.log("This is executing after login!");
      var config = {
        headers:{ "Accept": "*/*","token": `${response.data.token}`}
      }
      console.log(config);
      let profileRes = await axios.get('http://localhost:5000/profile/read',config);
      if(profileRes.data.success){
        localStorage.setItem('profile', JSON.stringify(profileRes.data.data));
        navigate('/user/dashboard');
      }
      else{
        navigate('/user/createprofile');
      }
    }
  }
  const handleGoogleSubmit = async(e) => {
    e.preventDefault();
    const data = await signInWithGoogle();
    console.log(data);
    const response = await axios.post('http://localhost:5000/auth/google',
    {
      email: email,
      user: data
    },{headers:{"Content-Type": "application/json"}});
    // Store the JWT Token as a cookie in the headers
    cookies.set("jwt",response.data.token);

    if(response.status == 201){
      console.log("This is executing after login!");
      var config = {
        headers:{ "Accept": "*/*","token": `${response.data.token}`}
      }
      let profileRes = await axios.get('http://localhost:5000/profile/read',config);
      if(profileRes.data.success){
        localStorage.setItem('profile', JSON.stringify(profileRes.data.data));
        navigate('/user/dashboard');
      }
      else{
        navigate('/user/createprofile');
      }
    }
  }
  return (
    <div className="body gradient-background">
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
        <button type="text" className="button" onClick={signInWithGoogle}>
          <FaGoogle className="icon" />
          Log in with Google
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
