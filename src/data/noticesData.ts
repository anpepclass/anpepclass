import { OfficialNotice, DoubtItem } from '../types';

export const noticesData: OfficialNotice[] = [
  {
    id: 'not-01',
    date: '2082 Bhadra 15',
    title: 'Nepal Pharmacy Council (NPC) License Examination Form Notice',
    category: 'NPC Update',
    isImportant: true,
    linkText: 'Check Eligibility & Documents Checklist',
    content: 'The Nepal Pharmacy Council has officially published the schedule for the upcoming Pharmacist and Pharmacy Assistant Name Registration Examination. Online applications are accepted via the NPC portal (online.nepalpharmacycouncil.org.np). Students are advised to verify their character certificates, CTEVT/University transcripts, and citizenship copy beforehand.'
  },
  {
    id: 'not-02',
    date: '2082 Bhadra 12',
    title: 'New Final Hour Rapid Fire Batch Commencing at ANPEP Classes',
    category: 'Batch Alert',
    isImportant: true,
    linkText: 'Register with 25% Early Bird Discount',
    content: 'ANPEP Classes announces its renowned 15-day Final Hour Revision Batch for candidates appearing in the next NPC CBT examination. Daily live rapid question-solving, 50+ smart mnemonics, and 10 full simulated mock tests are included. Morning (6:30 AM) and Evening (6:00 PM) shifts available.'
  },
  {
    id: 'not-03',
    date: '2082 Bhadra 05',
    title: 'Free All-Nepal Pharmacy CBT Mock Exam Open for All Students',
    category: 'Exam Schedule',
    isImportant: false,
    content: 'Test your readiness with ANPEP Classes All-Nepal Grand Mock Test simulating the exact Nepal Pharmacy Council CBT software interface. Live ranking and subject-wise score analytics provided upon completion.'
  },
  {
    id: 'not-04',
    date: '2082 Shrawan 28',
    title: 'Gandaki and Bagmati Province Loksewa Pharmacy Assistant Exam Update',
    category: 'Result',
    isImportant: false,
    content: 'Provincial Public Service Commissions have updated the examination calendar for Health Service Pharmacy Group 5th Level Assistant posts. Students enrolled in our Loksewa special batch can access updated General Health GK and STG modules.'
  }
];

export const doubtsData: DoubtItem[] = [
  {
    id: 'dbt-01',
    author: 'Pooja Shrestha',
    role: 'D.Pharm Graduate, Kathmandu',
    avatarLetter: 'P',
    question: 'Why is Naloxone given via IV/IM and not orally in acute opioid poisoning, even though oral tablets exist?',
    subject: 'Pharmacology',
    upvotes: 34,
    hasVerifiedFacultyAnswer: true,
    facultyAnswer: {
      facultyName: 'Dr. A. N. Chaudhary (Pharm.D)',
      facultyTitle: 'Lead Pharmacology Mentor, ANPEP Classes',
      answer: 'Naloxone undergoes extensive first-pass hepatic metabolism (nearly 98% cleared before reaching systemic circulation when given orally). In an acute medical emergency like morphine or heroin induced respiratory depression, immediate systemic bioavailability is required to dislodge opioids from mu (μ) receptors in the brainstem. Hence IV, IM, or intranasal routes are essential.',
      answeredAt: '1 day ago'
    },
    tags: ['Opioid Crisis', 'First-Pass Effect', 'Antidote'],
    date: 'Yesterday'
  },
  {
    id: 'dbt-02',
    author: 'Bikash Adhikari',
    role: 'B.Pharm Graduate, Pokhara',
    avatarLetter: 'B',
    question: 'In Nepal Drug Act 2035, can a Category Kha (ख) medicine ever be dispensed without an authorized registered doctor prescription?',
    subject: 'Pharmacy Jurisprudence (Nepal Law)',
    upvotes: 28,
    hasVerifiedFacultyAnswer: true,
    facultyAnswer: {
      facultyName: 'Prof. Ramesh K. Yadav',
      facultyTitle: 'Senior Regulatory Expert, ANPEP Classes',
      answer: 'Strictly NO. Under Section 17 & 18 of Drug Act 2035 and Pharmacy Dispensing Guidelines, Category Kha (Class B) consists of Prescription-Only Medicines (POM), predominantly antibiotics, cardiovascular agents, psychotropics, and hormonal formulations. Dispensing Category Kha without a valid prescription from a registered medical/dental practitioner is a legal offence subject to retail license suspension by the DDA inspectorate.',
      answeredAt: '2 days ago'
    },
    tags: ['Drug Act 2035', 'Category Kha', 'DDA Regulations'],
    date: '2 days ago'
  },
  {
    id: 'dbt-03',
    author: 'Suman Thapa',
    role: 'Pharmacy Assistant Aspirant, Chitwan',
    avatarLetter: 'S',
    question: 'What is the key difference between Capping and Lamination in tablet defects? I often get confused in mock tests!',
    subject: 'Pharmaceutics',
    upvotes: 42,
    hasVerifiedFacultyAnswer: true,
    facultyAnswer: {
      facultyName: 'Er. S. Sharma (M.Pharm Pharmaceutics)',
      facultyTitle: 'Pharmaceutics Specialist, ANPEP Classes',
      answer: 'Easy memory trick from our ANPEP lecture: Think of CAPPING as removing a "CAP" — only the top or bottom hemispherical dome/crown detaches from the body. LAMINATION comes from "Laminates" (layers) — the entire tablet splits horizontally into two or three complete pancake-like sheets. Root cause for capping is trapped air & excess fines; lamination is caused by oily lubricants or fast pre-compression relaxation.',
      answeredAt: '3 days ago'
    },
    tags: ['Tablet Defects', 'Pharmaceutics', 'Memory Trick'],
    date: '3 days ago'
  }
];
