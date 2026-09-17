"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Component delete hone par memory saaf karne ke liye
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    // Agar audio object nahi bana hai, toh pehli click par banao
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/cyber-bg.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5; // Volume 50% kar diya check karne ke liye
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      audioRef.current.play().catch((e) => {
        console.error("Audio block ho gayi:", e);
        setIsPlaying(false);
      });
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleSound}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full border backdrop-blur-md transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] ${
        isPlaying
          ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
          : "bg-slate-900/50 border-slate-700 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50"
      }`}
      title="Toggle System Audio"
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}

      {isPlaying && (
        <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#030712] rounded-full animate-pulse"></span>
      )}
    </motion.button>
  );
}
