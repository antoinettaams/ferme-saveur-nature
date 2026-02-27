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
    price: "3 000 FCFA",
    category: 'grillades',
    image: "https://i.pinimg.com/736x/b2/26/03/b22603801a3884a67be7a20fc1e281ea.jpg",
  },
  {
    id: 'grillade-3',
    name: "Ailes de Poulet Grillées",
    desc: "Croustillantes à l'extérieur, tendres à l'intérieur. Marinées et grillées à la perfection.",
    price: "4 000 FCFA",
    category: 'grillades',
    image: "https://i.pinimg.com/736x/e2/d2/46/e2d246eee76fcb109bcb43c5cf35a43d.jpg",
    popular: true
  },

  // ===== SPÉCIALITÉS LOCALES =====
  {
    id: 'special-1',
    name: "Kedjenou de Poulet",
    desc: "Plat traditionnel cuit à l'étouffée dans une jarre en terre cuite. Poulet fondant aux légumes et épices.",
    price: " 2 500 FCFA",
    category: 'specialites',
    image: "https://i.pinimg.com/736x/5e/74/95/5e74958bedca42c0f254af9a4c2b0b5e.jpg",
    popular: true
  },
  {
    id: 'special-2',
    name: "Poulet DG",
    desc: "Le plat préféré des gourmands ! Poulet sauté aux légumes et bananes plantains frites.",
    price: "5 0s00 FCFA",
    category: 'specialites',
    image: "https://i.pinimg.com/1200x/11/29/f2/1129f2d724f6c10e06108c149f43c993.jpg",
    popular: true
  },
  {
    id: 'special-3',
    name: "Poulet Yassa",
    desc: "Spécialité sénégalaise revisitée : poulet mariné aux oignons, citron et moutarde, servi avec du riz.",
    price: "6 500 FCFA",
    category: 'specialites',
    image: "https://i.pinimg.com/736x/fc/3a/28/fc3a28fd73412e254153b4a4170779d3.jpg"
  },
  {
    id: 'special-4',
    name: "Riz Gras au Poulet",
    desc: "Riz parfumé cuit dans un bouillon de poulet avec légumes et épices, accompagné de morceaux de poulet.",
    price: "5 500 FCFA",
    category: 'specialites',
    image: "https://i.pinimg.com/1200x/87/e5/e7/87e5e7ea162c503a4f7a326a233650d2.jpg"
  },

  // ===== ACCOMPAGNEMENTS =====
  {
    id: 'accomp-1',
    name: "Alloco",
    desc: "Bananes plantains frites, dorées et croustillantes. Un classique irrésistible.",
    price: "1 000 FCFA",
    category: 'accompagnements',
    image: "https://i.pinimg.com/736x/de/1a/1d/de1a1d9f9a533c49b49ee90f644a5dec.jpg",
    popular: true
  },
  {
    id: 'accomp-2',
    name: "Frites Maison",
    desc: "Pommes de terre fraîches coupées et frites maison, croustillantes à souhait.",
    price: "1 000 FCFA",
    category: 'accompagnements',
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 'accomp-3',
    name: "Salade de la Ferme",
    desc: "Légumes frais : tomates, oignons, concombre, carottes. Vinaigrette maison.",
    price: "2 500 FCFA",
    category: 'accompagnements',
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
  },

  // ===== BOISSONS =====
  {
    id: 'boisson-1',
    name: "Jus de Bissap",
    desc: "Boisson traditionnelle à base d'hibiscus, fraîche et légèrement acidulée. 100% naturel, fait maison.",
    price: "1 500 FCFA",
    category: 'boissons',
    image: "https://i.pinimg.com/1200x/73/8b/7d/738b7dfbd1d84700f95fdc937800ce34.jpg",
    popular: true
  },
  {
    id: 'boisson-2',
    name: "Jus de Gnamakou",
    desc: "Jus de gingembre frais, piquant et rafraîchissant. Fait maison selon la recette traditionnelle.",
    price: "1 500 FCFA",
    category: 'boissons',
    image: "https://i.pinimg.com/1200x/19/30/d5/1930d534161cac21d6c468b3df488c78.jpg"
  },
  {
    id: 'boisson-3',
    name: "Jus de Tamarin",
    desc: "La boisson acidulée qui désaltère. Tamarin frais, eau, sucre de canne. Un délice !",
    price: "1 500 FCFA",
    category: 'boissons',
    image: "https://i.pinimg.com/736x/7d/7c/11/7d7c115e3b781bf8fedde1e7c0117c9f.jpg"
  }
];