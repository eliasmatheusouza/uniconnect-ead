'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/courses';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Histórias Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Quem faz UniConnect <span className="text-blue-600">recomenda</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Mais de 5.000 profissionais conquistaram seu diploma oficial e transformaram suas vidas profissionais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1"
            >
              <div className="relative">
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold">{t.role}</p>
                  <p className="text-[11px] text-slate-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
