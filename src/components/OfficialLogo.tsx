import React from 'react';

interface OfficialLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({ 
  className = "w-12 h-12", 
  size,
  showText = false 
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${showText ? 'flex-row' : ''}`}>
      <svg
        viewBox="0 0 500 500"
        className={`${className} shrink-0`}
        style={style}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ANPEP Classes Official Logo"
      >
        <defs>
          {/* Path for Top Text: ALL NEPAL PHARMACY EXAM PREPARATION */}
          <path
            id="textPathTop"
            d="M 65 250 A 185 185 0 0 1 435 250"
            fill="none"
          />
          {/* Path for Bottom Text: फार्मेसी शिक्षामा नेपालकै उत्कृष्ट */}
          <path
            id="textPathBottom"
            d="M 430 250 A 180 180 0 0 1 70 250"
            fill="none"
          />
          
          {/* Subtle Linear Gradient for depth */}
          <linearGradient id="anpepBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          {/* Book Page Yellow Glow */}
          <linearGradient id="bookYellow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>
        </defs>

        {/* 1. Outer Double Blue Border */}
        <circle cx="250" cy="250" r="242" stroke="#0284c7" strokeWidth="8" fill="#ffffff" />
        <circle cx="250" cy="250" r="236" stroke="#0369a1" strokeWidth="2" fill="none" />

        {/* 2. Inner Blue Core Circle */}
        <circle cx="250" cy="250" r="172" fill="url(#anpepBlueGrad)" />
        <circle cx="250" cy="250" r="172" stroke="#ffffff" strokeWidth="3" fill="none" />

        {/* 3. Circular Border Text - Top: ALL NEPAL PHARMACY EXAM PREPARATION */}
        <text
          fill="#0284c7"
          fontSize="22"
          fontWeight="800"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          letterSpacing="2.5"
        >
          <textPath
            href="#textPathTop"
            startOffset="50%"
            textAnchor="middle"
          >
            ALL NEPAL PHARMACY EXAM PREPARATION
          </textPath>
        </text>

        {/* Left & Right Stars */}
        <path
          d="M 72 268 L 76 280 L 88 280 L 78 288 L 82 300 L 72 292 L 62 300 L 66 288 L 56 280 L 68 280 Z"
          fill="#0284c7"
        />
        <path
          d="M 428 268 L 432 280 L 444 280 L 434 288 L 438 300 L 428 292 L 418 300 L 422 288 L 412 280 L 424 280 Z"
          fill="#0284c7"
        />

        {/* 4. Circular Border Text - Bottom: फार्मेसी शिक्षामा नेपालकै उत्कृष्ट */}
        <text
          fill="#0284c7"
          fontSize="26"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="1"
        >
          <textPath
            href="#textPathBottom"
            startOffset="50%"
            textAnchor="middle"
          >
            फार्मेसी शिक्षामा नेपालकै उत्कृष्ट
          </textPath>
        </text>

        {/* 5. Center Emblem Inside Blue Circle */}
        
        {/* Caduceus Wings */}
        <g fill="#ffffff">
          {/* Left Wing */}
          <path d="M 250 185 C 235 170 195 160 145 180 C 170 195 200 205 240 208 C 210 215 175 210 160 215 C 190 225 220 226 250 222 Z" />
          <path d="M 250 175 C 210 162 170 168 142 182 C 160 172 205 160 250 175 Z" opacity="0.9" />
          {/* Feather line details left */}
          <path d="M 180 182 Q 215 195 245 200" stroke="#0284c7" strokeWidth="2" fill="none" />
          <path d="M 195 194 Q 225 204 248 206" stroke="#0284c7" strokeWidth="2" fill="none" />

          {/* Right Wing */}
          <path d="M 250 185 C 265 170 305 160 355 180 C 330 195 300 205 260 208 C 290 215 325 210 340 215 C 310 225 280 226 250 222 Z" />
          <path d="M 250 175 C 290 162 330 168 358 182 C 340 172 295 160 250 175 Z" opacity="0.9" />
          {/* Feather line details right */}
          <path d="M 320 182 Q 285 195 255 200" stroke="#0284c7" strokeWidth="2" fill="none" />
          <path d="M 305 194 Q 275 204 252 206" stroke="#0284c7" strokeWidth="2" fill="none" />
        </g>

        {/* Central Rod of Asclepius / Caduceus Staff with Top Knob */}
        <circle cx="250" cy="168" r="9" fill="#ffffff" />
        <rect x="247.5" y="172" width="5" height="130" fill="#ffffff" rx="2.5" />

        {/* Entwined Snakes */}
        <path
          d="M 248 200 C 235 205 228 215 235 225 C 242 235 258 235 265 245 C 272 255 265 265 252 270 C 240 275 235 285 242 295 C 246 300 250 302 250 302"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 252 200 C 265 205 272 215 265 225 C 258 235 242 235 235 245 C 228 255 235 265 248 270 C 260 275 265 285 258 295 C 254 300 250 302 250 302"
          stroke="#0284c7"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Left Pharmacy Capsule */}
        <g transform="translate(206, 242)">
          <rect x="0" y="0" width="18" height="40" rx="9" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
          {/* Half colored */}
          <path d="M 0 9 A 9 9 0 0 1 18 9 L 18 20 L 0 20 Z" fill="#ffffff" />
          <line x1="0" y1="20" x2="18" y2="20" stroke="#ffffff" strokeWidth="2" />
        </g>

        {/* Right Pharmacy Capsule */}
        <g transform="translate(276, 242)">
          <rect x="0" y="0" width="18" height="40" rx="9" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
          {/* Half colored */}
          <path d="M 0 9 A 9 9 0 0 1 18 9 L 18 20 L 0 20 Z" fill="#ffffff" />
          <line x1="0" y1="20" x2="18" y2="20" stroke="#ffffff" strokeWidth="2" />
        </g>

        {/* Open Book at the Base */}
        <g>
          {/* Bottom Dark Blue Page Layer */}
          <path
            d="M 250 336 C 215 320 160 322 130 336 L 126 318 C 160 304 215 304 250 322 C 285 304 340 304 374 318 L 370 336 C 340 322 285 320 250 336 Z"
            fill="#0f172a"
          />

          {/* Middle White/Cyan Layer */}
          <path
            d="M 250 326 C 215 310 160 312 134 322 L 138 308 C 168 296 215 296 250 314 C 285 296 332 296 362 308 L 366 322 C 340 312 285 310 250 326 Z"
            fill="#ffffff"
          />

          {/* Top Vibrant Yellow Pages */}
          <path
            d="M 250 316 C 215 296 170 298 152 304 L 156 295 C 180 286 220 284 250 302 C 280 284 320 286 344 295 L 348 304 C 330 298 285 296 250 316 Z"
            fill="url(#bookYellow)"
          />
        </g>

        {/* ANPEP Text below book */}
        <text
          x="250"
          y="368"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="36"
          fontWeight="900"
          fontFamily="'Times New Roman', serif"
          letterSpacing="4"
        >
          ANPEP
        </text>

        {/* CLASSES Subtitle */}
        <text
          x="250"
          y="384"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="14"
          fontWeight="700"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          letterSpacing="5"
        >
          CLASSES
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
              ANPEP <span className="text-sky-600">CLASSES</span>
            </span>
          </div>
          <span className="text-[10px] text-slate-500 font-semibold tracking-normal mt-0.5">
            All Nepal Pharmacy Exam Preparation
          </span>
          <span className="text-[9px] text-sky-700 font-medium font-nepali">
            फार्मेसी शिक्षामा नेपालकै उत्कृष्ट
          </span>
        </div>
      )}
    </div>
  );
};
