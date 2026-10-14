'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export function LiveEnrollmentTicker() {
  const notifications = [
    { name: 'Marcos S.', course: 'Técnico em Eletrotécnica EAD', city: 'Belo Horizonte - MG', time: 'há 3 minutos' },
    { name: 'Fabiana R.', course: 'Técnico em Segurança do Trabalho', city: 'São Paulo - SP', time: 'há 6 minutos' },
    { name: 'Diego A.', course: 'Administração por Competência (Diploma 48h)', city: 'Curitiba - PR', time: 'há 11 minutos' },
    { name: 'Lucas M.', course: 'Técnico em Mecânica Industrial EAD', city: 'Joinville - SC', time: 'há 14 minutos' },
    { name: 'Patrícia N.', course: 'Curso Superior Sequencial em Gestão', city: 'Goiânia - GO', time: 'há 18 minutos' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closedPermanently, setClosedPermanently] = useState(false);

  useEffect(() => {
    if (closedPermanently) return;

    // Show after initial 4 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Interval to cycle every 12 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [closedPermanently, notifications.length]);

  if (closedPermanently || !visible) return null;

  const current = notifications[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm hidden md:flex items-center gap-3 bg-white/95 border border-slate-200/90 shadow-2xl rounded-2xl p-3.5 backdrop-blur-md animate-in slide-in-from-bottom-4 duration-300">
      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0 pr-2">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span className="font-bold text-slate-900">{current.name}</span>
          <span>{current.time}</span>
        </div>
        <p className="text-xs font-semibold text-blue-600 truncate">
          {current.course}
        </p>
        <span className="text-[10px] text-slate-400 block">
          Matrícula confirmada • {current.city}
        </span>
      </div>

      <button
        onClick={() => setClosedPermanently(true)}
        className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600"
        aria-label="Fechar notificação"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
