"use client";
import { motion } from 'motion/react';
import { Clock, Phone, Store, MapPin } from 'lucide-react';
import Link from 'next/link';

interface PanierResumeProps {
  type: 'restaurant' | 'boutique';
  total: number;
  cartCount: number;
  onCheckout: () => void;
}

export default function PanierResume({ type, total, cartCount, onCheckout }: PanierResumeProps) {
  // Vérifier si total est un nombre valide
  const isValidTotal = !isNaN(total) && isFinite(total);
  const formattedTotal = isValidTotal ? total.toLocaleString() + ' FCFA' : '0 FCFA';

  const messages = {
    restaurant: {
      info: 'Préparation sous 1 heures au plus', 
      address: 'Aneho, Landjo',
      hours: 'Sam-Dim : 09h - 18h',
      icon: <Store size={20} className="text-egg" />
    },
    boutique: {
      info: 'Retrait à la ferme',
      address: 'Aneho, Landjo',
      hours: 'Lun-Sam : 08h - 18h',
      icon: <Store size={20} className="text-egg" />
    }
  };

  const msg = messages[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg sticky top-28"
    >
      <h3 className="font-serif text-xl font-bold text-nature mb-6 pb-4 border-b border-slate-100">
        Résumé de la commande
      </h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-slate-600">
          <span>Total ({cartCount} article{cartCount > 1 ? 's' : ''})</span>
          <span className="font-bold text-xl text-nature">{formattedTotal}</span>
        </div>
      </div>

      {/* Informations spécifiques */}
      <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Clock size={16} className="text-egg" />
          <span>{msg.info}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          {msg.icon}
          <span>Retrait sur place</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} className="text-egg" />
          <span>{msg.address}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Clock size={16} className="text-egg" />
          <span>{msg.hours}</span>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="space-y-3">
        <button
          onClick={onCheckout}
          className="w-full py-4 bg-nature text-white font-bold rounded-xl hover:bg-nature/90 transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <span>Confirmer la commande</span>
        </button>
        
        <Link
          href={type === 'restaurant' ? '/restauration' : '/boutique'}
          className="block w-full py-3 text-center text-slate-500 font-bold text-sm hover:text-nature transition-colors"
        >
          ← Continuer mes achats
        </Link>
      </div>

      {/* Contact */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <p className="text-xs text-slate-400 text-center">
          Un souci ? Appelez-nous au{' '}
          <a 
            href="tel:+22893823578" 
            className="font-bold text-nature hover:text-egg transition-colors inline-flex items-center gap-1 group"
          >
            +228 93 82 35 78
          </a>
        </p>
      </div>
    </motion.div>
  );
}