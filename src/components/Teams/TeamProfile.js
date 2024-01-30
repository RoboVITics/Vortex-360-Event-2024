import React, { useEffect, useState } from 'react'
import axios from 'axios';
const TeamProfile = () => {
    const [team,setTeam]=useState(null)
    async function fetchData() {
        let response = await axios.get('http://localhost:5000/teams/read');
        let user = response.data;// Don't need await here
        setTeam(user);
        console.log(team);
    }
     useEffect(()=>{
        fetchData()
     },[])
    return (
        <div>
            <h1>I will fuck your pussy</h1>
        </div>
    )
}

export default TeamProfile
