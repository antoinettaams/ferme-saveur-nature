"use client";
import { Trash2 } from 'lucide-react';

interface PanierActionsProps {
  cartCount: number;
  onClearCart: () => void;
}

export default function PanierActions({ cartCount, onClearCart }: PanierActionsProps) {
  if (cartCount === 0) return null;

  return (
    <div className="flex justify-between items-center mt-4">
      <p className="text-sm text-slate-500">
        {cartCount} article{cartCount > 1 ? 's' : ''} dans votre panier
      </p>
      <button
        onClick={onClearCart}
        className="flex items-center gap-2 px-6 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all"
      >
        <Trash2 size={18} />
        Vider le panier
      </button>
    </div>
  );
}