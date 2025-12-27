import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (prompt: string, systemInstruction: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });
    
    return response.text || "I apologize, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to the server. Please try again later.";
  }
};

export const generateRecipe = async (ingredients: string): Promise<string> => {
  const systemPrompt = `You are a world-class chef specializing in farm-to-table cuisine using "Legal Chicks Premium Brown Eggs".
    Create a delicious, creative recipe using the user's provided ingredients.
    Highlight the rich, orange yolk and creamy texture of the eggs in the recipe description.
    Format the output clearly with Markdown: 
    - 🍽️ **Recipe Name**
    - 📝 **Description**
    - 🛒 **Ingredients List**
    - 👨‍🍳 **Instructions**`;

  return generateAIResponse(`I have these ingredients: ${ingredients}`, systemPrompt);
};

export const chatWithPoultryExpert = async (userMsg: string): Promise<string> => {
  const systemPrompt = `You are a helpful and knowledgeable poultry expert assistant for "Legal Chicks Philippines". 
    Your goal is to help customers with questions about:
    1. Raising Rhode Island Reds (Dark Mahogany) and Black Australorps.
    2. The benefits of brown eggs vs white eggs.
    3. The "Legal Chicks Empowerment Network" for farmers.
    4. Managing a backyard poultry farm in the Philippines (specifically Cagayan Valley conditions).
    
    Key Business Info:
    - Located in Centro Solana, Cagayan Valley.
    - Sells: Fertile Eggs (P25), Chicks (P100), Ready to Lay (P1250).
    - Features: Acclimatized genetics, no shipping stress (local).
    
    Tone: Friendly, encouraging, professional, and helpful. Use emojis occasionally. Keep answers concise.`;

  return generateAIResponse(userMsg, systemPrompt);
};