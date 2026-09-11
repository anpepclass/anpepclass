import React from 'react';
import { 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ExternalLink,
  Youtube,
  Facebook,
  Smartphone
} from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenEnrollment: () => void;
  onOpenInstallModal?: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateTab, 
  onOpenEnrollment, 
  onOpenInstallModal,
  onOpenPrivacyPolicy
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-10 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <OfficialLogo className="w-14 h-14 shrink-0 drop-shadow-md" />
              <div>
                <span className="text-xl font-black tracking-tight text-white leading-none block">
                  ANPEP <span className="text-sky-400">CLASSES</span>
                </span>
                <span className="text-[11px] text-slate-300 font-semibold block mt-0.5">
                  ALL NEPAL PHARMACY EXAM PREPARATION
                </span>
                <span className="text-[11px] text-amber-300 font-nepali block">
                  फार्मेसी शिक्षामा नेपालकै उत्कृष्ट
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Nepal’s leading specialized educational academy for Nepal Pharmacy Council (NPC) License Examination (D.Pharm & B.Pharm) and Loksewa Aayog Pharmacy preparation.
            </p>

            <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-sky-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Statutory Government Registration:</span>
              </div>
              <p className="text-slate-400 text-[11px] font-mono leading-relaxed">
                Registered under Private Firm Registration Act, 2076 BS & Industrial Enterprises Act, 2076 BS (Reg. No: 12/082/083).
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academy Features
            </h4>
            <ul className="space-y-2 text-slate-400">
              {onOpenInstallModal && (
                <li>
                  <button 
                    onClick={onOpenInstallModal}
                    className="hover:text-emerald-300 text-emerald-400 font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Android App / Play Store</span>
                  </button>
                </li>
              )}
              <li>
                <button 
                  onClick={() => onNavigateTab('faculty')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-sky-400 font-semibold"
                >
                  <span>Faculty: Ashok & Sanjaya</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('cbt-exam')}
                  className="hover:text-white transition-colors"
                >
                  CBT Mock Simulator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('mnemonics')}
                  className="hover:text-white transition-colors"
                >
                  Smart Mnemonics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('study-notes')}
                  className="hover:text-white transition-colors"
                >
                  High-Yield Notes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('exam-guide')}
                  className="hover:text-white transition-colors"
                >
                  NPC Form Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('doubts')}
                  className="hover:text-white transition-colors"
                >
                  Doubt Clearance Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Preparation Batches
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigateTab('courses')}
                  className="hover:text-white transition-colors"
                >
                  D.Pharm NPC License
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('courses')}
                  className="hover:text-white transition-colors"
                >
                  B.Pharm NPC License
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('courses')}
                  className="hover:text-white transition-colors"
                >
                  Loksewa Pharmacy Officer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab('courses')}
                  className="hover:text-white transition-colors"
                >
                  15-Day Final Hour Crash
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenEnrollment}
                  className="text-sky-400 hover:text-sky-300 font-semibold"
                >
                  Book Free Demo Class →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Official Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Official Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+9779769322912" className="text-white hover:text-sky-300 font-mono font-bold">
                  +977 9769322912
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20have%20an%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300"
                >
                  WhatsApp: +977 9769322912
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Kathmandu, Bagmati Province, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-mono">www.anpepclasses.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:anpep203@gmail.com" className="hover:text-sky-300 font-mono transition-colors">
                  anpep203@gmail.com
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://youtube.com/@anpepclasses"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="ANPEP YouTube Tutorials"
              >
                <Youtube className="w-4 h-4 text-rose-500" />
              </a>
              <a
                href="https://facebook.com/anpepclasses"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="ANPEP Facebook Community"
              >
                <Facebook className="w-4 h-4 text-blue-500" />
              </a>
              <a
                href="https://online.nepalpharmacycouncil.org.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 ml-2 font-medium"
              >
                <span>NPC Council Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} A.N. P.E.P Classes. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {onOpenPrivacyPolicy && (
              <button
                onClick={onOpenPrivacyPolicy}
                className="hover:text-sky-400 text-slate-400 transition-colors underline underline-offset-2"
              >
                Privacy Policy & Terms
              </button>
            )}
            <p className="text-[11px] text-slate-400">
              ALL NEPAL PHARMACY EXAM PREPARATION • फार्मेसी शिक्षामा नेपालकै उत्कृष्ट
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
