import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  PlayCircle, 
  CheckCircle2, 
  Users, 
  Award, 
  FileCheck2,
  Clock,
  BookOpen,
  Phone,
  MessageCircle
} from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface HeroBannerProps {
  onStartExam: () => void;
  onExploreCourses: () => void;
  onExploreMnemonics: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartExam,
  onExploreCourses,
  onExploreMnemonics
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-slate-50 to-white pt-8 pb-14 border-b border-slate-200/80">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Official Institution Seal Banner */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white border border-sky-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <OfficialLogo className="w-16 h-16 sm:w-18 sm:h-18 drop-shadow-md shrink-0" />
            <div className="space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  ALL NEPAL PHARMACY EXAM PREPARATION
                </span>
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  ANPEP CLASSES
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-sky-800 font-nepali">
                फार्मेसी शिक्षामा नेपालकै उत्कृष्ट
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                Regd. No. 12/082/083 • Kathmandu, Nepal • www.anpepclasses.com
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+9779769322912"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-mono flex items-center gap-2 shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+977 9769322912</span>
            </a>
            <a
              href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20want%20to%20inquire%20about%20license%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-950 text-xs font-semibold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-sky-700" />
              <span>Govt. Regd. 12/082/083 (Private Firm Reg. Act 2076 BS)</span>
              <span className="w-1 h-1 rounded-full bg-sky-400" />
              <span className="text-sky-700 font-bold">Kathmandu, Nepal</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Master the <span className="text-sky-700">Nepal Pharmacy Council</span> License & Loksewa Exams.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                Exam-focused live mentorship, computer-based CBT test simulators, past 10-year question discussions, and the signature <strong>ANPEP Smart Memorization Tricks</strong> for D.Pharm & B.Pharm graduates.
              </p>
            </div>

            {/* Quick Key Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>NPC CBT Software Replica Interface</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Smart Drug Classification Mnemonics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Nepal Drug Act 2035 & Jurisprudence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Online Form Filling Assistance & Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartExam}
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm sm:text-base shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all flex items-center gap-2.5 group active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>Start Free CBT Mock Test</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCourses}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-2xs hover:border-slate-400 transition-all flex items-center gap-2 active:scale-98"
              >
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span>View Batches & Fees</span>
              </button>

              <button
                onClick={onExploreMnemonics}
                className="px-4 py-3.5 rounded-xl text-sky-800 hover:text-sky-900 font-semibold text-sm transition-colors flex items-center gap-1.5"
              >
                <span>Smart Mnemonics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Mock Simulation Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-5 sm:p-6 space-y-5 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-sky-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    ANPEP CBT Exam Engine
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                  Timer: 15:00 Mins
                </span>
              </div>

              {/* Sample Question Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Question 01 of 15</span>
                  <span className="text-sky-700 font-semibold">Pharmacology & Toxicology</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  What is the specific life-saving antidote for acute paracetamol (acetaminophen) poisoning?
                </p>

                {/* Options preview */}
                <div className="space-y-2 pt-1">
                  <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 text-xs font-medium text-slate-700 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[11px] font-bold text-slate-600">A</span>
                    <span>Naloxone hydrochloride</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-sky-500 bg-sky-50 text-xs font-semibold text-sky-900 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[11px] font-bold">B</span>
                      <span>N-Acetylcysteine (NAC)</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 text-xs font-medium text-slate-700 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[11px] font-bold text-slate-600">C</span>
                    <span>Flumazenil</span>
                  </div>
                </div>
              </div>

              {/* Instant rationale callout */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">ANPEP Rationale:</strong> NAC replenishes hepatic glutathione stores, neutralizing the toxic metabolite NAPQI safely.
              </div>

              {/* Start Simulator action inside preview */}
              <button
                onClick={onStartExam}
                className="w-full py-2.5 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Launch Full 15-Question Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Numbers Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">96.4%</div>
            <p className="text-xs text-slate-500 font-medium">NPC License Pass Rate</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">3,500+</div>
            <p className="text-xs text-slate-500 font-medium">Graduates Across Nepal</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">30+</div>
            <p className="text-xs text-slate-500 font-medium">CBT Mock Exams & PYQs</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-700 font-mono">#1</div>
            <p className="text-xs text-slate-500 font-medium">Ranked Pharmacy Academy</p>
          </div>
        </div>
      </div>
    </section>
  );
};
