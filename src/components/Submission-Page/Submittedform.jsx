import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import './Submittedform.css';

const SubmittedForm = () => {
  const [file, setFile] = useState(null);
  const [idea, setIdea] = useState('Previous Problem Statement');
  const [proposedSolution, setProposedSolution] = useState('Previous Proposed Solution');
  const [benefits, setBenefits] = useState('Previous Benefits Description');
  const [uniqueness, setUniqueness] = useState('Previous Uniqueness Description');
  const [existingFileName, setExistingFileName] = useState('example.pdf'); // Replace with the actual filename

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle the form submission, you can send the updated file and data to the backend here
    // For now, let's just show a toast indicating success
    toast.success('Form updated successfully!', {
      position: 'top-center',
      duration: 3000,
    });
  };

  const handleDownload = () => {
    // Placeholder for file download logic, replace with actual implementation
    // Here you would typically make a request to the backend to fetch the file
    // and then initiate the download
    toast.success('File downloaded successfully!', {
      position: 'top-center',
      duration: 3000,
    });
  };

  return (
    <div id="submitted-form" className="body gradient-background">
      <div className="submission">
        <Toaster position="top-center" reverseOrder={false} />
        <div>
          <h1>Submitted Form</h1>
        </div>
        <div className="text-box">
          <label>Problem Statement:</label>
          <div>{idea}</div>
        </div>
        <div className="text-box">
          <label>Proposed Solution:</label>
          <div>{proposedSolution}</div>
        </div>
        <div className="text-box">
          <label>Benefits of Your Innovation:</label>
          <div>{benefits}</div>
        </div>
        <div className="text-box">
          <label>Uniqueness of Your Solution:</label>
          <div>{uniqueness}</div>
        </div>
        <div className="text-box">
          <label>Choose File:</label>
          <div className="file-upload-container">
            <input
              type="file"
              name="file"
              id="file"
              className="file-input"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
            />
            <label htmlFor="file" className="file-upload">
              Choose File
            </label>
            <span className="file-selected">
              {file ? `Selected File: ${file.name}` : existingFileName ? `Existing File: ${existingFileName}` : 'No file chosen'}
            </span>
          </div>
        </div>
        <div>
          <button className="button" onClick={handleDownload}>
            Download File
          </button>
          <button className="button" onClick={handleSubmit}>
            Update Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmittedForm;
