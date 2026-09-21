// File: components/ui/quick-summary.tsx
import { X, FileText, CheckCircle2 } from "lucide-react";

export function QuickSummaryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-[#0a0f1c] border border-cyan-500/30 rounded-2xl p-8 relative shadow-[0_0_40px_rgba(6,182,212,0.15)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-red-400 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl text-white font-black mb-6 flex items-center gap-3">
          <FileText className="w-6 h-6 text-cyan-400" /> Executive Summary
        </h3>

        <div className="space-y-4 text-sm text-slate-300">
          <p>
            <span className="text-cyan-400 font-bold">Profile:</span> System
            Architect & Backend Developer from Bhopal, India.
          </p>
          <p>
            <span className="text-cyan-400 font-bold">Education:</span> B.Tech
            (IT) at OIST Bhopal (2028), CGPA: 7.33.
          </p>

          <div>
            <span className="text-cyan-400 font-bold block mb-1">
              Core Tech Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Microservices",
                "React.js",
                "MySQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-cyan-400 font-bold block mb-1">
              Key Projects:
            </span>
            <ul className="space-y-1 ml-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-cyan-500" /> Smart
                Document Management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-cyan-500" /> Employee
                Management System
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-cyan-500" /> Velvet Dusk
                Perfume (Co-Founder)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
