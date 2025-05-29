import React, { useState } from 'react';
import ResumeUploader from './components/ResumeUploader';
import JobInput from './components/JobInput';
import TailorResume from './components/TailorResume';
import PreviewTailored from './components/PreviewTailored';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [tailoredText, setTailoredText] = useState('');

  return (
    <div className="App">
      <h1>Resume Tailor App</h1>
      <ResumeUploader onExtracted={setResumeText} />
      <br />
      <JobInput onKeywords={setKeywords} />
      <br />
      <TailorResume
        resumeText={resumeText}
        keywords={keywords}
        onTailored={setTailoredText}
      />
      <br />
      <PreviewTailored content={tailoredText} />
    </div>
  );
}

export default App;
