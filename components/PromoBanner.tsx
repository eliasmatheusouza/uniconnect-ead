'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock, Zap } from 'lucide-react';

interface PromoBannerProps {
  onClaimDiscount?: () => void;
}

export function PromoBanner({ onClaimDiscount }: PromoBannerProps) {
  // 15-minute countdown timer that resets
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleWhatsAppClick = () => {
    if (onClaimDiscount) {
      onClaimDiscount();
      return;
    }
    const msg = encodeURIComponent('Olá! Quero garantir meus 40% de desconto na matrícula de um curso técnico na Vértice EAD!');
    window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
  };

  return (
    <aside aria-label="Aviso promocional" className="sticky top-0 z-50 bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#4f46e5] text-white py-2 px-3 sm:px-4 shadow-md border-b border-purple-400/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 flex-nowrap text-xs sm:text-sm">
        {/* Left message with live pulse */}
        <div className="flex items-center gap-2 font-medium overflow-hidden whitespace-nowrap">
          <span className="hidden sm:inline-flex items-center justify-center p-1 bg-white/20 rounded-md">
            <Zap className="w-3.5 h-3.5 text-yellow-300" />
          </span>
          <span className="font-bold tracking-tight text-white flex items-center gap-1.5 truncate">
            <span>Você acaba de ganhar</span>
            <span className="bg-white/20 px-1.5 py-0.5 rounded text-yellow-300 font-extrabold uppercase">
              40% OFF
            </span>
            <span className="hidden md:inline">+ Início Imediato</span>
          </span>
        </div>

        {/* Center Countdown Clock */}
        <div className="hidden lg:flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-purple-100 border border-white/10">
          <Clock className="w-3 h-3 text-purple-300 animate-pulse" />
          <span>EXPIRA EM:</span>
          <span className="text-yellow-300 font-bold">{formattedTime}</span>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={handleWhatsAppClick}
          className="group flex items-center gap-1.5 sm:gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-full shadow-lg hover:shadow-emerald-500/30 transform hover:scale-105 transition-all duration-200 whitespace-nowrap shrink-0 active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span className="hidden sm:inline">GARANTIR BOLSA AGORA</span>
          <span className="sm:hidden">GARANTIR</span>
        </button>
      </div>
    </aside>
  );
}
