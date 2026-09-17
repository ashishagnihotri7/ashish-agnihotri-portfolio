"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Globe2, Target } from "lucide-react";
import { personalInfo } from "@/content/personal";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-10 lg:px-12 max-w-5xl mx-auto z-10"
    >
      <div className="flex flex-col items-start mb-12 border-l-4 border-indigo-500 pl-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="text-indigo-400 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            System Overview
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          About <span className="text-slate-500">The Architect</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 space-y-6 text-slate-300 text-lg leading-relaxed font-medium"
        >
          <p>
            I am a backend-focused Software Engineer with a deep interest in
            building resilient, scalable, and maintainable systems. Currently
            pursuing my B.Tech in Information Technology, I bridge the gap
            between robust backend logic and seamless frontend integration.
          </p>
          <p>
            My engineering foundation is built on{" "}
            <span className="text-white font-bold">
              Java, Spring Boot, and Microservices architecture
            </span>
            , complemented by hands-on full-stack exposure across the MERN
            stack. I don't just write code; I engineer solutions that optimize
            application efficiency and reduce technical debt.
          </p>
          <p>
            Beyond technical execution, my experience as a startup Co-Founder
            has wired me to think from a product perspective. I understand
            business requirements, customer relationships, and the importance of
            delivering value. I thrive in high-pressure environments and am
            known for my{" "}
            <span className="text-cyan-400 font-bold">rapid adaptability</span>
            —frequently mastering new technologies on the fly to meet strict
            internship deadlines.
          </p>
        </motion.div>

        {/* Core Traits Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4 grid grid-cols-1 gap-4"
        >
          <div className="p-5 rounded-2xl bg-[#0a0f1c] border-2 border-slate-800">
            <Cpu className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="text-white font-bold mb-1">Backend First</h4>
            <p className="text-sm text-slate-400">
              Deep focus on Java, Microservices & Data Structures.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#0a0f1c] border-2 border-slate-800">
            <Target className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="text-white font-bold mb-1">Rapid Learner</h4>
            <p className="text-sm text-slate-400">
              Proven ability to adapt to new tech stacks overnight.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#0a0f1c] border-2 border-slate-800">
            <Globe2 className="w-6 h-6 text-indigo-400 mb-3" />
            <h4 className="text-white font-bold mb-1">Product Mindset</h4>
            <p className="text-sm text-slate-400">
              Entrepreneurial background shaping technical decisions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
