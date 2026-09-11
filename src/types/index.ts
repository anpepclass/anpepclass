export type SubjectType = 
  | 'All'
  | 'Pharmacology'
  | 'Pharmaceutics'
  | 'Pharmacognosy'
  | 'Pharmaceutical Chemistry'
  | 'Hospital & Clinical Pharmacy'
  | 'Pharmacy Jurisprudence (Nepal Law)'
  | 'Biopharmaceutics & Pharmacokinetics';

export interface MCQQuestion {
  id: string;
  subject: SubjectType;
  topic: string;
  question: string;
  options: [string, string, string, string]; // 4 options
  correctOptionIndex: number; // 0, 1, 2, 3
  explanation: string;
  highYieldTip?: string;
  isPastExamQuestion?: boolean;
  examTag?: string; // e.g., 'NPC License 2081', 'Loksewa 5th Level 2080'
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface ExamSessionState {
  examId: string;
  title: string;
  timeLimitMinutes: number;
  timeRemainingSeconds: number;
  questions: MCQQuestion[];
  selectedAnswers: Record<number, number>; // questionIndex -> optionIndex
  markedForReview: Record<number, boolean>;
  isCompleted: boolean;
  startTime: number;
  completedTime?: number;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  targetExam: 'NPC D.Pharm License' | 'NPC B.Pharm License' | 'Loksewa PSC' | 'Crash Revision';
  tag: string;
  tagColor: string;
  duration: string;
  dailyHours: string;
  batchTimes: string[];
  regularFeeNpr: number;
  discountedFeeNpr: number;
  features: string[];
  syllabusHighlight: string[];
  nextBatchDate: string;
  seatsRemaining: number;
  rating: number;
  enrolledStudentsCount: number;
  isPopular?: boolean;
}

export interface MnemonicCard {
  id: string;
  title: string;
  subject: SubjectType;
  mnemonic: string;
  breakdown: { letter: string; standsFor: string; note?: string }[];
  clinicalSignificance: string;
  relatedExamTopic: string;
  tags: string[];
}

export interface StudyNote {
  id: string;
  title: string;
  subject: SubjectType;
  readTime: string;
  summary: string;
  keyPoints: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  fileSize: string;
  downloadFilename: string;
  lastUpdated: string;
  isHighYield: boolean;
}

export interface OfficialNotice {
  id: string;
  date: string;
  title: string;
  category: 'NPC Update' | 'Batch Alert' | 'Exam Schedule' | 'Result';
  isImportant?: boolean;
  linkText?: string;
  content: string;
}

export interface DoubtItem {
  id: string;
  author: string;
  role: string;
  avatarLetter: string;
  question: string;
  subject: SubjectType;
  upvotes: number;
  hasVerifiedFacultyAnswer: boolean;
  facultyAnswer?: {
    facultyName: string;
    facultyTitle: string;
    answer: string;
    answeredAt: string;
  };
  tags: string[];
  date: string;
}
