'use client';

import React, { useState } from 'react';
import { Course } from '@/types/course';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  QrCode, 
  FileText, 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  Copy,
  Check,
  Zap,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ course, isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Card fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [installments, setInstallments] = useState(12);

  if (!isOpen || !course) return null;

  // Masking helpers
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 9) v = `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9)}`;
    else if (v.length > 6) v = `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`;
    else if (v.length > 3) v = `${v.slice(0, 3)}.${v.slice(3)}`;
    setCpf(v);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    else if (v.length > 0) v = `(${v}`;
    setPhone(v);
  };

  const pixKey = '00020126580014br.gov.bcb.pix0136vertice-ead-pagamentos-oficial-pix520400005303986540' + course.currentPrice.toFixed(2) + '5802BR5925VERTICE POLO EAD6009FABRICIANO62070503***6304E2D1';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleCompleteOrder = () => {
    setStep('success');
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleResetAndClose = () => {
    setStep('info');
    onClose();
  };

  // 5% discount for PIX
  const pixPrice = course.currentPrice * 0.95;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[94vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative my-6">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Ambiente Seguro de Matrícula</h3>
              <p className="text-[11px] text-slate-500">Criptografia SSL de 256 bits • Vértice EAD</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Fechar checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Course Summary strip */}
        <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-100 flex items-center justify-between text-xs sm:text-sm">
          <div>
            <span className="font-bold text-slate-900 block sm:inline">{course.title}</span>
            <span className="text-slate-500 sm:ml-2">({course.duration})</span>
          </div>
          <div className="text-right">
            <span className="font-black text-blue-600 text-base">
              R$ {course.currentPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Personal Data */}
          {step === 'info' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                  Passo 1 de 2
                </span>
                <h4 className="text-xl font-black text-slate-900 mt-2">Dados do Aluno</h4>
                <p className="text-xs text-slate-500">Informe os dados para registro oficial no SISTEC/MEC e emissão do contrato.</p>
              </div>

              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo como no documento"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">CPF *</label>
                    <input
                      type="text"
                      required
                      value={cpf}
                      onChange={handleCpfChange}
                      placeholder="000.000.000-00"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp com DDD *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="(00) 90000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">E-mail para Acesso ao Portal *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  disabled={!name || cpf.length < 14 || phone.length < 14 || !email}
                  onClick={() => setStep('payment')}
                  className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
                >
                  <span>Continuar para Pagamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Payment Selection */}
          {step === 'payment' && (
            <div className="space-y-6">
              <div className="text-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Passo 2 de 2
                </span>
                <h4 className="text-xl font-black text-slate-900 mt-2">Escolha a Forma de Pagamento</h4>
              </div>

              {/* Payment Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-2xl">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === 'pix' ? 'bg-white text-emerald-700 shadow-md' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-emerald-500" />
                  <span>PIX (-5%)</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === 'card' ? 'bg-white text-blue-700 shadow-md' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-blue-500" />
                  <span>Cartão (12x)</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('boleto')}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === 'boleto' ? 'bg-white text-slate-800 shadow-md' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>Boleto</span>
                </button>
              </div>

              {/* PIX TAB */}
              {paymentMethod === 'pix' && (
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Acesso liberado imediatamente após pagamento</span>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Valor à vista com 5% de desconto extra:</div>
                    <div className="text-3xl font-black text-emerald-700">
                      R$ {pixPrice.toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  {/* Simulated QR Code */}
                  <div className="w-36 h-36 bg-white mx-auto rounded-xl p-2.5 shadow-md border border-emerald-200 flex items-center justify-center">
                    <svg className="w-full h-full text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="6" height="6" x="3" y="3" rx="1" />
                      <rect width="6" height="6" x="15" y="3" rx="1" />
                      <rect width="6" height="6" x="3" y="15" rx="1" />
                      <path d="M15 15h.01M18 15h3M15 18v3M18 18h.01M21 21v.01M9 9h.01M9 15h.01M15 9h.01" />
                    </svg>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={pixKey}
                      className="flex-1 px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-500 truncate"
                    />
                    <button
                      onClick={handleCopyPix}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1 transition-colors shrink-0"
                    >
                      {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPix ? 'Copiado!' : 'Copiar Código'}</span>
                    </button>
                  </div>

                  <button
                    onClick={handleCompleteOrder}
                    className="w-full py-4 rounded-xl font-black text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
                  >
                    Já realizei o pagamento via PIX
                  </button>
                </div>
              )}

              {/* CARD TAB */}
              {paymentMethod === 'card' && (
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nome Gravado no Cartão</label>
                    <input
                      type="text"
                      placeholder="COMO NO CARTÃO"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Validade (MM/AA)</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">CVV</label>
                      <input
                        type="password"
                        maxLength={4}
                        placeholder="123"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parcelamento</label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    >
                      <option value={1}>1x de R$ {course.currentPrice.toFixed(2).replace('.', ',')} à vista</option>
                      <option value={3}>3x de R$ {(course.currentPrice / 3).toFixed(2).replace('.', ',')} sem juros</option>
                      <option value={6}>6x de R$ {(course.currentPrice / 6).toFixed(2).replace('.', ',')} sem juros</option>
                      <option value={12}>12x de R$ {course.installmentPrice.toFixed(2).replace('.', ',')} sem juros</option>
                    </select>
                  </div>

                  <button
                    onClick={handleCompleteOrder}
                    className="w-full py-4 rounded-xl font-black text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all"
                  >
                    Confirmar Matrícula no Cartão
                  </button>
                </div>
              )}

              {/* BOLETO TAB */}
              {paymentMethod === 'boleto' && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-4">
                  <FileText className="w-12 h-12 text-slate-400 mx-auto" />
                  <div>
                    <div className="text-xs text-slate-500">Valor total no boleto bancário:</div>
                    <div className="text-2xl font-black text-slate-900">
                      R$ {course.currentPrice.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">
                    O boleto pode levar até 2 dias úteis para compensação bancária. O link para impressão será enviado para seu e-mail e WhatsApp.
                  </p>
                  <button
                    onClick={handleCompleteOrder}
                    className="w-full py-4 rounded-xl font-black text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-lg transition-all"
                  >
                    Gerar Boleto Bancário
                  </button>
                </div>
              )}

              <button
                onClick={() => setStep('info')}
                className="w-full text-xs font-bold text-slate-400 hover:text-slate-600 py-1"
              >
                ← Voltar aos dados cadastrais
              </button>
            </div>
          )}

          {/* STEP 3: Order Completed with Success */}
          {step === 'success' && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  MATRÍCULA CONFIRMADA!
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Parabéns, {name.split(' ')[0]}!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Sua vaga no curso <strong className="text-slate-900">{course.title}</strong> foi garantida com bolsa de 40% OFF. Enviamos os dados de acesso para o e-mail <strong>{email}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 max-w-sm mx-auto space-y-1 text-left">
                <div><strong>Aluno:</strong> {name}</div>
                <div><strong>Curso:</strong> {course.title}</div>
                <div><strong>Registro:</strong> Polo Vértice EAD (SISTEC nº 48643)</div>
                <div><strong>Início das Aulas:</strong> Imediato via Portal do Aluno</div>
              </div>

              <div className="space-y-3 max-w-md mx-auto">
                <button
                  onClick={() => {
                    const msg = encodeURIComponent(
                      `Olá! Acabei de me matricular no curso ${course.title} na Vértice EAD. Gostaria de confirmar meu acesso ao portal!`
                    );
                    window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
                  }}
                  className="w-full py-4 rounded-xl font-black text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Acessar Portal do Aluno via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 rounded-xl font-bold text-xs text-slate-500 hover:text-slate-800"
                >
                  Fechar janela
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
