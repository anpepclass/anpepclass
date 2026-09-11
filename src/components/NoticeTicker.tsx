import React, { useState } from 'react';
import { Bell, ChevronRight, X, AlertCircle } from 'lucide-react';
import { OfficialNotice } from '../types';

interface NoticeTickerProps {
  notices: OfficialNotice[];
  onSelectNotice?: (notice: OfficialNotice) => void;
}

export const NoticeTicker: React.FC<NoticeTickerProps> = ({ notices, onSelectNotice }) => {
  const [activeNoticeIndex, setActiveNoticeIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed || notices.length === 0) return null;

  const currentNotice = notices[activeNoticeIndex];

  const handleNext = () => {
    setActiveNoticeIndex((prev) => (prev + 1) % notices.length);
  };

  return (
    <aside aria-label="Official Announcements" className="bg-slate-900 text-slate-100 border-b border-slate-800 text-xs sm:text-sm py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold uppercase tracking-wider text-[10px] sm:text-xs border border-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            NPC Notice
          </span>
          <span className="hidden md:inline text-slate-400 font-mono text-[11px]">{currentNotice.date}</span>
        </div>

        <div className="flex-1 truncate text-center sm:text-left flex items-center gap-2">
          <span className="font-medium text-slate-200 truncate">
            {currentNotice.title}
          </span>
          {currentNotice.isImportant && (
            <span className="hidden sm:inline-flex items-center text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.2 rounded border border-rose-500/30 font-semibold">
              Urgent
            </span>
          )}
          {onSelectNotice && (
            <button
              onClick={() => onSelectNotice(currentNotice)}
              className="hidden lg:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-2 ml-2 transition-colors"
            >
              View details <ChevronRight className="w-3 h-3" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleNext}
            title="Next Notice"
            className="text-slate-400 hover:text-slate-200 px-1.5 py-0.5 rounded hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs"
          >
            <span className="font-mono">{activeNoticeIndex + 1}/{notices.length}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-slate-400 hover:text-slate-200 p-0.5 rounded hover:bg-slate-800 transition-colors"
            title="Dismiss Announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
