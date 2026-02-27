"use client";
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useCart } from '@/context/CartContext';
import { staggerContainer } from '@/app/animations';
import PanierVide from '@/components/panier/PanierVide';
import PanierArticle from '@/components/panier/PanierArticle';
import PanierResume from '@/components/panier/PanierResume';
import PanierActions from '@/components/panier/PanierActions'; 

export default function PanierPage() {
  const { cart, removeFromCart, clearCart, cartType } = useCart();
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

  // Initialiser les quantités
  useEffect(() => {
    const initialQuantities: {[key: string]: number} = {};
    cart.forEach(item => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  // Mettre à jour la quantité
  const updateQuantity = (itemId: string, newQty: number) => {
    if (newQty < 1) return;
    setQuantities(prev => ({ ...prev, [itemId]: newQty }));
  };

  // Calculer le total
  const calculateTotal = () => {
    if (cart.length === 0) return 0;
    
    return cart.reduce((sum, item) => {
      const qty = quantities[item.id] || item.quantity || 1;
      
      if (cartType === 'restaurant') {
        const priceStr = item.price as string;
        const numericStr = priceStr.replace(/[^\d]/g, '');
        const price = parseFloat(numericStr);
        return sum + (isNaN(price) ? 0 : price * qty);
      } else {
        const price = item.price as number;
        return sum + (isNaN(price) ? 0 : price * qty);
      }
    }, 0);
  };

  const total = calculateTotal();
  const cartCount = cart.length;

  // Gérer la validation de commande
  const handleCheckout = () => {
    if (cartType === 'restaurant') {
      window.location.href = '/commande/restaurant';
    } else {
      window.location.href = '/commande/boutique';
    }
  };

  // Si le panier est vide
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <PanierVide type={cartType || 'boutique'} />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-4xl font-bold text-nature mb-2">
            {cartType === 'restaurant' ? 'Votre commande' : 'Votre panier'}
          </h1>
          <p className="text-slate-600">
            {cartType === 'restaurant' 
              ? 'Récapitulez votre commande avant de la valider'
              : 'Récapitulez vos achats avant de finaliser'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des articles */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <PanierArticle
                key={`${item.id}-${index}`}
                item={item}
                index={index}
                quantity={quantities[item.id] || item.quantity || 1}
                type={cartType || 'boutique'}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}

            {/* Actions */}
            <PanierActions 
              cartCount={cartCount}
              onClearCart={clearCart}
            />
          </div>

          {/* Résumé */}
          <div className="lg:col-span-1">
            <PanierResume
              type={cartType || 'boutique'}
              total={total}
              cartCount={cartCount}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}