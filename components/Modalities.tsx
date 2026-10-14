'use client';

import React from 'react';
import { 
  Award, 
  GraduationCap, 
  BookOpen, 
  Globe, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Zap
} from 'lucide-react';

interface ModalitiesProps {
  onSelectModality: (category: string) => void;
  onOpenCompetenceQuiz: () => void;
}

export function Modalities({ onSelectModality, onOpenCompetenceQuiz }: ModalitiesProps) {
  const modalities = [
    {
      category: 'tecnicos',
      title: 'Cursos Técnicos Regulares',
      icon: Award,
      duration: 'A partir de 6 meses',
      highlightBadge: 'Mais Procurado',
      accentColor: 'from-blue-600 to-indigo-600',
      description: 'Formação profissional técnica completa, registrada no SISTEC e com direito a emissão de carteira de registro no CFT/CRT.',
      features: [
        'Certificação reconhecida pelo MEC e SISTEC',
        '100% EAD com flexibilidade total de horários',
        'Emissão de credencial profissional (CFT/CRT)',
        'Acesso imediato a materiais exclusivos e simulados'
      ],
      ctaText: 'Ver Cursos Técnicos'
    },
    {
      category: 'competencia',
      title: 'Cursos por Competência',
      icon: Zap,
      duration: 'Diploma em 48 horas',
      highlightBadge: 'Validação Rápida',
      accentColor: 'from-purple-600 to-indigo-600',
      description: 'Valide sua vivência prática no mercado. Tenha seu diploma técnico reconhecido pelo MEC sem precisar assistir aulas repetitivas.',
      features: [
        'Amparo na Lei Federal nº 9.394/96 Artigo 41',
        'Diploma com validação nacional em 48 horas úteis',
        'Avaliação teórica online e análise documental',
        'Mesmo valor e validade de um curso tradicional'
      ],
      ctaText: 'Avaliar Minha Experiência (48h)'
    },
    {
      category: 'sequenciais',
      title: 'Cursos Superiores Sequenciais',
      icon: BookOpen,
      duration: 'A partir de 6 meses',
      highlightBadge: 'Nível Superior',
      accentColor: 'from-blue-700 to-cyan-600',
      description: 'Cursos de graduação sequencial para quem busca atender exigências de nível superior em concursos públicos em tempo recorde.',
      features: [
        'Certificação de nível superior reconhecida pelo MEC',
        'Aceito em editais policiais (onde previsto)',
        'Formação direcionada e prática em 6 meses',
        'Professores mestres e especialistas do setor'
      ],
      ctaText: 'Ver Cursos Sequenciais'
    },
    {
      category: 'eja',
      title: 'EJA - Ensino Médio & Fundamental',
      icon: GraduationCap,
      duration: 'Conclusão Acelerada',
      highlightBadge: 'Diário Oficial',
      accentColor: 'from-emerald-600 to-teal-600',
      description: 'Termine seus estudos com total tranquilidade, validade garantida pela Secretaria da Educação e publicação oficial.',
      features: [
        'Registro na Secretaria de Educação & Diário Oficial',
        'Conclusão do Ensino Médio ou Fundamental',
        'Estude no seu ritmo sem sair de casa',
        'Acesso imediato à plataforma de estudos'
      ],
      ctaText: 'Ver Modalidade EJA'
    },
    {
      category: 'idiomas',
      title: 'Curso de Inglês Profissional',
      icon: Globe,
      duration: 'Flexível (12 meses)',
      highlightBadge: 'Carreira Global',
      accentColor: 'from-amber-600 to-orange-600',
      description: 'Desenvolva fluência real para entrevistas de emprego, termos técnicos corporativos e negociações com clientes internacionais.',
      features: [
        'Aprenda do zero ao avançado de forma prática',
        'Material didático e simulações de entrevistas',
        'Certificado de conclusão incluso',
        'Melhor custo-benefício do mercado EAD'
      ],
      ctaText: 'Ver Curso de Inglês'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Sua Jornada Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Escolha a modalidade ideal para o seu perfil
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Caminhos formativos rápidos, objetivos e com certificação oficial para alavancar seu salário e sua carreira.
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalities.map((item, idx) => {
            const Icon = item.icon;
            const isCompetence = item.category === 'competencia';

            return (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 ${
                  isCompetence ? 'border-purple-300 ring-2 ring-purple-500/20' : 'border-slate-200'
                }`}
              >
                {/* Top Banner Accent */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${item.accentColor}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.highlightBadge}
                    </span>
                    <div className="flex items-center text-xs font-semibold text-slate-500">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#060b26] p-2.5 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2.5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      if (isCompetence) {
                        onOpenCompetenceQuiz();
                      } else {
                        onSelectModality(item.category);
                      }
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      isCompetence
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 hover:from-purple-500 hover:to-indigo-500'
                        : 'bg-[#060b26] hover:bg-blue-600 text-white shadow-md hover:shadow-lg'
                    }`}
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
