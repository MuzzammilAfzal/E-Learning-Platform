

import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI  } from "@google/genai";

const router = express.Router();
dotenv.config();



const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message
    });

    res.json({ reply: result.text });
  } catch (error) {
    console.error(" API error:", error);
    res.status(500).json({ error: " request failed" });
  }
});


export default router;