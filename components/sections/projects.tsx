"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch,
  ExternalLink,
  Code2,
  Server,
  X,
  ArrowRight,
  Lightbulb,
  ShieldAlert,
  Target,
  ShieldCheck,
  Lock,
  Cpu,
  Database,
  Network,
  Activity,
} from "lucide-react";
import { projectsData } from "@/content/projects-data";
import { Project } from "@/types/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto z-10 min-h-screen"
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
            Proof of Work
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight"
        >
          Engineering <span className="text-slate-500">Case Studies</span>
        </motion.h2>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isFeatured={index === 0}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isFeatured,
  onOpen,
}: {
  project: Project;
  index: number;
  isFeatured: boolean;
  onOpen: () => void;
}) {
  const isBackend =
    project.category === "Full Stack" ||
    project.category === "Backend Architecture";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col p-8 sm:p-10 rounded-3xl bg-[#0a0f1c] border-2 border-slate-800 transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] ${
        isFeatured
          ? "lg:col-span-2 lg:flex-row lg:items-center gap-10"
          : "col-span-1 gap-6"
      }`}
    >
      {/* LEFT CONTENT AREA */}
      <div
        className={`flex flex-col flex-grow ${isFeatured ? "lg:w-1/2" : ""}`}
      >
        <div className="flex justify-between items-center mb-6">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider border ${isBackend ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"}`}
          >
            {isBackend ? (
              <Server className="w-4 h-4" />
            ) : (
              <Code2 className="w-4 h-4" />
            )}
            {project.category}
          </div>
        </div>

        <h3
          className={`${isFeatured ? "text-3xl sm:text-4xl" : "text-2xl"} font-black text-white mb-4 group-hover:text-cyan-300 transition-colors leading-tight`}
        >
          {project.title}
        </h3>
        <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
          {project.shortDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-200 bg-slate-900 border border-slate-700 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT VISUAL & ACTION AREA (Gap is now completely filled with high-tech UI) */}
      <div
        className={`flex flex-col justify-between ${isFeatured ? "lg:w-1/2 lg:border-l-2 lg:border-slate-800 lg:pl-10 h-full py-2" : "border-t-2 border-slate-800 pt-6"}`}
      >
        {isFeatured && (
          <div className="hidden lg:flex flex-col gap-5 mb-8 w-full">
            {/* Panel 1: Security Protocol */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/10 blur-2xl rounded-full"></div>
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-4">
                <span className="flex items-center gap-2 tracking-widest">
                  <Lock className="w-3.5 h-3.5" /> SECURITY LAYER
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>{" "}
                  AES-256 ACTIVE
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2 shadow-inner">
                  <ShieldCheck className="w-4 h-4 text-cyan-500" /> Zero-Trust
                  RBAC
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2 shadow-inner">
                  <Database className="w-4 h-4 text-indigo-500" /> Encrypted DB
                </div>
              </div>
            </div>

            {/* Panel 2: Microservices Topology Map */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-5">
                <span className="flex items-center gap-2 tracking-widest">
                  <Network className="w-3.5 h-3.5" /> SYSTEM TOPOLOGY
                </span>
                <Activity className="w-3.5 h-3.5 animate-pulse" />
              </div>

              <div className="flex items-center justify-between relative px-2">
                {/* Connecting Line */}
                <div className="absolute left-6 right-6 top-1/2 h-[2px] bg-slate-700/50 -z-10 -translate-y-1/2 rounded-full border-t border-dashed border-slate-600"></div>

                {/* Node 1: Client */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-indigo-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    <Code2 className="w-4 h-4 text-slate-300" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">
                    React Client
                  </span>
                </div>

                {/* Node 2: Gateway */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] z-10 bg-[#0a0f1c]">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">
                    Eureka Gateway
                  </span>
                </div>

                {/* Node 3: Services */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <Server className="w-4 h-4 text-slate-300" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">
                    Microservices
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Button pinned to bottom */}
        <button
          onClick={onOpen}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 text-sm font-black uppercase tracking-wider hover:text-slate-950 hover:bg-cyan-400 transition-all cursor-pointer group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] mt-auto"
        >
          <span>Read Full Case Study</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#030712]/95 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0f1c] border-2 border-slate-700 rounded-2xl overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 scrollbar-hide"
      >
        <div className="sticky top-0 left-0 right-0 w-full flex justify-end p-6 z-30 bg-gradient-to-b from-[#0a0f1c] to-transparent pointer-events-none">
          <button
            onClick={onClose}
            className="pointer-events-auto p-3 bg-slate-900 text-slate-300 hover:text-white hover:bg-rose-500/20 hover:border-rose-500 rounded-full transition-all border border-slate-700 shadow-xl cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-8 pb-16 sm:px-16 pt-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-bold uppercase tracking-wider rounded border border-cyan-500/30">
                {project.category}
              </span>
              {project.myRole && (
                <span className="px-4 py-1.5 bg-slate-800 text-slate-200 text-sm font-bold rounded border border-slate-600">
                  Role: {project.myRole}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {project.problemStatement && (
                <section>
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
                    <Target className="w-6 h-6 text-rose-400" /> Problem
                    Statement
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed bg-slate-900/80 p-6 rounded-xl border-l-4 border-rose-500 font-medium">
                    {project.problemStatement}
                  </p>
                </section>
              )}
              {project.solution && (
                <section>
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3 uppercase tracking-wide">
                    <Lightbulb className="w-6 h-6 text-emerald-400" /> The
                    Solution
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed bg-slate-900/80 p-6 rounded-xl border-l-4 border-emerald-500 font-medium">
                    {project.solution}
                  </p>
                </section>
              )}
              {project.engineeringDecisions &&
                project.engineeringDecisions.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wide">
                      Engineering Decisions
                    </h3>
                    <div className="space-y-6">
                      {project.engineeringDecisions.map((dec, i) => (
                        <div
                          key={i}
                          className="p-6 bg-slate-900 border-2 border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors"
                        >
                          <h4 className="text-xl font-bold text-cyan-400 mb-3">
                            {dec.title}
                          </h4>
                          <p className="text-base text-slate-300 leading-relaxed font-medium">
                            {dec.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
            </div>
            <div className="space-y-10">
              <section>
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs font-bold text-white bg-slate-800 border-2 border-slate-700 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
              <div className="pt-8 border-t-2 border-slate-800 flex flex-col gap-4">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 border-2 ${link.type === "github" || link.type === "demo" ? "bg-cyan-500 text-slate-950 border-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]" : "bg-slate-900 text-cyan-400 border-slate-700 hover:border-cyan-500 hover:bg-slate-800"}`}
                  >
                    {link.type === "github" ? (
                      <GitBranch className="w-5 h-5" />
                    ) : (
                      <ExternalLink className="w-5 h-5" />
                    )}
                    {link.label
                      ? link.label
                      : link.type === "github"
                        ? "View Source Code"
                        : "Live Demo"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
