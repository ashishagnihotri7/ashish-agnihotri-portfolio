"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X, Sparkles } from "lucide-react";
import { personalInfo } from "@/content/personal";
import { AIModal } from "@/components/ui/ai-modal";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Nayi state AI Modal ko control karne ke liye
  const [aiModalOpen, setAiModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#030712]/90 backdrop-blur-md border-b border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="relative w-full px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group z-10">
          <div className="w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-wide text-base sm:text-lg leading-tight group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
              System Architect
            </span>
          </div>
        </Link>

        {/* Desktop Nav - PERFECTLY ORDERED */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-300 uppercase tracking-wider absolute left-1/2 -translate-x-1/2">
          <Link
            href="#about"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
          >
            Experience
          </Link>
          <Link
            href="#education"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
          >
            Education
          </Link>
          <Link
            href="#skills"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
          >
            Projects
          </Link>
          <Link
            href="#certificates"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
          >
            Certificates
          </Link>
          <Link
            href="#contact"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
          >
            Contact
          </Link>

          {/* Desktop AI Button */}
          <button
            onClick={() => setAiModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>AI Summary</span>
          </button>
        </nav>

        {/* Socials & Actions (Desktop) */}
        <div className="flex items-center gap-3 z-10">
          <div className="hidden md:flex items-center gap-2">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-400"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030712] border-b border-slate-800 px-6 py-6 space-y-4 shadow-xl">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 font-bold uppercase hover:text-cyan-400"
          >
            About
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 font-bold uppercase hover:text-cyan-400"
          >
            Experience
          </Link>
          <Link
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 font-bold uppercase hover:text-cyan-400"
          >
            Education
          </Link>
          <Link
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 font-bold uppercase hover:text-cyan-400"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 font-bold uppercase hover:text-cyan-400"
          >
            Projects
          </Link>
          <Link
            href="#certificates"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 font-bold uppercase hover:text-cyan-400"
          >
            Certificates
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 font-bold uppercase hover:text-cyan-400"
          >
            Contact
          </Link>

          {/* AI Button inside Mobile Menu */}
          <button
            onClick={() => {
              setMobileMenuOpen(false); // Menu band karo
              setAiModalOpen(true); // Modal kholo
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-bold uppercase tracking-wider hover:border-cyan-400 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>AI Assistant</span>
          </button>

          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center gap-6 pt-6 mt-2 border-t border-slate-800/80">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* AI Modal Render Here */}
      <AIModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </header>
  );
}
