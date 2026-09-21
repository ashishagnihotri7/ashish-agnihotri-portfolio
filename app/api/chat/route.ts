// File: app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const requestTracker = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 Minute
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    const allowedOrigin = "https://ashish-agnihotri-portfolio.vercel.app";

    if (process.env.NODE_ENV === "production" && origin !== allowedOrigin) {
      return NextResponse.json(
        { error: "Unauthorized Access." },
        { status: 403 },
      );
    }

    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0] : "127.0.0.1";

    const now = Date.now();
    const userRecord = requestTracker.get(clientIp);

    if (userRecord) {
      if (now - userRecord.timestamp < RATE_LIMIT_WINDOW) {
        if (userRecord.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            { error: "Rate limit exceeded. Please wait a minute." },
            { status: 429 },
          );
        }
        userRecord.count += 1;
      } else {
        requestTracker.set(clientIp, { count: 1, timestamp: now });
      }
    } else {
      requestTracker.set(clientIp, { count: 1, timestamp: now });
    }

    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // 🔴 CHANGE 1: User sirf 50 characters tak hi type kar sakta hai
    if (message.length > 50) {
      return NextResponse.json(
        {
          error:
            "Message too long! Please ask short questions (under 50 characters).",
        },
        { status: 400 },
      );
    }

    // 🔴 CHANGE 2: System prompt me AI ko short answers dene ka sakht order
    const systemPrompt = `
    You are Ashish Agnihotri's professional AI portfolio assistant. 
    Here is Ashish's background:
    - Name: Ashish Agnihotri
    - Location: Bhopal, Madhya Pradesh, India
    - Education: B.Tech IT student at OIST Bhopal (2028), CGPA 7.33.
    - Stack: Java (JDK 17+), Spring Boot 3, MySQL, JavaScript, React.js, Next.js, Tailwind.
    - Projects: Smart Document Management, Employee Management, Currency Converter.
    
    CRITICAL INSTRUCTIONS: 
    1. ONLY answer questions related to Ashish's professional resume, skills, and projects.
    2. If asked anything else, reply ONLY with: "I only answer questions related to Ashish's professional portfolio."
    3. KEEP YOUR ANSWERS EXTREMELY SHORT AND DIRECT. Maximum 1 or 2 sentences. No long paragraphs.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([systemPrompt, message]);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
