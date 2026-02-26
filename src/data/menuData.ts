// src/data/menuData.ts

export interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: 'grillades' | 'specialites' | 'accompagnements' | 'boissons';
  image: string; // Maintenant obligatoire
  popular?: boolean;
}

export const menuData: MenuItem[] = [
  // ===== GRILLADES =====
  {
    id: 'grillade-1',
    name: "Poulet Braisé Entier",
    desc: "Mariné 24h dans nos épices secrètes, servi avec alloco, attiéké ou frites. Une explosion de saveurs !",
    price: "8 500 FCFA",
    category: 'grillades',
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=600",
    popular: true
  },
  {
    id: 'grillade-2',
    name: "Demi-Poulet Braisé",
    desc: "La portion idéale pour une personne. Mariné et braisé au feu de bois pour un goût authentique.",
    price: "5 000 FCFA",
    category: 'grillades',
    image: "https://images.unsplash.com/photo-1604500131886-1c1b5f5b6b6a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'grillade-3',
    name: "Ailes de Poulet Grillées (x6)",
    desc: "Croustillantes à l'extérieur, tendres à l'intérieur. Marinées et grillées à la perfection.",
    price: "3 500 FCFA",
    category: 'grillades',
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=600",
    popular: true
  },
  {
    id: 'grillade-4',
    name: "Brochettes de Poulet (x4)",
    desc: "Morceaux de poulet tendres marinés et grillés, servis avec sauce spéciale.",
    price: "4 000 FCFA",
    category: 'grillades',
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'grillade-5',
    name: "Poulet Braisé Pimenté",
    desc: "Pour les amateurs de sensations fortes ! Notre poulet braisé relevé avec du piment frais.",
    price: "9 000 FCFA",
    category: 'grillades',
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=600"
  },

  // ===== SPÉCIALITÉS LOCALES =====
  {
    id: 'special-1',
    name: "Kedjenou de Poulet",
    desc: "Plat traditionnel cuit à l'étouffée dans une jarre en terre cuite. Poulet fondant aux légumes et épices.",
    price: "6 000 FCFA",
    category: 'specialites',
    image: "https://images.unsplash.com/photo-1604500131886-1c1b5f5b6b6a?auto=format&fit=crop&q=80&w=600",
    popular: true
  },
  {
    id: 'special-2',
    name: "Poulet DG",
    desc: "Le plat préféré des gourmands ! Poulet sauté aux légumes et bananes plantains frites.",
    price: "7 500 FCFA",
    category: 'specialites',
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=600",
    popular: true
  },
  {
    id: 'special-3',
    name: "Soupe de Poulet Fermier",
    desc: "Riche et réconfortante, préparée avec des herbes fraîches de la ferme et des légumes de saison.",
    price: "4 500 FCFA",
    category: 'specialites',
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'special-4',
    name: "Poulet Yassa",
    desc: "Spécialité sénégalaise revisitée : poulet mariné aux oignons, citron et moutarde, servi avec du riz.",
    price: "6 500 FCFA",
    category: 'specialites',
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'special-5',
    name: "Riz Gras au Poulet",
    desc: "Riz parfumé cuit dans un bouillon de poulet avec légumes et épices, accompagné de morceaux de poulet.",
    price: "5 500 FCFA",
    category: 'specialites',
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=600"
  },

  // ===== ACCOMPAGNEMENTS =====
  {
    id: 'accomp-1',
    name: "Attiéké",
    desc: "Semoule de manioc fermentée, légère et délicieuse. L'accompagnement parfait pour vos grillades.",
    price: "1 000 FCFA",
    category: 'accompagnements',
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'accomp-2',
    name: "Alloco",
    desc: "Bananes plantains frites, dorées et croustillantes. Un classique irrésistible.",
    price: "1 000 FCFA",
    category: 'accompagnements',
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600",
    popular: true
  },
  {
    id: 'accomp-3',
    name: "Frites Maison",
    desc: "Pommes de terre fraîches coupées et frites maison, croustillantes à souhait.",
    price: "1 000 FCFA",
    category: 'accompagnements',
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'accomp-4',
    name: "Salade de la Ferme",
    desc: "Légumes frais du potager : tomates, oignons, concombre, carottes. Vinaigrette maison.",
    price: "2 500 FCFA",
    category: 'accompagnements',
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'accomp-5',
    name: "Plantés Mûrs Frits",
    desc: "Bananes bien mûres frites, naturellement sucrées et caramélisées.",
    price: "1 500 FCFA",
    category: 'accompagnements',
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600"
  },

  // ===== BOISSONS =====
  {
    id: 'boisson-1',
    name: "Jus de Bissap",
    desc: "Boisson traditionnelle à base d'hibiscus, fraîche et légèrement acidulée. 100% naturel, fait maison.",
    price: "1 500 FCFA",
    category: 'boissons',
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=600",
    popular: true
  },
  {
    id: 'boisson-2',
    name: "Jus de Gnamakou",
    desc: "Jus de gingembre frais, piquant et rafraîchissant. Fait maison selon la recette traditionnelle.",
    price: "1 500 FCFA",
    category: 'boissons',
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'boisson-3',
    name: "Jus de Tamarin",
    desc: "La boisson acidulée qui désaltère. Tamarin frais, eau, sucre de canne. Un délice !",
    price: "1 500 FCFA",
    category: 'boissons',
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'boisson-4',
    name: "Eau Minérale 1.5L",
    desc: "Eau de source naturelle, fraîcheur garantie.",
    price: "1 000 FCFA",
    category: 'boissons',
    image: "https://images.unsplash.com/photo-1564415315948-4f9d4a1b3b9a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'boisson-5',
    name: "Jus d'Ananas Frais",
    desc: "Jus d'ananas frais pressé, pur fruit, sans ajout de sucre.",
    price: "2 000 FCFA",
    category: 'boissons',
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'boisson-6',
    name: "Boissons Gazeuses",
    desc: "Coca-Cola, Fanta, Sprite. Au choix.",
    price: "1 000 FCFA",
    category: 'boissons',
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=600"
  }
];