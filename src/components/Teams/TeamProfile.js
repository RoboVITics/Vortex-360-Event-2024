import React, { useEffect, useState } from "react";
import axios from "axios";
import isLoggedIn from "../../auth/isLoggedIn";
import { Navigate, Outlet } from "react-router-dom";
import "./TeamProfile.css";

const TeamProfile = () => {
  const [team, setTeam] = useState([1, 2, 3, 4]);
  const [quit, setQuit] = useState("none");
  const [del, setDel] = useState("none");

  useEffect(() => {
    if (team.length === 1) {
      setQuit("block");
    } else if (team.length > 1) {
      setDel("block");
    }
  }, [team]);

  return (
    <div>
      <h1>Team Profile</h1>
      <button style={{ display: `${quit}` }}>Quit</button>
      <button style={{ display: `${del}` }}>Delete</button>
      <div className="teamProfile">
        {team.map((t) => (
          <div className="teamMember" key={t}>
            <img
              src={`https://picsum.photos/100?random=${t}`}
              alt={`Team member ${t}`}
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
