"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap } from "lucide-react"; 
import { certificatesData } from "@/content/certificates-data";
import { Certificate } from "@/types/certificates";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-24 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto z-10 min-h-[80vh]"
    >
      {/* HEADER */}
      <div className="flex flex-col items-end text-right mb-16 border-r-4 border-amber-500 pr-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2 justify-end"
        >
          <span className="text-amber-400 font-mono text-sm font-bold uppercase tracking-[0.2em]">
            Verifications
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          Licenses & <span className="text-slate-500">Certifications</span>
        </motion.h2>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert, index) => (
          <CertificateCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
}

function CertificateCard({
  cert,
  index,
}: {
  cert: Certificate;
  index: number;
}) {
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case "Technical":
        return "text-cyan-400 border-cyan-500/30 bg-cyan-500/10";
      case "Hackathon & Events":
        return "text-rose-400 border-rose-500/30 bg-rose-500/10";
      default:
        return "text-amber-400 border-amber-500/30 bg-amber-500/10";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col p-6 sm:p-8 rounded-3xl bg-[#0a0f1c]/80 backdrop-blur-sm border-2 border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_15px_40px_rgba(245,158,11,0.1)] h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div
          className={`p-3 rounded-xl border ${getCategoryTheme(cert.category)} shadow-inner`}
        >
          {cert.category === "Technical" ? (
            <Zap className="w-6 h-6" />
          ) : (
            <Award className="w-6 h-6" />
          )}
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded border border-slate-700 text-slate-400 bg-slate-900">
          {cert.category}
        </span>
      </div>

      <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-amber-300 transition-colors">
        {cert.title}
      </h3>

      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-4 h-4 text-slate-500" />
        <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">
          {cert.issuer}
        </span>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium flex-grow">
        {cert.description}
      </p>

    
      {cert.verifyLink && (
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0a66c2] hover:text-[#004182] transition-colors bg-[#0a66c2]/10 py-2 px-3 rounded-lg w-fit border border-[#0a66c2]/30 hover:bg-[#0a66c2]/20"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          {cert.verifyText ? cert.verifyText : "View on LinkedIn"}
        </a>
      )}
    </motion.div>
  );
}
