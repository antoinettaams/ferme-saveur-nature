"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBasket, Utensils, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Nos Poules', path: '/poules' },
  { name: 'Nos Oeufs', path: '/oeufs' },
  { name: 'Restauration', path: '/restauration' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Remplacer useLocation() par usePathname()
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]); // Utiliser pathname au lieu de location

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg py-3 shadow-lg border-b border-slate-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 bg-nature rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-nature/20"
            >
              SN
            </motion.div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-none transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Saveur Nature
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold opacity-70 transition-colors ${scrolled ? 'text-nature' : 'text-egg'}`}>
                Ferme Avicole
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full relative group ${
                  pathname === link.path 
                    ? (scrolled ? 'text-nature' : 'text-white') 
                    : (scrolled ? 'text-slate-600 hover:text-nature' : 'text-white/80 hover:text-white')
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className={`absolute bottom-0 left-4 right-4 h-0.5 ${scrolled ? 'bg-nature' : 'bg-egg'}`}
                  />
                )}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-200/20">
              <Link href="/contact" className={`btn-nature !py-2.5 !px-6 text-sm shadow-xl ${scrolled ? 'shadow-nature/20' : 'shadow-black/20'}`}>
                Commander
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-nature origin-left z-50"
          style={{ scaleX }}
        />
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-slate-100">
                <span className="font-serif font-bold text-2xl text-nature">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                  <X size={24} />
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
                        <ChevronRight size={20} className={pathname === link.path ? 'opacity-100' : 'opacity-0'} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t border-slate-100 bg-slate-50">
                <Link href="/contact" className="btn-nature w-full flex items-center justify-center gap-2 py-4 shadow-lg shadow-nature/20">
                  <Phone size={20} /> Nous Contacter
                </Link>
                <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                  © {new Date().getFullYear()} Ferme Saveur Nature
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}