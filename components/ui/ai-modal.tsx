// File: components/ui/ai-modal.tsx
"use client";
import { useState } from "react";
import { Send, X, Bot, User } from "lucide-react";

export function AIModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null; // Agar open false hai toh kuch mat dikhao

  const handleAskAI = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.reply);
      } else {
        setResponse(data.error || "Something went wrong.");
      }
    } catch (error) {
      setResponse("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Background Overlay (Blur effect)
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal Box */}
      <div className="w-full max-w-md bg-[#0a0f1c] border border-cyan-500/30 rounded-2xl p-6 relative shadow-[0_0_40px_rgba(6,182,212,0.15)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-red-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl text-white font-black mb-1 flex items-center gap-2">
          <Bot className="w-6 h-6 text-cyan-400" /> AI Assistant
        </h3>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          Ask anything about Ashish's professional profile.
        </p>

        {/* Input Area */}
        <div className="relative mb-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={50}
            placeholder="E.g., What are Ashish's core skills?"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none h-24 text-sm"
          />
          {/* Character Counter */}
          <div
            className={`absolute bottom-3 right-3 text-[10px] font-bold transition-colors ${
              message.length === 50
                ? "text-red-500 animate-pulse"
                : "text-slate-500"
            }`}
          >
            {message.length}/50
          </div>
        </div>

        <button
          onClick={handleAskAI}
          disabled={loading || message.length === 0}
          className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all flex justify-center items-center gap-2 text-sm uppercase tracking-wider"
        >
          {loading ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
              <Send className="w-4 h-4" /> Ask AI
            </>
          )}
        </button>

        {/* AI Output Area */}
        {response && (
          <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20 text-sm text-slate-300 leading-relaxed">
            <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px] block mb-2 border-b border-slate-800 pb-1">
              AI Response:
            </span>
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
