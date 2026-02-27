"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Filter, ChevronLeft, ChevronRight, Phone, Menu } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp } from '@/app/animations';

const images = [
  { id: 1, category: 'Ferme', title: 'Notre ferme', url: 'https://i.pinimg.com/1200x/c7/27/6b/c7276be84f3742d357515a2ea54acdc5.jpg' },
  { id: 2, category: 'Produits', title: 'Œufs frais du jour', url: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Restaurant', title: 'Poulet braisé spécial', url: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Ferme', title: 'Poules pondeuses', url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Restaurant', title: 'Ambiance conviviale', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Ferme', title: 'Poulet frais', url: 'https://i.pinimg.com/1200x/f6/8a/0a/f68a0af25359f7ad93e35bcb49878a2c.jpg' },
  { id: 7, category: 'Restaurant', title: 'Grillades au feu de bois', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800' },
  { id: 8, category: 'Produits', title: 'Plateau d\'œufs', url: 'https://i.pinimg.com/1200x/c3/bc/2a/c3bc2a66749da8879b0718def6273aa4.jpg' },
  { id: 9, category: 'Restaurant', title: 'Kedjenou de poulet', url: 'https://i.pinimg.com/1200x/ed/8a/a3/ed8aa38483bfc48ae190218772c20b71.jpg' },
  { id: 10, category: 'Ferme', title: 'Alimentation naturelle', url: 'https://i.pinimg.com/736x/25/0b/69/250b699ee4ea94189f4b60d16cad89c8.jpg' },
];

const categories = ['Tous', 'Ferme', 'Produits', 'Restaurant'];

export default function Galerie() {
  const [filter, setFilter] = useState('Tous');
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredImages = filter === 'Tous' 
    ? images 
    : images.filter(img => img.category === filter);

  const handleNext = () => {
    if (selectedImg === null) return;
    const currentIndex = images.findIndex(img => img.id === selectedImg);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImg(images[nextIndex].id);
  };

  const handlePrev = () => {
    if (selectedImg === null) return;
    const currentIndex = images.findIndex(img => img.id === selectedImg);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImg(images[prevIndex].id);
  };

  return (
    <>
      {/* Navbar fixe */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nature text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-nature font-bold text-xl shadow-lg">
                SN
              </div>
              <span className="font-serif font-bold text-xl text-white hidden sm:block">
                Saveur Nature
              </span>
            </Link>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-egg transition-colors font-medium">
                Accueil
              </Link>
              <Link href="/poules" className="text-white hover:text-egg transition-colors font-medium">
                Nos Poules
              </Link>
              <Link href="/oeufs" className="text-white hover:text-egg transition-colors font-medium">
                Nos Œufs
              </Link>
              <Link href="/restauration" className="text-white hover:text-egg transition-colors font-medium">
                Restaurant
              </Link>
              <Link href="/contact" className="text-white hover:text-egg transition-colors font-medium">
                Contact
              </Link>
            </div>

            {/* Téléphone et menu mobile */}
            <div className="flex items-center gap-4">
              <a href="tel:+22893823578" className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-nature/80 transition-all">
                <Phone size={16} />
                <span className="text-sm font-bold">+228 93 82 35 78</span>
              </a>
              <button 
                className="md:hidden p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-nature/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                <Link href="/" className="block py-3 px-4 text-white hover:bg-white/10 rounded-xl transition-colors">
                  Accueil
                </Link>
                <Link href="/poules" className="block py-3 px-4 text-white hover:bg-white/10 rounded-xl transition-colors">
                  Nos Poules
                </Link>
                <Link href="/oeufs" className="block py-3 px-4 text-white hover:bg-white/10 rounded-xl transition-colors">
                  Nos Œufs
                </Link>
                <Link href="/restauration" className="block py-3 px-4 text-white hover:bg-white/10 rounded-xl transition-colors">
                  Restaurant
                </Link>
                <Link href="/contact" className="block py-3 px-4 text-white hover:bg-white/10 rounded-xl transition-colors">
                  Contact
                </Link>
                <a href="tel:+22893823578" className="block py-3 px-4 text-white hover:bg-white/10 rounded-xl transition-colors">
                  📞 +228 93 82 35 78
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Contenu principal avec padding-top pour compenser la navbar */}
      <div className="pt-20">
        {/* Header */}
        <section className="bg-nature py-24 md:py-32 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              >
                Galerie Photos
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              >
                Découvrez en images la vie à la ferme, nos produits d'exception et les saveurs de notre restaurant.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter - Sticky avec bon positionnement */}
        <div className="sticky top-20 z-40">
          <section className="bg-white border-y border-slate-200 shadow-md">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap justify-center gap-4 items-center py-4">
                <div className="flex items-center gap-2 text-slate-400 mr-4 hidden md:flex">
                  <Filter size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest">Filtrer par :</span>
                </div>
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      filter === cat 
                        ? 'bg-nature text-white shadow-lg shadow-nature/20' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Grid (le reste de ton code) */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((img) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="group relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedImg(img.id)}
                  >
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                      <span className="text-egg text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {img.category}
                      </span>
                      <h3 className="text-white font-bold text-sm sm:text-base md:text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {img.title}
                      </h3>
                      <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                        <Maximize2 size={16} className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">Aucune image dans cette catégorie</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImg !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            >
              <button 
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/50 hover:text-white transition-colors p-2 z-[110] bg-black/20 rounded-full backdrop-blur-sm"
                onClick={() => setSelectedImg(null)}
              >
                <X size={24} className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]" />
              </button>

              <button 
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 sm:p-3 md:p-4 z-[110] bg-white/5 rounded-full backdrop-blur-md"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              >
                <ChevronLeft size={24} className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]" />
              </button>

              <button 
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 sm:p-3 md:p-4 z-[110] bg-white/5 rounded-full backdrop-blur-md"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <ChevronRight size={24} className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]" />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full max-h-full aspect-video rounded-2xl sm:rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={images.find(img => img.id === selectedImg)?.url} 
                  alt="Zoom" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-egg font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-1 sm:mb-2">
                    {images.find(img => img.id === selectedImg)?.category}
                  </p>
                  <h3 className="text-white text-base sm:text-xl md:text-3xl lg:text-4xl font-bold">
                    {images.find(img => img.id === selectedImg)?.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}