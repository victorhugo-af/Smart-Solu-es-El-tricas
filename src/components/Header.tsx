/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Zap, ArrowRight } from 'lucide-react';
import { CONTACT_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            id="logo-link"
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg px-2 py-1"
            aria-label="Smart Soluções Elétricas - Voltar ao início"
          >
            <div className="w-10 h-10 bg-brand-yellow text-slate-950 rounded-lg flex items-center justify-center font-bold relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Zap className="w-6 h-6 fill-slate-950" />
              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white block leading-none">
                SMART
              </span>
              <span className="font-sans font-medium text-[10px] tracking-widest text-brand-yellow block uppercase leading-none mt-1">
                Soluções Elétricas
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-yellow transition-colors duration-200 relative py-1 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="header-phone-cta"
              href={CONTACT_DATA.phone}
              className="text-xs font-semibold text-slate-300 hover:text-brand-yellow flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded px-2 py-1"
              title="Ligar para a Smart Soluções Elétricas"
            >
              <Phone className="w-4 h-4 text-brand-yellow" />
              {CONTACT_DATA.phoneDisplay}
            </a>
            <a
              id="header-whatsapp-cta"
              href={CONTACT_DATA.whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-brand-yellow hover:bg-brand-yellow-dark text-slate-950 text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-all duration-200 shadow-[0_4px_14px_rgba(250,204,21,0.25)] hover:shadow-[0_6px_20px_rgba(250,204,21,0.35)] focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Ligue Agora
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-brand-yellow p-2 focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-slate-300 hover:text-brand-yellow hover:bg-slate-850 px-3 py-2 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-800 my-4" />
              <div className="space-y-3">
                <a
                  id="mobile-phone-cta"
                  href={CONTACT_DATA.phone}
                  className="flex items-center gap-3 text-slate-300 hover:text-brand-yellow px-3 py-2 text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-brand-yellow" />
                  {CONTACT_DATA.phoneDisplay}
                </a>
                <a
                  id="mobile-whatsapp-cta"
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-slate-950 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  Orçamento Grátis via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
