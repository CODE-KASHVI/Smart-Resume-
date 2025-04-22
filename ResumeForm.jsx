import React from 'react';

export const ResumeForm = ({ formData, onChange, onGenerate }) => {
  return (
    <div className="form">
      <h2>Resume Builder</h2>
      <input name="name" value={formData.name} onChange={onChange} placeholder="Full Name" className="input" />
      <input name="email" value={formData.email} onChange={onChange} placeholder="Email" className="input" />
      <input name="jobTitle" value={formData.jobTitle} onChange={onChange} placeholder="Job Title" className="input" />
      <textarea name="experience" value={formData.experience} onChange={onChange} placeholder="Experience" />
      <textarea name="skills" value={formData.skills} onChange={onChange} placeholder="Skills" />
      <button onClick={onGenerate}>Generate Summary</button>
    </div>
  );
};
