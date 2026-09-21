// File: components/ui/resume-modal.tsx
import { X, Download, FileText } from "lucide-react";

export function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    // z-[9999] ensure karega ki ye navbar ke bhi upar dikhe
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-6">
      {/* Box ki height aur width screen ke hisab se set ki hai */}
      <div className="w-full max-w-5xl h-[90vh] bg-[#0a0f1c] border border-cyan-500/30 rounded-2xl relative shadow-[0_0_40px_rgba(6,182,212,0.3)] flex flex-col overflow-hidden">
        {/* Header - Download aur Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/80">
          <h3 className="text-lg sm:text-xl text-white font-bold flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" /> Ashish's Resume
          </h3>
          <div className="flex items-center gap-3">
            {/* Download Button */}
            <a
              href="/resume.pdf"
              download="Ashish_Agnihotri_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <Download className="w-4 h-4" />{" "}
              <span className="hidden sm:inline">Download</span>
            </a>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Area */}
        <div className="flex-1 w-full bg-slate-800/30 p-2 sm:p-4">
          <iframe
            src="/resume.pdf"
            className="w-full h-full rounded-xl border border-slate-700 bg-white"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}
