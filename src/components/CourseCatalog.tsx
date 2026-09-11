import React, { useState } from 'react';
import { 
  BookOpen, 
  Check, 
  Clock, 
  Users, 
  Star, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { Course } from '../types';

interface CourseCatalogProps {
  onSelectCourseForEnrollment: (course: Course) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ onSelectCourseForEnrollment }) => {
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('All');

  const filterTabs = [
    { id: 'All', label: 'All Batches' },
    { id: 'NPC D.Pharm License', label: 'D.Pharm License' },
    { id: 'NPC B.Pharm License', label: 'B.Pharm License' },
    { id: 'Loksewa PSC', label: 'Loksewa (PSC)' },
    { id: 'Crash Revision', label: '15-Day Crash' },
  ];

  const filteredCourses = selectedExamFilter === 'All'
    ? coursesData
    : coursesData.filter(c => c.targetExam === selectedExamFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header section */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          Targeted Exam Preparation Batches
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Courses Tailored to Nepal Council Syllabi
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From 3-month foundational masterclasses to 15-day high-intensity final revision batches. Join live interactive sessions with Nepal’s leading pharmacy academicians.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedExamFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedExamFilter === tab.id
                ? 'bg-emerald-700 text-white shadow-xs font-bold'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredCourses.map((course) => {
          const discountPercent = Math.round(
            ((course.regularFeeNpr - course.discountedFeeNpr) / course.regularFeeNpr) * 100
          );

          return (
            <div
              key={course.id}
              className={`bg-white rounded-2xl border transition-all flex flex-col justify-between p-6 sm:p-7 shadow-xs hover:shadow-md relative ${
                course.isPopular 
                  ? 'border-emerald-300 ring-1 ring-emerald-300' 
                  : 'border-slate-200'
              }`}
            >
              {/* Badge & Rating */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${course.tagColor}`}>
                    {course.tag}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-normal">({course.enrolledStudentsCount} enrolled)</span>
                  </div>
                </div>

                {/* Course Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {course.subtitle}
                  </p>
                </div>

                {/* Key Meta: Duration & Schedule */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Duration</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Batch Shifts</span>
                      <span className="font-semibold">{course.dailyHours}</span>
                    </div>
                  </div>
                </div>

                {/* Schedule timings */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Available Shifts:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.batchTimes.map((time, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-medium border border-slate-200"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    What’s Included:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {course.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom: Pricing & Admission Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Special Promotional Fee:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                        NPR {course.discountedFeeNpr.toLocaleString()}
                      </span>
                      <span className="text-sm text-slate-400 line-through font-mono">
                        NPR {course.regularFeeNpr.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 border border-rose-200">
                    Save {discountPercent}%
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                    {course.seatsRemaining} seats left in this batch
                  </span>
                  <span className="text-slate-600 font-medium">{course.nextBatchDate}</span>
                </div>

                <button
                  onClick={() => onSelectCourseForEnrollment(course)}
                  className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Enroll in this Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>ANPEP Classes Academic Assurance</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Unsure which batch suits your academic timeline?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Our academic advisors can review your graduation status, past attempts, and exam date to design a personalized study schedule.
          </p>
        </div>

        <a
          href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20need%20academic%20guidance%20for%20my%20pharmacy%20exam."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm shrink-0 transition-colors shadow-xs"
        >
          Talk with Counselor (+977 9769322912)
        </a>
      </div>
    </div>
  );
};
