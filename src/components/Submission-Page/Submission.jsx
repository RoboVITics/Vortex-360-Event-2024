import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import './Submission.css';

const Submissions = () => {
  const [file, setFile] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [idea, setIdea] = useState('');

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      if (!teamName || !idea || !file) {
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
        setTeamName('');
        setIdea('');
      }
    }, 1000);
  };

  return ( 
    <div id="submissions" className="body gradient-background">
      <div className="submission ">
        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>Submission Page</h1>
          </div>
          <div className="text-box">
            <label>Team Name :</label>
            <input
              className="input"
              placeholder="Enter your team name"
              {...register('teamName', {
                required: true,
              })}
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />

            <span className="error">
              {errors.teamName?.type === 'required' && 'Team name is required'}
            </span>
          </div>

          <div className="text-box">
            <label>Problem Statement :</label>
            <textarea
              className="input"
              placeholder="Describe your problem statement"
              {...register('idea', {
                required: true,
              })}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            ></textarea>

            <span className="error">
              {errors.idea?.type === 'required' && 'Problem statement is required'}
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
              accept=".pdf, .doc, .docx"
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
      </div>
    </div>
    
  );
};

export default Submissions;