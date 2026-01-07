import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';
import { COMPANY_NAME, SLOGAN } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="Equipa em reunião"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue/10"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold rounded-lg p-6 flex flex-col justify-center text-white shadow-xl hidden sm:flex">
              <span className="text-4xl font-bold">10+</span>
              <span className="text-sm font-medium mt-2">Anos de Experiência no Mercado</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2">Quem Somos</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              A Excelência que a Sua Empresa Procura
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              A <strong className="text-brand-blue">{COMPANY_NAME}</strong> é uma empresa angolana dedicada a facilitar a vida dos empreendedores e gestores. Acreditamos que a burocracia não deve ser um obstáculo para o sucesso do seu negócio.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Com uma equipa altamente qualificada, o nosso compromisso é oferecer soluções integradas, desde a constituição legal da empresa até à gestão do dia-a-dia, como limpeza e fornecimento de materiais. O nosso lema reflete a nossa missão: <em className="text-brand-dark font-medium">"{SLOGAN}"</em>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                <Target className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <h4 className="font-bold text-brand-dark mb-1">Foco</h4>
                <p className="text-xs text-slate-500">Resultados precisos</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                <Zap className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                <h4 className="font-bold text-brand-dark mb-1">Rapidez</h4>
                <p className="text-xs text-slate-500">Processos ágeis</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                <Users className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <h4 className="font-bold text-brand-dark mb-1">Equipa</h4>
                <p className="text-xs text-slate-500">Especializada</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;