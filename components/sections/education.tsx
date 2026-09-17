// File: components/sections/education.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Target, Award, MapPin } from "lucide-react";
import { educationData } from "@/content/education-data";
import { EducationItem } from "@/types/education";

export function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto z-10"
    >
      {/* HEADER (Left Aligned matching the theme) */}
      <div className="flex flex-col items-start mb-16 border-l-4 border-emerald-500 pl-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="text-emerald-400 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            03. Academic Record
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          Education & <span className="text-slate-500">Focus</span>
        </motion.h2>
      </div>

      {/* EDUCATION GRID */}
      <div className="grid grid-cols-1 gap-8">
        {educationData.map((edu, index) => (
          <EducationCard key={edu.id} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
}

function EducationCard({ edu, index }: { edu: EducationItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col lg:flex-row gap-8 p-8 sm:p-10 rounded-3xl bg-[#0a0f1c] border-2 border-slate-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)]"
    >
      {/* Left: Main Details */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border-2 border-emerald-500/30 flex items-center justify-center shadow-inner group-hover:border-emerald-500 transition-colors">
            <GraduationCap className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {edu.degree}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-300 font-bold text-base sm:text-lg mb-8">
          <MapPin className="w-5 h-5 text-slate-500" />
          {edu.institution}
        </div>

        {/* Relevant Areas Badges */}
        <div className="mt-auto">
          <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Academic Focus
          </h4>
          <div className="flex flex-wrap gap-2">
            {edu.relevantAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 bg-slate-900 border border-slate-700 rounded-md group-hover:border-slate-600 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Progress & Stats Dashboard */}
      <div className="lg:w-1/3 flex flex-col justify-center border-t-2 lg:border-t-0 lg:border-l-2 border-slate-800 pt-8 lg:pt-0 lg:pl-10">
        {/* CGPA Badge */}
        <div className="flex justify-between items-center p-4 bg-slate-900/80 border border-slate-800 rounded-2xl mb-8">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" /> Current CGPA
          </span>
          <span className="text-2xl font-black text-white">{edu.cgpa}</span>
        </div>

        {/* Academic Pipeline / Progress Indicator */}
        <div className="relative">
          <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Target className="w-4 h-4" /> Degree Pipeline
          </h4>

          <div className="flex items-center justify-between relative">
            {/* Background Line */}
            <div className="absolute left-2 right-2 top-1/2 h-1 bg-slate-800 -z-10 -translate-y-1/2 rounded-full"></div>
            {/* Active Progress Line (roughly 60% for 5th Sem) */}
            <div className="absolute left-2 w-[60%] top-1/2 h-1 bg-emerald-500 -z-10 -translate-y-1/2 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

            {/* Node 1: Start */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#0a0f1c] shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                Enrolled
              </span>
            </div>

            {/* Node 2: Current (5th Sem) */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#0a0f1c] border-2 border-emerald-400 flex items-center justify-center relative">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] font-black text-emerald-400 uppercase">
                {edu.status}
              </span>
            </div>

            {/* Node 3: Graduation */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-slate-800 border-4 border-[#0a0f1c]"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">
                {edu.expectedGraduation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
