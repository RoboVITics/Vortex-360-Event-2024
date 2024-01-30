import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import img from './Vortex_360_logos.png';
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

  useEffect(() => {
    fetch('your-api-endpoint')
      .then(response => response.json())
      .then(data => setRegistrationData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

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

          <div className="timeline">
            <div className={`timeline-item ${registrationFormCompleted ? 'completed' : ''}`}>
              <input type="checkbox" checked={registrationFormCompleted} readOnly />
              <label>Profile</label>
            </div>
            <div className="timeline-item">
              <input type="checkbox" checked={teamFormationCompleted} readOnly />
              <label>Team</label>
            </div>
            <div className="timeline-item">
              <input type="checkbox" checked={round1Completed} readOnly />
              <label>Round 1</label>
            </div>
            <div className="timeline-item">
              <input type="checkbox" checked={round2Completed} readOnly />
              <label>Round 2</label>
            </div>
            <div className="timeline-item">
              <input type="checkbox" checked={round3Completed} readOnly />
              <label>Round 3</label>
            </div>
            <div className="timeline-item">
              <input type="checkbox" checked={finalSubmissionCompleted} readOnly />
              <label>Final Submission</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
