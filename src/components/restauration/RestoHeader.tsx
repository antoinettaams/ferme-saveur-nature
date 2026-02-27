"use client";
import { motion } from 'motion/react';
import { Flame, Phone, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp, scaleIn } from '@/app/animations';

interface RestoHeaderProps {
  onSelectCategory: (category: string) => void;
  activeCategory: string;
  categories: { id: string; label: string }[];
}

export default function RestoHeader({ onSelectCategory, activeCategory, categories }: RestoHeaderProps) {
  return (
    <>
      {/* Hero Section avec l'image uniquement */}
      <section className="relative h-[70vh] min-h-[630px] flex items-center justify-center text-center text-white overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=1920" 
            alt="Restaurant Grillade" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </motion.div>

        {/* Navigation intégrée en haut (sur l'image) */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-nature rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  SN
                </div>
                <span className="font-serif font-bold text-lg text-white hidden sm:block">
                  Saveur Nature
                </span>
              </Link>

              {/* Liens de navigation */}
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-white hover:text-egg transition-colors text-sm font-bold">
                  Accueil
                </Link>
                <Link href="/poules" className="text-white hover:text-egg transition-colors text-sm font-bold">
                  Nos Poules
                </Link>
                <Link href="/oeufs" className="text-white hover:text-egg transition-colors text-sm font-bold">
                  Nos Œufs
                </Link>
                <Link href="/contact" className="text-white hover:text-egg transition-colors text-sm font-bold">
                  Contact
                </Link>
              </div>

              {/* Téléphone */}
              <a href="tel:+22893823578" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-nature transition-all">
                <Phone size={16} />
                <span className="text-sm font-bold hidden sm:inline">+228 93 82 35 78</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contenu principal centré (sur l'image) */}
        <div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
  initial="initial"
  animate="animate"
  variants={staggerContainer}
>
  <motion.div variants={scaleIn} className="mb-6">
    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-braised/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border-2 border-egg/30">
      <Flame className="text-egg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
    </div>
  </motion.div>

  <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white">
    Le Coin Braisé
  </motion.h1>

  <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed px-4">
    Une cuisine authentique, généreuse et préparée avec les meilleurs produits de notre ferme.
  </motion.p>

  {/* Phrase explicative du service */}
  <motion.p 
    variants={fadeInUp}
    className="text-egg text-sm sm:text-base md:text-lg font-medium mt-3 mb-4"
  >
    Le service de Restauration est disponible uniquement:
  </motion.p>

  {/* Badges d'information */}
  <motion.div 
    variants={fadeInUp}
    className="flex flex-wrap justify-center gap-4 mt-2 sm:mt-4"
  >
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
      <Clock size={16} className="text-egg" />
      <span className="text-white text-sm">Samedi & Dimanche • 09h - 18h</span>
    </div>
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
      <MapPin size={16} className="text-egg" />
      <span className="text-white text-sm">Aneho, Landjo</span>
    </div>
  </motion.div>
</motion.div>
        </div>
      </section>

      {/* Barre de navigation des catégories (juste en dessous de l'image) */}
      <div className="bg-cream border-y border-braised/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto py-3 hide-scrollbar">
            <div className="flex space-x-2 md:space-x-4 mx-auto">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => onSelectCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 whitespace-nowrap text-sm sm:text-base shadow-sm
                      ${isActive
                        ? 'bg-braised text-white shadow-braised/30'
                        : 'bg-white text-braised border-2 border-braised hover:bg-braised hover:text-white'
                      }`}
                  >
                    {category.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}