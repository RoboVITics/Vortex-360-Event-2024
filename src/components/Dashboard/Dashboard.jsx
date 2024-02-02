import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import img from './Vortex_360_logos.png';
import isLoggedIn from '../../auth/isLoggedIn';
import { Navigate, Outlet } from 'react-router-dom';
import { domains, buttons } from "../../Constants";
const CalculateTimeRemaining = (targetDate) => {
  
  const now = new Date();
  const target = new Date(targetDate);

  // Calculate the difference in milliseconds
  const difference = target - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

// Example usage with two different dates
const targetDates = [
  new Date('2024-02-01T12:00:00'), // Replace with your specific dates
  new Date('2024-02-05T18:30:00'),
  new Date('2024-02-09T22:45:00'),
  new Date('2024-02-011T22:45:00'),
];
const events=[
  "Round 1","Round 2","Round 3","Submission"
]
let currentIndex = 0;


const Dashboard = () => {
  const [registrationData, setRegistrationData] = useState({
    registrationDateTime: "",
    registrationEmail: "",
    isRegistrationOpen: true,
    teamName: "",
    registrationFormCompleted: true,
    teamFormationCompleted: false,
    round1Completed: false,
    round2Completed: false,
    round3Completed: false,
    finalSubmissionCompleted: false
  });

  // useEffect(() => {
  //   fetch('your-api-endpoint')
  //     .then(response => response.json())
  //     .then(data => setRegistrationData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []); 

  const {
    registrationDateTime,
    registrationEmail,
    isRegistrationOpen,
    teamName,
    registrationFormCompleted,
    teamFormationCompleted,
    round1Completed,
    round2Completed,
    round3Completed,
    finalSubmissionCompleted
  } = registrationData;
  const [remainingTimeStr, setRemainingTimeStr] = useState('');
  const [days1,setDays1]=useState('');
  const [hours1,setHours1]=useState('');
  const [minutes1,setMinutes1]=useState('');
  const [seconds1,setSeconds1]=useState('');
  const [event,setEvent]=useState('')
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const calculatedRemainingTime = CalculateTimeRemaining(targetDates[currentIndex]);

      if (
        calculatedRemainingTime.days <= 0 &&
        calculatedRemainingTime.hours <= 0 &&
        calculatedRemainingTime.minutes <= 0 &&
        calculatedRemainingTime.seconds <= 0
      ) {
        currentIndex = (currentIndex + 1) % targetDates.length; // Switch to the next date
      }

      const calculatedRemainingTimeStr = `${calculatedRemainingTime.days} days, ${calculatedRemainingTime.hours} hours, ${calculatedRemainingTime.minutes} minutes, ${calculatedRemainingTime.seconds} seconds`;
      setRemainingTimeStr(calculatedRemainingTimeStr);
      setDays1(`${calculatedRemainingTime.days}`);
      setHours1(`${calculatedRemainingTime.hours}`);
      setMinutes1(`${calculatedRemainingTime.minutes}`);
      setSeconds1(`${calculatedRemainingTime.seconds}`);
      setEvent(`${events[currentIndex]}`)
      setRemainingTime(calculatedRemainingTime);

      }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className="dashboard-container newgradient">
      
      <div id="Dashboard" className="container ">
        <img src={img} alt="VORTEX-360" className="image" />
        <div className="info">
          <h1 className='newhead'>VORTEX-360</h1>
          <table>
            <tr>
              <td>
                  Registered on: {registrationDateTime}
              </td>
              <td>
                Deadline: 2nd Feb, 2024
              </td>
            </tr>
            <tr>
              <td>
                <p>By: You ({registrationEmail})</p>
              </td>
              
              <td>
                {isRegistrationOpen ? (
              <p>Registrations: Open</p>
            ) : (
              <p style={{ color: 'red', fontWeight: 'bold' }}>Registrations: Closed</p>
            )} 
              </td>
            </tr>
          </table>

          <div className="deadline-registration">
            <p></p>
            
          </div>

          {teamName && <p>Team: {teamName}</p>}
          <h3 className='header'>Time till {`${event}`}</h3>
          <div className='timer'>
            
            <div>
              <h3>DAYS</h3> <h3>{`${days1}`}</h3>
            </div>
            <div>
              <h3>HOURS</h3> <h3>{`${hours1}`}</h3>
            </div>
            <div>
              <h3>MINUTES</h3> <h3>{`${minutes1}`}</h3>
            </div>
            <div>
              <h3>SECONDS</h3> <h3>{`${seconds1}`}</h3>
            </div>
          </div>
          <div id="domains">
      <h2>Tracks</h2>
      <div
        id="carouselDemo"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="true"
        
      >
        <div class="carousel-indicators">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to={btn.slide}
              class={btn.class}
            ></button>
          ))}
        </div>
        <div class="carousel-inner">
          {domains.map((domain) => (
            <div
              key={domain.id}
              class={domain.upper}
              style={{
                background: `url(${domain.bg}) center/cover no-repeat,url(${domain.bg2}) center/cover no-repeat`,
                backgroundSize: 'auto 75%,auto 75%', // 80% height and width auto
                backgroundPosition: '90% 120%,10% 120%', // Adjust these values based on your preference
              }}
            >
              <div
                class="carousel-caption"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    color: "white",
                  }}
                >
                  {domain.name}
                </h3>
                <p>{domain.desp}</p>
                
              </div>
            </div>
          ))}
        </div>
        <button
          id="prev-slide"
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDemo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          id="next-slide"
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselDemo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
        </div>
        {isLoggedIn() ? <Outlet/> : <Navigate to="/login" />}
      </div>
    </div>
  );
};

export default Dashboard;
