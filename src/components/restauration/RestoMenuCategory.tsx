"use client";
import React from 'react';
import RestoMenuItem from './RestoMenuItem';
import { MenuItem } from '@/data/menuData';
import { motion } from 'motion/react';
import { fadeInUp } from '@/app/animations';

interface RestoMenuCategoryProps {
  id: string;
  title: string;
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export default function RestoMenuCategory({ id, title, items, onAddToCart }: RestoMenuCategoryProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-nature inline-block pb-2 border-b-4 border-egg">
          {title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <RestoMenuItem
            key={item.id}
            item={item}
            index={index}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}