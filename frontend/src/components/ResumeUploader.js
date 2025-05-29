import React, { useState } from 'react';
import axios from 'axios';

function ResumeUploader({ onExtracted }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post("http://localhost:8000/extract-text/", formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    onExtracted(response.data.text);
  };

  return (
    <div>
      <h3>Upload Resume (PDF/DOCX)</h3>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Extract Text</button>
    </div>
  );
}

export default ResumeUploader;
