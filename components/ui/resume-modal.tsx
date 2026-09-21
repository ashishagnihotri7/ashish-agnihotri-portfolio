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
    // 'fixed', 'inset-0', 'flex', 'items-center', 'justify-center' isko hamesha screen ke center mein rakhega
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-hidden">
      {/* Box design - 'max-h-[90vh]' se ye screen se bada nahi hoga */}
      <div className="w-full max-w-5xl h-[85vh] bg-[#0a0f1c] border border-cyan-500/30 rounded-2xl relative shadow-[0_0_40px_rgba(6,182,212,0.3)] flex flex-col">
        {/* Header Area */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/80 shrink-0">
          <h3 className="text-lg sm:text-xl text-white font-bold flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" /> Ashish's Resume
          </h3>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Download Button */}
            <a
              href="/resume.pdf"
              download="Ashish_Agnihotri_Resume.pdf"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs sm:text-sm font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
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

        {/* PDF Viewer Area - 'flex-1' aur 'overflow-hidden' ensure karega ki scroll andar ho */}
        <div className="flex-1 w-full bg-slate-800/30 p-2 sm:p-4 overflow-hidden rounded-b-2xl">
          {/* Object tag kabhi-kabhi iframe se behtar render hota hai PDFs ke liye */}
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full h-full rounded-lg bg-white"
          >
            {/* Fallback agar PDF load na ho paye (Browser support issue) */}
            <div className="flex flex-col items-center justify-center h-full text-slate-400 p-4 text-center">
              <p className="mb-4">
                Unable to display PDF directly in this browser.
              </p>
              <a
                href="/resume.pdf"
                download="Ashish_Agnihotri_Resume.pdf"
                className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-bold"
              >
                Click here to Download
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
