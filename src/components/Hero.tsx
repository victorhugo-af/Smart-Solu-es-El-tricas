/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Shield, Clock, ArrowUpRight, Zap } from 'lucide-react';
import { CONTACT_DATA } from '../data';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:py-36 min-h-[90vh] flex items-center overflow-hidden grid-pattern"
    >
      {/* Background Decorative Glow Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-brand-yellow-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Text Content */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Status Badges */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow">
                <Clock className="w-3.5 h-3.5 animate-pulse-slow" />
                Aberto 24 Horas
              </span>
              <a
                href={CONTACT_DATA.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                title="Ver nossas avaliações no Google"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900 border border-slate-800 text-slate-100 hover:border-brand-yellow/50 transition-colors"
              >
                <div className="flex items-center text-brand-yellow">
                  <Star className="w-3.5 h-3.5 fill-brand-yellow" />
                  <span className="font-extrabold ml-1">5.0</span>
                </div>
                <span className="text-slate-400">Araraquara & Região</span>
              </a>
            </div>

            {/* Main Title (H1) */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Smart Soluções Elétricas:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-white">
                Confiança e Segurança 24h
              </span>{' '}
              em Araraquara.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Seu eletricista credenciado para manutenções rápidas, instalações complexas e projetos industriais ou comerciais de alto nível. Segurança absoluta para sua casa ou empresa.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                id="hero-whatsapp-main-cta"
                href={CONTACT_DATA.whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-brand-yellow hover:bg-brand-yellow-dark text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(250,204,21,0.3)] hover:shadow-[0_8px_30px_rgba(250,204,21,0.45)] group text-center"
              >
                Solicite um Orçamento via WhatsApp
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                id="hero-services-cta"
                href="#services"
                className="bg-slate-900 hover:bg-slate-850 text-white font-bold px-8 py-4 rounded-xl border border-slate-800 hover:border-slate-750 transition-all duration-300 text-center"
              >
                Conhecer Serviços
              </a>
            </div>

            {/* Social Proof / Google Stats */}
            <div className="pt-4 border-t border-slate-900/60 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center font-bold text-xs text-brand-yellow">E</div>
                <div className="w-9 h-9 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center font-bold text-xs text-slate-100">M</div>
                <div className="w-9 h-9 rounded-full bg-slate-600 border-2 border-slate-950 flex items-center justify-center font-bold text-xs text-brand-yellow">T</div>
                <div className="w-9 h-9 rounded-full bg-slate-500 border-2 border-slate-950 flex items-center justify-center font-bold text-xs text-slate-100">S</div>
              </div>
              <a
                href={CONTACT_DATA.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                title="Ver nossas avaliações no Google"
                className="group/rating"
              >
                <div className="flex items-center gap-1">
                  <div className="flex text-brand-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                    ))}
                  </div>
                  <span className="font-bold text-white text-sm group-hover/rating:text-brand-yellow transition-colors">5.0 / 5.0</span>
                </div>
                <p className="text-xs text-slate-400">
                  Mais de <span className="text-brand-yellow font-semibold">332 clientes avaliados</span> no Google Maps.
                </p>
              </a>
            </div>

          </div>

          {/* Hero Right: Aesthetic Interactive Image Block */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden group shadow-2xl border border-slate-800">
              
              {/* Image with strict lazy and async decoding */}
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop"
                alt="Eletricista qualificado da Smart Soluções Elétricas realizando manutenção segura"
                className="w-full h-full object-cover grayscale-1/5 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Suspended Info Cards */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center text-slate-950">
                    <Shield className="w-4.5 h-4.5 fill-none stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Normas NBR 5410</h4>
                    <p className="text-[10px] text-slate-400">Serviços executados com máxima conformidade técnica</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs border-t border-slate-900 pt-3 text-slate-300">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Atendimento Imediato
                  </span>
                  <span className="font-mono text-brand-yellow font-semibold">(16) 99139-4448</span>
                </div>
              </div>

              {/* Decorative Corner Lights */}
              <div className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-sm border border-slate-800 text-[10px] font-mono font-bold text-brand-yellow px-2.5 py-1 rounded-full uppercase tracking-wider">
                Araraquara - SP
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
