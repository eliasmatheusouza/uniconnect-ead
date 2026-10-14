'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck, 
  RotateCcw,
  MessageCircle,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CompetenceQuizProps {
  isOpen?: boolean;
  onClose?: () => void;
  isInline?: boolean;
}

export function CompetenceQuiz({ isOpen = true, onClose, isInline = false }: CompetenceQuizProps) {
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState('');
  const [experienceTime, setExperienceTime] = useState('');
  const [proofType, setProofType] = useState('');

  const areas = [
    'Eletrotécnica & Elétrica Industrial',
    'Mecânica Industrial & Usinagem',
    'Segurança do Trabalho (SST)',
    'Administração & Gestão Empresarial',
    'Agropecuária & Agronomia',
    'Análises Clínicas & Laboratório',
    'Edificações & Construção Civil',
    'Logística & Cadeia de Suprimentos'
  ];

  const experienceOptions = [
    { label: 'Menos de 1 ano de experiência', eligible: false, note: 'Recomendamos o curso técnico regular de 6 meses' },
    { label: 'Entre 1 e 2 anos comprovados', eligible: true, note: 'Elegível para avaliação e diploma em 48h' },
    { label: 'Mais de 2 anos de experiência sólida', eligible: true, note: 'Altamente elegível para certificação imediata' },
    { label: 'Mais de 5 anos como encarregado / profissional', eligible: true, note: 'Elegibilidade prioritária' }
  ];

  const proofOptions = [
    'Carteira de Trabalho (CTPS assinada)',
    'Contrato de Prestação de Serviços ou CNPJ/MEI',
    'Declaração formal da empresa / Empregador',
    'Certificados de cursos livres anteriores e experiência prática'
  ];

  const handleFinish = () => {
    setStep(4);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedArea('');
    setExperienceTime('');
    setProofType('');
  };

  const handleClaimViaWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Fiz a avaliação de competência no site da Vértice EAD:\n` +
      `• Área: ${selectedArea}\n` +
      `• Tempo de Experiência: ${experienceTime}\n` +
      `• Comprovante: ${proofType}\n\n` +
      `Fui aprovado no teste e quero dar entrada no meu Diploma Técnico em 48 Horas reconhecido pelo MEC!`
    );
    window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
  };

  const content = (
    <div className="bg-gradient-to-br from-[#060b26] via-[#0c1544] to-[#121f5c] text-white rounded-3xl p-6 sm:p-10 border border-purple-500/30 shadow-2xl relative overflow-hidden">
      {/* Background cyber accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Close button if in modal mode */}
      {!isInline && onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Fechar simulador"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-black uppercase tracking-wider mb-3">
          <Zap className="w-3.5 h-3.5 text-yellow-300" />
          <span>Lei Federal nº 9.394/96 Artigo 41 • SISTEC/MEC</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
          Simulador de <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Competência Profissional</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          Descubra em menos de 1 minuto se você tem direito a receber seu Diploma Técnico reconhecido pelo MEC em até 48 horas úteis através da sua experiência de trabalho.
        </p>

        {/* Step Progress indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                step === i
                  ? 'w-10 bg-yellow-400'
                  : step > i
                  ? 'w-6 bg-emerald-400'
                  : 'w-6 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1: Area Selection */}
      {step === 1 && (
        <div className="max-w-xl mx-auto relative z-10 space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-center text-white mb-2">
            1. Em qual destas áreas você possui experiência prática de trabalho?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all border flex items-center justify-between ${
                  selectedArea === area
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                }`}
              >
                <span>{area}</span>
                {selectedArea === area && <CheckCircle2 className="w-4 h-4 shrink-0 text-yellow-300" />}
              </button>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              disabled={!selectedArea}
              onClick={() => setStep(2)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-black text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Avançar para Etapa 2</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Experience Time */}
      {step === 2 && (
        <div className="max-w-xl mx-auto relative z-10 space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-center text-white mb-2">
            2. Há quanto tempo você atua ou já atuou nessa área?
          </h3>
          <div className="space-y-2.5">
            {experienceOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setExperienceTime(opt.label)}
                className={`w-full p-4 rounded-xl text-left transition-all border flex flex-col sm:flex-row sm:items-center justify-between gap-1 ${
                  experienceTime === opt.label
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg ring-2 ring-blue-400'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-white">{opt.label}</div>
                  <div className="text-xs text-blue-200/80">{opt.note}</div>
                </div>
                {experienceTime === opt.label && <CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0 self-end sm:self-center" />}
              </button>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white"
            >
              ← Voltar
            </button>
            <button
              disabled={!experienceTime}
              onClick={() => setStep(3)}
              className="px-6 py-3 rounded-xl font-black text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
            >
              <span>Avançar para Etapa 3</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Proof of Experience */}
      {step === 3 && (
        <div className="max-w-xl mx-auto relative z-10 space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-center text-white mb-2">
            3. Como você pode comprovar sua experiência profissional?
          </h3>
          <div className="space-y-2.5">
            {proofOptions.map((proof) => (
              <button
                key={proof}
                onClick={() => setProofType(proof)}
                className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between gap-2 ${
                  proofType === proof
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg ring-2 ring-blue-400'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-yellow-300 shrink-0" />
                  <span className="font-semibold text-sm">{proof}</span>
                </div>
                {proofType === proof && <CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0" />}
              </button>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setStep(2)}
              className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white"
            >
              ← Voltar
            </button>
            <button
              disabled={!proofType}
              onClick={handleFinish}
              className="px-7 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 shadow-xl shadow-emerald-500/25"
            >
              <span>Calcular Resultado Final</span>
              <Zap className="w-4 h-4 text-yellow-300" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Approved Result */}
      {step === 4 && (
        <div className="max-w-xl mx-auto relative z-10 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-2">
              RESULTADO: PRÉ-APROVADO COM SUCESSO!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Você tem direito ao Diploma Técnico em 48 Horas!
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Com base na sua experiência em <strong className="text-yellow-300">{selectedArea}</strong> e tempo de atuação, você atende todos os critérios do Art. 41 da Lei de Diretrizes e Bases da Educação Nacional.
            </p>
          </div>

          {/* Verification Specs Box */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 text-left space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-emerald-300 font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Diploma com validade jurídica nacional e registro no SISTEC/MEC</span>
            </div>
            <div className="flex items-center gap-2 text-blue-300 font-bold">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Prazo de homologação estimado: 48 horas úteis após validação documental</span>
            </div>
            <div className="flex items-center gap-2 text-purple-300 font-bold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Direito imediato a registro profissional (CFT / CRT / CRA / MTE)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleClaimViaWhatsApp}
              className="flex-1 py-4 px-6 rounded-xl font-black text-sm bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 transform hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>VALIDAR DIPLOMA AGORA NO WHATSAPP</span>
            </button>

            <button
              onClick={handleReset}
              className="py-3 px-4 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Novo Teste</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );

  if (isInline) {
    return (
      <section id="simulador-competencia" className="py-16 bg-[#060b26]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {content}
        </div>
      </section>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="w-full max-w-2xl my-8">
        {content}
      </div>
    </div>
  );
}
