import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_NAME, SLOGAN, NAV_LINKS, SERVICES } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-gold p-1.5 rounded-lg">
                <ShieldCheck className="text-white h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {SLOGAN}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-slate-400 hover:text-brand-gold transition-colors text-sm">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Atendimento</h4>
            <p className="text-slate-400 text-sm mb-4">
              Disponíveis para atender as suas necessidades com rapidez e segurança.
            </p>
            <a 
              href="#contact"
              className="inline-block px-6 py-3 bg-brand-gold hover:bg-amber-600 text-white rounded-md font-semibold text-sm transition-colors w-full text-center"
            >
              Contactar Agora
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} {COMPANY_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-red-500 fill-current" /> para Angola
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;