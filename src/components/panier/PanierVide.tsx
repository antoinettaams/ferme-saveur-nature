"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft, UtensilsCrossed, Package } from 'lucide-react';
import { fadeInUp } from '@/app/animations';

interface PanierVideProps {
  type: 'restaurant' | 'boutique';
}

export default function PanierVide({ type }: PanierVideProps) {
  const messages = {
    restaurant: {
      icon: <UtensilsCrossed size={48} className="text-egg" />,
      title: 'Votre commande restaurant est vide',
      subtitle: 'Découvrez nos délicieux plats et spécialités',
      link: '/restauration',
      linkText: 'Voir le menu'
    },
    boutique: {
      icon: <Package size={48} className="text-egg" />,
      title: 'Votre panier est vide',
      subtitle: 'Découvrez nos produits de la ferme',
      link: '/boutique',
      linkText: 'Continuer mes achats'
    }
  };

  const msg = messages[type];

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-3xl p-12 text-center shadow-lg"
    >
      <motion.div 
        variants={fadeInUp}
        className="flex justify-center mb-6"
      >
        <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center">
          {msg.icon}
        </div>
      </motion.div>
      
      <motion.h1 
        variants={fadeInUp}
        className="font-serif text-3xl font-bold text-nature mb-4"
      >
        {msg.title}
      </motion.h1>
      
      <motion.p 
        variants={fadeInUp}
        className="text-slate-600 mb-8 max-w-md mx-auto"
      >
        {msg.subtitle}
      </motion.p>
      
      <motion.div variants={fadeInUp}>
        <Link 
          href={msg.link}
          className="inline-flex items-center gap-2 bg-nature text-white px-8 py-4 rounded-full font-bold hover:bg-nature/90 transition-all shadow-lg"
        >
          <ArrowLeft size={20} />
          {msg.linkText}
        </Link>
      </motion.div>
    </motion.div>
  );
}