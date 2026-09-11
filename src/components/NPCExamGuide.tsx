import React, { useState } from 'react';
import { 
  FileCheck2, 
  CheckSquare, 
  Square, 
  ExternalLink, 
  HelpCircle, 
  AlertCircle, 
  Video, 
  MessageCircle, 
  Info,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Mail
} from 'lucide-react';

export const NPCExamGuide: React.FC = () => {
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    'doc-citizenship': true,
    'doc-transcript': true,
  });

  const toggleDoc = (id: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const documentChecklist = [
    {
      id: 'doc-citizenship',
      title: 'Nepali Citizenship Certificate (नागरिकता प्रमाणपत्र)',
      note: 'Clear scanned front and back copy (JPG/PNG under 500 KB).'
    },
    {
      id: 'doc-transcript',
      title: 'Academic Transcript (D.Pharm / B.Pharm)',
      note: 'Official marksheet/transcript issued by CTEVT, TU, KU, PU, or Purbanchal University.'
    },
    {
      id: 'doc-provisional',
      title: 'Provisional Certificate / Character Certificate',
      note: 'College character certificate indicating graduation year and good conduct.'
    },
    {
      id: 'doc-internship',
      title: 'Hospital & Retail Pharmacy Training Letter',
      note: 'Mandatory proof of completed 500-hour or designated internship training hours.'
    },
    {
      id: 'doc-equivalence',
      title: 'Equivalence Certificate (Only if studied outside Nepal)',
      note: 'Mandatory from TU or CTEVT Equivalence Committee for degrees from India, Bangladesh, etc.'
    },
    {
      id: 'doc-photo',
      title: 'Recent Passport Size Photograph',
      note: 'Formal photograph with plain white background, both ears visible, no sunglasses.'
    },
    {
      id: 'doc-fee',
      title: 'NPC Examination Fee Voucher / eSewa Receipt',
      note: 'Examination fee (Rs. 3,000 for D.Pharm / Rs. 5,000 for B.Pharm) as notified by Council.'
    }
  ];

  const steps = [
    {
      step: 'Step 1',
      title: 'Visit the Official NPC Online Portal',
      description: 'Navigate to online.nepalpharmacycouncil.org.np and click on "Candidate Registration / Apply for Examination". Create your student profile using an active mobile number and email.'
    },
    {
      step: 'Step 2',
      title: 'Fill Personal & Academic Details',
      description: 'Enter your name, date of birth (B.S. and A.D.), citizenship number, and educational history from SLC/+2 to Pharmacy qualification strictly matching your transcript.'
    },
    {
      step: 'Step 3',
      title: 'Upload Scanned Credentials',
      description: 'Upload your documents according to the required dimensions (typically under 500 KB in JPEG format). Ensure transcripts and signatures are sharp and legible.'
    },
    {
      step: 'Step 4',
      title: 'Pay Council Examination Fee',
      description: 'Complete the payment via integrated digital gateways (ConnectIPS, eSewa, Khalti) or deposit in the Nepal Pharmacy Council bank account.'
    },
    {
      step: 'Step 5',
      title: 'Download & Print Admit Card',
      description: 'Once the Council verifies your credentials (usually within 3-5 working days), download your computerized Admit Card with designated CBT Exam Center and Shift details.'
    }
  ];

  const totalDocs = documentChecklist.length;
  const completedDocs = Object.values(checkedDocs).filter(Boolean).length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
          Official Council Guidance
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Nepal Pharmacy Council Exam & Form Guide
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Step-by-step instructions to register for the Pharmacist and Pharmacy Assistant Name Registration Examination without procedural delays or document rejections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Document Checklist */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Application Document Checklist</h3>
              <p className="text-xs text-slate-500">Tick items as you gather them for upload</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                {completedDocs} / {totalDocs} Ready
              </span>
            </div>
          </div>

          {/* Checklist Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${(completedDocs / totalDocs) * 100}%` }}
            />
          </div>

          <div className="space-y-3">
            {documentChecklist.map((doc) => {
              const isChecked = !!checkedDocs[doc.id];
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleDoc(doc.id)}
                  className={`p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-start gap-3 ${
                    isChecked
                      ? 'border-emerald-300 bg-emerald-50/50 text-slate-900'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <div className="mt-0.5 text-emerald-600 shrink-0">
                    {isChecked ? <CheckSquare className="w-4 h-4 fill-emerald-100" /> : <Square className="w-4 h-4 text-slate-300" />}
                  </div>
                  <div>
                    <span className={`font-semibold block ${isChecked ? 'text-slate-900' : 'text-slate-700'}`}>
                      {doc.title}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      {doc.note}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Help box */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800">Need help filling your form? </strong>
              <span>ANPEP Classes provides free form review and document verification support for all enrolled students.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Step-by-Step Procedure */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Step-by-Step Application Procedure</h3>
              <p className="text-xs text-slate-500">Official procedure for online.nepalpharmacycouncil.org.np</p>
            </div>

            <div className="space-y-4">
              {steps.map((st, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3.5 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {sIdx + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900">{st.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <a
                href="https://online.nepalpharmacycouncil.org.np"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold"
              >
                <span>Open Official NPC Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:anpep203@gmail.com?subject=NPC%20Exam%20Form%20Assistance"
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-sky-700 font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
                  <span>anpep203@gmail.com</span>
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href="https://wa.me/9779769322912?text=Hello%20ANPEP%20Classes,%20I%20need%20assistance%20filling%20my%20NPC%20exam%20form."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Form Helpdesk (+977 9769322912)</span>
                </a>
              </div>
            </div>
          </div>

          {/* CBT Exam Rules Callout */}
          <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              CBT Hall Regulations to Remember
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <li>• Bring original Citizenship Certificate and printed Color Admit Card.</li>
              <li>• Electronic gadgets, smart watches, and calculators are strictly forbidden.</li>
              <li>• Exam duration is 120 minutes (2 hours) for 100 questions.</li>
              <li>• You must secure at least 50 marks out of 100 to pass.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
