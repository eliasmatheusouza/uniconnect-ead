'use client';

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', className = '', size = 'md' }: LogoProps) {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: 'h-8 text-lg',
    md: 'h-10 text-xl',
    lg: 'h-14 text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${sizeClasses[size]} ${className}`}>
      {/* Brand Icon Emblem: Vértice Apex Triangle + Graduation Cap */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563eb] via-[#4f46e5] to-[#7c3aed] p-0.5 shadow-md shadow-blue-500/20 flex items-center justify-center transform transition-transform group-hover:scale-105">
          <div className="w-full h-full bg-[#060b26] rounded-[10px] flex items-center justify-center relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-purple-500/15 to-transparent" />
            
            {/* Geometric Vector Symbol: Vértice (Peak/Vertex) + Cap */}
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Vertex Arrow & Graduation Path */}
              <path d="M12 2L3 9l9 7 9-7-9-7z" className="text-blue-400 stroke-current" />
              <path d="M6 11.5v4.5c0 2 3 3.5 6 3.5s6-1.5 6-3.5v-4.5" className="text-purple-400 stroke-current" />
              <circle cx="12" cy="9" r="1.5" className="fill-yellow-400 stroke-none" />
            </svg>
          </div>
        </div>

        {/* Live indicator dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`${isLight ? 'text-white' : 'text-slate-900'} tracking-tight font-black font-sans`}>
            VÉRTICE<span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">EAD</span>
          </span>
          <span className="text-[9px] uppercase font-black tracking-widest px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-400/30">
            OFICIAL
          </span>
        </div>
        <span className={`text-[9px] font-bold tracking-widest uppercase ${isLight ? 'text-blue-200/75' : 'text-slate-500'} mt-0.5`}>
          POLO EDUCACIONAL • MEC & SISTEC
        </span>
      </div>
    </div>
  );
}
