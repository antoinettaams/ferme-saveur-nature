"use client";
import { useState } from 'react';
import RestoHeader from '@/components/restauration/RestoHeader';
import RestoMenuCategory from '@/components/restauration/RestoMenuCategory';
import { menuData } from '@/data/menuData';
import { useCart } from '@/context/CartContext'; // ← Importer le hook du panier

// Définir les catégories
const categories = [
  { id: 'all', label: 'Tout le menu' },
  { id: 'grillades', label: 'Nos Grillades' },
  { id: 'specialites', label: 'Spécialités' },
  { id: 'accompagnements', label: 'Accompagnements' },
  { id: 'boissons', label: 'Boissons' }
];

// Grouper les données par catégorie
const menuByCategory = {
  grillades: menuData.filter(item => item.category === 'grillades'),
  specialites: menuData.filter(item => item.category === 'specialites'),
  accompagnements: menuData.filter(item => item.category === 'accompagnements'),
  boissons: menuData.filter(item => item.category === 'boissons')
};

export default function Restaurant() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { addToCart } = useCart(); // ← Utiliser le hook pour ajouter au panier

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId !== 'all') {
      document.getElementById(categoryId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Plus besoin de handleAddToCart ici car on utilise directement addToCart du contexte

  return (
    <div>
      <RestoHeader 
        onSelectCategory={handleSelectCategory}
        activeCategory={activeCategory}
        categories={categories}
      />
      
      <main className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {activeCategory === 'all' ? (
            Object.entries(menuByCategory).map(([id, items]) => (
              <RestoMenuCategory
                key={id}
                id={id}
                title={categories.find(c => c.id === id)?.label || id}
                items={items}
                onAddToCart={addToCart} // ← Passage de la fonction du contexte
              />
            ))
          ) : (
            <RestoMenuCategory
              id={activeCategory}
              title={categories.find(c => c.id === activeCategory)?.label || activeCategory}
              items={menuByCategory[activeCategory as keyof typeof menuByCategory] || []}
              onAddToCart={addToCart} // ← Passage de la fonction du contexte
            />
          )}
        </div>
      </main>
    </div>
  );
}