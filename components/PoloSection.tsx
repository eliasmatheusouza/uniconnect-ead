'use client';

import React from 'react';
import { 
  MapPin, 
  CheckCircle2, 
  HeartHandshake, 
  GraduationCap, 
  Phone, 
  ShieldCheck,
  Building2
} from 'lucide-react';

interface PoloSectionProps {
  onTalkToAdvisor?: () => void;
}

export function PoloSection({ onTalkToAdvisor }: PoloSectionProps) {
  const handleAdvisorClick = () => {
    if (onTalkToAdvisor) {
      onTalkToAdvisor();
      return;
    }
    const msg = encodeURIComponent('Olá! Gostaria de falar com a equipe de tutoria e matrículas do Polo Vértice EAD.');
    window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description & Hub Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#060b26] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Polo Educacional Autorizado • Atendimento em Todo o Brasil</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Polo Educacional{' '}
              <span className="text-blue-600 relative inline-block">
                Vértice EAD
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Somos o <strong className="text-slate-900">Polo Educacional Vértice EAD</strong>, com infraestrutura moderna e alcance em todo o território nacional. Nosso propósito é impulsionar sua carreira com formações técnicas e por competência reconhecidas pelo MEC, com acompanhamento humanizado.
            </p>

            {/* Commitments */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Do primeiro clique até o diploma em mãos
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Nossa equipe pedagógica acompanha sua evolução de ponta a ponta, sem burocracia e com suporte rápido no WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-purple-600/10 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Orientação para registro profissional no CFT/CRT
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Ajudamos você com as orientações necessárias para emissão do seu registro de classe e início imediato de atuação técnica.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Documentação digital com chave de autenticidade
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Certificados e diplomas emitidos com QR Code criptografado para validação em órgãos públicos e empresas privadas.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={handleAdvisorClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#060b26] hover:bg-blue-600 text-white font-black text-sm rounded-xl shadow-lg transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Falar com o time do Polo Educacional</span>
              </button>
            </div>
          </div>

          {/* Right Column: Polo Card Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Nosso Compromisso</h3>
                  <p className="text-xs text-slate-500 font-semibold">Excelência e proximidade com o aluno</p>
                </div>
              </div>

              <div className="py-6 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  "Estaremos ao seu lado desde a matrícula até a conquista do seu diploma. Você está a um passo do sucesso e do conhecimento profissional que transformará sua renda familiar."
                </p>
                
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 space-y-2">
                  <div className="text-xs font-bold text-blue-900 uppercase">Horário de Atendimento:</div>
                  <div className="text-xs text-slate-600 font-medium">Segunda a Sexta: 08:00 às 20:00 • Sábados: 08:00 às 13:00</div>
                  <div className="text-xs text-emerald-700 font-bold flex items-center gap-1.5 pt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Plataforma online com acesso 24h por dia</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">Coordenação Acadêmica</div>
                  <div className="text-[11px] text-slate-500">Polo Coronel Fabriciano - MG</div>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
