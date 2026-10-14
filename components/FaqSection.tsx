'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/courses';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tudo o que você precisa saber sobre a validação MEC, diplomas, registros e formas de pagamento.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200 hover:border-blue-400"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none"
                >
                  <span className={`${isOpen ? 'text-blue-600' : 'text-slate-900'} leading-snug`}>
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact box */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200 text-sm text-slate-600">
          Ainda possui alguma dúvida específica?{' '}
          <button
            onClick={() => {
              const msg = encodeURIComponent('Olá! Tenho uma dúvida sobre os cursos técnicos da UniConnect EAD.');
              window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
            }}
            className="text-blue-600 font-bold hover:underline"
          >
            Fale diretamente com nossa tutoria no WhatsApp →
          </button>
        </div>

      </div>
    </section>
  );
}
