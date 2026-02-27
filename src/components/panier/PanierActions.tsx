"use client";
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface PanierActionsProps {
  cartCount: number;
  onClearCart: () => void;
}

export default function PanierActions({ cartCount, onClearCart }: PanierActionsProps) {
  if (cartCount === 0) return null;

  const handleConfirmClear = () => {
    // On crée un toast personnalisé avec des boutons
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="font-medium text-slate-800">
          Voulez-vous vraiment vider tout le panier ?
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              onClearCart();
              toast.dismiss(t.id);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-600 transition-colors"
          >
            Oui, vider
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors"
          >
            Annuler
          </button>
        </div>
      </div>
    ), {
      duration: 6000,
      position: 'bottom-center', // Mieux centré pour une confirmation
      style: {
        borderRadius: '16px',
        background: '#fff',
        border: '1px solid #e2e8f0',
        padding: '16px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    });
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <p className="text-sm text-slate-500">
        {cartCount} article{cartCount > 1 ? 's' : ''} dans votre panier
      </p>
      <button
        onClick={handleConfirmClear} // On appelle la confirmation ici
        className="flex items-center gap-2 px-6 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all"
      >
        <Trash2 size={18} />
        Vider le panier
      </button>
    </div>
  );
}