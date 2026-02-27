"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
  cartType: 'restaurant' | 'boutique' | null; // Type du panier
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'saveur-nature-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [cartType, setCartType] = useState<'restaurant' | 'boutique' | null>(null);

  // Charger le panier depuis localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
        
        // Déterminer le type du panier chargé
        if (parsedCart.length > 0) {
          const firstItem = parsedCart[0];
          if (typeof firstItem.price === 'string' && firstItem.price.includes('FCFA')) {
            setCartType('restaurant');
          } else {
            setCartType('boutique');
          }
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement du panier:', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Sauvegarder dans localStorage
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du panier:', error);
      }
    }
  }, [cart, isInitialized]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      // Déterminer le type du nouvel article
      const newItemType = typeof item.price === 'string' && item.price.includes('FCFA') 
        ? 'restaurant' 
        : 'boutique';
      
      // Si le panier n'est pas vide, vérifier la compatibilité des types
      if (prev.length > 0) {
        const currentType = typeof prev[0].price === 'string' && prev[0].price.includes('FCFA')
          ? 'restaurant'
          : 'boutique';
        
        if (currentType !== newItemType) {
          // Types incompatibles
          alert('Vous ne pouvez pas mélanger des articles de la boutique et du restaurant dans le même panier. Veuillez vider votre panier d\'abord.');
          return prev;
        }
      } else {
        // Premier article, définir le type du panier
        setCartType(newItemType);
      }
      
      // Vérifier si l'article existe déjà
      const existingItem = prev.find(i => i.id === item.id);
      
      if (existingItem) {
        // Augmenter la quantité
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: (i.quantity || 1) + 1 }
            : i
        );
      }
      
      // Ajouter avec quantité 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = prev.filter(item => item.id !== itemId);
      
      // Si le panier devient vide, réinitialiser le type
      if (newCart.length === 0) {
        setCartType(null);
      }
      
      return newCart;
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prev => 
      prev.map(item => 
        item.id === itemId 
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setCartType(null);
  };

  // Calculer le nombre total d'articles
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Calculer le total du panier
  const cartTotal = cart.reduce((sum, item) => {
    const qty = item.quantity || 1;
    
    if (typeof item.price === 'string') {
      const priceStr = item.price;
      const numericStr = priceStr.replace(/[^\d]/g, '');
      const price = parseFloat(numericStr);
      return sum + (isNaN(price) ? 0 : price * qty);
    } else {
      return sum + (item.price * qty);
    }
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      clearCart, 
      cartCount,
      cartTotal,
      cartType 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}