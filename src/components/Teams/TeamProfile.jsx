import React, { useEffect, useState } from "react";
import axios from "axios";
import isLoggedIn from "../../auth/isLoggedIn";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./TeamProfile.css";
import Cookies from "universal-cookie";

const TeamProfile = () => {
    const [quit, setQuit] = useState(false);
    const teams = JSON.parse(localStorage.getItem('team'));
    const profile = JSON.parse(localStorage.getItem('profile'));

    const cookies = new Cookies().cookies;
    const token = cookies['jwt'];
    const navigate = useNavigate();
    useEffect(()=>{
      console.log(profile.email)
      console.log(teams.members[0].email);
      if(teams.members[0].email == profile.email){
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
      var config = {
        headers:{ "Accept": "*/*","token": `${token}`}
      }
      let profileRes = await axios.get('http://localhost:5000/teams/quit',config);
      if(profileRes.data.success == true){
        alert("Left Team Successfully!");
        navigate('/user/dashboard');
      }
    }
  return (
    <div>
      <h1>Team Profile</h1>
      <form onSubmit={handleQuit} className="team-quit">
        {
          eligibleToLeave() ? <button>{quit ? 'Delete Team' : 'Quit Team'}</button> : <button disabled>{quit ? 'Quit Team' : 'Delete Team'}</button>
        }
      </form>

      <div className="teamContent">
        <h3>Team Name: {teams.teamName}</h3>
        <h3>Team Code: {teams.teamCode}</h3>
        <div className="teamProfile">

          {teams && teams.members.map((t) => (
            <div className="teamMember">
              <img
                src={`https://picsum.photos/100`}
                alt={`Team member`}
              />
              <div className="">
                <p>{t.name}</p>
                <p>{t.email}</p>
              </div>
            </div>
          ))}
          {isLoggedIn() ? <Outlet /> : <Navigate to="/login" />}
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
