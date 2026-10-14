'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

interface SalaryRoiCalculatorProps {
  onExploreCourses?: () => void;
}

export function SalaryRoiCalculator({ onExploreCourses }: SalaryRoiCalculatorProps) {
  const careers = [
    {
      id: 'eletrotécnica',
      name: 'Técnico em Eletrotécnica',
      currentSalaryWithoutCourse: 2100,
      salaryWithCourse: 4850,
      council: 'CFT / CRT',
      demand: 'Altíssima (Setor de Energia & Solar)',
      coursePrice: 999.90
    },
    {
      id: 'mecanica',
      name: 'Técnico em Mecânica',
      currentSalaryWithoutCourse: 2200,
      salaryWithCourse: 4700,
      council: 'CFT / CRT',
      demand: 'Muito Alta (Indústria & Montadoras)',
      coursePrice: 999.90
    },
    {
      id: 'seguranca',
      name: 'Técnico em Segurança do Trabalho',
      currentSalaryWithoutCourse: 2000,
      salaryWithCourse: 4250,
      council: 'MTE / Registro Profissional',
      demand: 'Obrigatória por Lei (NR-4)',
      coursePrice: 999.90
    },
    {
      id: 'administracao',
      name: 'Técnico em Administração',
      currentSalaryWithoutCourse: 1800,
      salaryWithCourse: 3600,
      council: 'CRA',
      demand: 'Alta em todos os setores',
      coursePrice: 999.90
    }
  ];

  const [selectedCareer, setSelectedCareer] = useState(careers[0]);

  const monthlyDifference = selectedCareer.salaryWithCourse - selectedCareer.currentSalaryWithoutCourse;
  const annualGain = monthlyDifference * 12 + monthlyDifference; // 13th salary inclusion
  const daysToPayback = Math.ceil((selectedCareer.coursePrice / (selectedCareer.salaryWithCourse / 30)));

  return (
    <section id="calculadora-salario" className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Retorno Sobre o Investimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Simulador de <span className="text-blue-600">Aumento Salarial</span> & ROI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Veja na prática quanto você passa a ganhar com um diploma técnico registrado no conselho de classe e o tempo recorde para o curso se pagar.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Career Selector Tabs */}
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200/80">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              1. Selecione a profissão técnica desejada:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {careers.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCareer(c)}
                  className={`p-3 rounded-xl text-xs sm:text-sm font-bold text-center transition-all ${
                    selectedCareer.id === c.id
                      ? 'bg-[#060b26] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-200/60 border border-slate-200'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Result Matrix */}
          <div className="p-6 sm:p-10">
            <div className="grid sm:grid-cols-3 gap-6 mb-8 text-center sm:text-left">
              
              {/* Box 1: Without Diploma */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  Sem Diploma Técnico
                </span>
                <div className="text-2xl font-black text-slate-400 mt-1">
                  R$ {selectedCareer.currentSalaryWithoutCourse.toLocaleString('pt-BR')},00
                </div>
                <p className="text-xs text-slate-500 mt-1">Média inicial em funções operacionais</p>
              </div>

              {/* Box 2: With Registered Diploma */}
              <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-300 ring-2 ring-emerald-500/20">
                <span className="text-xs font-extrabold text-emerald-800 uppercase flex items-center justify-center sm:justify-start gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Com Diploma Vértice EAD
                </span>
                <div className="text-3xl font-black text-emerald-700 mt-1">
                  R$ {selectedCareer.salaryWithCourse.toLocaleString('pt-BR')},00
                </div>
                <p className="text-xs text-emerald-800 font-medium mt-1">
                  Piso médio da categoria com {selectedCareer.council}
                </p>
              </div>

              {/* Box 3: Payback speed */}
              <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200">
                <span className="text-xs font-extrabold text-blue-800 uppercase">
                  O Curso se Paga Em:
                </span>
                <div className="text-3xl font-black text-blue-700 mt-1">
                  {daysToPayback} Dias
                </div>
                <p className="text-xs text-blue-800 font-medium mt-1">
                  Apenas alguns dias de trabalho recuperam 100% do valor!
                </p>
              </div>

            </div>

            {/* Total annual increase banner */}
            <div className="bg-gradient-to-r from-[#060b26] to-[#0c1544] text-white p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-yellow-300 font-bold uppercase tracking-wider">
                  Ganho Financeiro Adicional Estimado:
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                  + R$ {annualGain.toLocaleString('pt-BR')},00 por ano
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Dinheiro a mais no bolso para investir na sua família e nos seus sonhos.
                </p>
              </div>

              <button
                onClick={() => {
                  if (onExploreCourses) onExploreCourses();
                  const el = document.getElementById('catalogo-cursos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shrink-0 shadow-lg flex items-center justify-center gap-2"
              >
                <span>Garantir Vaga no Curso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
