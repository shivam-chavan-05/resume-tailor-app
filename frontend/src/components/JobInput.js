import React, { useState } from 'react';
import axios from 'axios';

function JobInput({ onKeywords }) {
  const [jobText, setJobText] = useState('');

  const extractKeywords = async () => {
    const formData = new FormData();
    formData.append('text', jobText);
    const response = await axios.post("http://localhost:8000/extract-keywords/", formData);
    onKeywords(response.data.keywords);
  };

  return (
    <div>
      <h3>Paste Job Description</h3>
      <textarea
        rows={8}
        cols={80}
        value={jobText}
        onChange={(e) => setJobText(e.target.value)}
        placeholder="Paste job description here..."
      />
      <button onClick={extractKeywords}>Extract Keywords</button>
    </div>
  );
}

export default JobInput;
