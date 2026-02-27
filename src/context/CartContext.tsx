"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Type unifié pour les articles du panier
export interface CartItem {
  id: string;
  name: string;
  desc: string;
  price: string | number;
  image: string;
  category: string;
  popular?: boolean;
  features?: string[];
  details?: string[];
  quantity?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  cartType: 'restaurant' | 'boutique' | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'saveur-nature-cart';

// --- Configuration du Style des Toasts ---
const toastConfig = {
  style: {
    borderRadius: '16px',
    background: '#1B4332', // Couleur Nature
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    padding: '12px 20px',
  },
  success: {
    iconTheme: { primary: '#FACC15', secondary: '#1B4332' }, // Jaune Egg sur fond vert
  },
  error: {
    style: { background: '#ef4444', borderRadius: '16px', color: '#fff' },
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [cartType, setCartType] = useState<'restaurant' | 'boutique' | null>(null);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
        if (parsedCart.length > 0) {
          const firstItem = parsedCart[0];
          setCartType(typeof firstItem.price === 'string' && firstItem.price.includes('FCFA') ? 'restaurant' : 'boutique');
        }
      }
    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  
const addToCart = (item: CartItem) => {
  const newItemType = typeof item.price === 'string' && item.price.includes('FCFA') ? 'restaurant' : 'boutique';
  
  // 1. Vérification du type AVANT de toucher à l'état
  if (cart.length > 0 && cartType !== newItemType) {
    toast.error(
      `Mélange impossible : votre panier contient déjà des articles du ${cartType === 'restaurant' ? "Restaurant" : "Boutique"}.`,
      { ...toastConfig.error, duration: 5000 }
    );
    return;
  }

  // 2. On détermine si l'article existe déjà pour adapter le message
  const isExisting = cart.some(i => i.id === item.id);

  // 3. Mise à jour de l'état
  setCart(prev => {
    if (isExisting) {
      return prev.map(i => i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
    }
    return [...prev, { ...item, quantity: 1 }];
  });

  // 4. Déclenchement du toast EN DEHORS du cycle de rendu de l'état
  if (isExisting) {
    toast.success(`Quantité mise à jour : ${item.name}`, toastConfig);
  } else {
    setCartType(newItemType);
    toast.success(`${item.name} ajouté au panier`, toastConfig);
  }
};



  const removeFromCart = (itemId: string) => {
    const itemToRemove = cart.find(i => i.id === itemId);
    setCart(prev => {
      const newCart = prev.filter(item => item.id !== itemId);
      if (newCart.length === 0) setCartType(null);
      return newCart;
    });
    if (itemToRemove) toast(`Article retiré`, { icon: '🗑️', ...toastConfig });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => prev.map(item => item.id === itemId ? { ...item, quantity } : item));
  };

  const clearCart = () => {
    setCart([]);
    setCartType(null);
    toast("Panier vidé", { icon: '🧹', ...toastConfig });
  };

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartTotal = cart.reduce((sum, item) => {
    const qty = item.quantity || 1;
    const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d]/g, '')) : item.price;
    return sum + (isNaN(price) ? 0 : price * qty);
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal, cartType }}>
      {/* Configuration globale de l'emplacement des messages */}
      <Toaster position="bottom-right" reverseOrder={false} />
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error('useCart must be used within a CartProvider');
  return context;
}