'use client';

import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Users, 
  Star, 
  Sparkles,
  Zap
} from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onOpenCompetenceQuiz: () => void;
}

export function Hero({ onExploreCourses, onOpenCompetenceQuiz }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060b26] via-[#091238] to-[#0d1b4d] text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-sm shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cursos Técnicos 100% Online • Reconhecidos pelo MEC</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Formação profissional de{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                alta qualidade
              </span>{' '}
              para o mercado de trabalho
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Cursos Técnicos Regulares, Validação por Competência com{' '}
              <strong className="text-yellow-300 font-bold">Diploma em até 48 horas</strong>, EJA e Superior Sequencial com registro oficial no SISTEC/MEC e habilitação para emissão de CFT/CRT em todo o Brasil.
            </p>

            {/* High-Impact CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] transform transition-all active:scale-95 group"
              >
                <span>Conheça Nossos Cursos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCompetenceQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-bold text-blue-200 hover:text-white bg-white/5 hover:bg-white/10 border border-blue-400/30 hover:border-blue-300/50 rounded-xl backdrop-blur-sm transition-all"
              >
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>Simulador de Competência 48h</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Credenciado MEC & SISTEC</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direito a CFT, CRT e CRA</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Início Imediato 100% Online</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-40 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-[#0c1544] border border-blue-400/30 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
                
                {/* Header of Showcase Card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-blue-600/30 border border-blue-400/30 text-blue-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-white leading-tight">
                        Polo Educacional Vértice EAD
                      </h3>
                      <p className="text-[11px] text-blue-300 font-medium">
                        Certificação Válida em Todo Brasil
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" />
                    MEC ATIVO
                  </span>
                </div>

                {/* Hero Showcase Image with student and modern overlay */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-t from-slate-900 to-slate-800 border border-white/10 mb-5 group">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="Estudantes e profissionais formados na UniConnect"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b26] via-transparent to-transparent opacity-90" />

                  {/* Floating Micro-Badge 1 */}
                  <div className="absolute bottom-3 left-3 bg-[#060b26]/90 border border-white/15 backdrop-blur-md rounded-xl p-2.5 shadow-lg flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white">Diploma em 48 Horas</div>
                      <div className="text-[10px] text-slate-300">Para profissionais com experiência</div>
                    </div>
                  </div>

                  {/* Floating Micro-Badge 2 */}
                  <div className="absolute top-3 right-3 bg-[#060b26]/90 border border-white/15 backdrop-blur-md rounded-xl px-2.5 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-bold text-yellow-300">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>4.9 / 5.0 Avaliações</span>
                  </div>
                </div>

                {/* Live Stats row */}
                <div className="grid grid-cols-3 gap-2.5 text-center pt-2">
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <div className="text-lg sm:text-xl font-black text-white">5k+</div>
                    <div className="text-[10px] sm:text-[11px] text-blue-200/80 font-medium leading-tight">
                      Alunos Formados
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <div className="text-lg sm:text-xl font-black text-emerald-400">98.7%</div>
                    <div className="text-[10px] sm:text-[11px] text-blue-200/80 font-medium leading-tight">
                      Taxa de Aprovação
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <div className="text-lg sm:text-xl font-black text-blue-400">48643</div>
                    <div className="text-[10px] sm:text-[11px] text-blue-200/80 font-medium leading-tight">
                      Código no MEC
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
