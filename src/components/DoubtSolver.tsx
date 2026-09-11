import React, { useState } from 'react';
import { 
  MessageSquare, 
  ThumbsUp, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  Filter, 
  User, 
  Clock,
  HelpCircle
} from 'lucide-react';
import { doubtsData } from '../data/noticesData';
import { DoubtItem, SubjectType } from '../types';

export const DoubtSolver: React.FC = () => {
  const [doubts, setDoubts] = useState<DoubtItem[]>(doubtsData);
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('All');
  const [isAsking, setIsAsking] = useState(false);

  // New doubt form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newSubject, setNewSubject] = useState<SubjectType>('Pharmacology');
  const [submitSuccessToast, setSubmitSuccessToast] = useState(false);

  const handleUpvote = (id: string) => {
    setDoubts(prev => prev.map(d => {
      if (d.id === id) {
        return { ...d, upvotes: d.upvotes + 1 };
      }
      return d;
    }));
  };

  const handlePostDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAuthor.trim()) return;

    const newDoubtItem: DoubtItem = {
      id: `dbt-custom-${Date.now()}`,
      author: newAuthor,
      role: 'Student, Nepal',
      avatarLetter: newAuthor.charAt(0).toUpperCase() || 'S',
      question: newQuestion,
      subject: newSubject,
      upvotes: 1,
      hasVerifiedFacultyAnswer: true,
      facultyAnswer: {
        facultyName: 'ANPEP Faculty Desk',
        facultyTitle: 'Academic Mentor, ANPEP Classes',
        answer: 'Thank you for your question! In Nepal Pharmacy Council licensing exams, this topic is frequently evaluated. Review the corresponding section in our High-Yield notes or join the evening live doubt discussion session.',
        answeredAt: 'Just now'
      },
      tags: [newSubject, 'Community Query'],
      date: 'Just now'
    };

    setDoubts([newDoubtItem, ...doubts]);
    setNewAuthor('');
    setNewQuestion('');
    setIsAsking(false);
    setSubmitSuccessToast(true);
    setTimeout(() => setSubmitSuccessToast(false), 3500);
  };

  const subjects: SubjectType[] = [
    'All',
    'Pharmacology',
    'Pharmaceutics',
    'Pharmacy Jurisprudence (Nepal Law)'
  ];

  const filteredDoubts = selectedSubject === 'All'
    ? doubts
    : doubts.filter(d => d.subject === selectedSubject);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Toast */}
      {submitSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-800 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>Your question has been posted to ANPEP Mentor Desk!</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            ANPEP Mentorship Desk
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pharmacy Doubts & Discussion Forum
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Real questions asked by licensing aspirants, resolved by verified pharmacy educators.
          </p>
        </div>

        <button
          onClick={() => setIsAsking(!isAsking)}
          className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors shrink-0 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>{isAsking ? 'Cancel Query' : 'Ask Faculty a Doubt'}</span>
        </button>
      </div>

      {/* Ask Form Drawer */}
      {isAsking && (
        <form onSubmit={handlePostDoubt} className="bg-white rounded-2xl border border-emerald-300 p-6 shadow-md space-y-4 animate-in fade-in duration-200">
          <h3 className="text-base font-bold text-slate-900">Post Your Academic Query</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="e.g. Anish Koirala"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Subject Area</label>
              <select
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value as SubjectType)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden bg-white"
              >
                <option value="Pharmacology">Pharmacology</option>
                <option value="Pharmaceutics">Pharmaceutics</option>
                <option value="Pharmacognosy">Pharmacognosy</option>
                <option value="Pharmacy Jurisprudence (Nepal Law)">Pharmacy Jurisprudence (Nepal Law)</option>
                <option value="Hospital & Clinical Pharmacy">Hospital & Clinical Pharmacy</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Your Question / Doubt</label>
            <textarea
              required
              rows={3}
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Describe your doubt in detail (e.g. difference between mechanisms, legal schedules, or confusing questions)..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAsking(false)}
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit to Faculty</span>
            </button>
          </div>
        </form>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {subjects.map(sub => (
          <button
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedSubject === sub
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Doubts List */}
      <div className="space-y-5">
        {filteredDoubts.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            {/* Question Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm shrink-0">
                  {item.avatarLetter}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{item.author}</span>
                    <span className="text-[11px] text-slate-400">• {item.role}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.2 rounded border border-emerald-200 mt-1 inline-block">
                    {item.subject}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleUpvote(item.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                title="Helpful question"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>{item.upvotes}</span>
              </button>
            </div>

            {/* Question Text */}
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
              {item.question}
            </p>

            {/* Faculty Verified Answer Box */}
            {item.hasVerifiedFacultyAnswer && item.facultyAnswer && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{item.facultyAnswer.facultyName}</span>
                    <span className="text-[11px] font-normal text-slate-500">
                      ({item.facultyAnswer.facultyTitle})
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">{item.facultyAnswer.answeredAt}</span>
                </div>
                <p>{item.facultyAnswer.answer}</p>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1 text-[10px] text-slate-500">
              {item.tags.map((t, idx) => (
                <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded font-mono">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
