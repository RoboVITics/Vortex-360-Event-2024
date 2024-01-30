import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Teams() {
    const navigate=useNavigate()
    async function fetchData() {
        let response = await axios.get('http://localhost:5000/teams/read');
        if(response.status===401){
            navigate("/teamreg")
        }
        else if(response.status===201){
            navigate("/teamprofile")
        }
    }
     useEffect(()=>{
       fetchData()
   },[])
  return (
    <div>
      
    </div>
  )
}

export default Teams
