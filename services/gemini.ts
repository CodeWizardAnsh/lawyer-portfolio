import { GoogleGenAI } from "@google/genai";
import { LAWYER_DETAILS, SERVICES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the virtual legal assistant for ${LAWYER_DETAILS.name}'s law firm.
Your goal is to be helpful, professional, and concise.

Here is the context about the firm:
- Lawyer Name: ${LAWYER_DETAILS.name}
- Title: ${LAWYER_DETAILS.title}
- Experience: ${LAWYER_DETAILS.experience}
- Office Address: ${LAWYER_DETAILS.address}
- Phone: ${LAWYER_DETAILS.phone}
- Email: ${LAWYER_DETAILS.email}
- Office Hours: ${LAWYER_DETAILS.officeHours}

Services Offered:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Rules:
1. Answer questions about office location, hours, and services based on the context above.
2. If a user asks for legal advice, gently state that you are an AI assistant and they should book an appointment for legal counsel.
3. If they want to book an appointment, guide them to the 'Book Appointment' section of the website.
4. Keep responses brief (under 50 words) unless detailed explanation is needed.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I apologize, I am unable to answer that right now. Please call our office directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing technical difficulties. Please try again later.";
  }
};
