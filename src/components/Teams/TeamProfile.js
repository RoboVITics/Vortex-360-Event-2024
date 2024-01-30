import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./TeamProfile.css"
const TeamProfile = () => {
    const [team,setTeam]=useState([1,2,3,4])
    const[quit,setQuit]=useState("none")
    const[del,setDel]=useState("none")
    if(team.length===1){
        setQuit("block");
    }
    else if(team.length===1){
        setDel("block");
    }
    return (
        <div>
        <h1>Team Profile</h1>
        <button style={{display:`${quit}`}}>Quit</button>
        <button style={{display:`${quit}`}}>Delete</button>
        <div className='teamProfile'>
            
            {team.map((t) => (
            <div
              className='teamMember'
            >
                <img src='https://picsum.photos/100'></img>
                <p>Team member</p>
            </div>
          ))}
        </div>
        </div>
    )
}

export default TeamProfile
