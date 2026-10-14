'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const msg = encodeURIComponent(
      'Olá! Estou navegando no site da Vértice EAD e gostaria de tirar dúvidas sobre os cursos técnicos e bolsas com 40% de desconto!'
    );
    window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#060b26] text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-2xl border border-white/10 animate-in slide-in-from-right duration-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Dúvidas? Fale com a Tutoria no WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white"
            aria-label="Fechar balão"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with Pulse Effect */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
        <button
          onClick={handleClick}
          className="relative w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 group"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
