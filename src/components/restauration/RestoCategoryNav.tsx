"use client";
import React from 'react';
import { motion } from 'motion/react';

interface CategoryNavProps {
  onSelectCategory: (category: string) => void;
  activeCategory: string;
  categories: { id: string; label: string }[];
}

export default function RestoCategoryNav({ onSelectCategory, activeCategory, categories }: CategoryNavProps) {
  return (
    <nav className="sticky top-20 z-40 bg-cream shadow-md border-b border-braised/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex overflow-x-auto py-3 hide-scrollbar">
          <div className="flex space-x-2 md:space-x-4 mx-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => onSelectCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 whitespace-nowrap text-sm sm:text-base
                    ${isActive
                      ? 'bg-braised text-white shadow-lg shadow-braised/30'
                      : 'bg-white text-braised border-2 border-braised hover:bg-braised hover:text-white'
                    }`}
                >
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}