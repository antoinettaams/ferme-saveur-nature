"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronRight, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Boutique', path: '/boutique' },
  { name: 'Restauration', path: '/restauration' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Gestion du scroll pour le changement d'apparence
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const isHomePage = pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isHomePage 
            ? (scrolled ? 'bg-white/95 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-6')
            : 'bg-white/95 backdrop-blur-lg py-3 shadow-lg border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
          
          {/* 1. DEBUT (Gauche) : LOGO */}
          <Link href="/" className="flex items-center gap-3 group justify-self-start">
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 bg-nature rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-nature/20 flex-shrink-0"
            >
              SN
            </motion.div>
            <div className="flex flex-col hidden sm:flex">
              <span className={`font-serif font-bold text-xl leading-none transition-colors ${
                isHomePage && !scrolled ? 'text-white' : 'text-slate-900'
              }`}>
                Saveur Nature
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold opacity-70 transition-colors ${
                isHomePage && !scrolled ? 'text-egg' : 'text-nature'
              }`}>
                Ferme Avicole
              </span>
            </div>
          </Link>

          {/* 2. MILIEU : LIENS (Desktop uniquement) */}
          <div className="hidden lg:flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full relative group ${
                  pathname === link.path 
                    ? (isHomePage && !scrolled ? 'text-white' : 'text-nature')
                    : (isHomePage && !scrolled ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-nature')
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className={`absolute bottom-0 left-4 right-4 h-0.5 ${
                      isHomePage && !scrolled ? 'bg-egg' : 'bg-nature'
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* 3. FIN (Droite) : ACTIONS (Panier + Toggle) */}
          <div className="flex items-center gap-2 sm:gap-4 justify-self-end">
            {/* Panier */}
            <Link 
              href="/panier" 
              className={`p-2.5 rounded-full transition-all relative group ${
                isHomePage && !scrolled 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-slate-600 hover:bg-nature hover:text-white'
              }`}
              aria-label="Panier"
            >
              <ShoppingCart size={22} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-braised text-white text-[10px] rounded-full flex items-center justify-center font-bold px-1 border-2 border-white shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Bouton Menu Mobile */}
            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isHomePage && !scrolled ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Barre de progression de lecture */}
        {(scrolled || !isHomePage) && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-nature origin-left z-50"
            style={{ scaleX }}
          />
        )}
      </nav>

      {/* OVERLAY MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            {/* Fond sombre */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            
            {/* Menu Coulissant */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-slate-100">
                <span className="font-serif font-bold text-2xl text-nature">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-900">
                  <X size={28} />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto py-8 px-4">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.path}
                        className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all ${
                          pathname === link.path 
                            ? 'bg-nature/5 text-nature' 
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                        <ChevronRight size={20} className={pathname === link.path ? 'opacity-100' : 'opacity-30'} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-nature text-white w-full py-4 rounded-2xl font-bold shadow-lg shadow-nature/20">
                  <Phone size={18} /> Nous Contacter
                </Link>
                
                <Link href="/panier" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 w-full py-3 text-slate-600 font-bold">
                  <ShoppingCart size={20} /> Voir mon panier ({cartCount})
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}