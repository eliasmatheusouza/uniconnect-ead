'use client';

import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  QrCode, 
  Award, 
  CheckCircle, 
  Star,
  Search,
  BookOpen
} from 'lucide-react';

export function AccreditationSection() {
  const steps = [
    { num: '1', text: 'Acesse o portal público de consulta de unidades do SISTEC/MEC.' },
    { num: '2', text: 'No campo de Estado (UF), selecione o Estado do Pará.' },
    { num: '3', text: 'No campo de Município, selecione a cidade de Xinguará.' },
    { num: '4', text: 'Pressione CTRL + F no teclado para abrir o localizador de texto.' },
    { num: '5', text: 'Digite o Código da Escola "48643" ou "CENTRO EDUCACIONAL CARAJÁS".' },
    { num: '6', text: 'Confira a lista completa de todos os cursos técnicos e superiores autorizados!' }
  ];

  return (
    <section id="credenciamento" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Credenciamento Oficial MEC & SISTEC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Qualidade & Validade <span className="text-blue-600">Reconhecida</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Nossos cursos possuem credenciamento oficial do SISTEC e do Ministério da Educação (MEC), garantindo certificados válidos em todo território nacional e registro em conselhos de classe (CFT, CRT, CRA).
          </p>
        </div>

        {/* 2-Column Credential Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left: SISTEC Card with QR Code */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#060b26] via-[#091444] to-[#04081c] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl border border-blue-900/40 flex flex-col justify-between">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 text-blue-300 shadow-inner">
                <Award className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-1">
                SISTEC
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-3" />
              <p className="text-xs text-blue-200 font-medium max-w-xs mx-auto">
                Sistema Nacional de Informações da Educação Profissional e Tecnológica
              </p>
            </div>

            {/* QR Code and verification box */}
            <div className="my-6 bg-white/10 border border-white/15 rounded-2xl p-6 text-center backdrop-blur-md relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3 text-xs font-bold text-blue-200 tracking-wider">
                <QrCode className="w-4 h-4 text-emerald-400" />
                <span>CONSULTA PÚBLICA DIRETA</span>
              </div>

              {/* QR Code Graphic Frame */}
              <div className="w-36 h-36 mx-auto bg-white rounded-2xl p-2.5 shadow-2xl flex items-center justify-center">
                <svg
                  className="w-full h-full text-slate-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="6" height="6" x="3" y="3" rx="1" />
                  <rect width="6" height="6" x="15" y="3" rx="1" />
                  <rect width="6" height="6" x="3" y="15" rx="1" />
                  <path d="M15 15h.01M18 15h3M15 18v3M18 18h.01M21 21v.01M9 9h.01M9 15h.01M15 9h.01" />
                </svg>
              </div>

              <div className="mt-3 text-[11px] text-slate-300 font-semibold uppercase tracking-wider">
                Aponte a câmera ou clique abaixo
              </div>
            </div>

            {/* Official MEC button */}
            <a
              href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#060b26] hover:bg-slate-100 font-black py-4 px-6 rounded-2xl shadow-xl transform hover:-translate-y-0.5 transition-all relative z-10 text-sm"
            >
              <span>Verificar no Portal Oficial do MEC</span>
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </a>
          </div>

          {/* Right: Step-by-Step Instructions & School Code */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              {/* Badge */}
              <div className="inline-block px-3.5 py-1.5 bg-[#060b26] text-white rounded-xl text-xs font-black tracking-wide mb-4">
                CREDENCIAMENTO SISTEC / MEC Nº 48643
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                Como Consultar Nossa Autorização
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Passo a passo transparente para verificar o registro legal da instituição mantenedora parceira:
              </p>

              {/* Steps list */}
              <div className="space-y-3.5">
                {steps.map((st) => (
                  <div key={st.num} className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {st.num}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {st.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* School Code Highlight box */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 bg-white rounded-2xl p-5 border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Código Oficial da Escola no SISTEC</span>
                </div>
                <div className="text-3xl font-black text-[#060b26] tracking-tight mt-0.5">
                  48643
                </div>
                <div className="text-xs text-slate-600 font-semibold">
                  CENTRO EDUCACIONAL CARAJÁS • POLO VÉRTICE EAD
                </div>
              </div>

              <a
                href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>Acessar Consulta</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Banner of Guarantee */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-200/60 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
            ))}
            <span className="ml-2 font-black text-slate-900 text-base">Certificação de Excelência Nacional</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Com nosso credenciamento oficial no SISTEC, você tem a tranquilidade de receber uma formação válida em todos os 26 estados e no Distrito Federal, aceita em empresas públicas e privadas, concursos e órgãos reguladores.
          </p>
        </div>

      </div>
    </section>
  );
}
