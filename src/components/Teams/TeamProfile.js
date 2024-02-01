import React, { useEffect, useState } from "react";
import axios from "axios";
import isLoggedIn from "../../auth/isLoggedIn";
import { Navigate, Outlet } from "react-router-dom";
import "./TeamProfile.css";

import Cookies from 'universal-cookie';
const TeamProfile = () => {
    const cookies=new Cookies();
  const [team, setTeam] = useState([]);
  const [quit, setQuit] = useState("none");
  const [del, setDel] = useState("none");

    // async function fetchData(getting) {
    //     var config = {
    //         headers:{ "Accept": "*/*","token": `${getting}`}
    //     }
    //       console.log(config);
    //       let response = await axios.get('http://localhost:5000/teams/read',config);
    //       if(response){
    //         setTeam(response.data)
    //       }
        
    //   }
    // async function retrieve(){
    //     let getting=await cookies.get("jwt_authorization")
    //     if(getting){
    //       console.log(getting);
    //       fetchData(getting);
    //     }
    //     else{
    //       console.log(getting);
    //     }
    //   }
    async function pls(){
      let getting=await cookies.get("jwt_authorization")
        if(getting){
          console.log(getting);
        }
        else{
          console.log(getting);
        }
        var config = {
          headers:{ "Accept": "*/*","token": `${getting}`}
      }
        console.log(config);
        let response = await axios.get('http://localhost:5000/teams/read',config);
        if(response){
          setTeam(response.data.members);
          console.log(team)
        }
    }
      useEffect(()=>{
        pls();
    },[team])
  return (
    <div>
      <h1>Team Profile</h1>
      <button style={{ display: `${quit}` }}>Quit</button>
      <button style={{ display: `${del}` }}>Delete</button>
      <div className="teamProfile">
        {team && team.map((t) => (
          <div className="teamMember">
            <img
              src={`https://picsum.photos/100`}
              alt={`Team member`}
            />
            <p>Team member</p>
          </div>
        ))}
        {isLoggedIn() ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  );
};

export default TeamProfile;
