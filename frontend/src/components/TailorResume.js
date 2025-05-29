import React from 'react';
import axios from 'axios';

function TailorResume({ resumeText, keywords, onTailored }) {
  const tailor = async () => {
    const formData = new FormData();
    formData.append('resume_text', resumeText);
    formData.append('job_keywords', keywords.join(','));

    const response = await axios.post("http://localhost:8000/tailor-resume/", formData);
    onTailored(response.data.tailored_resume);
  };

  return (
    <div>
      <button onClick={tailor}>Tailor Resume</button>
    </div>
  );
}

export default TailorResume;
