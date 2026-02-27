"use client";
import { motion } from 'motion/react';
import { Trash2, Minus, Plus } from 'lucide-react';
import { CartItem } from '@/context/CartContext';

interface PanierArticleProps {
  item: CartItem;
  index: number;
  quantity: number;
  type: 'restaurant' | 'boutique';
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemove: (itemId: string) => void;
}

export default function PanierArticle({ 
  item, 
  index, 
  quantity, 
  type,
  onUpdateQuantity, 
  onRemove 
}: PanierArticleProps) {

  // Calculer le prix selon le type
  const getItemPrice = () => {
    if (type === 'restaurant') {
      return item.price; // Déjà formaté
    } else {
      return `${(item.price as number).toLocaleString()} FCFA`;
    }
  };

  const getItemTotal = () => {
    if (type === 'restaurant') {
      const price = parseFloat((item.price as string).replace(/[^\d]/g, ''));
      return (price * quantity).toLocaleString() + ' FCFA';
    } else {
      return ((item.price as number) * quantity).toLocaleString() + ' FCFA';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-slate-100"
    >
      <div className="flex gap-6">
        {/* Image */}
        <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Détails */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-serif text-xl font-bold text-nature mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-slate-500 mb-2">
                {item.desc}
              </p>
              <span className="inline-block px-3 py-1 bg-nature/5 text-nature rounded-full text-xs font-bold">
                {item.category}
              </span>
            </div>
            
            {/* Bouton supprimer */}
            <button
              onClick={() => onRemove(item.id)}
              className="p-2 hover:bg-red-50 rounded-full transition-colors"
            >
              <Trash2 size={18} className="text-red-400" />
            </button>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
            {/* Quantité */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-nature/10 transition-colors"
              >
                <Minus size={16} className="text-nature" />
              </button>
              <span className="w-8 text-center font-bold text-nature">{quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-nature/10 transition-colors"
              >
                <Plus size={16} className="text-nature" />
              </button>
            </div>

            {/* Prix */}
            <div className="text-right">
              <p className="text-xs text-slate-400">Prix unitaire</p>
              <p className="text-lg font-bold text-nature">{getItemPrice()}</p>
            </div>
          </div>

          {/* Total par article */}
          <div className="flex justify-end mt-2 pt-2 border-t border-slate-50">
            <p className="text-sm">
              <span className="text-slate-400">Total article: </span>
              <span className="font-bold text-nature">{getItemTotal()}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}