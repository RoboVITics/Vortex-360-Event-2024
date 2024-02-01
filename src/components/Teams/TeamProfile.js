import React, { useEffect, useState } from "react";
import axios from "axios";
import isLoggedIn from "../../auth/isLoggedIn";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./TeamProfile.css";

const TeamProfile = () => {
    const [quit, setQuit] = useState(false);
    const teams = JSON.parse(localStorage.getItem('team'));
    const profile = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    useEffect(()=>{
      if(teams.members[0] == profile.email){
        setQuit(true);
      }
    },[]);

    function eligibleToLeave(){
      if(profile.isTeamLeader && teams.members.length > 1){
        return false;
      }
      return true;
    }

    async function handleQuit(){
      navigate('/user/teamreg');
    }
  return (
    <div>
      <h1>Team Profile</h1>
      <form onSubmit={handleQuit}>
        {
          eligibleToLeave() ? <button>{quit ? 'Quit Team' : 'Delete Team'}</button> : <button disabled>{quit ? 'Quit Team' : 'Delete Team'}</button>
        }
      </form>
      <h1>{teams.teamName}</h1>
      <h1>{teams.teamCode}</h1>
      <div className="teamProfile">
         {teams && teams.members.map((t) => (
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
