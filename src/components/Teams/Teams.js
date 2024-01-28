import React, { useState } from 'react';
import "./teams.css";

const Teams = () => {
    const [activeForm, setActiveForm] = useState('teamLeader');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        teamName: '',
        email: '',
        githubLink: '',
        phoneNumber: '',
        referralCode: '',
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission (e.g., send data to server)
        console.log('Form Data:', formData);
        // Reset form data after submission
        setFormData({
            firstName: '',
            lastName: '',
            teamName: '',
            email: '',
            githubLink: '',
            phoneNumber: '',
            referralCode: '',
        });
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleToggleForm = (formType) => {
        setActiveForm(formType);
    };

    return (
        <>
            <div id="registration-container">
                <div id="teams">
                    <h1>Registration</h1>
                    <h2>Track name</h2>
                    <div id="forms-container">
                    <div className="toggle-buttons">
                        <button
                            className={activeForm === 'teamLeader' ? 'active' : ''}
                            onClick={() => handleToggleForm('teamLeader')}
                        >
                            Register as Team Leader
                        </button>
                        <button
                            className={activeForm === 'teamMember' ? 'active' : ''}
                            onClick={() => handleToggleForm('teamMember')}
                        >
                            Register as Team Member
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className={`registration-form ${activeForm === 'teamLeader' ? 'team-leader' : 'team-member'}`}>
                        <h2>{activeForm === 'teamLeader' ? 'Team Leader' : 'Team Member'} Registration</h2>

                        <div className="input-box">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" placeholder="First Name" id="firstName" name="firstName" value={formData.firstName}
                                onChange={handleInputChange}required />
                        </div>

                        <div className="input-box">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" placeholder="Last Name"  id="lastName" name="lastName"  value={formData.lastName}
                                onChange={handleInputChange}required />
                        </div>

                        <div className="input-box">
                            <label htmlFor="teamName">Team Name:</label>
                            <input type="text" placeholder="Team Name" id="teamName" name="teamName"     value={formData.teamName}
                                onChange={handleInputChange} required />
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder="Robovitics@gmail.com"   id="email" name="email"  value={formData.email}
                                onChange={handleInputChange} required />
                        </div>

                        {activeForm === 'teamLeader' && (
                            <div className="input-box">
                                <label htmlFor="githubLink">GitHub Link:</label>
                                <input type="text" placeholder="Github link"  id="githubLink" name="githubLink" value={formData.githubLink}
                                    onChange={handleInputChange} />
                            </div>
                        )}

                        <div className="input-box">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input type="tel" placeholder="72230-XXXXX" id="phoneNumber" name="phoneNumber"     value={formData.phoneNumber}
                                onChange={handleInputChange}required />
                        </div>

                        {activeForm === 'teamMember' && (
                            <div className="input-box">
                                <label htmlFor="referralCode">Referral Code:</label>
                                <input type="text" placeholder="Referral Code"  id="referralCode" name="referralCode"        value={formData.referralCode}
                                    onChange={handleInputChange} />
                            </div>
                        )}

                        <button id="submission_btn" type="submit">Submit</button>
                    </form>
                </div>
                </div>

                
            </div>
        </>
    );
};

export default Teams;
