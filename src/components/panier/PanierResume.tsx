"use client";
import { motion } from 'motion/react';
import { Clock, Store, MapPin, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface PanierResumeProps {
  type: 'restaurant' | 'boutique';
  total: number;
  cartCount: number;
  onCheckout: () => void;
}

export default function PanierResume({ type, total, cartCount, onCheckout }: PanierResumeProps) {
  const isValidTotal = !isNaN(total) && isFinite(total);
  const formattedTotal = isValidTotal ? total.toLocaleString() + ' FCFA' : '0 FCFA';

  const messages = {
    restaurant: {
      info: 'Préparation sous 1h max',
      address: 'Aneho, Landjo',
      hours: 'Sam-Dim : 09h - 18h',
      icon: <Store size={18} className="text-egg shrink-0" />
    },
    boutique: {
      info: 'Retrait à la ferme',
      address: 'Aneho, Landjo',
      hours: 'Lun-Sam : 08h - 18h',
      icon: <Store size={18} className="text-egg shrink-0" />
    }
  };

  const msg = messages[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // Changement majeur : lg:sticky pour ne bloquer que sur desktop
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 lg:sticky lg:top-28 h-fit"
    >
      {/* En-tête résumé */}
      <div className="flex justify-between items-end mb-6 pb-4 border-b border-slate-100">
        <div>
          <h3 className="font-serif text-xl font-bold text-nature">Mon Panier</h3>
          <p className="text-xs text-slate-400 mt-1">
            {cartCount} article{cartCount > 1 ? 's' : ''} au total
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Total</p>
          <p className="font-bold text-2xl text-nature leading-none">{formattedTotal}</p>
        </div>
      </div>

      {/* Détails logistiques : Grille sur mobile pour gagner de la place */}
      <div className="bg-slate-50 rounded-xl p-4 mb-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Clock size={16} className="text-egg shrink-0" />
            <span className="font-medium">{msg.info}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-slate-600">
            {msg.icon}
            <span className="font-medium">Retrait à la ferme</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <MapPin size={16} className="text-egg shrink-0" />
            <span className="truncate">{msg.address}</span>
          </div>

          <div className="pt-2 mt-1 border-t border-slate-200 flex items-center gap-3 text-sm text-slate-500 italic">
            <CheckCircle2 size={16} className="text-nature/40 shrink-0" />
            <span>{msg.hours}</span>
          </div>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="space-y-3">
        <button
          onClick={onCheckout}
          className="w-full py-4 bg-nature text-white font-bold rounded-xl hover:bg-nature/90 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group"
        >
          <span>Confirmer la commande</span>
        </button>
        
        <Link
          href={type === 'restaurant' ? '/restauration' : '/boutique'}
          className="flex items-center justify-center gap-2 w-full py-2 text-slate-400 font-bold text-sm hover:text-nature transition-colors"
        >
          <ArrowLeft size={16} />
          Continuer mes achats
        </Link>
      </div>

      {/* Zone Contact Responsive */}
      <div className="mt-6 pt-4 border-t border-slate-100 hidden sm:block">
        <div className="flex items-center justify-center flex-col gap-1">
          <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">Assistance commande</p>
          <a 
            href="tel:+22893823578" 
            className="text-sm font-bold text-nature hover:text-egg transition-all"
          >
            +228 93 82 35 78
          </a>
        </div>
      </div>
    </motion.div>
  );
}