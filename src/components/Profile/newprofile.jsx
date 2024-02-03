// NewProfile.jsx
import React, { useState,useEffect } from 'react';
import './newprofile.css';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import isLoggedIn from '../../auth/isLoggedIn';
import { Navigate, Outlet } from 'react-router-dom';
import axios from "axios"
import Cookies from "universal-cookie";

const NewProfile = () => {
  const cookies = new Cookies().cookies;
  const [token, setToken] = useState('');
  function setCookie(){setToken(cookies['jwt']);}
  useEffect(() => {
      setCookie();
  },[]);

  const initialUserData = JSON.parse(localStorage.getItem('profile'));

  const [edit, setEdit] = useState(false);
  const [userData, setUserData] = useState(initialUserData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const renderFields = [
    { label: "Name", key: "name" },
    { label: "Register number", key: "reg_number" },
    { label: "Gender", key: "gender" },
    { label: "Email", key: "email" },
    { label: "VIT Email", key: "vit_email" },
    { label: "Mobile Number", key: "phone_number" }
  ];

  const handleSaveChanges = async () => {
    setEdit(false);
    const response = await axios.post('http://localhost:5000/profile/update',
        userData,
        { headers: { 'Content-Type': 'application/json',"Accept": "*/*","token": `${token}` } });
    let profileRes = await axios.get('http://localhost:5000/profile/read',
    { headers: { "Accept": "*/*","token": `${token}` }});
    localStorage.removeItem('profile');
    localStorage.setItem('profile',JSON.stringify(profileRes.data.data));

    setTimeout(() => {
        if (userData.name && userData.reg_no && userData.gender && userData.email && userData.vit_email && userData.number) {
            // Simulate sending data to a server
            console.log("Submitted data:", userData);
            toast.success('Submitted successfully!', {
                position: 'top-center',
            });
        } else {
            toast.error('Failed to submit form. Please fill in all fields.', {
                position: 'top-center',
            });
        }
    }, 1000);
  };

  return (
    <div className="body gradient-background">
      <div className="profile">
        <div>
          <h1>Profile</h1>
        </div>
        {edit && <Toaster position="top-center" reverseOrder={false} />}
        {renderFields.map((field) => (
          <div className="text-box" key={field.key}>
            <label>{field.label} :</label>
            {edit ? (
              <input
                type="text"
                name={field.key}
                value={userData[field.key]}
                onChange={handleInputChange}
                className="input"
              />
            ) : (
              <div className="input">{userData[field.key]}</div>
            )}
          </div>
        ))}
        <div>
          {edit ? (
            <button className="button" onClick={handleSaveChanges}>
              Save Changes
            </button>
          ) : (
            <button className="button" onClick={() => setEdit(true)}>
              Edit Profile
            </button>
          )}
        </div>
        {isLoggedIn() ? <Outlet/> : <Navigate to="/login" />}
      </div>
    </div>
  );
};

export default NewProfile;
