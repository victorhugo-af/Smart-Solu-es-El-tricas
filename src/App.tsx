/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import AreasServed from './components/AreasServed';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-yellow-400 selection:text-slate-950">
      {/* Dynamic Navigation Bar Header */}
      <Header />

      {/* Main Single Page Layout Content */}
      <main className="flex-grow">
        {/* Spotlight Intro Hero Section */}
        <Hero />

        {/* Brand narrative, values, stats */}
        <About />

        {/* Interactive, filterable services list */}
        <Services />

        {/* Portfolio of real projects with detailed lightbox modal */}
        <Portfolio />

        {/* Google 5.0 Rating user testimonials cards */}
        <Testimonials />

        {/* Regional coverage and emergency log */}
        <AreasServed />

        {/* Direct contact channels & interactive form */}
        <ContactForm />
      </main>

      {/* Professional multi-column footer */}
      <Footer />

      {/* Persistent floating micro-animated WhatsApp badge */}
      <WhatsAppButton />
    </div>
  );
}

