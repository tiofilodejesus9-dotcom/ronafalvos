import React from 'react';
import { motion } from 'framer-motion';

const BANNER_IMAGES = [
  "https://i.postimg.cc/wTcpxqZq/IMG_20260105_WA0039.jpg",
  "https://i.postimg.cc/BQyx63KM/IMG_20260105_WA0035.jpg",
  "https://i.postimg.cc/sD2kzYY4/IMG_20260105_WA0043.jpg",
  "https://i.postimg.cc/jq3fgTZY/IMG_20260105_WA0036.jpg",
  "https://i.postimg.cc/Znjzcjrh/IMG_20260105_WA0037.jpg",
  "https://i.postimg.cc/90DD54JC/IMG_20260105_WA0041.jpg",
  "https://i.postimg.cc/hPPBjWB4/IMG_20260105_WA0040.jpg",
  "https://i.postimg.cc/Z5XtVWyR/IMG_20260105_WA0042.jpg",
  "https://i.postimg.cc/gkBf2xs7/IMG_20260105_WA0044.jpg",
  "https://i.postimg.cc/fRt1tMg4/IMG_20260106_WA0003.jpg"
];

const Banners: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Nossa Galeria</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">
            Registros Visuais
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Um pouco do nosso dia-a-dia, instalações e serviços prestados com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BANNER_IMAGES.map((imgUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-md border border-slate-100 aspect-[4/3] bg-slate-200 cursor-pointer"
            >
              <img
                src={imgUrl}
                alt={`Registro RONAF ALVOS ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-brand-dark font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Visualizar
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banners;