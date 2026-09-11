import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  RotateCcw, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  AlertTriangle,
  FileCheck,
  Filter,
  Check,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { MCQQuestion, SubjectType } from '../types';
import { mockQuestions } from '../data/questionsData';

interface MockExamSimulatorProps {
  onOpenEnrollment: () => void;
}

export const MockExamSimulator: React.FC<MockExamSimulatorProps> = ({ onOpenEnrollment }) => {
  // Test configuration states
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('All');
  const [isExamActive, setIsExamActive] = useState(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Active exam questions and state
  const [activeQuestions, setActiveQuestions] = useState<MCQQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(15 * 60); // 15 mins default
  const [totalExamTimeSeconds, setTotalExamTimeSeconds] = useState(15 * 60);

  // Review screen filter
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'marked'>('all');

  const timerRef = useRef<any>(null);

  // Filter questions based on selected subject
  const getFilteredQuestions = (subject: SubjectType): MCQQuestion[] => {
    if (subject === 'All') return mockQuestions;
    return mockQuestions.filter(q => q.subject === subject);
  };

  // Start exam handler
  const handleStartExam = (subject: SubjectType = selectedSubject) => {
    const questions = getFilteredQuestions(subject);
    if (questions.length === 0) return;

    setActiveQuestions(questions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setMarkedForReview({});
    
    // Set 1 minute per question as standard CBT pace
    const examDuration = Math.max(questions.length * 60, 5 * 60);
    setTimeRemainingSeconds(examDuration);
    setTotalExamTimeSeconds(examDuration);
    setIsExamActive(true);
    setIsExamSubmitted(false);
    setShowSubmitConfirm(false);
  };

  // Timer countdown hook
  useEffect(() => {
    if (isExamActive && !isExamSubmitted) {
      timerRef.current = setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isExamActive, isExamSubmitted]);

  const handleAutoSubmit = () => {
    setIsExamActive(false);
    setIsExamSubmitted(true);
    setShowSubmitConfirm(false);
  };

  const handleManualSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsExamActive(false);
    setIsExamSubmitted(true);
    setShowSubmitConfirm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Navigation handlers
  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleClearAnswer = () => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQuestionIndex];
      return copy;
    });
  };

  const handleToggleMarkForReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentQuestionIndex]: !prev[currentQuestionIndex]
    }));
  };

  // Score computation
  const computeScore = () => {
    let correct = 0;
    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionIndex) {
        correct++;
      }
    });
    const total = activeQuestions.length;
    const percentage = Math.round((correct / total) * 100);
    const isPassed = percentage >= 50; // Nepal Pharmacy Council passing threshold
    return { correct, total, percentage, isPassed };
  };

  const subjectsList: SubjectType[] = [
    'All',
    'Pharmacology',
    'Pharmaceutics',
    'Pharmacognosy',
    'Hospital & Clinical Pharmacy',
    'Pharmacy Jurisprudence (Nepal Law)'
  ];

  // -------------------------------------------------------------
  // VIEW 1: START SCREEN / SUBJECT SELECTION
  // -------------------------------------------------------------
  if (!isExamActive && !isExamSubmitted) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Title & Introduction */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            NPC Exam Pattern CBT Simulator
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nepal Pharmacy Council CBT Practice Engine
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experience the real computer-based test interface with official time constraints, instant question palette status, and verified faculty explanations.
          </p>
        </div>

        {/* Exam Specifications Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Questions Count</span>
              <p className="text-lg sm:text-xl font-bold text-slate-800 font-mono">
                {getFilteredQuestions(selectedSubject).length} MCQs
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Allocated Time</span>
              <p className="text-lg sm:text-xl font-bold text-slate-800 font-mono">
                {Math.max(getFilteredQuestions(selectedSubject).length, 5)} Minutes
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Pass Criteria</span>
              <p className="text-lg sm:text-xl font-bold text-emerald-600 font-mono">50% Minimum</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Negative Marking</span>
              <p className="text-lg sm:text-xl font-bold text-slate-800 font-mono">None (0.0)</p>
            </div>
          </div>

          {/* Subject Filter Selection */}
          <div className="pt-6 space-y-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Select Examination Domain / Subject:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {subjectsList.map((sub) => {
                const count = getFilteredQuestions(sub).length;
                const isSelected = selectedSubject === sub;
                return (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-2xs font-semibold'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="truncate pr-2">
                      <p className="text-xs sm:text-sm font-semibold truncate">{sub}</p>
                      <p className="text-[11px] text-slate-500">{count} verified MCQs</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                    }`}>
                      {isSelected && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Launch Button */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Full screen CBT simulation starts immediately upon clicking launch.</span>
            </div>
            <button
              onClick={() => handleStartExam(selectedSubject)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Launch CBT Simulation Exam</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: ACTIVE CBT EXAM INTERFACE
  // -------------------------------------------------------------
  if (isExamActive && !isExamSubmitted) {
    const currentQ = activeQuestions[currentQuestionIndex];
    const answeredCount = Object.keys(selectedAnswers).length;
    const markedCount = Object.values(markedForReview).filter(Boolean).length;
    const isUnderTwoMinutes = timeRemainingSeconds <= 120;

    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-4">
        {/* CBT Top Bar: Status, Timer & Submit */}
        <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              {selectedSubject === 'All' ? 'Nepal Pharmacy Council CBT Full Mock' : selectedSubject}
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Candidate Session ID: <span className="font-mono font-semibold text-slate-700">ANPEP-2082-CBT</span>
            </p>
          </div>

          {/* Real-time Countdown Timer */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-base sm:text-lg font-extrabold border transition-colors ${
            isUnderTwoMinutes 
              ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
              : 'bg-slate-900 text-white border-slate-800'
          }`}>
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Time Left: {formatTime(timeRemainingSeconds)}</span>
          </div>

          {/* Submit Trigger */}
          <button
            onClick={() => setShowSubmitConfirm(true)}
            className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
          >
            Finish & Submit Exam
          </button>
        </div>

        {/* Main Exam Grid: Question Area (Left) + Palette (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left: Question Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs flex flex-col justify-between min-h-[480px]">
            <div className="space-y-6">
              {/* Question Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="text-sm font-bold text-slate-900">
                  Question <span className="text-emerald-700 font-mono text-base">{currentQuestionIndex + 1}</span> of {activeQuestions.length}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {currentQ.subject}
                  </span>
                  {currentQ.examTag && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      {currentQ.examTag}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Statement */}
              <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                {currentQ.question}
              </div>

              {/* Options A, B, C, D */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((optionText, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
                  const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/90 text-emerald-950 font-semibold shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-800'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                        isSelected 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {letter}
                      </span>
                      <span className="text-sm leading-relaxed">{optionText}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls: Clear, Mark Review, Prev, Next */}
            <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleMarkForReview}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                    markedForReview[currentQuestionIndex]
                      ? 'bg-purple-100 text-purple-800 border-purple-300'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5 text-purple-600" />
                  <span>{markedForReview[currentQuestionIndex] ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>

                {selectedAnswers[currentQuestionIndex] !== undefined && (
                  <button
                    onClick={handleClearAnswer}
                    className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    Clear Response
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(prev - 1, 0))}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(prev + 1, activeQuestions.length - 1))}
                  disabled={currentQuestionIndex === activeQuestions.length - 1}
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1 shadow-2xs"
                >
                  <span>Save & Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Question Navigation Palette */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Question Palette</h3>
              <p className="text-xs text-slate-500">Click any number to navigate instantly</p>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-600" />
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-purple-600" />
                <span>Review ({markedCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-slate-200 border border-slate-300" />
                <span>Unanswered ({activeQuestions.length - answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm border-2 border-emerald-600" />
                <span>Current</span>
              </div>
            </div>

            {/* Number grid */}
            <div className="grid grid-cols-5 gap-2 pt-2 max-h-72 overflow-y-auto pr-1">
              {activeQuestions.map((_, idx) => {
                const isCurrent = currentQuestionIndex === idx;
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isMarked = markedForReview[idx];

                let bgClass = 'bg-slate-50 text-slate-700 border-slate-200';
                if (isMarked) {
                  bgClass = 'bg-purple-600 text-white border-purple-700 font-bold';
                } else if (isAnswered) {
                  bgClass = 'bg-emerald-600 text-white border-emerald-700 font-bold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 rounded-lg text-xs font-mono font-semibold border transition-all flex items-center justify-center relative ${bgClass} ${
                      isCurrent ? 'ring-2 ring-emerald-500 ring-offset-2' : 'hover:scale-105'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Instructions box */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">CBT Exam Rules:</p>
              <p>• Passing score is 50% (Nepal Pharmacy Council standard).</p>
              <p>• Make sure to review marked questions before submitting.</p>
            </div>
          </div>
        </div>

        {/* Submission Confirmation Modal */}
        {showSubmitConfirm && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold">Submit CBT Examination?</h4>
                  <p className="text-xs text-slate-500">You cannot modify your responses after final submission.</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 text-xs space-y-1.5 text-slate-700 border border-slate-200">
                <div className="flex justify-between">
                  <span>Total Questions:</span>
                  <span className="font-bold font-mono">{activeQuestions.length}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Answered:</span>
                  <span className="font-bold font-mono">{answeredCount}</span>
                </div>
                <div className="flex justify-between text-rose-600 font-semibold">
                  <span>Unanswered:</span>
                  <span className="font-bold font-mono">{activeQuestions.length - answeredCount}</span>
                </div>
                <div className="flex justify-between text-purple-700">
                  <span>Marked for Review:</span>
                  <span className="font-bold font-mono">{markedCount}</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-200">
                  <span>Remaining Time:</span>
                  <span className="font-bold font-mono">{formatTime(timeRemainingSeconds)}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Return to Test
                </button>
                <button
                  onClick={handleManualSubmit}
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs"
                >
                  Confirm & View Results
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: COMPREHENSIVE RESULTS & DETAILED SCORECARD REVIEW
  // -------------------------------------------------------------
  const { correct, total, percentage, isPassed } = computeScore();

  const filteredReviewQuestions = activeQuestions.filter((q, idx) => {
    if (reviewFilter === 'incorrect') {
      return selectedAnswers[idx] !== q.correctOptionIndex;
    }
    if (reviewFilter === 'marked') {
      return markedForReview[idx] === true;
    }
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Score Header Card */}
      <div className={`rounded-2xl border p-6 sm:p-8 text-center space-y-4 shadow-sm ${
        isPassed 
          ? 'bg-gradient-to-b from-emerald-50 to-white border-emerald-200' 
          : 'bg-gradient-to-b from-rose-50 to-white border-rose-200'
      }`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-emerald-600" />
          <span>Official ANPEP Performance Scorecard</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {isPassed ? 'Congratulations! You Qualified NPC Benchmark' : 'Needs Practice for NPC Benchmark'}
        </h2>

        {/* Primary Numbers */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-3">
          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-medium">Final Score</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
              {correct} <span className="text-slate-400 text-xl font-normal">/ {total}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-medium">Percentage</span>
            <div className={`text-3xl sm:text-4xl font-extrabold font-mono ${isPassed ? 'text-emerald-600' : 'text-rose-600'}`}>
              {percentage}%
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-medium">NPC Status</span>
            <div>
              <span className={`inline-block px-3 py-1 rounded-lg text-sm font-extrabold uppercase tracking-wider ${
                isPassed 
                  ? 'bg-emerald-600 text-white shadow-xs' 
                  : 'bg-rose-600 text-white shadow-xs'
              }`}>
                {isPassed ? 'PASSED (Qualifying)' : 'RE-TRY (Below 50%)'}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          {isPassed
            ? 'Great job! You met the 50% passing cutoff required by the Nepal Pharmacy Council for Name Registration. Keep reinforcing with our Smart Mnemonics.'
            : 'Do not be discouraged. Nepal Pharmacy Council exams require precision in pharmacology and drug legislation. Join ANPEP Classes revision batches to master high-frequency questions.'}
        </p>

        {/* Action buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => handleStartExam(selectedSubject)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake This Exam</span>
          </button>

          <button
            onClick={() => {
              setIsExamSubmitted(false);
              setIsExamActive(false);
            }}
            className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold transition-colors"
          >
            Choose Different Subject
          </button>

          <button
            onClick={onOpenEnrollment}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Enroll in Full Preparation Batch</span>
          </button>
        </div>
      </div>

      {/* Review Section */}
      <div className="space-y-4">
        {/* Filter bar for questions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900">Question-by-Question Solution & Rationale</h3>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <button
              onClick={() => setReviewFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                reviewFilter === 'all'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All ({activeQuestions.length})
            </button>
            <button
              onClick={() => setReviewFilter('incorrect')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                reviewFilter === 'incorrect'
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Incorrect ({total - correct})
            </button>
            <button
              onClick={() => setReviewFilter('marked')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                reviewFilter === 'marked'
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Marked for Review
            </button>
          </div>
        </div>

        {/* List of reviewed questions */}
        <div className="space-y-4">
          {filteredReviewQuestions.map((q) => {
            // Find real index in original list
            const realIdx = activeQuestions.findIndex(item => item.id === q.id);
            const userChoice = selectedAnswers[realIdx];
            const isCorrect = userChoice === q.correctOptionIndex;
            const isUnanswered = userChoice === undefined;

            return (
              <div 
                key={q.id}
                className={`p-5 rounded-2xl border bg-white space-y-4 transition-all shadow-2xs ${
                  isCorrect 
                    ? 'border-emerald-200' 
                    : isUnanswered 
                    ? 'border-amber-200' 
                    : 'border-rose-200'
                }`}
              >
                {/* Question title bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                      Q{realIdx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{q.subject}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isCorrect && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1)
                      </span>
                    )}
                    {!isCorrect && !isUnanswered && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect (0)
                      </span>
                    )}
                    {isUnanswered && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <AlertTriangle className="w-3.5 h-3.5" /> Not Answered
                      </span>
                    )}
                    {q.examTag && (
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        {q.examTag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Statement */}
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                  {q.question}
                </p>

                {/* Options representation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, oIdx) => {
                    const letter = String.fromCharCode(65 + oIdx);
                    const isOfficialCorrect = oIdx === q.correctOptionIndex;
                    const isUserChoice = userChoice === oIdx;

                    let optClass = 'border-slate-200 bg-slate-50/50 text-slate-700';
                    if (isOfficialCorrect) {
                      optClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                    } else if (isUserChoice && !isOfficialCorrect) {
                      optClass = 'border-rose-400 bg-rose-50 text-rose-950 line-through';
                    }

                    return (
                      <div key={oIdx} className={`p-2.5 rounded-xl border flex items-center justify-between ${optClass}`}>
                        <div className="flex items-center gap-2 truncate">
                          <span className="font-mono font-bold">{letter}.</span>
                          <span className="truncate">{opt}</span>
                        </div>
                        {isOfficialCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {isUserChoice && !isOfficialCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                {/* Verified Faculty Rationale & High-Yield Tip */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs leading-relaxed text-slate-700">
                  <div>
                    <strong className="text-slate-900">Official Rationale: </strong>
                    <span>{q.explanation}</span>
                  </div>
                  {q.highYieldTip && (
                    <div className="pt-1 text-emerald-900 bg-emerald-100/60 p-2 rounded-lg border border-emerald-200/80 flex items-start gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong>ANPEP High-Yield Tip: </strong>
                        <span>{q.highYieldTip}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
