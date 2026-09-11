import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  Bookmark, 
  BookOpen, 
  Zap, 
  HelpCircle,
  RotateCw,
  Tag
} from 'lucide-react';
import { mnemonicsData } from '../data/mnemonicsData';
import { MnemonicCard, SubjectType } from '../types';

export const MnemonicExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

  const subjects: SubjectType[] = [
    'All',
    'Pharmacology',
    'Pharmaceutics',
    'Pharmacognosy',
    'Biopharmaceutics & Pharmacokinetics',
    'Pharmacy Jurisprudence (Nepal Law)'
  ];

  const handleCopyMnemonic = (item: MnemonicCard) => {
    const textToCopy = `${item.title}\nMnemonic: ${item.mnemonic}\n${item.breakdown.map(b => `${b.letter} = ${b.standsFor} (${b.note || ''})`).join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleToggleReveal = (id: string) => {
    setRevealedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredMnemonics = mnemonicsData.filter(item => {
    const matchesSubject = selectedSubject === 'All' || item.subject === selectedSubject;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      item.title.toLowerCase().includes(q) ||
      item.mnemonic.toLowerCase().includes(q) ||
      item.clinicalSignificance.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q));
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          ANPEP Signature Feature
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Smart Pharmacy Mnemonics & Tricks
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Never confuse adverse reactions, drug classifications, or chemical tests again. Memorize high-yield concepts in seconds with ANPEP Classes tested rhymes and memory tricks.
        </p>
      </div>

      {/* Search and Subject Filters */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mnemonics, drugs, reagents (e.g., 'TB', 'CYP450', 'Alkaloids', 'Capping')..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-2xs"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSubject === sub
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredMnemonics.map((card) => {
          const isBookmarked = bookmarkedIds.has(card.id);
          const isRevealed = revealedIds.has(card.id);

          return (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-4 relative"
            >
              {/* Card Top */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 truncate">
                    {card.subject}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopyMnemonic(card)}
                      title="Copy Mnemonic"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      {copiedId === card.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => handleToggleBookmark(card.id)}
                      title="Save to My Notes"
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked
                          ? 'text-amber-500 hover:text-amber-600'
                          : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {card.title}
                </h3>

                {/* Primary Mnemonic Box */}
                <div className="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider block">
                      Memory Trick Formula:
                    </span>
                    <span className="text-lg font-mono font-extrabold text-emerald-950 tracking-wider">
                      {card.mnemonic}
                    </span>
                  </div>
                  <button
                    onClick={() => handleToggleReveal(card.id)}
                    className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold underline flex items-center gap-1"
                  >
                    <RotateCw className="w-3 h-3" />
                    <span>{isRevealed ? 'Hide' : 'Inspect'}</span>
                  </button>
                </div>

                {/* Breakdown List */}
                <div className="space-y-1.5 pt-1">
                  {card.breakdown.map((item, bIdx) => (
                    <div 
                      key={bIdx}
                      className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs flex items-start gap-2"
                    >
                      <span className="w-6 h-6 rounded bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">
                        {item.letter}
                      </span>
                      <div className="truncate">
                        <strong className="text-slate-800 font-semibold">{item.standsFor}</strong>
                        {item.note && (
                          <p className="text-[11px] text-slate-500 truncate">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clinical Significance */}
                <div className="text-[11px] text-slate-600 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60 leading-relaxed">
                  <strong className="text-amber-950">Exam Focus: </strong>
                  <span>{card.clinicalSignificance}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                {card.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredMnemonics.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-700">No mnemonics matched your search query.</p>
          <p className="text-xs text-slate-500">Try searching for broader terms like "Pharmacology", "Drug", or "Tablets".</p>
        </div>
      )}
    </div>
  );
};
