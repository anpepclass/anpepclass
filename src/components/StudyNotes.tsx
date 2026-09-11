import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Check, 
  Clock, 
  Sparkles, 
  X, 
  Printer, 
  Share2,
  BookOpen
} from 'lucide-react';
import { studyNotesData } from '../data/studyNotesData';
import { StudyNote, SubjectType } from '../types';

export const StudyNotes: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<StudyNote | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('All');

  const handleDownload = (note: StudyNote, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDownloadToast(`Initiating download for: "${note.downloadFilename}"`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const handlePrint = () => {
    window.print();
  };

  const subjects: SubjectType[] = [
    'All',
    'Pharmacy Jurisprudence (Nepal Law)',
    'Pharmacology',
    'Pharmaceutics'
  ];

  const filteredNotes = selectedSubject === 'All'
    ? studyNotesData
    : studyNotesData.filter(n => n.subject === selectedSubject);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Toast message */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5 text-emerald-600" />
          ANPEP High-Yield Library
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Exam Blueprints & Revision Notes
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Carefully distilled summaries of the Nepal Pharmacy Council curriculum, national drug laws, and essential clinical charts ready to view and download.
        </p>
      </div>

      {/* Subject Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {subjects.map(sub => (
          <button
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedSubject === sub
                ? 'bg-emerald-700 text-white font-bold shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            onClick={() => setSelectedNote(note)}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 truncate">
                  {note.subject}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{note.readTime}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                {note.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                {note.summary}
              </p>

              {/* Sample points preview */}
              <ul className="space-y-1 pt-1 text-xs text-slate-600">
                {note.keyPoints.slice(0, 2).map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5 truncate">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span className="truncate">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono text-[11px]">{note.fileSize}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleDownload(note, e)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => setSelectedNote(note)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read Full Note</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note Reader Modal */}
      {selectedNote && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {selectedNote.subject}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  {selectedNote.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  title="Print Note"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors hidden sm:inline-flex"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDownload(selectedNote)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save PDF</span>
                </button>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed text-slate-700">
              <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/80 text-xs sm:text-sm text-emerald-950">
                <strong>Overview: </strong>
                <span>{selectedNote.summary}</span>
              </div>

              {/* Key Bullet Points */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Core Exam Concepts:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedNote.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Table */}
              {selectedNote.tableData && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    High-Yield Master Reference Table:
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                        <tr>
                          {selectedNote.tableData.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3 border-r border-slate-200 last:border-r-0">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {selectedNote.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/80">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 border-r border-slate-100 last:border-r-0 font-medium">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex items-center justify-between text-xs text-slate-500">
              <span>{selectedNote.lastUpdated}</span>
              <span className="font-semibold text-emerald-700">A.N. P.E.P Classes Academic Council</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
