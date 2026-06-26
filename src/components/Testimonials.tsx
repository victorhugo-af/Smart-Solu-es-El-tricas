/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TESTIMONIALS_DATA, CONTACT_DATA } from '../data';
import { Star, MessageSquare, Quote, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Upper separating line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-sans font-semibold text-xs text-brand-yellow uppercase tracking-widest leading-none">
            Depoimentos
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O Que Nossos Clientes Dizem
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            A satisfação dos nossos clientes é o maior prêmio que podemos receber. Veja o relato de quem contratou os nossos serviços em Araraquara.
          </p>
          <div className="h-1.5 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-950 border border-slate-850 rounded-2xl p-6 sm:p-8 flex flex-col justify-between glow-card relative group"
            >
              {/* Giant quote icon */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-800/30 rotate-180 pointer-events-none group-hover:text-brand-yellow/10 transition-colors duration-300" />

              <div className="space-y-5 relative z-10">
                {/* Rating stars */}
                <div className="flex text-brand-yellow">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Project Tag Badge */}
                {testimonial.projectTag && (
                  <span className="inline-block text-[10px] font-bold text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-2.5 py-1 rounded-lg">
                    {testimonial.projectTag}
                  </span>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Mock profile image or initials placeholder */}
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-xs text-brand-yellow shrink-0">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-none mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <a
                  href={testimonial.googleReviewUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-slate-400 hover:text-brand-yellow text-xs flex items-center gap-1 transition-colors group/link"
                  title="Ver avaliação completa no Google"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                  <span className="hidden sm:inline">Google</span>
                  <ArrowRight className="w-3 h-3 translate-x-0 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Reputation Callout */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-xs text-slate-400">
            Temos orgulho de manter uma pontuação média de{' '}
            <a
              href={CONTACT_DATA.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              title="Ver nossas avaliações no Google"
              className="text-brand-yellow font-bold text-sm hover:underline"
            >
              5.0 / 5.0 estrelas
            </a>{' '}
            no Google Maps.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT_DATA.whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-slate-950 border border-slate-800 hover:border-slate-700 text-white font-semibold py-2 px-5 rounded-full text-xs transition-colors flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Seja mais um cliente satisfeito
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
