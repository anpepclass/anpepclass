import React from 'react';
import { Shield, X, CheckCircle2, Lock, FileText, Mail, Phone } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <OfficialLogo className="w-10 h-10 shrink-0" />
            <div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Privacy Policy & Terms</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                  Google Play Compliant
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                ANPEP Classes (All Nepal Pharmacy Exam Preparation) • Last updated: September 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <section className="space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-sky-600" />
              1. Overview & Commitment to Student Privacy
            </h4>
            <p>
              ANPEP Classes ("we", "our", or "us"), accessible via <strong>www.anpepclasses.com</strong> and our mobile application, is dedicated to helping pharmacy graduates and diploma students excel in the Nepal Pharmacy Council (NPC) License and Loksewa examinations. We respect your privacy and are committed to protecting any personal data collected during course registration, CBT mock exams, and consultations.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-sky-600" />
              2. Information We Collect
            </h4>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li><strong>Contact Information:</strong> Full name, phone/WhatsApp number (+977), and email address (e.g., provided during enrollment or demo class booking).</li>
              <li><strong>Academic Profile:</strong> Qualification track (Diploma in Pharmacy vs. Bachelor of Pharmacy / B.Pharm) and targeted exam session.</li>
              <li><strong>Exam Practice Performance:</strong> CBT mock test answer choices, scores, time taken per question, and review bookmarks stored locally on your device for learning analysis.</li>
            </ul>
          </section>

          <section className="space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-sky-600" />
              3. Data Security & Storage
            </h4>
            <p>
              We implement industry-standard encryption and security protocols. We do not sell, rent, or trade your personal information to third-party advertising companies. Student records are strictly used for admission confirmation, exam hall updates, syllabus circulars, and tutor consultation with <strong>Ashok Kumar Gupta</strong> and <strong>Sanjaya Acharya</strong>.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              4. Device Permissions (Google Play)
            </h4>
            <p>
              Our application does not request invasive permissions such as background GPS location, contacts, or camera access. It functions purely as an educational learning portal with offline caching via modern Progressive Web App Service Workers.
            </p>
          </section>

          <section className="space-y-1.5 border-t border-slate-100 pt-3">
            <h4 className="text-sm font-bold text-slate-900">5. Contact Information & Data Inquiries</h4>
            <p>
              For questions regarding this privacy policy or to request data deletion, contact our official administration desk:
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] space-y-1 text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <span>Email: anpep203@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Phone / WhatsApp: +977 9769322912</span>
              </div>
              <div>Official Website: https://www.anpepclasses.com</div>
            </div>
          </section>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
          >
            Close Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};
