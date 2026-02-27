"use client";
import { motion } from 'motion/react';
import { ShoppingCart, Flame } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

interface RestoMenuItemProps {
  item: MenuItem;
  index: number;
}

export default function RestoMenuItem({ item, index }: RestoMenuItemProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col sm:relative sm:h-[350px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
    >
      {/* Container Image */}
      <div className="relative w-full h-[220px] sm:absolute sm:inset-0 sm:h-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay Dégradé : Visible uniquement sur SM+ pour le texte en blanc */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent group-hover:from-black/100 transition-all duration-500"></div>
        
        {/* Badges : Toujours au-dessus de l'image */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {item.popular && (
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-egg text-slate-900 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg"
            >
              <Flame size={14} /> Populaire
            </motion.div>
          )}
        </div>

        <div className="absolute top-4 right-4 bg-braised text-white text-xs sm:text-base font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
          {item.price}
        </div>
      </div>

      {/* Contenu Texte */}
      {/* Mobile : Fond blanc, texte sombre | SM+ : Position absolue, texte blanc */}
      <div className="flex-1 p-4 sm:p-5 md:p-6 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 z-10 bg-white sm:bg-transparent">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <h3 className="font-serif text-lg sm:text-2xl font-bold text-nature sm:text-white group-hover:text-egg transition-colors line-clamp-1">
            {item.name}
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-500 sm:text-slate-200 line-clamp-2 mb-3 leading-relaxed">
            {item.desc}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addToCart(item)}
            className="w-full sm:w-auto bg-nature sm:bg-white/20 sm:backdrop-blur-sm border border-nature sm:border-white/30 text-white px-4 py-3 sm:py-2.5 rounded-xl font-bold hover:bg-nature-dark sm:hover:bg-nature transition-all flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingCart size={16} />
            <span>Ajouter à la commande</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Barre décorative (uniquement Desktop) */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden sm:block absolute bottom-0 left-0 right-0 h-1 bg-egg origin-left z-20"
      />
    </motion.div>
  );
}