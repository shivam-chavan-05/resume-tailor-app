import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function PreviewTailored({ content }) {
  return (
    <div>
      <h3>Tailored Resume Preview</h3>
      <ReactQuill value={content} readOnly={true} theme="bubble" />
    </div>
  );
}

export default PreviewTailored;
