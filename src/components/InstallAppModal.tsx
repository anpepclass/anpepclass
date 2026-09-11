import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Smartphone, 
  CheckCircle2, 
  ExternalLink, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Layers,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: any;
  onInstallNativePwa: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onInstallNativePwa
}) => {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeTab, setActiveTab] = useState<'student' | 'playstore'>('student');

  if (!isOpen) return null;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <OfficialLogo className="w-12 h-12 shrink-0 drop-shadow-sm" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  ANPEP Classes Mobile App
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Android Ready
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Install directly on your phone or publish to Google Play
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

        {/* Tab Toggle */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('student')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'student'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4 text-sky-600" />
            <span>Install on Android Phone</span>
          </button>
          <button
            onClick={() => setActiveTab('playstore')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'playstore'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Download className="w-4 h-4 text-emerald-600" />
            <span>Google Play Store Guide</span>
          </button>
        </div>

        {activeTab === 'student' ? (
          /* Option 1: Direct Install on Android Phone / Tablet */
          <div className="space-y-5">
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-2">
              <span className="text-xs font-bold text-sky-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Instant Android App Installation</span>
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                You can install ANPEP Classes immediately on your Android smartphone or tablet without waiting for Play Store review. It runs full-screen with offline CBT exams!
              </p>
            </div>

            {deferredPrompt ? (
              <button
                onClick={() => {
                  onInstallNativePwa();
                  onClose();
                }}
                className="w-full py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/20 transition-all active:scale-98"
              >
                <Download className="w-5 h-5" />
                <span>Tap Here to Install App on Home Screen</span>
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-800 block">
                  How to Install on Android in 3 Simple Steps:
                </span>
                <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Open this website in <strong>Google Chrome</strong> on your Android phone.</li>
                  <li>Tap the <strong>three dots (⋮)</strong> menu icon at the top right of Chrome.</li>
                  <li>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
                </ol>
                <div className="pt-1 flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={window.location.origin}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-mono bg-white text-slate-600"
                  />
                  <button
                    onClick={handleCopyUrl}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1 shrink-0"
                  >
                    {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedUrl ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full-screen CBT layout</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Offline exam cache</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero mobile storage (1.2MB)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant auto-updates</span>
              </div>
            </div>
          </div>
        ) : (
          /* Option 2: Developer / Admin Google Play Store Publishing Guide */
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>App is 100% Google Play & TWA Ready!</span>
              </span>
              <p className="text-[11px] text-emerald-800">
                Manifest, Service Worker, 512x512 maskable icons, and asset links have been generated and configured according to Google's official Trusted Web Activity (TWA) specifications.
              </p>
            </div>

            {/* Troubleshooting & Error Guide */}
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1.5">
              <span className="font-bold text-xs flex items-center gap-1.5 text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Did PWABuilder or Google Play show an Error?</span>
              </span>
              <p className="text-[11px] text-amber-800 leading-relaxed">
                <strong>Cause of the error:</strong> The current preview link (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[10px]">ais-pre-...run.app</code>) is Google AI Studio’s private developer sandbox. External crawlers like PWABuilder cannot access it without a Google account login.
              </p>
              <div className="pt-1 text-[11px] text-amber-900 font-medium space-y-1">
                <p><strong>How to fix in 2 minutes:</strong></p>
                <p>1. <strong>Deploy to your public domain:</strong> Go to the top-right menu in AI Studio → click <strong>"Export to GitHub"</strong> or <strong>"Download ZIP"</strong>, and host it on <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">www.anpepclasses.com</code> (or free Vercel/Netlify).</p>
                <p>2. Then enter <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">https://www.anpepclasses.com</code> in PWABuilder — it will scan 100% green with zero errors!</p>
                <p>3. <strong>Privacy Policy for Google Play:</strong> Google Play requires a privacy policy URL. You can use the built-in Privacy Policy located at the bottom of ANPEP Classes.</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-slate-900 block text-xs">
                  Step 1: Generate your .AAB (Android App Bundle) via PWABuilder
                </span>
                <p className="text-slate-600 text-xs">
                  1. Visit <a href="https://www.pwabuilder.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 font-bold underline">PWABuilder.com</a> (Google’s official recommended tool).
                  <br />
                  2. Enter your public website URL: <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-[11px]">https://www.anpepclasses.com</code>
                  <br />
                  3. Click <strong>"Package for Stores"</strong> → Choose <strong>"Google Play"</strong>.
                  <br />
                  4. Package Name: <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-[11px]">com.anpepclasses.app</code>
                  <br />
                  5. Click <strong>"Generate Package"</strong> to download your signed <strong>.aab</strong> file!
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-slate-900 block text-xs">
                  Step 2: Upload to Google Play Console
                </span>
                <p className="text-slate-600 text-xs">
                  1. Open <a href="https://play.google.com/console" target="_blank" rel="noopener noreferrer" className="text-sky-600 font-bold underline">Google Play Console</a>.
                  <br />
                  2. Click <strong>"Create app"</strong> → Name: <strong>ANPEP Classes</strong> → Category: <strong>Education</strong>.
                  <br />
                  3. Go to <strong>Production / Testing</strong> → Upload your <strong>.aab</strong> file.
                  <br />
                  4. Set Privacy Policy link to your website's policy, and submit for Google review!
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href="https://www.pwabuilder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs inline-flex items-center gap-1.5"
              >
                <span>Open PWABuilder.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
