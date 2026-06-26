/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Sparkles, Award, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import { BRAND_VALUES, STATS_DATA } from '../data';
import { motion } from 'motion/react';

export default function About() {
  const iconList = [
    <Shield className="w-6 h-6 text-brand-yellow" />,
    <Sparkles className="w-6 h-6 text-brand-yellow" />,
    <Award className="w-6 h-6 text-brand-yellow" />,
    <TrendingUp className="w-6 h-6 text-brand-yellow" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Decorative side accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <h2 className="font-sans font-semibold text-xs text-brand-yellow uppercase tracking-widest leading-none">
            Sobre Nós
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quem Somos e Por Que Escolher a Smart Soluções Elétricas
          </p>
          <div className="h-1.5 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* About Left: Text story & stats */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
              Trabalho limpo, técnico e com foco total na segurança da sua família ou negócio.
            </h3>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                A <strong className="text-white">Smart Soluções Elétricas</strong> surgiu para preencher uma lacuna no setor elétrico em Araraquara e região: a falta de atendimento técnico altamente qualificado, pontual e transparente. Nós valorizamos a excelência técnica e o respeito aos prazos.
              </p>
              <p>
                Seja para instalar um simples chuveiro, adequar o padrão CPFL de entrada ou dimensionar a complexa infraestrutura de recarga veicular BYD, nós aplicamos estritamente as regras da <strong className="text-white">NBR 5410</strong>. Não fazemos improvisações perigosas; nossa prioridade é a blindagem e a segurança física das instalações elétricas.
              </p>
            </div>

            {/* Quick Check List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0" />
                Laudos e ART Elétrica inclusos
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0" />
                Ferramental completo de ponta
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0" />
                Garantia formalizada em contrato
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0" />
                Atendimento 100% legalizado
              </li>
            </ul>

            {/* Stats Block */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-900">
              {STATS_DATA.map((stat, index) => (
                <div key={index} className="text-center sm:text-left space-y-1">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-brand-yellow leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* About Right: Brand values cards layout */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-sm text-slate-300 uppercase tracking-wider mb-6 pl-2 border-l-2 border-brand-yellow">
              Nossos Pilares de Atuação
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRAND_VALUES.map((value, index) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-850 p-6 rounded-2xl space-y-3 glow-card transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-slate-950 transition-colors duration-300">
                    {iconList[index % iconList.length]}
                  </div>
                  <h5 className="font-display font-bold text-base text-white">
                    {value.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Safety Seal Highlight */}
            <div className="mt-6 bg-gradient-to-r from-brand-yellow/10 to-transparent border border-brand-yellow/20 rounded-2xl p-4 flex gap-4 items-center">
              <Zap className="w-8 h-8 text-brand-yellow shrink-0 animate-pulse-slow fill-brand-yellow" />
              <div>
                <h5 className="font-bold text-xs text-brand-yellow uppercase tracking-wider">Compromisso Registrado</h5>
                <p className="text-xs text-slate-300 mt-0.5">Sua casa segura contra surtos, curtos e acidentes graves.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
