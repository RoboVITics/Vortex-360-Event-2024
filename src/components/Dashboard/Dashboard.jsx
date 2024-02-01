import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import img from './Vortex_360_logos.png';
import isLoggedIn from '../../auth/isLoggedIn';
import { Navigate, Outlet } from 'react-router-dom';
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
];

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
      setRemainingTime(calculatedRemainingTime);

      console.log(`Remaining time for Date ${currentIndex + 1}: ${calculatedRemainingTimeStr} Day is ${calculatedRemainingTime.days}`);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className="dashboard-container newgradient">
      
      <div id="Dashboard" className="container ">
        <img src={img} alt="VORTEX-360" className="image" />
        <div className="info">
          <h2 className='newhead'>VORTEX-360</h2>
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
          
        </div>
        {isLoggedIn() ? <Outlet/> : <Navigate to="/login" />}
      </div>
    </div>
  );
};

export default Dashboard;
