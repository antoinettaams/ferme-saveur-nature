"use client";
import { useState } from 'react';
import RestoHeader from '@/components/restauration/RestoHeader';
import RestoMenuCategory from '@/components/restauration/RestoMenuCategory';
import { menuData } from '@/data/menuData';
// import { useCart } from '@/context/CartContext'; // Plus besoin car RestoMenuItem utilise directement le contexte

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
  // const { addToCart } = useCart(); // ← Plus besoin car RestoMenuItem utilise directement le contexte

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId !== 'all') {
      document.getElementById(categoryId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                // onAddToCart est supprimé car plus nécessaire
              />
            ))
          ) : (
            <RestoMenuCategory
              id={activeCategory}
              title={categories.find(c => c.id === activeCategory)?.label || activeCategory}
              items={menuByCategory[activeCategory as keyof typeof menuByCategory] || []}
              // onAddToCart est supprimé car plus nécessaire
            />
          )}
        </div>
      </main>
    </div>
  );
}