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

  const getItemPrice = () => {
    if (type === 'restaurant') return item.price;
    return `${(item.price as number).toLocaleString()} FCFA`;
  };

  const getItemTotal = () => {
    const price = type === 'restaurant' 
      ? parseFloat((item.price as string).replace(/[^\d]/g, ''))
      : (item.price as number);
    return (price * quantity).toLocaleString() + ' FCFA';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl p-3 md:p-5 shadow-sm hover:shadow-md transition-all border border-slate-100 mb-4"
    >
      <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
        
        {/* Image - Plus grande sur ordinateur */}
        <div className="w-full sm:w-24 md:w-32 lg:w-40 aspect-video sm:aspect-square rounded-lg overflow-hidden shrink-0 shadow-inner">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="flex-1 flex flex-col justify-between py-1">
          <div className="space-y-2">
            {/* En-tête */}
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <span className="inline-block px-2 py-0.5 bg-nature/5 text-nature rounded-full text-[10px] md:text-xs font-bold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-base md:text-xl font-bold text-nature leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 line-clamp-2 mt-1">
                  {item.desc}
                </p>
              </div>
              
              <button
                onClick={() => onRemove(item.id)}
                className="p-2 hover:bg-red-50 group rounded-full transition-colors shrink-0 ml-2"
                title="Supprimer l'article"
              >
                <Trash2 className="size-4 md:size-6 text-slate-300 group-hover:text-red-500 transition-colors" />
              </button>
            </div>
          </div>

          {/* Contrôles et Prix */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-50">
            
            {/* Sélecteur de Quantité - Plus robuste sur ordi */}
            <div className="flex items-center gap-1 md:gap-3 bg-slate-50 p-1 md:p-1.5 rounded-xl border border-slate-100">
              <button
                onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                className="p-1.5 md:p-2 rounded-lg bg-white shadow-sm hover:bg-red-50 hover:text-red-500 transition-all"
              >
                <Minus className="size-3 md:size-4" />
              </button>
              
              <span className="w-6 md:w-10 text-center font-bold text-sm md:text-base text-nature">
                {quantity}
              </span>
              
              <button
                onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                className="p-1.5 md:p-2 rounded-lg bg-white shadow-sm hover:bg-nature hover:text-white transition-all"
              >
                <Plus className="size-3 md:size-4" />
              </button>
            </div>

            {/* Détails Prix */}
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] md:text-xs text-slate-400 uppercase font-semibold">Prix Unitaire</p>
                <p className="font-semibold text-sm md:text-lg text-slate-600">{getItemPrice()}</p>
              </div>

              <div className="text-right">
                <p className="text-[10px] md:text-xs text-slate-400 uppercase font-semibold">Sous-total</p>
                <p className="font-black text-base md:text-2xl text-nature">
                  {getItemTotal()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}