import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import isLoggedIn from "../../auth/isLoggedIn";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
function Teams() {
    const cookies = new Cookies().cookies;
    const navigate = useNavigate();
    console.log(cookies);
    const token = cookies['jwt'];
    console.log(token);

    useEffect(async () => {
        var config = {
            headers:{ "Accept": "*/*","token": `${token}`}
        }
          console.log(config);
          let response = await axios.get('http://localhost:5000/teams/read',config);
          if(response.status===200){
            if(response.data.success){
              console.log(response.data)
              localStorage.setItem("team",JSON.stringify(response.data.data));
              navigate("/user/teamprofile")
            }
            else{
              navigate("/user/teamreg")
            }
          }
      },[]);
    
  return <div>
    {isLoggedIn() ? <Outlet /> : <Navigate to="/login" />}
    </div>;
}

export default Teams;
