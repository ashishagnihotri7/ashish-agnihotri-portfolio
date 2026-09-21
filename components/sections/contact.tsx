"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Mail, Send } from "lucide-react";
import { personalInfo } from "@/content/personal";

export function Contact() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "SYSTEM MATCH FOUND: Ashish Agnihotri.\nI am his AI Assistant. Ask me anything about his skills, experience, or ability to learn new tech.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }), // Yahan dhyan dena, api route string expect kar raha hai
      });

      const data = await response.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply || data.error },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "[SYSTEM ERROR] Connection to AI Core lost. Please contact Ashish directly via email.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 lg:px-12 max-w-4xl mx-auto z-10 mb-20"
    >
      {/* AI Terminal Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-[#030712] border border-slate-800 shadow-[0_0_40px_rgba(6,182,212,0.1)] overflow-hidden flex flex-col h-[500px]"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-xs font-mono text-slate-500 flex items-center gap-2">
            <Terminal className="w-3 h-3" /> Ask_Ashish_AI
          </span>
        </div>

        {/* Chat History Area */}
        <div className="flex-1 p-6 font-mono text-sm sm:text-base overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.role === "user"
                    ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-100"
                    : "bg-slate-900 border border-slate-800 text-emerald-400"
                }`}
              >
                <span className="text-xs font-black opacity-50 block mb-1 uppercase tracking-widest">
                  {msg.role === "user" ? "Recruiter" : "AI Core"}
                </span>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-900 border border-slate-800 text-emerald-400 rounded-lg p-3 animate-pulse">
                Processing query...
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSendMessage}
          className="p-4 bg-slate-900 border-t border-slate-800 shrink-0 flex gap-3 items-center"
        >
          <span className="text-cyan-500 font-mono hidden sm:block">
            guest@portfolio:~$
          </span>

          {/* 🔴 NEW WRAPPER FOR INPUT AND COUNTER 🔴 */}
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={50} // 🔴 MAGIC 1: Max 50 Characters Lock
              placeholder="Ask short question..."
              className="w-full bg-[#030712] border border-slate-700 rounded-lg pl-4 pr-14 py-2 text-slate-200 font-mono text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              disabled={isLoading}
            />

            {/* 🔴 MAGIC 2: Dynamic Counter (Absolute positioned inside the input) */}
            <span
              className={`absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold transition-colors ${
                input.length === 50
                  ? "text-red-500 animate-pulse"
                  : "text-slate-500"
              }`}
            >
              {input.length}/50
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 px-4 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>

      {/* Manual Contact Links (Fallback) */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold uppercase text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all"
        >
          <Mail className="w-4 h-4" /> Email Directly
        </a>
        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-[#0a66c2] font-bold uppercase text-sm hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 transition-all"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
