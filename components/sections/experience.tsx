"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Users,
  ChevronDown,
  CheckCircle2,
  ChevronRight,
  Award,
} from "lucide-react";
import { experienceData } from "@/content/experience-data";
import { TimelineItem } from "@/types/experience";

const iconMap = {
  Experience: Briefcase,
  Education: GraduationCap,
  Entrepreneurship: Lightbulb,
  Leadership: Users,
};

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("startahb"); // Default open top one

  return (
    <section
      id="experience"
      className="relative py-24 px-6 sm:px-10 lg:px-12 max-w-5xl mx-auto z-10 min-h-screen"
    >
      {/* HEADER */}
      <div className="flex flex-col items-start mb-20 border-l-4 border-cyan-500 pl-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="text-cyan-400 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            Career Journey
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          Experience <span className="text-slate-500">& Education</span>
        </motion.h2>
      </div>

      {/* INTERACTIVE TIMELINE */}
      <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-10 space-y-8">
        {experienceData.map((item, index) => (
          <TimelineCard
            key={item.id}
            item={item}
            index={index}
            isExpanded={expandedId === item.id}
            onToggle={() =>
              setExpandedId(expandedId === item.id ? null : item.id)
            }
          />
        ))}
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  index,
  isExpanded,
  onToggle,
}: {
  item: TimelineItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = iconMap[item.category] || Briefcase;
  const isEdu = item.category === "Education";

  return (
    <motion.div
      // Ye id set karega jisse Navbar se "Education" click karne par yahan scroll ho
      id={item.isEducationAnchor ? "education" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative group scroll-mt-32"
    >
      {/* TIMELINE DOT */}
      <div
        className={`absolute -left-[35px] sm:-left-[51px] top-6 w-5 h-5 rounded-full border-4 border-[#030712] ${
          isEdu
            ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
            : "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
        }`}
      ></div>

      {/* CLICKABLE CARD HEADER */}
      <div
        onClick={onToggle}
        className={`p-6 sm:p-8 rounded-2xl bg-[#0a0f1c] border-2 cursor-pointer transition-all duration-300 ${
          isExpanded
            ? isEdu
              ? "border-emerald-500/50 shadow-[0_10px_30px_rgba(16,185,129,0.1)]"
              : "border-cyan-500/50 shadow-[0_10px_30px_rgba(6,182,212,0.1)]"
            : "border-slate-800 hover:border-slate-600 hover:shadow-[0_5px_20px_rgba(0,0,0,0.4)]"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg bg-slate-900 border ${isEdu ? "border-emerald-500/30 text-emerald-400" : "border-cyan-500/30 text-cyan-400"}`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-bold uppercase tracking-widest ${isEdu ? "text-emerald-400" : "text-cyan-400"}`}
            >
              {item.category}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {item.status && (
              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${isEdu ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"}`}
              >
                {item.status}
              </span>
            )}
            <span className="text-xs font-mono font-bold text-slate-500 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
              {item.duration}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-3">
              {item.role}
            </h3>
            <h4 className="text-sm font-bold text-slate-400 mt-1">
              {item.organization}
            </h4>
          </div>
          <button
            className={`p-2 rounded-full mt-3 bg-slate-900 border border-slate-800 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
          >
            <ChevronDown
              className={`w-5 h-5 ${isExpanded ? "text-cyan-400" : "text-slate-500"}`}
            />
          </button>
        </div>

        {/* EXPANDABLE DETAILS AREA */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-slate-800">
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  {item.shortDescription}
                </p>

                {/* Optional: CGPA for Education */}
                {item.cgpa && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg mb-6">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Current CGPA:
                    </span>
                    <span className="text-sm font-black text-white">
                      {item.cgpa}
                    </span>
                  </div>
                )}

                {/* Optional: Detail Bullets */}
                {item.details && item.details.length > 0 && (
                  <div className="mb-6 space-y-2">
                    <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">
                      Key Responsibilities / Impact
                    </h5>
                    {item.details.map((desc, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-300 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional: Technologies used */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mb-6">
                    <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">
                      Technologies / Academic Focus
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-slate-800 border border-slate-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional: Skills Strengthened */}
                {item.skills && item.skills.length > 0 && (
                  <div>
                    <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">
                      Skills Strengthened
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-[#030712] border border-slate-800 rounded-md"
                        >
                          <ChevronRight
                            className={`w-3 h-3 ${isEdu ? "text-emerald-500" : "text-cyan-500"}`}
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
