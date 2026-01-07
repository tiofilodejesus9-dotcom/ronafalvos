import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SLOGAN } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background Image with lighter Overlay to show the image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="RONAF ALVOS Banner Promocional"
          className="w-full h-full object-cover object-center"
        />
        {/* Reduced opacity gradient so the user's image is visible, but keeps text readable */}
        <div className="absolute inset-0 bg-brand-dark/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-brand-dark/60 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">Líderes em Serviços</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Soluções Empresariais para o <span className="text-brand-gold">Sucesso</span> do Seu Negócio
          </h1>
          
          <p className="text-base md:text-lg text-slate-200 mb-8 leading-relaxed">
            {SLOGAN}. Tratamos de toda a burocracia para que você possa focar no que realmente importa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-brand-gold hover:bg-amber-600 text-white rounded-lg font-bold text-center transition-all shadow-lg shadow-amber-600/30 flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-lg font-bold text-center transition-all text-sm md:text-base backdrop-blur-sm"
            >
              Nossos Serviços
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-300 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-gold" />
              <span>Rapidez</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-gold" />
              <span>Segurança</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-gold" />
              <span>Profissionalismo</span>
            </div>
          </div>
        </motion.div>

        {/* The right side is left empty or minimal to let the background image shine through */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;