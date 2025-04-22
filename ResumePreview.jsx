import React from 'react';

export const ResumePreview = ({ formData }) => {
  return (
    <div className="preview">
      <h2>{formData.name}</h2>
      <p>{formData.email}</p>
      <h3>Professional Summary</h3>
      <p>{formData.summary}</p>
      <h3>Experience</h3>
      <p>{formData.experience}</p>
      <h3>Skills</h3>
      <p>{formData.skills}</p>
    </div>
  );
};
