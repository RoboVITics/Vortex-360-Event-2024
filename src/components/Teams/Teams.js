import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import isLoggedIn from "../../auth/isLoggedIn";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
function Teams() {
  const cookies=new Cookies();
  const [cookie,setCoookie]=useState('');
    const navigate=useNavigate()
    async function retrieve(){
      let getting = await document.cookie()
      cookies.get({
        name:"jwt_authorization",
      })
      if(getting){
        console.log(getting)
        setCoookie(getting)
        fetchData();
        console.log("Redirected");
      }
      else{
        console.log("error");
      }
    }
    async function fetchData() {
        let response = await axios.get('http://localhost:5000/teams/read',{headers:{"token": `${cookie}`}});
        if(response.status===400){
            navigate("/teamreg");
        }
        else if(response.status===201){
            navigate("/teamprofile")
        }
    }
     useEffect(()=>{
       retrieve()
   },[])
  return <div>
    {isLoggedIn() ? <Outlet /> : <Navigate to="/login" />}
    </div>;
}

export default Teams;
