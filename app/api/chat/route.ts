// File: app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "[SYSTEM ERROR] GEMINI_API_KEY missing in .env.local" },
        { status: 500 },
      );
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const userMessage = messages[messages.length - 1].content;

    // AI SYSTEM PROMPT
    const systemPrompt = `
      You are the personal AI Assistant for Ashish Agnihotri, embedded in his portfolio website.
      Your job is to answer questions from recruiters, HRs, and clients professionally and concisely.
      
      Here is Ashish's context:
      - He is a B.Tech IT student (5th Sem) at OIST Bhopal (CGPA: 7.33, Expected Grad: 2028).
      - He is currently a Java Full Stack Developer Intern at StartAhb Technology.
      - Core Skills: Java, Spring Boot, Microservices, REST APIs, MERN Stack (MongoDB, Express, React, Node), MySQL.
      - Past Experience: MERN Stack Intern at Cybrom Technology. Co-founder of Velvet Dusk Perfume (handles marketing/brand).
      - Strengths: Backend architecture, rapid adaptability, problem-solving.
      - IF ASKED ABOUT A MISSING SKILL: Politely state that his core strength is "Rapid Adaptability" and he masters new tech quickly for production use.
      
      Rules for you:
      - Keep answers short, punchy, and highly professional (max 2-3 sentences).
      - Speak in the third person about Ashish (e.g., "Ashish is a developer...").
      - Never invent fake details. Be polite and confident.

      User asked: ${userMessage}
    `;

    // 👇 Yahan Google ka fastest aur FREE model lagaya hai 👇
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json(
      {
        reply:
          "[SYSTEM ERROR] Connection to AI Core lost. Please contact Ashish directly via email.",
      },
      { status: 500 },
    );
  }
}
