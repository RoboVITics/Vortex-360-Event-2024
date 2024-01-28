import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, redirect } from "react-router-dom";
import "./Login.css";

const Register = () => {
  // // const handleSubmit = async () => {
  // //   const response = await axios.post('http://localhost:3000',{
  // //     email: email,
  // //     password: password
  // //   });

  // //   if(response.status == 201){
  // //     redirect('/dashboard');
  // //   }

  // }
  return (
    <div className="wrapper">
      <form action="" onSubmit={handleSumbit()}>
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Email" required />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
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
