import React from "react";
import { FaUser, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, redirect } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios"
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const cookies = new Cookies();
  const [password2,setPassword2]=useState("");
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(password===password2){
      const response = await axios.post('http://localhost:5000/auth/signup',
      { email: email, password: password,},
      { headers:{"Content-Type": "application/json"}});

      cookies.set("jwt",response.data.token);
      if(response.status == 201){
        var config = {
          headers:{ "Accept": "*/*","token": `${response.data.token}`}
        }
        let profileRes = await axios.get('http://localhost:5000/profile/read',config);
        if(profileRes.data.data){
          navigate('/user/dashboard');
        }
        else{
          navigate('/user/createprofile');
        }
      }
    }

  }
  return (

    <div className="body gradient-background">
    <div className="wrapper register">
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
        
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
        <div className="input-box">
          <input 
          onChange={(e)=>setPassword2(e.target.value)} 
          value={password2}
            id="password2"

            type="password"
            placeholder="Confirm Password"
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
        {/* <button type="text" className="button">
          <FaGithub className="icon" />
          Log in with GitHub
        </button> */}
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
