'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  Award,
  ExternalLink
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040817] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-1 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Transformamos vidas através da educação técnica e superior a distância com validade nacional. Conectamos conhecimento prático, salários melhores e crescimento profissional.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-300 font-bold bg-white/5 px-3 py-2 rounded-xl border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Credenciada pelo MEC e SISTEC</span>
            </div>
            
            {/* Instagram custom SVG */}
            <div className="pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 text-white transition-all"
                aria-label="Instagram da Vértice EAD"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-xs font-semibold">@vertice_ead</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <a href="#catalogo-cursos" className="hover:text-blue-400 transition-colors">
                  Cursos Técnicos Regulares
                </a>
              </li>
              <li>
                <a href="#simulador-competencia" className="hover:text-blue-400 transition-colors">
                  Cursos por Competência (48h)
                </a>
              </li>
              <li>
                <a href="#calculadora-salario" className="hover:text-blue-400 transition-colors">
                  Simulador de Salário & ROI
                </a>
              </li>
              <li>
                <a href="#credenciamento" className="hover:text-blue-400 transition-colors">
                  Credenciamento MEC & SISTEC
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Modalities */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Modalidades
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>Técnico em Eletrotécnica EAD (CFT)</li>
              <li>Técnico em Mecânica EAD</li>
              <li>Técnico em Segurança do Trabalho</li>
              <li>Técnico em Administração por Competência</li>
              <li>Curso Superior Sequencial (6 meses)</li>
              <li>EJA Ensino Médio 100% Online</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hub Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Polo de Atendimento
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Polo Educacional Vértice • Sede Operacional</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>(31) 99999-9999 (WhatsApp Oficial)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>atendimento@verticeead.com.br</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Vértice EAD • Polo Educacional Nacional. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Lei Federal nº 9.394/1996</span>
            <span>•</span>
            <span>Código Escola SISTEC nº 48643</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
