import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden">
      {/* Abstract circles */}
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para impulsionar o seu negócio?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
          Não perca tempo com burocracias. Deixe a RONAF ALVOS cuidar de tudo enquanto você foca no crescimento da sua empresa.
        </p>
        <a 
          href="#contact" 
          className="inline-block px-10 py-4 bg-white text-brand-blue font-bold text-lg rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
};

export default CallToAction;