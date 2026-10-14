'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { 
  ChevronDown, 
  Menu, 
  X, 
  BookOpen, 
  Award, 
  Layers, 
  Globe, 
  GraduationCap, 
  FileText, 
  Phone, 
  ShieldCheck,
  UserCheck
} from 'lucide-react';

interface HeaderProps {
  onOpenLeadModal?: () => void;
  onFilterCategory?: (category: string) => void;
}

export function Header({ onOpenLeadModal, onFilterCategory }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courseMenuItems = [
    {
      title: 'Técnicos Regulares',
      desc: 'Formação com CFT/CRT a partir de 6 meses',
      icon: BookOpen,
      category: 'tecnicos',
      badge: 'MEC/SISTEC'
    },
    {
      title: 'Por Competência (48h)',
      desc: 'Valide sua experiência prática com diploma rápido',
      icon: Award,
      category: 'competencia',
      badge: '48 HORAS'
    },
    {
      title: 'Cursos Sequenciais',
      desc: 'Ensino Superior rápido para concursos e carreira',
      icon: Layers,
      category: 'sequenciais',
      badge: 'SUPERIOR'
    },
    {
      title: 'EJA - Ensino Médio',
      desc: 'Conclusão acelerada 100% online com diário oficial',
      icon: GraduationCap,
      category: 'eja',
      badge: 'ACELERADO'
    },
    {
      title: 'Curso de Inglês',
      desc: 'Inglês prático para trabalho e negócios',
      icon: Globe,
      category: 'idiomas',
      badge: 'CARREIRA'
    }
  ];

  const handleSelectCategory = (cat: string) => {
    if (onFilterCategory) {
      onFilterCategory(cat);
    }
    setCoursesDropdownOpen(false);
    setMobileMenuOpen(false);
    
    // Smooth scroll to catalog
    const catalogElement = document.getElementById('catalogo-cursos');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-[41px] z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#060b26]/95 backdrop-blur-md shadow-xl border-b border-blue-900/30 py-3' 
        : 'bg-[#060b26] border-b border-white/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <Logo variant="light" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-semibold text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              Início
            </Link>

            {/* Courses Interactive Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white hover:text-blue-300 rounded-lg hover:bg-white/5 transition-all group"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              >
                <span>Cursos & Modalidades</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#0b133d] border border-blue-500/20 rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300 px-3 py-1.5 border-b border-white/10 mb-1 flex items-center justify-between">
                      <span>Modalidades de Ensino</span>
                      <span className="text-[10px] text-emerald-400 font-medium">100% Online</span>
                    </div>

                    <div className="space-y-1">
                      {courseMenuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.category}
                            onClick={() => handleSelectCategory(item.category)}
                            className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-600/20 transition-all text-left group"
                          >
                            <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-600 text-blue-300 group-hover:text-white transition-colors shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-sm font-bold text-white group-hover:text-blue-200 truncate">
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 shrink-0">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-2 pt-2 border-t border-white/10 px-2 flex items-center justify-between text-xs">
                      <button
                        onClick={() => handleSelectCategory('todos')}
                        className="text-blue-300 hover:text-white font-semibold transition-colors flex items-center gap-1"
                      >
                        Ver todos os cursos →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#credenciamento"
              className="px-4 py-2 text-sm font-semibold text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Validade MEC</span>
            </a>

            <a
              href="#como-funciona"
              className="px-4 py-2 text-sm font-semibold text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              Como Funciona
            </a>

            <a
              href="#faq"
              className="px-4 py-2 text-sm font-semibold text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              Dúvidas
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                const msg = encodeURIComponent('Olá! Gostaria de falar com o Polo Educacional Vértice EAD sobre matrículas.');
                window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-blue-200 hover:text-white bg-blue-900/30 hover:bg-blue-800/40 border border-blue-500/30 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>(31) 99999-9999</span>
            </button>

            <button
              onClick={onOpenLeadModal}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transform hover:-translate-y-0.5 transition-all active:translate-y-0"
            >
              Matricule-se Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] z-50 bg-[#060b26]/98 backdrop-blur-xl border-t border-white/10 overflow-y-auto p-5 animate-in slide-in-from-right duration-200">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-white/5 text-white font-bold text-base flex items-center justify-between"
            >
              <span>Início</span>
            </Link>

            {/* Mobile Courses Accordion */}
            <div className="bg-white/5 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className="w-full px-4 py-3 text-white font-bold text-base flex items-center justify-between"
              >
                <span>Cursos & Modalidades</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileCoursesOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {mobileCoursesOpen && (
                <div className="px-3 pb-3 space-y-1 border-t border-white/5 pt-2">
                  {courseMenuItems.map((item) => (
                    <button
                      key={item.category}
                      onClick={() => handleSelectCategory(item.category)}
                      className="w-full text-left p-2.5 rounded-lg text-sm text-slate-200 hover:bg-blue-600/20 hover:text-white flex items-center justify-between"
                    >
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                        {item.badge}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#credenciamento"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-white/5 text-white font-bold text-base flex items-center gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Validade MEC & SISTEC</span>
            </a>

            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-white/5 text-white font-bold text-base"
            >
              Como Funciona
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-white/5 text-white font-bold text-base"
            >
              Dúvidas Frequentes
            </a>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenLeadModal) onOpenLeadModal();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-xl text-center shadow-lg shadow-blue-600/30"
              >
                Matricule-se com 40% OFF
              </button>

              <button
                onClick={() => {
                  const msg = encodeURIComponent('Olá! Quero tirar dúvidas com um consultor da Vértice EAD.');
                  window.open(`https://wa.me/5531999999999?text=${msg}`, '_blank');
                }}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <Phone className="w-4 h-4" />
                <span>Atendimento no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
