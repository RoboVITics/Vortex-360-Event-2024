import React, { useState } from 'react';
import './Submission.css';

const Submissions = () => {
  const [file, setFile] = useState(null);
  const [teamLeaderName, setTeamLeaderName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [idea, setIdea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { file, teamLeaderName, teamName, idea });
  };


  return (
    <div id="submission">
      <header>
        <h1
        style={{textShadow: "3px 3px 4px rgb(207, 159, 255)",
                fontSize: "30px",
                paddingBottom: "10px",
                  }}
        >Submission Page</h1>
      </header>

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

          <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="file">Upload Design:</label>
          <input
            type="file"
            name="file"
            id="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button className='newbtn' type="submit">Submit</button>
        </form>
      </div>
  );
};

export default Submissions;
