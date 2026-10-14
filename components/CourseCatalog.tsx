'use client';

import React, { useState, useMemo } from 'react';
import { Course, CourseCategory } from '@/types/course';
import { 
  Search, 
  Clock, 
  BookOpen, 
  ArrowRight, 
  Award, 
  CheckCircle,
  Filter,
  Sparkles
} from 'lucide-react';

interface CourseCatalogProps {
  courses: Course[];
  activeCategory: CourseCategory;
  onSelectCategory: (cat: CourseCategory) => void;
  onOpenCourseModal: (course: Course) => void;
  onEnrollNow: (course: Course) => void;
}

export function CourseCatalog({
  courses,
  activeCategory,
  onSelectCategory,
  onOpenCourseModal,
  onEnrollNow
}: CourseCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'todos', label: 'Todos os Cursos' },
    { id: 'tecnicos', label: 'Técnicos Regulares' },
    { id: 'competencia', label: 'Por Competência (48h)' },
    { id: 'sequenciais', label: 'Cursos Sequenciais' },
    { id: 'eja', label: 'EJA Médio & Fundamental' },
    { id: 'idiomas', label: 'Curso de Inglês' }
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesCategory = activeCategory === 'todos' || c.category === activeCategory;
      const matchesSearch = 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [courses, activeCategory, searchQuery]);

  return (
    <section id="catalogo-cursos" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Catálogo Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Nossos <span className="text-blue-600">Cursos em Destaque</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Conheça as formações mais procuradas pelo mercado de trabalho e garanta sua vaga com até 40% de desconto.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-12">
          {/* Search bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar curso por nome, área ou profissão (ex: Eletrotécnica, CFT, Segurança...)"
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id as CourseCategory)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#060b26] text-white shadow-md shadow-blue-900/20'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.id === 'competencia' && <Sparkles className="w-3.5 h-3.5 text-yellow-400" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">Nenhum curso encontrado</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              Não encontramos resultados para sua busca. Tente outro termo ou limpe os filtros.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('todos');
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700"
            >
              Ver Todos os Cursos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              return (
                <div
                  key={course.id}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-slate-200/80 hover:border-blue-400 hover:-translate-y-1.5"
                >
                  {/* Card Image Banner */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full bg-blue-600 text-white shadow-md">
                        {course.discountBadge}
                      </span>
                      {course.cftRegistration && (
                        <span className="text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full bg-emerald-600 text-white shadow-md">
                          {course.registrationCouncil || 'CFT / CRT'}
                        </span>
                      )}
                    </div>

                    {/* Hover "Ver Detalhes" Button on Image */}
                    <button
                      onClick={() => onOpenCourseModal(course)}
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm shadow flex items-center gap-1"
                    >
                      <span>Ver grade curricular</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Duration / Category chip */}
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-bold border border-blue-100 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="text-slate-400 font-medium">
                        {course.modulesCount} Módulos • {course.workload}h
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 mb-5 line-clamp-3 leading-relaxed flex-1">
                      {course.shortDescription}
                    </p>

                    {/* Council & Certification details */}
                    <div className="border-t border-slate-100 pt-3 mb-4 space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Award className="w-3.5 h-3.5 text-blue-600" />
                        <span>Certificação MEC & SISTEC garantida</span>
                      </div>
                      {course.diplomaDelivery && (
                        <div className="flex items-center gap-1.5 font-bold text-purple-700">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                          <span>Emissão do diploma em 48 horas úteis</span>
                        </div>
                      )}
                    </div>

                    {/* Price Block */}
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <div className="mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-slate-900">
                            R$ {course.currentPrice.toFixed(2).replace('.', ',')}
                          </span>
                          <span className="text-xs line-through text-slate-400">
                            R$ {course.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          ou <strong className="text-slate-800">{course.installmentCount}x de R$ {course.installmentPrice.toFixed(2).replace('.', ',')}</strong> sem juros no cartão
                        </p>
                      </div>

                      {/* Main Action Button */}
                      <button
                        onClick={() => onEnrollNow(course)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-md hover:shadow-lg transition-all"
                      >
                        <span>Matricule-se Agora</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Urgency Indicators */}
                      <div className="flex items-center justify-center gap-4 mt-3 text-[11px] font-semibold text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Vagas limitadas</span>
                        </div>
                        <span className="text-slate-300">•</span>
                        <div className="flex items-center gap-1.5 text-blue-600">
                          <CheckCircle className="w-3 h-3" />
                          <span>Início imediato</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
