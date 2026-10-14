'use client';

import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LeadFormProps {
  onSuccess?: () => void;
  defaultCourse?: string;
}

export function LeadForm({ onSuccess, defaultCourse }: LeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(defaultCourse || '');
  const [submitted, setSubmitted] = useState(false);

  // Phone masking
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);

    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
      val = `(${val}`;
    }
    setPhone(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 10) return;

    setSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 60 });
    } catch (e) {
      // safe fallback
    }

    if (onSuccess) onSuccess();

    // Trigger WhatsApp redirect with lead details
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Olá! Preenchi o formulário no site da Vértice EAD:\n` +
        `• Nome: ${name}\n` +
        `• Telefone: ${phone}\n` +
        (course ? `• Curso de Interesse: ${course}\n` : '') +
        `Gostaria de mais detalhes sobre valores e bolsas de estudo!`
      );
      window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
    }, 1200);
  };

  return (
    <section id="contato" className="relative py-24 bg-[#060b26] text-white overflow-hidden border-t border-blue-900/30">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Lead Form Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0b1442]/90 to-[#070d2c]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="text-center mb-8">
              <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Atendimento Rápido
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
                Solicite mais informações
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-2.5" />
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Nossos consultores educacionais entrarão em contato para tirar todas as suas dúvidas.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-white">Solicitação enviada com sucesso!</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Estamos abrindo seu atendimento no WhatsApp para envio imediato das propostas e descontos...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-bold text-blue-200 mb-1.5 ml-1">
                    Nome Completo <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-300">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-bold text-blue-200 mb-1.5 ml-1">
                    Telefone / WhatsApp com DDD <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="(00) 90000-0000"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-course" className="block text-xs font-bold text-blue-200 mb-1.5 ml-1">
                    Curso de Maior Interesse (Opcional)
                  </label>
                  <select
                    id="lead-course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#091136] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione ou deixe em branco...</option>
                    <option value="Técnico em Eletrotécnica">Técnico em Eletrotécnica</option>
                    <option value="Técnico em Mecânica">Técnico em Mecânica</option>
                    <option value="Técnico em Segurança do Trabalho">Técnico em Segurança do Trabalho</option>
                    <option value="Certificação por Competência (48h)">Certificação por Competência (48h)</option>
                    <option value="Curso Superior Sequencial">Curso Superior Sequencial</option>
                    <option value="EJA Ensino Médio">EJA Ensino Médio</option>
                    <option value="Curso de Inglês">Curso de Inglês</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm rounded-xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all"
                  >
                    <span>Enviar Mensagem & Receber Bolsa</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-blue-200/70 text-center flex items-center justify-center gap-1.5 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Seus dados estão protegidos sob a LGPD. Não enviamos spam.</span>
                </p>
              </form>
            )}
          </div>

          {/* Right: Promotional Text & Authority */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-blue-200">
              Comece sua transformação
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Transforme seu futuro profissional{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                hoje mesmo
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Junte-se a mais de 5.000 alunos que já estão construindo carreiras sólidas com cursos reconhecidos pelo MEC e habilitados em conselhos como CFT e CRT.
            </p>

            <div className="space-y-3 pt-2 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Até 40% de desconto garantido pelo formulário</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Liberação imediata da plataforma de estudos</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Consultoria gratuita para escolha do curso ideal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
