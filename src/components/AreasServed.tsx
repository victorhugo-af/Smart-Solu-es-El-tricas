/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CITIES_SERVED, CONTACT_DATA } from '../data';
import { MapPin, Zap, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function AreasServed() {
  // Estimated arrival times for emergencies in each region
  const getArrivalEstimate = (city: string) => {
    switch (city) {
      case 'Araraquara':
        return 'Em até 30 min';
      case 'Américo Brasiliense':
      case 'Bueno de Andrada':
        return 'Em até 40 min';
      case 'Santa Lúcia':
      case 'Rincão':
      case 'Gavião Peixoto':
        return 'Em até 50 min';
      case 'Matão':
      case 'São Carlos':
        return 'Em até 60 min';
      default:
        return 'Consulte horário';
    }
  };

  return (
    <section id="areas-served" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-sans font-semibold text-xs text-brand-yellow uppercase tracking-widest leading-none">
            Cobertura
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Atendemos Você em Toda a Região
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            Nossa base operacional em Araraquara permite um deslocamento ágil e rápido para residências, condomínios fechados, chácaras e plantas industriais em toda a microrregião.
          </p>
          <div className="h-1.5 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Areas Left: Cities Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CITIES_SERVED.map((city) => (
                <div
                  key={city}
                  className="bg-slate-900 border border-slate-850 p-4 rounded-xl flex items-start gap-3 glow-card group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0 group-hover:bg-brand-yellow group-hover:text-slate-950 transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-white group-hover:text-brand-yellow transition-colors leading-tight">
                      {city}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 block mt-1">
                      {getArrivalEstimate(city)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage Disclaimer */}
            <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 flex gap-4 items-start max-w-xl">
              <ShieldAlert className="w-6 h-6 text-brand-yellow shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Está em outra cidade?</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Para projetos maiores, fazendas, sistemas de energia solar fotovoltaica ou subestações elétricas, nossa equipe técnica realiza atendimentos fora da microrregião padrão sob consulta prévia.
                </p>
              </div>
            </div>
          </div>

          {/* Areas Right: Interactive Map Style Visualizer (Vector/CSS representation) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900 border border-slate-850 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Radar Circle Scanning Simulation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-brand-yellow/10 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-brand-yellow/20 pointer-events-none animate-pulse-slow" />
              
              {/* Map Title info */}
              <div className="space-y-1 relative z-10">
                <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest block">
                  Logística Operacional
                </span>
                <h4 className="font-display font-bold text-lg text-white">
                  Prontidão e Deslocamento Ágil
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Contamos com veículos de serviço equipados com ferramentas de medição de última geração (Fluke, Minipa) e uma ampla gama de materiais de reposição homologados para solução imediata em visitas de emergência.
                </p>
              </div>

              {/* Bullet points of reliability */}
              <div className="space-y-3 relative z-10 pt-4 border-t border-slate-850">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-200">Veículo equipado com estoque de disjuntores DIN e cabos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-200">Eletricistas credenciados com NR10 e NR35</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-200">Acompanhamento em tempo real via WhatsApp</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-xs"
                >
                  <Zap className="w-4 h-4 fill-slate-950 stroke-none" />
                  Chamar Eletricista de Plantão
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
