import React from 'react';
import { ShieldCheck, Clock, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Confiança',
    description: 'Tratamos os seus documentos e processos com o máximo sigilo e responsabilidade.'
  },
  {
    icon: Clock,
    title: 'Rapidez',
    description: 'Sabemos que tempo é dinheiro. Os nossos processos são optimizados para entregar resultados rápidos.'
  },
  {
    icon: Award,
    title: 'Segurança',
    description: 'Garantia de conformidade com todas as normas legais da República de Angola.'
  },
  {
    icon: Briefcase,
    title: 'Profissionalismo',
    description: 'Uma equipa dedicada e formada para prestar o melhor atendimento ao cliente.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 rounded-l-full blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Porquê Escolher-nos</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
              O Parceiro Certo para o Seu Sucesso
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Na RONAF ALVOS, não prestamos apenas serviços; criamos parcerias duradouras. A nossa reputação é construída sobre pilares sólidos de integridade e eficiência.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-brand-gold hover:text-white transition-colors"
            >
              Fale com um Especialista
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <reason.icon className="w-10 h-10 text-brand-gold mb-4" />
                <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                <p className="text-slate-400 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;