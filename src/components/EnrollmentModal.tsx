import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Printer, 
  Download, 
  Calendar, 
  Clock, 
  ShieldCheck,
  Phone
} from 'lucide-react';
import { Course } from '../types';
import { coursesData } from '../data/coursesData';
import { OfficialLogo } from './OfficialLogo';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: Course | null;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedCourse
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    preSelectedCourse ? preSelectedCourse.id : coursesData[0].id
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('D.Pharm Graduate');
  const [preferredShift, setPreferredShift] = useState('Morning (6:30 AM - 8:30 AM)');
  const [district, setDistrict] = useState('Kathmandu Valley');
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [registrationSlip, setRegistrationSlip] = useState<any>(null);

  useEffect(() => {
    if (preSelectedCourse) {
      setSelectedCourseId(preSelectedCourse.id);
    }
  }, [preSelectedCourse]);

  if (!isOpen) return null;

  const activeCourse = coursesData.find(c => c.id === selectedCourseId) || coursesData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const tokenNumber = `ANPEP-REG-${Math.floor(10000 + Math.random() * 90000)}`;
    const slip = {
      token: tokenNumber,
      candidate: fullName,
      phone: phone,
      email: email || 'Not specified',
      qualification: qualification,
      course: activeCourse.title,
      fee: activeCourse.discountedFeeNpr,
      shift: preferredShift,
      district: district,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    setRegistrationSlip(slip);
    setIsSuccess(true);
  };

  const handleWhatsAppRedirect = () => {
    if (!registrationSlip) return;
    const msg = `Namaste ANPEP Classes! I have registered for admission.\nToken: ${registrationSlip.token}\nName: ${registrationSlip.candidate}\nCourse: ${registrationSlip.course}\nShift: ${registrationSlip.shift}\nPhone: ${registrationSlip.phone}`;
    window.open(`https://wa.me/9779769322912?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-auto animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-3.5">
              <OfficialLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold uppercase tracking-wider mb-0.5">
                  <Sparkles className="w-3 h-3 text-sky-600" />
                  ANPEP Classes Admission Desk
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Enrollment & Free Demo Class
                </h3>
                <p className="text-xs text-sky-700 font-medium font-nepali">
                  फार्मेसी शिक्षामा नेपालकै उत्कृष्ट • Helpline: +977 9769322912
                </p>
              </div>
            </div>

            {/* Course Selector */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Select Course / Exam Preparation Program:
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold bg-white focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
              >
                {coursesData.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} — NPR {c.discountedFeeNpr.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Full Candidate Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Bhandari"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  WhatsApp / Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9841XXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. candidate@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Academic Qualification
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                >
                  <option value="D.Pharm Graduate">Diploma in Pharmacy (D.Pharm)</option>
                  <option value="B.Pharm Graduate">Bachelor of Pharmacy (B.Pharm)</option>
                  <option value="M.Pharm / Pharm.D">Post-Graduate (M.Pharm / Pharm.D)</option>
                  <option value="Final Year Student">Final Year Pharmacy Student</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Preferred Shift Timing
                </label>
                <select
                  value={preferredShift}
                  onChange={(e) => setPreferredShift(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                >
                  <option value="Morning (6:30 AM - 8:30 AM)">Morning (6:30 AM - 8:30 AM)</option>
                  <option value="Evening (6:00 PM - 8:00 PM)">Evening (6:00 PM - 8:00 PM)</option>
                  <option value="Night (7:30 PM - 9:30 PM)">Night (7:30 PM - 9:30 PM)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  City / District in Nepal
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kathmandu, Chitwan, Pokhara"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Fee Summary */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-500">Selected Program:</span>
                <p className="font-bold text-slate-800 text-sm">{activeCourse.title}</p>
              </div>
              <div className="text-right">
                <span className="text-slate-500">Total Payable:</span>
                <p className="font-extrabold text-sky-700 text-base font-mono">
                  NPR {activeCourse.discountedFeeNpr.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-sky-600/20 transition-all active:scale-98"
              >
                Submit Admission Form
              </button>
            </div>
          </form>
        ) : (
          /* SUCCESS CONFIRMATION SLIP */
          <div className="space-y-6 text-center py-2">
            <div className="flex justify-center">
              <OfficialLogo className="w-16 h-16 drop-shadow-md" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Admission Application Confirmed!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your provisional registration token has been generated. Our academic mentor will contact you on WhatsApp to confirm your orientation credentials.
              </p>
            </div>

            {/* Provisional Slip Card */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-left space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <span className="font-black text-slate-900 uppercase">ANPEP CLASSES</span>
                  <p className="text-[10px] text-slate-500">ALL NEPAL PHARMACY EXAM PREPARATION</p>
                  <p className="text-[10px] text-slate-400">Reg No: 12/082/083 • Phone: +977 9769322912 • anpep203@gmail.com</p>
                </div>
                <span className="font-mono font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                  {registrationSlip.token}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Candidate Name</span>
                  <span className="font-bold">{registrationSlip.candidate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">WhatsApp Contact</span>
                  <span className="font-semibold">{registrationSlip.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Enrolled Course</span>
                  <span className="font-bold text-sky-950">{registrationSlip.course}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Allocated Shift</span>
                  <span className="font-semibold">{registrationSlip.shift}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Qualification</span>
                  <span>{registrationSlip.qualification}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Tuition Fee</span>
                  <span className="font-mono font-bold">NPR {registrationSlip.fee.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Fast WhatsApp Connect */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppRedirect}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Slip to WhatsApp (+977 9769322912)</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-colors"
              >
                Close & Return to Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
