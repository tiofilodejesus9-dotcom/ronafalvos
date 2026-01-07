import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, EMAIL, ADDRESS, PHONE_NUMBER, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Fale Connosco</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Informações de Contacto</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contacto através dos nossos canais oficiais.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-brand-dark text-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Phone */}
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="p-8 lg:p-12 flex flex-col items-center text-center hover:bg-white/5 transition-colors group"
            >
              <div className="bg-white/10 p-4 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-slate-400 mb-2 font-medium uppercase tracking-wide">Telefone</h3>
              <p className="text-xl lg:text-2xl font-bold text-white">{PHONE_DISPLAY}</p>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${EMAIL}`} 
              className="p-8 lg:p-12 flex flex-col items-center text-center hover:bg-white/5 transition-colors group"
            >
              <div className="bg-white/10 p-4 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-slate-400 mb-2 font-medium uppercase tracking-wide">Email</h3>
              <p className="text-lg lg:text-xl font-bold text-white break-all">{EMAIL}</p>
            </a>

            {/* Location */}
            <div className="p-8 lg:p-12 flex flex-col items-center text-center hover:bg-white/5 transition-colors group">
              <div className="bg-white/10 p-4 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-slate-400 mb-2 font-medium uppercase tracking-wide">Localização</h3>
              <p className="text-xl lg:text-2xl font-bold text-white">{ADDRESS}</p>
            </div>

          </div>
          
          {/* Socials */}
          <div className="bg-brand-blue/20 py-10 px-4 text-center border-t border-white/10">
            <h4 className="text-lg font-semibold mb-6">Siga-nos nas redes sociais</h4>
            <div className="flex justify-center gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-4 rounded-full hover:bg-brand-gold hover:scale-110 transition-all duration-300"
                  aria-label={link.platform}
                >
                  <link.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;