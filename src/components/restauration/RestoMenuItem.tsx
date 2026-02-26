"use client";
import { motion } from 'motion/react';
import { ShoppingCart, Flame } from 'lucide-react';
import { MenuItem } from '@/data/menuData';

interface RestoMenuItemProps {
  item: MenuItem;
  index: number;
  onAddToCart?: (item: MenuItem) => void;
}

export default function RestoMenuItem({ item, index, onAddToCart }: RestoMenuItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[250px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay gradient plus prononcé pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent group-hover:from-black/100 transition-all duration-500"></div>
      </div>

      {/* Badge populaire */}
      {item.popular && (
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 left-4 bg-egg text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg z-10"
        >
          <Flame size={14} /> Populaire
        </motion.div>
      )}

      {/* Prix */}
      <div className="absolute top-4 right-4 bg-braised text-white text-sm sm:text-base font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
        {item.price}
      </div>

      {/* Contenu texte en bas */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <h3 className="font-serif text-xl sm:text-2xl font-bold group-hover:text-egg transition-colors line-clamp-1">
            {item.name}
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-3 leading-relaxed">
            {item.desc}
          </p>
          
          {/* Bouton d'action */}
          {onAddToCart && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddToCart(item)}
              className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2.5 rounded-xl font-bold hover:bg-nature hover:border-nature transition-all flex items-center justify-center gap-2 text-sm"
            >
              <ShoppingCart size={16} />
              <span>Ajouter à la commande</span>
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Effet de bordure au survol */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-egg origin-left z-20"
      />
    </motion.div>
  );
}