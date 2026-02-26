"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen bg-cream flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      
      {/* Conteneur principal du 404 */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 mb-6 sm:mb-8 md:mb-10">
        {/* Le premier 4 - Vert Nature */}
        <span className="text-[80px] xs:text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[240px] font-black text-nature leading-none select-none">
          4
        </span>

        {/* L'élément central (Le 0 personnalisé avec l'image d'œuf) */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.1 }}
          className="relative w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px] flex-shrink-0"
        >
          {/* Bordure stylisée (Jaune Oeuf) */}
          <div className="absolute inset-0 rounded-full border-[4px] xs:border-[6px] sm:border-[8px] md:border-[10px] lg:border-[12px] border-egg z-10 pointer-events-none shadow-inner" />
          
          {/* Conteneur de l'image de l'œuf */}
          <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-xl sm:shadow-2xl">
            <img 
              src="https://i.postimg.cc/7bvGPmym/Gemini-Generated-Image-1tlz4h1tlz4h1tlz.png" 
              alt="Oeuf au plat Ferme Saveur Nature"
              className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
            />
          </div>

          {/* Animation de pulsation douce sur le jaune d'oeuf */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-egg/10 z-0 blur-sm sm:blur-md lg:blur-xl"
          />
        </motion.div>

        {/* Le deuxième 4 */}
        <span className="text-[80px] xs:text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[240px] font-black text-nature leading-none select-none">
          4
        </span>
      </div>

      {/* Message d'erreur personnalisé */}
      <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 relative z-20 max-w-3xl mx-auto px-2">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-nature leading-tight">
          Oups... nous nous sommes égarés dans le champ.
        </h2>
        <p className="text-slate-500 max-w-md mx-auto italic text-sm sm:text-base md:text-lg px-4">
          Cette page n'a pas encore éclos ou a été déplacée par nos poules.
        </p>

        {/* Bouton - Rouge Braisé */}
        <div className="pt-4 sm:pt-6 md:pt-8">
          <Link 
            href="/" 
            className="btn-braised inline-block px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl shadow-xl shadow-braised/20 active:scale-95"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}