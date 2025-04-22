import React, { useState } from 'react';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreview } from './components/ResumePreview';
import { generateSummary } from './utils/cohere';


export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    experience: '',
    skills: '',
    summary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateSummary = async () => {
    try {
      const summary = await generateSummary(formData);
      setFormData((prev) => ({ ...prev, summary }));
    } catch (error) {
      alert("Failed to generate summary. Check console for details.");
      console.error("OpenAI Error:", error);
    }
  };
  

  return (
    <div className="container">
      <ResumeForm formData={formData} onChange={handleChange} onGenerate={handleGenerateSummary} />
      <ResumePreview formData={formData} />
    </div>
  );
}
