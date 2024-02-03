import React, { useState,useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import './Submission.css';
import isLoggedIn from '../../auth/isLoggedIn';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { serverURL } from '../../Constants';


const Submissions = () => {
  const cookies = new Cookies().cookies;
  const [token, setToken] = useState('');
  function setCookie(){setToken(cookies['jwt']);}
  useEffect(() => {
      setCookie();
  },[]);

  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
        const teamCode = JSON.parse(localStorage.getItem('team')).teamCode;
        console.log(teamCode);
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("idea", data.benefits);
        formData.append("benefits", data.benefits);
        formData.append("uniqueness", data.uniqueness);
        formData.append("teamCode", teamCode);
        console.log(formData);
        const config = {headers: {'Content-Type': 'multipart/form-data', 'token': `${token}`}}
        const response = await axios.post(`${serverURL}/submissions/create`,formData,config)
        console.log(response);
    setTimeout(async () => {  
      if (!data.teamName || !data.idea || !file) {
        toast.error('Please fill in all fields and upload a file.', {
          position: 'top-center',
          duration: 3000,
        });
      } else {  
        toast.success('Submitted successfully!', {
          position: 'top-center',
          duration: 3000,
        });
        
        reset();
        setFile(null);
      }
    }, 1000);
    alert("Runs")
    // navigate('/user/dashboard');
  };

  return (
    <div id="submissions" className="body gradient-background">
      <div className="submission">
        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>Submission Page</h1>
          </div>

          <div className="text-box">
            <label>Problem Statement :</label>
            <textarea
              className="input"
              placeholder="Describe your problem statement"
              {...register('idea', {
                required: true,
              })}
            ></textarea>

            <span className="error">
              {errors.idea?.type === 'required' && 'Problem statement is required'}
            </span>
          </div>

          <div className="text-box">
            <label>Proposed solution:</label>
            <input
              className="input"
              placeholder="Give your solution"
              {...register('teamName', {
                required: true,
              })}
            />

            <span className="error">
              {errors.teamName?.type === 'required' && 'Team name is required'}
            </span>
          </div>

          <div className="text-box">
            <label>Benefits of Your Innovation:</label>
            <textarea
              className="input"
              placeholder="Briefly describe how your innovation benefits the industry or the world"
              {...register('benefits', {
                required: true,
              })}
            ></textarea>

            <span className="error">
              {errors.benefits?.type === 'required' && 'Benefits description is required'}
            </span>
          </div>

          <div className="text-box">
            <label>Uniqueness of Your Solution:</label>
            <textarea
              className="input"
              placeholder="Highlight what makes your solution stand out from others in the market"
              {...register('uniqueness', {
                required: true,
              })}
            ></textarea>

            <span className="error">
              {errors.uniqueness?.type === 'required' && 'Uniqueness description is required'}
            </span>
          </div>

          <div className="text-box">
            <label>Upload Design :</label>
            <div className="file-upload-container"></div>
            <input
              type="file"
              name="file"
              id="file"
              className="file-input"
              accept=".pdf, .f3d"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file" className="file-upload">Choose File</label>
            <span className="file-selected">{file ? `Selected File: ${file.name}` : 'No file chosen'}</span>
            <span className="error">
              {errors.file?.type === 'required' && 'File upload is required'}
            </span>
          </div>

          <div>
            <input className="button" type="submit" />
          </div>
        </form>
        {isLoggedIn() ? <Outlet/> : <Navigate to="/login" />}
      </div>
    </div>
  );
};

export default Submissions;
