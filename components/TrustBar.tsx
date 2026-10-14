'use client';

import React from 'react';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  MessageSquare,
  ShieldAlert
} from 'lucide-react';

export function TrustBar() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Cursos de Alta Qualidade',
      description: 'Matrizes curriculares atualizadas e alinhadas às reais exigências industriais e corporativas.',
      tag: 'Prático & Moderno'
    },
    {
      icon: Users,
      title: 'Professores Especialistas',
      description: 'Aprenda com engenheiros, tecnólogos e gestores atuantes e renomados no mercado.',
      tag: 'Corpo Docente Ativo'
    },
    {
      icon: Clock,
      title: 'Flexibilidade Total',
      description: 'Estude no seu próprio ritmo, 24 horas por dia, de qualquer celular, tablet ou computador.',
      tag: '100% Online'
    },
    {
      icon: Award,
      title: 'Certificado Válido MEC',
      description: 'Certificação oficial com registro no SISTEC, válida em todo o Brasil e com direito a CFT/CRT.',
      tag: 'Validade Nacional'
    }
  ];

  const stats = [
    { number: '100%', label: 'Online & Sem Horários Fixos', icon: Clock },
    { number: '5.000+', label: 'Profissionais Formados', icon: Users },
    { number: '98.7%', label: 'Índice de Aprovação', icon: CheckCircle },
    { number: '24/7', label: 'Suporte & Acompanhamento', icon: MessageSquare }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Diferenciais Exclusivos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Por que escolher a <span className="text-blue-600">Vértice EAD</span> para sua formação?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Oferecemos uma experiência completa de aprendizado com foco em alta empregabilidade, rapidez e certificação oficial.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-blue-400 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#060b26] p-3 inline-flex items-center justify-center text-white mb-6 shadow-md shadow-blue-900/10 group-hover:scale-110 group-hover:bg-blue-600 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full inline-block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Garantia de Qualidade Vértice EAD</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Stats Banner */}
        <div className="bg-gradient-to-r from-[#060b26] via-[#0b1442] to-[#060b26] rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-900/40 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((st, i) => {
              const StIcon = st.icon;
              return (
                <div key={i} className={`text-center ${i > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-blue-400 mb-3">
                    <StIcon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {st.number}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {st.label}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs sm:text-sm text-blue-200/80">
            Cursos amparados pela Lei Federal nº 9.394/1996 e reconhecidos no SISTEC/MEC em todo o território nacional.
          </div>
        </div>

      </div>
    </section>
  );
}
