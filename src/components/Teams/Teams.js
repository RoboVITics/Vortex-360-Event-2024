import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import isLoggedIn from "../../auth/isLoggedIn";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
function Teams() {
    const cookies = new Cookies().cookies;
    const navigate = useNavigate();
    const token = cookies['jwt'];
    async function getTeamInfo() {
      var config = {
          headers:{ "Accept": "*/*","token": `${token}`}
      }
      let response = await axios.get('http://localhost:5000/teams/read',config);
      if(response.status===200){
        if(response.data.success){
          localStorage.setItem("team",JSON.stringify(response.data.data));
          navigate("/user/teamprofile")
        }
        else{
          navigate("/user/teamreg");
        }
      }
     }
    useEffect(()=>{getTeamInfo()},[]);

  return (
    <div>
      <h1> Content </h1>
    {isLoggedIn() ? <Outlet /> : <Navigate to="/login" />}
    </div>
  ) 
}

export default Teams;
