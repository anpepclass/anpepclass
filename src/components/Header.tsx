import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Sparkles, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  ShieldCheck,
  ChevronDown,
  Phone,
  Mail,
  Smartphone
} from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenEnrollment: () => void;
  onOpenInstallModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenEnrollment, onOpenInstallModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'faculty', label: 'Faculty & Tutors' },
    { id: 'cbt-exam', label: 'CBT Mock Exam', badge: 'Interactive' },
    { id: 'courses', label: 'Courses & Batches' },
    { id: 'mnemonics', label: 'Smart Mnemonics' },
    { id: 'study-notes', label: 'High-Yield Notes' },
    { id: 'exam-guide', label: 'NPC Exam Guide' },
    { id: 'doubts', label: 'Doubt Forum' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro bar for statutory registration verification */}
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 sm:px-6 text-[11px] text-slate-300 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-sky-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              Govt. Reg. No. 12/082/083
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              ALL NEPAL PHARMACY EXAM PREPARATION
            </span>
            <span className="hidden lg:inline text-amber-300 font-nepali">
              (फार्मेसी शिक्षामा नेपालकै उत्कृष्ट)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="mailto:anpep203@gmail.com" 
              className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-sky-300 font-mono text-[10px] sm:text-[11px]"
            >
              <Mail className="w-3 h-3 text-sky-400" />
              anpep203@gmail.com
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a 
              href="tel:+9779769322912" 
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white font-mono font-semibold"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              +977 9769322912
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20want%20information%20about%20pharmacy%20preparation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp / Viber Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-hidden group"
        >
          <div className="relative">
            <OfficialLogo className="w-13 h-13 drop-shadow-sm group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                ANPEP <span className="text-sky-600">CLASSES</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
                Official
              </span>
            </div>
            <p className="text-xs text-slate-600 font-semibold tracking-normal mt-0.5">
              All Nepal Pharmacy Exam Preparation
            </p>
            <p className="text-[10px] text-sky-700 font-medium font-nepali">
              फार्मेसी शिक्षामा नेपालकै उत्कृष्ट
            </p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                  isActive
                    ? 'text-sky-700 bg-sky-50 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-200">
                      {item.badge}
                    </span>
                  )}
                </div>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-sky-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onOpenInstallModal && (
            <button
              onClick={onOpenInstallModal}
              className="px-3 py-2 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 shadow-2xs"
              title="Install Mobile App / Google Play Guide"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Android App</span>
            </button>
          )}

          <a
            href="tel:+9779769322912"
            className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            title="Call ANPEP Classes"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-mono">9769322912</span>
          </a>

          <button
            onClick={() => handleNavClick('cbt-exam')}
            className="px-3.5 py-2 rounded-lg text-xs font-bold text-sky-800 bg-sky-50 border border-sky-300 hover:bg-sky-100 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Practice CBT</span>
          </button>
          
          <button
            onClick={onOpenEnrollment}
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm shadow-sky-600/20 transition-all flex items-center gap-1.5 active:scale-98"
          >
            <span>Book Free Demo</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1 shadow-lg animate-in fade-in duration-150">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === item.id
                  ? 'bg-sky-50 text-sky-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {onOpenInstallModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInstallModal();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>Install Android App / Play Store</span>
              </button>
            )}
            <a
              href="tel:+9779769322912"
              className="w-full py-2 text-center text-sm font-bold text-slate-800 bg-slate-100 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              Direct Call: +977 9769322912
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs"
            >
              Book Free Demo / Enroll Now
            </button>
            <a
              href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20want%20information%20about%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              WhatsApp / Viber: 9769322912
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
