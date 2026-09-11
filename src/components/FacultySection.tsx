import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  Phone, 
  Sparkles, 
  Users, 
  Clock, 
  FileText,
  Star,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface FacultyMember {
  id: string;
  name: string;
  nepaliName: string;
  role: string;
  qualifications: string;
  specialties: string[];
  experience: string;
  studentsMentored: string;
  imageSrc: string;
  bio: string;
  coreSubjects: { name: string; focus: string }[];
  quote: string;
  keyContributions: string[];
}

interface FacultySectionProps {
  onOpenEnrollment: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onOpenEnrollment }) => {
  const [selectedTutor, setSelectedTutor] = useState<'all' | 'ashok' | 'sanjaya'>('all');
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'methodology'>('overview');

  const facultyList: FacultyMember[] = [
    {
      id: 'ashok',
      name: 'Ashok Kumar Gupta',
      nepaliName: 'अशोक कुमार गुप्ता',
      role: 'Senior Faculty & Lead Mentor — Pharmacology & Law',
      qualifications: 'M.Pharm / B.Pharm • Registered Pharmacist (NPC)',
      experience: '8+ Years Academic & NPC Licensure Mentorship',
      studentsMentored: '5,500+ Aspirants Mentored',
      imageSrc: '1789059142364.png',
      specialties: ['Pharmacology & Therapeutics', 'Nepal Drug Act 2035 & Jurisprudence', 'CBT Mock Elimination Techniques', 'Loksewa Preparation'],
      bio: 'Leading educator recognized across Nepal for transforming intricate pharmacology pathways into intuitive, memorable clinical frameworks. Spearheads high-yield MCQ analysis, Drug Act jurisprudence, and Loksewa pharmacy officer coaching.',
      coreSubjects: [
        { name: 'Pharmacology & Pharmacotherapeutics', focus: 'Autonomic, CNS, Antimicrobials, Adverse Drug Reactions & Pharmacokinetics' },
        { name: 'Pharmacy Jurisprudence', focus: 'Nepal Drug Act 2035, National Drug Policy 2051, Good Pharmacy Practice Codes' },
        { name: 'CBT Licensure Mock Strategy', focus: 'Speed-reading MCQs, elimination heuristics & time-management in CBT' },
        { name: 'Loksewa Pharmacy Officer Modules', focus: 'Nepal Public Service Commission syllabus and health management' }
      ],
      quote: 'Do not memorize drugs in isolation. When you understand the physiological receptor pathway, every mechanism, side effect, and contraindication clicks into place naturally.',
      keyContributions: [
        'Author of ANPEP High-Yield Pharmacology Quick-Recall Handbook',
        'Curated over 2,000+ verified Nepal Pharmacy Council CBT questions with clinical rationales',
        'Over 94% pass rate among students completing the 45-day mentor batch'
      ]
    },
    {
      id: 'sanjaya',
      name: 'Sanjaya Acharya',
      nepaliName: 'सञ्जय आचार्य',
      role: 'Senior Faculty & Academic Director — Pharmaceutics & Chemistry',
      qualifications: 'M.Pharm / B.Pharm • Registered Pharmacist (NPC)',
      experience: '7+ Years Industrial & Licensure Examination Training',
      studentsMentored: '5,000+ Aspirants Mentored',
      imageSrc: '1789059927901.png',
      specialties: ['Pharmaceutics & Biopharmaceutics', 'Medicinal Chemistry & SAR', 'Pharmacognosy & Indigenous Herbs', 'Hospital Compounding'],
      bio: 'Renowned authority on pharmaceutical formulations, medicinal chemistry mechanisms, and active phytochemical testing. Pioneer of ANPEP signature mnemonic systems that make complex chemistry formulas effortless to retain.',
      coreSubjects: [
        { name: 'Pharmaceutics & Biopharmaceutics', focus: 'Dosage Form Technology, Sterilization, Novel Drug Delivery & Dissolution Kinetics' },
        { name: 'Medicinal Chemistry & SAR', focus: 'Structure-Activity Relationships, Chemical Synthesis, Reagents & Nomenclature' },
        { name: 'Pharmacognosy & Phytochemistry', focus: 'Medicinal Plants of Nepal, Extraction Protocols, Alkaloid/Glycoside Spotting' },
        { name: 'Hospital & Clinical Pharmacy', focus: 'Sterile Compounding, Ward Round Dispensing, I.V. Admixtures & Quality Control' }
      ],
      quote: 'Formulation science and medicinal reagents shouldn’t feel intimidating. With structured mnemonic matrices and step-by-step logic, retention becomes second nature.',
      keyContributions: [
        'Creator of the ANPEP Smart Mnemonic Matrix for Alkaloids and Teratogens',
        'Expert guidance on CTEVT & University curriculum transitions for foreign graduates',
        'Delivered 300+ live problem-solving marathons for D.Pharm and B.Pharm license aspirants'
      ]
    }
  ];

  const displayedFaculty = selectedTutor === 'all' 
    ? facultyList 
    : facultyList.filter(f => f.id === selectedTutor);

  return (
    <div className="space-y-12 pb-12">
      {/* Hero / Header Section for Faculty */}
      <section className="bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-sky-900/40 shadow-xl relative overflow-hidden">
        {/* Background Subtle Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-400/30">
            <GraduationCap className="w-4 h-4 text-sky-400" />
            <span>Dedicated Academic Mentors & Council Specialists</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Learn Directly From Nepal’s Foremost Pharmacy Mentors
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Led by <strong className="text-sky-400">Ashok Kumar Gupta</strong> and <strong className="text-sky-400">Sanjaya Acharya</strong>, ANPEP Classes brings you rigorous, council-standard pedagogy designed to turn complex pharmaceutical science into guaranteed exam success.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black font-mono text-sky-400 block">10,000+</span>
              <span className="text-[11px] text-slate-300 font-medium">Students Trained</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400 block">94.8%</span>
              <span className="text-[11px] text-slate-300 font-medium">1st-Attempt Pass Rate</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black font-mono text-amber-300 block">15+ Yrs</span>
              <span className="text-[11px] text-slate-300 font-medium">Combined Experience</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black font-mono text-purple-400 block">100%</span>
              <span className="text-[11px] text-slate-300 font-medium">NPC Syllabus Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter / Selector Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight">
            Academic Leadership & Faculty Profiles
          </h3>
          <p className="text-xs text-slate-500">
            Click on a mentor profile below to explore their subject breakdown and teaching philosophy.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setSelectedTutor('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedTutor === 'all' 
                ? 'bg-white text-slate-900 shadow-xs' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Mentors ({facultyList.length})
          </button>
          <button
            onClick={() => setSelectedTutor('ashok')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedTutor === 'ashok' 
                ? 'bg-sky-600 text-white shadow-xs' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Ashok Kumar Gupta
          </button>
          <button
            onClick={() => setSelectedTutor('sanjaya')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedTutor === 'sanjaya' 
                ? 'bg-sky-600 text-white shadow-xs' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sanjaya Acharya
          </button>
        </div>
      </div>

      {/* Main Faculty Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {displayedFaculty.map((tutor) => (
          <div 
            key={tutor.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
          >
            {/* Card Header with Photo and Key Details */}
            <div className="p-6 sm:p-7 border-b border-slate-100 flex flex-col sm:flex-row gap-6 items-start">
              {/* Photo Frame */}
              <div className="relative shrink-0 mx-auto sm:mx-0">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-md border-2 border-sky-100 bg-slate-100 relative group">
                  <img
                    src={tutor.imageSrc}
                    alt={tutor.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback in case host cannot serve local asset in preview
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = tutor.id === 'ashok' 
                        ? 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600'
                        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
                </div>

                {/* Verified Faculty Badge */}
                <div className="absolute -bottom-2 -right-2 bg-sky-600 text-white p-1.5 rounded-full shadow-md border-2 border-white" title="Verified NPC Mentor">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Tutor Meta */}
              <div className="space-y-2 flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-800 text-[11px] font-bold border border-sky-200">
                  <Award className="w-3.5 h-3.5 text-sky-600" />
                  <span>{tutor.role.split('—')[1]?.trim() || 'Core Faculty'}</span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {tutor.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-nepali font-semibold mt-0.5">
                    {tutor.nepaliName}
                  </p>
                </div>

                <p className="text-xs text-sky-900 font-semibold">
                  {tutor.qualifications}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-slate-600">
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {tutor.experience}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2 py-1 rounded-md font-semibold">
                    <Users className="w-3 h-3 text-emerald-600" />
                    {tutor.studentsMentored}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio & Philosophy */}
            <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tutor.bio}
                </p>

                {/* Tutor's Signature Quote */}
                <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100 text-xs text-sky-950 italic relative">
                  <span className="font-bold block text-sky-800 not-italic uppercase text-[10px] tracking-wider mb-1">
                    Mentor's Advice to Licensure Candidates:
                  </span>
                  "{tutor.quote}"
                </div>

                {/* Core Syllabus Modules */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Core Subjects & Syllabus Focus:
                  </span>
                  <div className="space-y-2">
                    {tutor.coreSubjects.map((sub, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                        <span className="font-bold text-slate-900 block">
                          {sub.name}
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          {sub.focus}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Contributions */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    Pedagogical Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {tutor.keyContributions.map((kc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{kc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/9779769322912?text=${encodeURIComponent(`Hello ANPEP Classes, I have an academic question for ${tutor.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                    title={`Chat with ${tutor.name} Desk`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:anpep203@gmail.com?subject=${encodeURIComponent(`Academic Inquiry for ${tutor.name} - ANPEP Classes`)}`}
                    className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                    title={`Email ${tutor.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>anpep203@gmail.com</span>
                  </a>
                </div>

                <button
                  onClick={onOpenEnrollment}
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-sm transition-all active:scale-98"
                >
                  Join {tutor.name.split(' ')[0]}'s Batch →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Teaching Philosophy & Why Learn With Ashok & Sanjaya */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ANPEP Pedagogy Difference</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            How Our Tutors Ensure You Clear Your License on 1st Attempt
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            No rote-memorization without comprehension. Ashok Kumar Gupta and Sanjaya Acharya structured every lecture around the exact blueprint of the Nepal Pharmacy Council.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-black">
              01
            </div>
            <h4 className="text-base font-bold text-white">
              CBT Simulation & Trap Analysis
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tutors decode ambiguous question stems, distractors, and clinical exceptions that regularly appear in the Nepal Pharmacy Council computer-based tests.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
              02
            </div>
            <h4 className="text-base font-bold text-white">
              Smart Mnemonics & Memory Aids
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Eliminate memory fatigue with signature mnemonic tables for alkaloid tests, teratogenic drugs, schedules of Drug Act 2035, and antimicrobial classifications.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
              03
            </div>
            <h4 className="text-base font-bold text-white">
              1-on-1 Doubt Clearance & WhatsApp Desk
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Never get stuck on an MCQ rationale. Candidates can send doubts straight to the mentors’ dedicated desk (+977 9769322912) and receive audio/text explanations.
            </p>
          </div>
        </div>

        {/* Contact Banner Inside Section */}
        <div className="bg-sky-950/60 rounded-2xl p-6 border border-sky-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <OfficialLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />
            <div>
              <span className="text-sm font-bold text-white block">
                Have an academic query or need course counseling?
              </span>
              <span className="text-xs text-sky-300 block">
                Reach mentors directly at <strong className="text-white font-mono">anpep203@gmail.com</strong> or call <strong className="text-white font-mono">+977 9769322912</strong>
              </span>
            </div>
          </div>

          <button
            onClick={onOpenEnrollment}
            className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs sm:text-sm shrink-0 transition-colors shadow-md"
          >
            Register for Free Demo Class
          </button>
        </div>
      </section>
    </div>
  );
};
