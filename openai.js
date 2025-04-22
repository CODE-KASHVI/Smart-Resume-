import cohere from 'cohere-ai';

export async function generateSummary(formData) {
  const apiKey = import.meta.env.VITE_COHERE_API_KEY;
  console.log("🔍 Cohere API Key from env:", apiKey); 

  if (!apiKey) {
    console.error("❌ API key not found. Make sure it's in your .env file and restart the server.");
    return "API key is missing.";
  }

  cohere.init(apiKey);

  const prompt = `Write a short professional summary for a web developer named ${formData.name} with experience in ${formData.experience} and skills like ${formData.skills}.`;

  try {
    const response = await cohere.generate({
      model: 'command-xlarge-nightly',
      prompt,
      max_tokens: 100,
      temperature: 0.7,
    });

    return response.body.generations[0].text.trim();
  } catch (error) {
    console.error("❌ Cohere API error:", error.message);
    return "Error: Failed to contact Cohere.";
  }
}
