import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'course-dpharm-license',
    title: 'NPC License Preparation (D.Pharm / Pharmacy Assistant)',
    subtitle: 'Comprehensive preparation tailored strictly to the official Nepal Pharmacy Council syllabus & CBT exam pattern',
    targetExam: 'NPC D.Pharm License',
    tag: 'Flagship Batch',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    duration: '2.5 Months (75 Days)',
    dailyHours: '2 Hours Daily (Live + Recorded)',
    batchTimes: ['Morning: 6:30 AM - 8:30 AM', 'Evening: 6:00 PM - 8:00 PM'],
    regularFeeNpr: 8500,
    discountedFeeNpr: 6500,
    features: [
      'Complete coverage of 8 Core NPC Subjects',
      'Daily 50+ MCQ Practice Drills with explanations',
      'High-Yield Smart Mnemonics by senior faculty',
      '30+ Full Length CBT Mock Tests',
      'Discussion on Past 10 Years Questions (PYQs)',
      'Free PDF Quick Revision Notes & formula charts',
      'Full guidance for NPC Online Exam Form & Document Verification'
    ],
    syllabusHighlight: [
      'Pharmacology & Toxicology',
      'Pharmaceutics & Hospital Pharmacy',
      'Pharmacognosy & Indigenous Drugs of Nepal',
      'Nepal Drug Act 2035 & Pharmacy Jurisprudence',
      'Clinical Pharmacy & Dispensing Practice'
    ],
    nextBatchDate: 'Starting Next Monday (Morning & Evening)',
    seatsRemaining: 14,
    rating: 4.9,
    enrolledStudentsCount: 1480,
    isPopular: true
  },
  {
    id: 'course-bpharm-license',
    title: 'NPC License Masterclass (B.Pharm / Pharmacist)',
    subtitle: 'In-depth conceptual mastery for Bachelor of Pharmacy graduates targeting 1st attempt success in NPC Pharmacist Licensure',
    targetExam: 'NPC B.Pharm License',
    tag: 'Degree Special',
    tagColor: 'bg-blue-100 text-blue-800 border-blue-300',
    duration: '3 Months (90 Days)',
    dailyHours: '2.5 Hours Daily',
    batchTimes: ['Morning: 6:00 AM - 8:30 AM', 'Night: 7:30 PM - 10:00 PM'],
    regularFeeNpr: 11000,
    discountedFeeNpr: 8500,
    features: [
      'Advanced Biopharmaceutics & Pharmacokinetics',
      'Medicinal Chemistry Structure-Activity Relationships (SAR)',
      'Therapeutic Drug Monitoring (TDM) & Clinical Case Studies',
      'Formulation Science & Industrial Pharmacy QC/QA',
      'Nepal Drug Policy 2051 & National Health Directives',
      'Computer-Based CBT Test Engine Simulator',
      '1-on-1 Faculty Mentorship & Doubt Resolution'
    ],
    syllabusHighlight: [
      'Industrial Pharmacy & Novel Drug Delivery',
      'Clinical Pharmacy & Pharmacotherapeutics',
      'Biopharmaceutics, Bioavailability & Bioequivalence',
      'Pharmaceutical Analysis & Spectroscopy',
      'National Health Policies & Drug Regulations'
    ],
    nextBatchDate: 'Registration Open for Upcoming NPC Session',
    seatsRemaining: 9,
    rating: 4.95,
    enrolledStudentsCount: 920,
    isPopular: false
  },
  {
    id: 'course-loksewa-psc',
    title: 'Loksewa Aayog Pharmacy Preparation (Federal & Provincial)',
    subtitle: 'Targeted course for 5th Level Pharmacy Assistant and 7th/8th Level Pharmacy Officer exams across all 7 provinces',
    targetExam: 'Loksewa PSC',
    tag: 'Govt. Job Focus',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
    duration: '3 Months',
    dailyHours: '2 Hours Daily',
    batchTimes: ['Evening: 6:30 PM - 8:30 PM'],
    regularFeeNpr: 10000,
    discountedFeeNpr: 7500,
    features: [
      'Specialized curriculum for Bagmati, Gandaki, Koshi, Lumbini & Federal',
      'Health Systems & Public Health Management in Nepal',
      'Nepal Essential Medicines List & Standard Treatment Guidelines (STG)',
      'Procurement Acts (PPA), DDA guidelines & Supply Chain Management',
      'Subjective Answer Writing skills & Objective MCQ mastery',
      'Interview preparation sessions by serving government officers'
    ],
    syllabusHighlight: [
      'Government Health Structure & Organogram of Nepal',
      'Procurement, Storage & Logistics of Pharmaceuticals',
      'Essential Drug List & National Formulary',
      'Subjective Descriptive Paper Analysis',
      'Recent amendments in Public Health Act'
    ],
    nextBatchDate: 'New Batch Commencing This Week',
    seatsRemaining: 18,
    rating: 4.88,
    enrolledStudentsCount: 760,
    isPopular: false
  },
  {
    id: 'course-final-hour-crash',
    title: 'Final Hour Rapid Revision & High-Yield CBT Test Series',
    subtitle: 'High-intensity 15-day crash program focusing exclusively on previous year repeated questions, smart mnemonics, and exam tricks',
    targetExam: 'Crash Revision',
    tag: 'Exam Special',
    tagColor: 'bg-rose-100 text-rose-800 border-rose-300',
    duration: '15 Days Intensive',
    dailyHours: '3 Hours Daily (Rapid Fire)',
    batchTimes: ['Morning: 7:00 AM - 10:00 AM', 'Evening: 5:00 PM - 8:00 PM'],
    regularFeeNpr: 4500,
    discountedFeeNpr: 3200,
    features: [
      'Rapid fire revision of 2,000+ most repeated questions',
      '50+ High-Yield Drug Classification Mnemonics & Charts',
      'Daily 1 Full-Length CBT Mock Exam with live analysis',
      'Elimination technique & smart guesswork strategy for negative marking',
      'Summary sheet of Nepal Drug Act 2035 & vital schedules',
      'Dedicated WhatsApp VIP doubt clearing group'
    ],
    syllabusHighlight: [
      'Top 500 Most Repeated Pharmacology MCQs',
      'Must-Know Pharmacognosy Chemical Tests',
      'Quick Dose & Unit Conversion Formulas',
      'Nepal Pharmacy Council Exam Night Strategy'
    ],
    nextBatchDate: 'Immediate Access (Recorded + Live Night Sessions)',
    seatsRemaining: 6,
    rating: 4.96,
    enrolledStudentsCount: 2350,
    isPopular: true
  }
];
