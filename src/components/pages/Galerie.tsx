"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '@/app/animations';

const images = [
  { id: 1, category: 'Ferme', title: 'Nos installations', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Produits', title: 'Œufs frais du jour', url: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Restaurant', title: 'Poulet braisé spécial', url: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Ferme', title: 'Poules pondeuses', url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Restaurant', title: 'Ambiance conviviale', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Produits', title: 'Conditionnement', url: 'https://images.unsplash.com/photo-1587486914432-03d1fef47488?auto=format&fit=crop&q=80&w=800' },
  { id: 7, category: 'Ferme', title: 'Poussins d\'un jour', url: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?auto=format&fit=crop&q=80&w=800' },
  { id: 8, category: 'Restaurant', title: 'Grillades au feu de bois', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['Tous', 'Ferme', 'Produits', 'Restaurant'];

export default function Galerie() {
  const [filter, setFilter] = useState('Tous');
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

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
    <div>
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

      {/* Filter */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="flex items-center gap-2 text-slate-400 mr-4 hidden md:flex">
              <Filter size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Filtrer par :</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-nature text-white shadow-lg shadow-nature/20' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-cream min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
                  className="group relative aspect-square rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedImg(img.id)}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <span className="text-egg text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                    <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.title}</h3>
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[110]"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[110] bg-white/5 rounded-full backdrop-blur-md"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft size={40} />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[110] bg-white/5 rounded-full backdrop-blur-md"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images.find(img => img.id === selectedImg)?.url} 
                alt="Zoom" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-egg font-bold uppercase tracking-widest text-sm mb-2">
                  {images.find(img => img.id === selectedImg)?.category}
                </p>
                <h3 className="text-white text-3xl md:text-4xl font-bold">
                  {images.find(img => img.id === selectedImg)?.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
