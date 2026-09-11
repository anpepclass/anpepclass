import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  X,
  ExternalLink,
  Users,
  GraduationCap
} from 'lucide-react';
import { Header } from './components/Header';
import { NoticeTicker } from './components/NoticeTicker';
import { HeroBanner } from './components/HeroBanner';
import { MockExamSimulator } from './components/MockExamSimulator';
import { CourseCatalog } from './components/CourseCatalog';
import { MnemonicExplorer } from './components/MnemonicExplorer';
import { StudyNotes } from './components/StudyNotes';
import { NPCExamGuide } from './components/NPCExamGuide';
import { DoubtSolver } from './components/DoubtSolver';
import { FacultySection } from './components/FacultySection';
import { InstallAppModal } from './components/InstallAppModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { Footer } from './components/Footer';

import { noticesData } from './data/noticesData';
import { coursesData } from './data/coursesData';
import { mnemonicsData } from './data/mnemonicsData';
import { Course, OfficialNotice } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [selectedCourseForEnrollment, setSelectedCourseForEnrollment] = useState<Course | null>(null);
  const [activeNoticeDetail, setActiveNoticeDetail] = useState<OfficialNotice | null>(null);

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallNativePwa = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice: any) => {
        if (choice.outcome === 'accepted') {
          console.log('User accepted ANPEP Android app installation');
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleOpenEnrollmentWithCourse = (course: Course) => {
    setSelectedCourseForEnrollment(course);
    setIsEnrollmentOpen(true);
  };

  const handleOpenGeneralEnrollment = () => {
    setSelectedCourseForEnrollment(null);
    setIsEnrollmentOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      {/* Official NPC & Batch Notice Ticker */}
      <NoticeTicker 
        notices={noticesData} 
        onSelectNotice={(n) => setActiveNoticeDetail(n)} 
      />

      {/* Main App Navigation Bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenEnrollment={handleOpenGeneralEnrollment} 
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Main Content Render Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Hero Section with CBT preview & trust credentials */}
            <HeroBanner 
              onStartExam={() => {
                setActiveTab('cbt-exam');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreCourses={() => {
                setActiveTab('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreMnemonics={() => {
                setActiveTab('mnemonics');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Featured Preparation Batches Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    Admissions Open for Next Session
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Popular Exam Preparation Programs
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Structured batches with live interactive classes, full CBT mocks, and continuous mentor support.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold text-sm shrink-0"
                >
                  <span>View All 4 Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 2 Popular Batches Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coursesData.slice(0, 2).map((course) => (
                  <div 
                    key={course.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${course.tagColor}`}>
                          {course.tag}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {course.subtitle}
                      </p>

                      <ul className="space-y-1.5 pt-2 text-xs text-slate-700">
                        {course.features.slice(0, 3).map((f, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Batch Fee:</span>
                        <span className="text-xl font-extrabold font-mono text-slate-900">
                          NPR {course.discountedFeeNpr.toLocaleString()}
                        </span>
                      </div>
                      <button
                        onClick={() => handleOpenEnrollmentWithCourse(course)}
                        className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Meet Your Expert Faculty Mentors: Ashok Kumar Gupta & Sanjaya Acharya */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                      <span>Academic Leadership & Dedicated Mentors</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Learn Directly From Ashok Kumar Gupta & Sanjaya Acharya
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Our core faculty members are registered pharmacists with over 15 years of collective licensure mentoring experience across all 7 provinces of Nepal.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('faculty');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-bold text-xs sm:text-sm transition-colors group self-start md:self-auto"
                  >
                    <span>View Full Faculty Dossier</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* 2-Column Faculty Spotlight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Tutor 1: Ashok Kumar Gupta */}
                  <div className="rounded-2xl border border-slate-200 p-5 sm:p-6 bg-slate-50/70 hover:bg-slate-50 transition-all flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative shrink-0 mx-auto sm:mx-0">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-200">
                        <img
                          src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
                          alt="Ashok Kumar Gupta"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <span className="absolute -bottom-1.5 -right-1.5 p-1 rounded-full bg-sky-600 text-white shadow-xs" title="Verified NPC Faculty">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="space-y-2 flex-1 text-center sm:text-left">
                      <div>
                        <div className="inline-block px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                          Pharmacology & Jurisprudence Lead
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                          Ashok Kumar Gupta
                        </h3>
                        <p className="text-xs text-slate-500 font-nepali font-semibold">
                          अशोक कुमार गुप्ता
                        </p>
                      </div>

                      <p className="text-xs text-sky-900 font-semibold">
                        M.Pharm / B.Pharm • Registered Pharmacist
                      </p>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        Leading educator transforming intricate pharmacology pathways into intuitive clinical frameworks. Spearheads CBT MCQs and Nepal Drug Act 2035 jurisprudence.
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
                        <a
                          href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20have%20an%20inquiry%20for%20Ashok%20Kumar%20Gupta%20sir."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-[11px] font-bold inline-flex items-center gap-1 transition-colors"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp Desk</span>
                        </a>

                        <button
                          onClick={() => {
                            setActiveTab('faculty');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                        >
                          View Subjects & Bio →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tutor 2: Sanjaya Acharya */}
                  <div className="rounded-2xl border border-slate-200 p-5 sm:p-6 bg-slate-50/70 hover:bg-slate-50 transition-all flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative shrink-0 mx-auto sm:mx-0">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-200">
                        <img
                          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
                          alt="Sanjaya Acharya"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <span className="absolute -bottom-1.5 -right-1.5 p-1 rounded-full bg-sky-600 text-white shadow-xs" title="Verified NPC Faculty">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="space-y-2 flex-1 text-center sm:text-left">
                      <div>
                        <div className="inline-block px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                          Pharmaceutics & Chemistry Lead
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                          Sanjaya Acharya
                        </h3>
                        <p className="text-xs text-slate-500 font-nepali font-semibold">
                          सञ्जय आचार्य
                        </p>
                      </div>

                      <p className="text-xs text-sky-900 font-semibold">
                        M.Pharm / B.Pharm • Registered Pharmacist
                      </p>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        Authority on pharmaceutical formulations, medicinal chemistry mechanisms, and active phytochemical testing. Pioneer of ANPEP signature mnemonic systems.
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
                        <a
                          href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20have%20an%20inquiry%20for%20Sanjaya%20Acharya%20sir."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-[11px] font-bold inline-flex items-center gap-1 transition-colors"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp Desk</span>
                        </a>

                        <button
                          onClick={() => {
                            setActiveTab('faculty');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold transition-colors"
                        >
                          View Subjects & Bio →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Smart Mnemonics Showcase Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-gradient-to-r from-emerald-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Signature ANPEP Learning Method</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                      Never Forget High-Yield Pharmacy Concepts with Smart Mnemonics
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                      Our faculty crafts memorable rhymes and formulas for drug classifications, alkaloid chemical reagents, teratogens, and Nepal Drug Act 2035 schedules.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          setActiveTab('mnemonics');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all"
                      >
                        Explore Mnemonic Library
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab('cbt-exam');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
                      >
                        Test Yourself in CBT Exam
                      </button>
                    </div>
                  </div>

                  {/* Sample Mnemonic Display Box */}
                  <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3">
                    <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                      Anti-TB First-Line Drugs
                    </span>
                    <div className="text-2xl font-extrabold font-mono tracking-widest text-white">
                      R • I • P • E
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">
                      <strong>R</strong>ifampicin, <strong>I</strong>soniazid, <strong>P</strong>yrazinamide, <strong>E</strong>thambutol.
                    </p>
                    <div className="text-[11px] text-emerald-200 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                      Ethambutol is bacteriostatic; R, I, P are bactericidal.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Verified Student Success & Council Trust */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Trusted by Pharmacy Aspirants Across All 7 Provinces
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Join thousands of graduates from CTEVT, TU, KU, PU, and foreign universities who cleared their license exam on the 1st attempt.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="italic">
                      "The CBT Mock simulator on ANPEP was identical to the actual Nepal Pharmacy Council exam interface. The question rationale cleared all my doubts in pharmacology."
                    </p>
                    <div className="pt-1 font-bold text-slate-800">
                      — Sangita Thapa, D.Pharm (Licensed)
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="italic">
                      "I had studied B.Pharm in India and was nervous about the Nepal Drug Act 2035 and Loksewa formats. ANPEP high-yield notes and faculty guidance made it simple."
                    </p>
                    <div className="pt-1 font-bold text-slate-800">
                      — Prabin Shrestha, B.Pharm (Pharmacist)
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="italic">
                      "The 15-day Final Hour crash batch was the best decision. Memorizing alkaloid reagents and drug contraindications became effortless with their mnemonics."
                    </p>
                    <div className="pt-1 font-bold text-slate-800">
                      — Manish Karki, Assistant Batch
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tab: Faculty & Mentors Section */}
        {activeTab === 'faculty' && (
          <FacultySection onOpenEnrollment={handleOpenGeneralEnrollment} />
        )}

        {/* Tab 2: CBT Mock Exam Simulator */}
        {activeTab === 'cbt-exam' && (
          <MockExamSimulator onOpenEnrollment={handleOpenGeneralEnrollment} />
        )}

        {/* Tab 3: Courses & Batches */}
        {activeTab === 'courses' && (
          <CourseCatalog onSelectCourseForEnrollment={handleOpenEnrollmentWithCourse} />
        )}

        {/* Tab 4: Smart Mnemonics Explorer */}
        {activeTab === 'mnemonics' && (
          <MnemonicExplorer />
        )}

        {/* Tab 5: High-Yield Notes & Blueprint */}
        {activeTab === 'study-notes' && (
          <StudyNotes />
        )}

        {/* Tab 6: NPC Exam Guide & Form Assistance */}
        {activeTab === 'exam-guide' && (
          <NPCExamGuide />
        )}

        {/* Tab 7: Doubt Forum & Student Discussion */}
        {activeTab === 'doubts' && (
          <DoubtSolver />
        )}
      </main>

      {/* Persistent Floating WhatsApp / Quick Contact Widget */}
      <aside aria-label="Support contacts" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          href="tel:+9779769322912"
          title="Direct Call to ANPEP Classes"
          className="px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 border border-slate-700"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Call: +977 9769322912</span>
        </a>

        <a
          href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20want%20information%20about%20upcoming%20pharmacy%20batches."
          target="_blank"
          rel="noopener noreferrer"
          title="Direct WhatsApp with ANPEP Mentor"
          className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg shadow-emerald-700/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border border-emerald-400/40"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Mentor Desk</span>
        </a>
      </aside>

      {/* Notice Detail Modal */}
      {activeNoticeDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {activeNoticeDetail.category}
                </span>
                <p className="text-xs text-slate-400 mt-1 font-mono">{activeNoticeDetail.date}</p>
              </div>
              <button
                onClick={() => setActiveNoticeDetail(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-base font-extrabold text-slate-900">
              {activeNoticeDetail.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeNoticeDetail.content}
            </p>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setActiveNoticeDetail(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Android PWA & Play Store Guide Modal */}
      <InstallAppModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        deferredPrompt={deferredPrompt}
        onInstallNativePwa={handleInstallNativePwa}
      />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Admission / Demo Class Modal */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        preSelectedCourse={selectedCourseForEnrollment}
      />

      {/* Official Footer */}
      <Footer 
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenEnrollment={handleOpenGeneralEnrollment}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
      />
    </div>
  );
}
