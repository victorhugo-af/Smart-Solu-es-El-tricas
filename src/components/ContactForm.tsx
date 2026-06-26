/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CONTACT_DATA } from '../data';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Wallbox BYD',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const servicesOption = [
    'Instalação de Wallbox BYD',
    'Energia Solar Fotovoltaica',
    'Atendimento Emergencial 24h',
    'Reforma Elétrica / Troca de Disjuntores',
    'Padrão CPFL / Entrada de Energia',
    'Outro Serviço / Dúvida Técnica'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending an email/message to Edinho
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Wallbox BYD',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Top separating line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-sans font-semibold text-xs text-brand-yellow uppercase tracking-widest leading-none">
            Contato
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fale Conosco & Solicite um Orçamento
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            Tem alguma dúvida ou precisa de um eletricista agora mesmo? Entre em contato pelos canais diretos ou preencha o formulário e responderemos em minutos.
          </p>
          <div className="h-1.5 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Left: Direct Channels & Information (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-display text-2xl font-bold text-white leading-tight">
              Informações Diretas de Atendimento
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Trabalhamos com agendamentos programados para obras e reformas, além do plantão emergencial para quedas de energia e curtos em Araraquara e cidades vizinhas.
            </p>

            {/* Channels Lists */}
            <div className="space-y-6">
              
              {/* WhatsApp Callout */}
              <a
                href={CONTACT_DATA.whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-slate-950/60 border border-slate-850 rounded-2xl p-5 flex gap-4 hover:border-brand-yellow/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow shrink-0 group-hover:bg-brand-yellow group-hover:text-slate-950 transition-colors duration-300">
                  <Phone className="w-5 h-5 fill-none stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Oficial</h4>
                  <p className="text-base font-extrabold text-white mt-1 group-hover:text-brand-yellow transition-colors font-mono">
                    {CONTACT_DATA.phoneDisplay}
                  </p>
                  <p className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online - Resposta em 5 minutos
                  </p>
                </div>
              </a>

              {/* Email channel */}
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="bg-slate-950/60 border border-slate-850 rounded-2xl p-5 flex gap-4 hover:border-brand-yellow/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow shrink-0 group-hover:bg-brand-yellow group-hover:text-slate-950 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">E-mail Comercial</h4>
                  <p className="text-sm font-extrabold text-white mt-1 break-all group-hover:text-brand-yellow transition-colors">
                    {CONTACT_DATA.email}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">Garantia de resposta no mesmo dia</p>
                </div>
              </a>

              {/* Address channel */}
              <a
                href={CONTACT_DATA.addressMapUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-slate-950/60 border border-slate-850 rounded-2xl p-5 flex gap-4 hover:border-brand-yellow/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow shrink-0 group-hover:bg-brand-yellow group-hover:text-slate-950 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Endereço da Base</h4>
                  <p className="text-xs font-bold text-white mt-1 leading-normal group-hover:text-brand-yellow transition-colors">
                    {CONTACT_DATA.address}
                  </p>
                  <p className="text-[10px] text-brand-yellow mt-1 font-semibold flex items-center gap-1">
                    Ver no Google Maps &rarr;
                  </p>
                </div>
              </a>

              {/* Hours channel */}
              <div className="bg-slate-950/60 border border-slate-850 rounded-2xl p-5 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Horário de Operação</h4>
                  <p className="text-xs font-bold text-white mt-1">
                    {CONTACT_DATA.hours}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">Plantão Técnico 24h ativo para chamados críticos</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Right: Interactive Form (Col 7) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-850 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h4 className="font-display font-extrabold text-xl text-white mb-2">
              Envie uma Mensagem Direta
            </h4>
            <p className="text-xs text-slate-400 mb-6">
              Preencha os dados e receba o retorno com orçamento estimativo ou agendamento de visita técnica.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Field Name */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-semibold text-slate-300 block">
                  Seu Nome Completo <span className="text-brand-yellow">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: João da Silva"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-brand-yellow/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow placeholder:text-slate-500"
                />
              </div>

              {/* Email & Phone block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300 block">
                    Seu E-mail (Opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: joao@email.com"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-brand-yellow/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow placeholder:text-slate-500"
                  />
                </div>

                {/* Field Phone */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-300 block">
                    WhatsApp / Telefone <span className="text-brand-yellow">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: (16) 99139-4448"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-brand-yellow/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Service Requested Option Dropdown */}
              <div className="space-y-1">
                <label htmlFor="service" className="text-xs font-semibold text-slate-300 block">
                  Serviço Desejado
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-brand-yellow/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                >
                  {servicesOption.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-950 text-slate-300">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 block">
                  Descreva o que você precisa <span className="text-brand-yellow">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ex: Preciso de uma adequação de padrão de bifásico para trifásico em minha residência e também de um ponto dedicado para ar-condicionado."
                  className="w-full bg-slate-900 border border-slate-800 focus:border-brand-yellow/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-yellow placeholder:text-slate-500 resize-none"
                />
              </div>

              {/* Alert Notifications */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-950/55 border border-emerald-800 text-emerald-400 text-xs rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-extrabold block">Mensagem enviada com sucesso!</span>
                      Obrigado pelo contato. Em instantes um técnico responderá em seu WhatsApp.
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-rose-950/50 border border-rose-800 text-rose-400 text-xs rounded-xl flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <div>
                      <span className="font-extrabold block">Preenchimento incorreto!</span>
                      Por favor, preencha todos os campos obrigatórios marcados com (*).
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-dark disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-extrabold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando dados...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 fill-slate-950 stroke-none" />
                      Enviar Solicitação de Orçamento
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Quick response callout */}
            <div className="mt-6 pt-6 border-t border-slate-900 flex items-center gap-2 justify-center text-[11px] text-slate-500">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              Sua resposta será agilizada e direcionada diretamente ao WhatsApp comercial da Smart.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
