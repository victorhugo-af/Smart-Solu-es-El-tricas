/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, MapPin, Phone, Mail, Clock, ArrowUp, ChevronRight } from 'lucide-react';
import { CONTACT_DATA } from '../data';

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' }
  ];

  const servicesLinks = [
    { name: 'Carregador BYD / Wallbox', href: '#services' },
    { name: 'Energia Solar Fotovoltaica', href: '#services' },
    { name: 'Atendimento Emergencial 24h', href: '#services' },
    { name: 'Reforma de Quadros (QDC)', href: '#services' },
    { name: 'Padrão CPFL Residencial', href: '#services' },
    { name: 'Adequações Técnicas', href: '#services' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand presentation (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-2 group" aria-label="Voltar para o topo">
              <div className="w-9 h-9 bg-brand-yellow text-slate-950 rounded-lg flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 fill-slate-950" />
              </div>
              <div>
                <span className="font-display font-extrabold text-base tracking-tight text-white block leading-none">
                  SMART
                </span>
                <span className="font-sans font-medium text-[9px] tracking-widest text-brand-yellow block uppercase leading-none mt-1">
                  Soluções Elétricas
                </span>
              </div>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sua equipe de eletricistas de altíssima confiança para Araraquara e região. Foco absoluto na conformidade técnica, prazos e integridade do seu imóvel.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-300 font-medium">Plantão emergencial ativo 24h</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs hover:text-brand-yellow transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-brand-yellow transition-colors shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs hover:text-brand-yellow transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-brand-yellow transition-colors shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts summary (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Contatos Rápidos
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <a href={CONTACT_DATA.phone} className="hover:text-brand-yellow transition-colors font-mono font-semibold">
                    {CONTACT_DATA.phoneDisplay}
                  </a>
                  <span className="text-[10px] text-slate-500 block">Atendimento & WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${CONTACT_DATA.email}`} className="hover:text-brand-yellow transition-colors">
                    {CONTACT_DATA.email}
                  </a>
                  <span className="text-[10px] text-slate-500 block">E-mail Comercial</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <a href={CONTACT_DATA.addressMapUrl} target="_blank" referrerPolicy="no-referrer" className="hover:text-brand-yellow transition-colors leading-normal">
                    {CONTACT_DATA.address}
                  </a>
                  <span className="text-[10px] text-slate-500 block">Araraquara - SP</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="h-[1px] bg-slate-900 my-8" />

        {/* Copyright & Legal Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>&copy; {currentYear} Smart Soluções Elétricas. Todos os direitos reservados.</p>
            <p className="text-[10px] text-slate-600 mt-1">CNPJ: Simulação de Atividade Profissional Autônoma / MEI</p>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
            <span className="text-slate-800">|</span>
            
            {/* Scroll back to top button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 border border-slate-850 text-slate-400 hover:text-brand-yellow hover:border-brand-yellow/40 flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-brand-yellow cursor-pointer"
              title="Voltar ao início"
              aria-label="Voltar para o topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
