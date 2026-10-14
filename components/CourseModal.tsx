'use client';

import React, { useState } from 'react';
import { Course } from '@/types/course';
import { 
  X, 
  Clock, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ChevronDown, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight,
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export function CourseModal({ course, onClose, onEnroll }: CourseModalProps) {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  if (!course) return null;

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  const handleWhatsAppInquiry = () => {
    const msg = encodeURIComponent(
      `Olá! Tenho interesse no curso ${course.title} da Vértice EAD. Gostaria de saber mais sobre a grade curricular e a emissão do diploma!`
    );
    window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative my-6">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
              {course.categoryLabel}
            </span>
            {course.cftRegistration && (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1">
                <Award className="w-3 h-3" />
                {course.registrationCouncil || 'CFT / CRT'}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Fechar detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero inside Modal */}
        <div className="bg-gradient-to-r from-[#060b26] via-[#0d164d] to-[#060b26] text-white p-6 sm:p-8">
          <div className="max-w-2xl">
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4" />
              {course.discountBadge} • Início Imediato
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3">
              {course.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {course.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-blue-200">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>{course.workload} Horas • {course.modulesCount} Módulos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Válido MEC & SISTEC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Price & Immediate Enrollment CTA Box */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Investimento com Bolsa Exclusiva
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-black text-slate-900">
                  R$ {course.currentPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm line-through text-slate-400">
                  R$ {course.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                ou <strong className="text-slate-800">{course.installmentCount}x de R$ {course.installmentPrice.toFixed(2).replace('.', ',')}</strong> sem juros no cartão
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => onEnroll(course)}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all"
              >
                <span>Matricular com 40% OFF</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tirar Dúvidas</span>
              </button>
            </div>
          </div>

          {/* Syllabus Modules Accordion */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Conteúdo Programático & Módulos</span>
              </h3>
              <span className="text-xs text-slate-500 font-semibold">
                {course.modules.length} Módulos Estruturados
              </span>
            </div>

            <div className="space-y-3">
              {course.modules.map((mod, idx) => {
                const isOpen = openModuleIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                            {mod.title}
                          </h4>
                          <span className="text-xs text-slate-500">
                            {mod.lessonsCount} aulas • {mod.workloadHours} horas de conteúdo
                          </span>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 bg-slate-50 border-t border-slate-100 text-xs sm:text-sm text-slate-700 space-y-2 animate-in fade-in duration-150">
                        <div className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1">
                          Tópicos desenvolvidos:
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mod.topics.map((t, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Career & Job Opportunities */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>Onde você poderá atuar</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {course.careerProspects.map((cp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{cp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-600" />
                <span>Requisitos & Certificação</span>
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p>
                  <strong>Pré-requisito:</strong> {course.prerequisites}
                </p>
                <p>
                  <strong>Registro Legal:</strong> Reconhecimento oficial MEC e SISTEC (Escola nº 48643).
                </p>
                {course.cftRegistration && (
                  <p className="text-emerald-700 font-bold">
                    ✓ Habilitação para registro profissional no conselho de classe ({course.registrationCouncil}).
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
