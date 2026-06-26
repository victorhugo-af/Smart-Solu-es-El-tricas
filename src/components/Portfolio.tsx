/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_DATA, CONTACT_DATA } from '../data';
import { Send } from 'lucide-react';

export default function Portfolio() {
  const getWhatsAppInterestLink = (projectTitle: string) => {
    const baseUrl = CONTACT_DATA.whatsappUrl;
    const cleanTitle = encodeURIComponent(projectTitle);
    return `${baseUrl}&text=Ol%C3%A1%2C%20vi%20o%20projeto%20%22${cleanTitle}%22%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20parecido!`;
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-sans font-semibold text-xs text-brand-yellow uppercase tracking-widest leading-none">
            Portfólio
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nossos Projetos de Sucesso: Qualidade Comprovada
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            Veja com seus próprios olhos o capricho técnico nas nossas instalações na região de Araraquara. Acabamentos perfeitos e segurança homologada.
          </p>
          <div className="h-1.5 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden group hover:border-brand-yellow/30 transition-all duration-300 flex flex-col justify-between h-full shadow-lg relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Image Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[10px] font-bold text-brand-yellow px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Text Information block */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-white transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-900">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end pt-2">
                    <a
                      href={getWhatsAppInterestLink(project.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-extrabold text-slate-950 bg-brand-yellow hover:bg-brand-yellow-dark px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                    >
                      Solicitar Igual
                      <Send className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
