import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { PHONE_DISPLAY, EMAIL, ADDRESS, PHONE_NUMBER, SOCIAL_LINKS, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Constituição de Empresa',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `*Nova mensagem via Site*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Assunto:* ${formData.service}\n*Mensagem:* ${formData.message}`;
    
    // Encode and open WhatsApp
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Contactos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Estamos à Sua Espera</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-brand-dark text-white p-10 rounded-2xl shadow-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Informações de Contacto</h3>
              
              <div className="space-y-6">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-start gap-4 hover:text-brand-gold transition-colors">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Telefone</p>
                    <p className="text-lg font-semibold">{PHONE_DISPLAY}</p>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 hover:text-brand-gold transition-colors">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-lg font-semibold break-all text-sm sm:text-lg">{EMAIL}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Localização</p>
                    <p className="text-lg font-semibold">{ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm text-slate-400 mb-4">Siga-nos nas redes sociais:</p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.platform}
                    href={link.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-brand-gold transition-colors"
                    aria-label={link.platform}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Envie-nos uma Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-shadow bg-white"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-shadow bg-white"
                    placeholder="Seu contacto"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Assunto</label>
                <select 
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-shadow bg-white text-slate-600"
                >
                  <option>Constituição de Empresa</option>
                  <option>Serviços de Limpeza</option>
                  <option>Tratamento de Alvará</option>
                  <option>Inscrição INSS/SIGFE</option>
                  <option>Outros Assuntos</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-shadow bg-white resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;