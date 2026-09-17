// File: app/page.tsx
"use client";

import { SoundToggle } from "@/components/ui/SoundToggle";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Certificates } from "@/components/sections/certificates";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Navbar } from "@/components/layout/navbar";
import TechScene from "@/components/canvas/tech-scene";
import { personalInfo } from "@/content/personal";
import { ArrowUpRight, Terminal, Server, Layers, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 selection:bg-cyan-500 selection:text-black relative font-sans overflow-x-hidden">
      {/* Smooth Deep Cyber-Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#030712] to-[#030712] pointer-events-none z-0"></div>

      {/* 3D WebGL Canvas Layer */}
      <TechScene />

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6 sm:px-10 lg:px-12 max-w-5xl mx-auto flex flex-col items-center justify-center text-center min-h-[90vh]">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-10 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="tracking-widest uppercase font-bold">
            System Online • Available for Internships
          </span>
        </div>

        {/* Scaled Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white max-w-4xl mb-6 leading-[1.1] drop-shadow-lg">
          Architecting Resilient Backends &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
            Intelligent Systems
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-medium">
          Hi, I'm{" "}
          <span className="text-white font-bold">{personalInfo.name}</span>.{" "}
          {personalInfo.tagline}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 text-sm font-black uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-bold uppercase tracking-wider hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
          >
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
            <span>Init Connection</span>
          </a>
        </div>

        {/* Architecture Core Pillars */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-left relative z-20">
          <div className="p-6 rounded-2xl bg-[#0a0f1c] border-2 border-slate-800 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300">
            <div className="flex items-center gap-3 text-cyan-400 text-xs font-mono font-bold mb-3 tracking-widest uppercase">
              <Server className="w-5 h-5" />
              <span>Core Systems</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">
              Java & Spring Boot
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Engineered microservices, strict REST APIs, and clean DDD
              architecture patterns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0f1c] border-2 border-slate-800 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300">
            <div className="flex items-center gap-3 text-indigo-400 text-xs font-mono font-bold mb-3 tracking-widest uppercase">
              <Layers className="w-5 h-5" />
              <span>Frontend Systems</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">
              Modern Web Apps
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              TypeScript, Next.js, and high-performance, responsive React
              interfaces.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0f1c] border-2 border-slate-800 hover:border-teal-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] transition-all duration-300">
            <div className="flex items-center gap-3 text-teal-400 text-xs font-mono font-bold mb-3 tracking-widest uppercase">
              <Cpu className="w-5 h-5" />
              <span>Cloud & Tools</span>
            </div>
            <div className="text-white font-bold text-lg mb-2">
              DevOps & DBs
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              MySQL, Docker, Git version control, and secure application
              deployments.
            </p>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />

      {/* Ye button screen ke bottom right me fix rahega */}
      <SoundToggle />
      
    </main>
  );
}