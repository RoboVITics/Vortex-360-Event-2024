import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import './Submission.css';

const Submissions = () => {
  const [file, setFile] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [idea, setIdea] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

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

    e.target.reset();
    setFile(null);
    setTeamName('');
    setIdea('');
  }
};

  return (
    <div id="submission">
      <Toaster position="top-center" reverseOrder={false} />
      <header>
        <h1
          style={{
            textShadow: "3px 3px 4px rgb(207, 159, 255)",
            fontSize: "30px",
            paddingBottom: "10px",
            marginTop: "-15px",
          }}
        >
          Submission Page
        </h1>
      </header>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          name="teamName"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          
        />
        

        <label htmlFor="idea">Problem Statement:</label>
        <textarea
          name="idea"
          id="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        ></textarea>

        <label htmlFor="file" style={{ marginBottom: "8px" }}>
          Upload Design:
        </label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".pdf, .doc, .docx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className='newbtn' type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Submissions;
