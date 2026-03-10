
import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("Gemini API Key is not configured.");
      return null;
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const askFarrelAI = async (query: string) => {
  try {
    const client = getAI();
    if (!client) {
      return "Oops! Farrel's AI is not configured yet. Check back later!";
    }

    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: query,
      config: {
        systemInstruction: `You are Farrel Tito's AI personal assistant. 
        Farrel is a Frontend Engineer and UI/UX Designer who loves Neobrutalism. 
        His favorite colors are Blue (#3b82f6) and Yellow (#fde047). 
        He is passionate about Next.js, React, and Gemini API. 
        Answer questions about Farrel's work, skills, and background in a cool, 
        witty, and helpful tone. Keep answers concise.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having a bit of a brain freeze. Try asking again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! Farrel's AI is currently sleeping. Check back later!";
  }
};
