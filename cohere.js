import cohere from 'cohere-ai';

export async function generateSummary(formData) {
    const apiKey = import.meta.env.VITE_COHERE_API_KEY;
    console.log("Cohere API Key from env:", apiKey);
  
    if (!apiKey) {
      console.error(" API key not found. Make sure it's in your .env file and restart the server.");
      return "API key is missing.";
    }
  
    try {
      const response = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "command", 
          prompt: `Write a short professional summary for a ${formData.jobTitle || 'web developer'} with experience in ${formData.experience}. Skills include: ${formData.skills}.`,
          max_tokens: 150,
          temperature: 0.7
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok || !data.generations) {
        console.error(" Cohere API error:", data);
        return "Error: Could not generate summary.";
      }
  
      return data.generations[0].text.trim();
  
    } catch (error) {
      console.error(" Fetch error:", error.message);
      return "Error: Failed to contact Cohere.";
    }
  }
  