/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES_DATA, CONTACT_DATA } from '../data';
import { Check, ArrowRight, Home, Briefcase, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type CategoryType = 'todos' | 'residencial' | 'comercial' | 'emergência';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('todos');

  const categories = [
    { id: 'todos', name: 'Todos Serviços', icon: null },
    { id: 'residencial', name: 'Residencial', icon: <Home className="w-4 h-4" /> },
    { id: 'comercial', name: 'Comercial / Empresa', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'emergência', name: 'Emergência 24h', icon: <AlertTriangle className="w-4 h-4 text-brand-yellow" /> },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === 'todos') return true;
    return service.category === activeCategory;
  });

  // Generate customized whatsapp message link for each service to boost conversion
  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const baseUrl = CONTACT_DATA.whatsappUrl;
    const cleanTitle = encodeURIComponent(serviceTitle);
    // Append standard message if supported, otherwise direct link
    return `${baseUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20servi%C3%A7o%3A%20${cleanTitle}`;
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <h2 className="font-sans font-semibold text-xs text-brand-yellow uppercase tracking-widest leading-none">
            Nossos Serviços
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Serviços Especializados Para Sua Casa ou Empresa
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            Oferecemos soluções completas em eletricidade, da troca de lâmpadas LED ao cabeamento comercial robusto e instalação certificada de carregadores de carros elétricos.
          </p>
          <div className="h-1.5 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filtrar serviços por categoria">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls="services-grid"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-yellow text-slate-950 shadow-[0_4px_12px_rgba(250,204,21,0.25)]'
                  : 'bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          id="services-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.article
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`bg-slate-950 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between glow-card relative overflow-hidden group ${
                  service.category === 'emergência'
                    ? 'border-brand-yellow/30 shadow-[0_4px_20px_rgba(250,204,21,0.05)]'
                    : 'border-slate-850'
                }`}
              >
                
                {/* Emergency Tag Badge inside card */}
                {service.category === 'emergência' && (
                  <div className="absolute top-4 right-4 bg-brand-yellow/10 border border-brand-yellow/40 text-brand-yellow text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse-slow">
                    Urgente
                  </div>
                )}

                <div className="space-y-4">
                  {/* Category & Badge */}
                  <span className="text-[10px] font-extrabold text-brand-yellow uppercase tracking-wider block">
                    {service.category === 'emergência' ? 'Plantão 24h' : service.category}
                  </span>

                  {/* Title (H3) */}
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-brand-yellow transition-colors leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <hr className="border-slate-900 my-4" />

                  {/* Features checklist */}
                  <ul className="space-y-2.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Price */}
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider block">
                      Valor Estimado
                    </span>
                    <span className="font-mono text-base sm:text-lg font-bold text-white">
                      {service.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      service.category === 'emergência'
                        ? 'bg-brand-yellow text-slate-950 hover:bg-brand-yellow-dark'
                        : 'bg-slate-900 text-white hover:bg-slate-850 hover:text-brand-yellow border border-slate-800'
                    }`}
                  >
                    Contratar
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Guarantee Banner */}
        <div className="mt-16 bg-slate-950 border border-slate-850 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center shrink-0 text-brand-yellow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white">Precisa de um serviço personalizado ou de um laudo elétrico (ART)?</h4>
              <p className="text-xs sm:text-sm text-slate-400">Nossa equipe elabora projetos sob medida e homologa todos os trâmites legais junto à CPFL.</p>
            </div>
          </div>
          <a
            href={CONTACT_DATA.whatsappUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="bg-brand-yellow hover:bg-brand-yellow-dark text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-colors shrink-0 text-center w-full md:w-auto"
          >
            Fale com o Eletricista
          </a>
        </div>

      </div>
    </section>
  );
}
