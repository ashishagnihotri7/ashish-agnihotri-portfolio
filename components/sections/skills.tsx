"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Database,
  LayoutTemplate,
  Network,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { skillsData, skillCategories } from "@/content/skills-data";
import { Skill, SkillCategory } from "@/types/skills";

const iconMap: Record<string, any> = {
  Server,
  Database,
  LayoutTemplate,
  Network,
  Wrench,
};

export function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("Backend & Systems");

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="relative py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto z-10 min-h-screen"
    >
      {/* HEADER (Clean, Left-Aligned to match Projects section perfectly) */}
      <div className="flex flex-col items-start mb-12 border-l-4 border-indigo-500 pl-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="text-indigo-400 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            Arsenal
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight"
        >
          Technical <span className="text-slate-500">Capabilities</span>
        </motion.h2>
      </div>

      {/* PREMIUM CYBER-DOCK TAB NAVIGATION (Unified Control Panel) */}
      <div className="w-full flex justify-start lg:justify-center mb-16 relative z-20 overflow-x-auto pb-4 scrollbar-hide">
        <div className="inline-flex gap-2 p-2 bg-[#0a0f1c] border-2 border-slate-800 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.title;
            const Icon = iconMap[category.iconName];
            return (
              <button
                key={category.title}
                onClick={() =>
                  setActiveCategory(category.title as SkillCategory)
                }
                className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap overflow-hidden ${
                  isActive
                    ? "bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-indigo-400"
                    : "bg-transparent text-slate-400 border border-transparent hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`}
                />
                <span className="relative z-10">{category.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SYSTEMATIC WIDE GRID (2 Columns) */}
      <div className="min-h-[400px]">
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  // Meter Widths for systematic data visualization
  const getMeterData = (prof: string) => {
    switch (prof) {
      case "Core":
        return {
          width: "w-[95%]",
          color: "bg-cyan-500",
          shadow: "shadow-[0_0_15px_rgba(6,182,212,0.8)]",
          badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        };
      case "Advanced":
        return {
          width: "w-[80%]",
          color: "bg-indigo-500",
          shadow: "shadow-[0_0_15px_rgba(99,102,241,0.8)]",
          badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
        };
      case "Intermediate":
        return {
          width: "w-[60%]",
          color: "bg-emerald-500",
          shadow: "shadow-[0_0_15px_rgba(16,185,129,0.8)]",
          badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        };
      default:
        return {
          width: "w-[40%]",
          color: "bg-slate-500",
          shadow: "shadow-none",
          badge: "bg-slate-800 text-slate-300 border-slate-600",
        };
    }
  };

  const meter = getMeterData(skill.proficiency);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative p-8 rounded-3xl bg-[#0a0f1c] border-2 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
        skill.featured
          ? "border-slate-700 hover:border-cyan-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]"
          : "border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_15px_40px_rgba(99,102,241,0.1)]"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-black text-white flex items-center gap-3 group-hover:text-cyan-300 transition-colors">
          {skill.featured && (
            <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_12px_rgba(6,182,212,1)]" />
          )}
          {skill.name}
        </h3>
        <span
          className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded border ${meter.badge}`}
        >
          {skill.proficiency}
        </span>
      </div>

      <p className="text-base text-slate-300 leading-relaxed mb-8 flex-grow font-medium">
        {skill.description}
      </p>

      {/* SYSTEMATIC DATA METER */}
      <div className="w-full bg-slate-900 rounded-full h-1.5 mb-8 border border-slate-800 overflow-hidden">
        <div
          className={`h-full ${meter.width} ${meter.color} ${meter.shadow} rounded-full transition-all duration-1000 ease-out`}
        />
      </div>

      {skill.projects && skill.projects.length > 0 && (
        <div className="pt-5 border-t-2 border-slate-800/80 mt-auto">
          <p className="text-sm font-medium text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
            <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px] mr-2">
              Used in:
            </span>
            {skill.projects.join(", ")}
          </p>
        </div>
      )}
    </motion.div>
  );
}
