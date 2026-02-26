"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Filter, 
  Flame,
  ChevronDown,
  Egg,
  Droplets,
  Wheat,
  TrendingUp,
  Users,
  Clock,
  Star,
  X,
  Send,
  Sparkles,
  Shield,
  Heart,
  Leaf
} from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { staggerContainer, fadeInUp, scaleIn } from '@/app/animations';

// Interface pour les témoignages
interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
  date: string;
  product: string;
}

// Interface adaptée pour correspondre à MenuItem du contexte
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  desc?: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Poules' | 'Œufs';
  image: string;
  desc: string;
  features: string[];
  details?: string[];
  popular?: boolean;
}

const products: Product[] = [
  // ===== POULES =====
  {
    id: 'poule-rouge',
    name: 'Poule Rousse',
    price: 3500,
    category: 'Poules',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800',
    desc: 'La pondeuse fermière par excellence. Calme, rustique et très facile à apprivoiser.',
    features: ['+300 œufs roux/an', 'Tempérament docile', 'Gabarit robuste'],
    details: [
      'Valorise les restes ménagers',
      'Excellente résistance au froid',
    ],
    popular: true
  },
  {
    id: 'poule-blanche',
    name: 'Poule Blanche',
    price: 3500,
    category: 'Poules',
    image: 'https://i.pinimg.com/1200x/18/bf/04/18bf04758cefd9b03d987fea0f121d86.jpg',
    desc: 'Championne mondiale du rendement. Vive et légère, elle offre une efficacité alimentaire imbattable.',
    features: ['+320 œufs blancs/an', 'Consommation réduite', 'Indice de ponte record'],
    details: [
      'Grande résistance à la chaleur',
      'Besoin d\'espace (volage)',
    ],
    popular: false
  },
  // ===== ŒUFS =====
  {
    id: 'oeufs-plateau',
    name: 'Plateau 30 Œufs Frais',
    price: 2500,
    category: 'Œufs',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=800',
    desc: 'Œufs du jour, ramassés à la main. Qualité extra-fraîche.',
    features: ['Calibre Gros', 'Coquille solide', 'Jaune intense'],
    details: [
      'Idéal pour familles nombreuses',
      'Conservation: 28 jours au frais',
      'Ramassage quotidien à la main',
    ],
    popular: true
  }
];

const categories = ['Tous', 'Poules', 'Œufs'];

// Témoignages initiaux enrichis
const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Koffi A.",
    role: "Éleveur - Lomé",
    avatar: "KA",
    comment: "J'ai acheté 10 poules rousse chez Saveur Nature. Elles sont en pleine forme et pondent bien ! Le taux de ponte est excellent, je recommande vivement ces souches.",
    rating: 5,
    date: "Il y a 2 semaines",
    product: "Poules Rousses"
  },
  {
    id: 2,
    name: "Ama T.",
    role: "Maman - Kpalimé",
    avatar: "AT",
    comment: "Depuis que j'achète mes œufs ici, mes enfants ne veulent plus ceux du marché. Le jaune est bien orangé et le goût est incomparable. Je prends 2 plateaux par semaine !",
    rating: 5,
    date: "Il y a 1 mois",
    product: "Plateaux d'œufs"
  },
  {
    id: 3,
    name: "Jean-Marc K.",
    role: "Restaurateur - Tsévié",
    avatar: "JK",
    comment: "Je suis restaurateur et j'utilise exclusivement les poules de Saveur Nature pour mon poulet braisé. La qualité de la chair est exceptionnelle. Mes clients sont conquis !",
    rating: 5,
    date: "Il y a 3 semaines",
    product: "Restaurant"
  }
];

export default function Boutique() {
  const [filter, setFilter] = useState('Tous');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [showAddTestimonial, setShowAddTestimonial] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    comment: '',
    rating: 5,
    product: ''
  });
  const [ratingHover, setRatingHover] = useState(0);
  const { addToCart } = useCart();

  const filteredProducts = filter === 'Tous' 
    ? products 
    : products.filter(p => p.category === filter);

  const handleAddToCart = (product: Product) => {
    // Adapter les données pour correspondre à MenuItem du contexte
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price.toString(), // Conversion en string
      image: product.image,
      category: 'specialites', // ← Catégorie par défaut compatible avec le restaurant
      desc: product.desc
    };
    addToCart(cartItem);
  };

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTestimonial.name || !newTestimonial.comment || !newTestimonial.product) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const testimonial: Testimonial = {
      id: testimonials.length + 1,
      name: newTestimonial.name,
      role: newTestimonial.role || 'Client',
      avatar: newTestimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
      comment: newTestimonial.comment,
      rating: newTestimonial.rating,
      date: "À l'instant",
      product: newTestimonial.product
    };

    setTestimonials([testimonial, ...testimonials]);
    setShowAddTestimonial(false);
    setNewTestimonial({
      name: '',
      role: '',
      comment: '',
      rating: 5,
      product: ''
    });
  };

  return (
    <>
      <div className="min-h-screen bg-cream">
        {/* Header Fictif pour tester le sticky */}
        <header className="fixed top-0 left-0 right-0 h-20 bg-nature z-50 flex items-center px-6 shadow-lg">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <h2 className="text-white font-serif text-2xl font-bold">Saveur Nature</h2>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Accueil</Link>
              <Link href="/boutique" className="text-egg font-medium text-sm">Boutique</Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Contact</Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-nature via-nature/90 to-nature/80 pt-40 pb-32 md:pb-40 text-white text-center overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_white_0%,_transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-egg rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-braised rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                variants={fadeInUp}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Notre <span className="text-egg">Boutique</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              >
                Découvrez nos meilleures souches de poules pondeuses et nos œufs frais de qualité supérieure. 
                Des produits 100% fermiers pour votre famille ou votre élevage.
              </motion.p>

              {/* Stats rapides */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12"
              >
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                  <Egg size={20} className="text-egg" />
                  <span className="font-bold text-sm sm:text-base">3 races disponibles</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                  <Droplets size={20} className="text-egg" />
                  <span className="font-bold text-sm sm:text-base">Œufs extra-frais</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                  <Wheat size={20} className="text-egg" />
                  <span className="font-bold text-sm sm:text-base">Alimentation naturelle</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Wave décorative */}
          <div className="absolute bottom-0 left-0 right-0 leading-none">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FDFBF7"/>
            </svg>
          </div>
        </section>
        
        <div className="pt-0 relative">
          {/* Filter Bar - FIXÉ: top-[80px] pour coller au header de 80px sans espace, et bg-cream sur le container sticky */}
          <div className="sticky top-[80px] z-40 bg-cream w-full">
            <section className="bg-cream border-y border-nature/10 shadow-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 py-3">
                  <div className="flex items-center gap-2 text-nature mr-2 hidden sm:flex">
                    <Filter size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Filtrer:</span>
                  </div>
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                        filter === cat 
                          ? 'bg-nature text-white shadow-lg shadow-nature/30' 
                          : 'bg-white text-nature border-2 border-nature hover:bg-nature hover:text-white'
                      }`}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Products Grid avec descriptions enrichies */}
          <section className="py-12 sm:py-16 md:py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={filter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      custom={index}
                      onHoverStart={() => setHoveredId(product.id)}
                      onHoverEnd={() => setHoveredId(null)}
                      className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100"
                    >
                      {/* Badges */}
                      <div className="absolute top-3 left-3 right-3 z-20 flex justify-between">
                        {product.popular && (
                          <span className="flex items-center gap-1 bg-egg text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">
                            <Flame size={10} />
                            Populaire
                          </span>
                        )}
                        <span className={`ml-auto px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg ${
                          product.category === 'Poules' ? 'bg-nature text-white' : 'bg-egg text-slate-900'
                        }`}>
                          {product.category}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Contenu avec descriptions détaillées */}
                      <div className="p-5">
                        <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-nature transition-colors">{product.name}</h3>
                        <p className="text-slate-600 mb-3 text-sm leading-relaxed">{product.desc}</p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-3 gap-1 mb-3">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="bg-nature/5 rounded-lg p-1.5 text-center">
                              <p className="text-[10px] font-bold text-nature leading-tight">{feature}</p>
                            </div>
                          ))}
                        </div>

                        {/* Détails supplémentaires avec animation au hover */}
                        <AnimatePresence>
                          {hoveredId === product.id && product.details && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden mb-3"
                            >
                              <div className="bg-nature/5 rounded-xl p-3">
                                <h4 className="text-xs font-bold text-nature mb-2 flex items-center gap-1">
                                  <Sparkles size={12} />
                                  Détails du produit
                                </h4>
                                <ul className="space-y-1">
                                  {product.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-1 text-[10px] text-slate-600">
                                      <CheckCircle2 size={10} className="text-nature shrink-0" />
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Prix et bouton */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                          <div>
                            <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Prix unitaire</p>
                            <p className="text-xl font-bold text-nature">{product.price.toLocaleString()} <span className="text-xs text-slate-400 ml-1">FCFA</span></p>
                          </div>
                          <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }} 
                            onClick={() => handleAddToCart(product)} 
                            className="bg-egg hover:bg-egg/90 text-slate-900 p-3 rounded-xl shadow-lg shadow-egg/20 transition-all flex items-center gap-2"
                          >
                            <ShoppingCart size={20} />
                            <span className="text-xs font-bold hidden sm:block">Ajouter</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-slate-400 text-base sm:text-lg">Aucun produit dans cette catégorie</p>
                </div>
              )}
            </div>
          </section>

          {/* Avantages Section améliorée */}
          <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nature mb-3">
                  Pourquoi choisir nos produits ?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
                  Des produits de qualité, élevés avec passion dans le respect du bien-être animal.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { icon: <Shield size={20} className="sm:w-6 sm:h-6" />, title: "Qualité garantie", desc: "Sélection rigoureuse des souches" },
                  { icon: <Heart size={20} className="sm:w-6 sm:h-6" />, title: "Bien-être animal", desc: "Poules élevées en plein air" },
                  { icon: <Clock size={20} className="sm:w-6 sm:h-6" />, title: "Frais du jour", desc: "Ramassage quotidien des œufs" },
                  { icon: <Leaf size={20} className="sm:w-6 sm:h-6" />, title: "100% Naturel", desc: "Alimentation sans OGM" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-cream p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center group hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-nature/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-nature group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials améliorés */}
          <section className="py-16 sm:py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-10 sm:mb-12">
                <span className="inline-block px-4 py-2 bg-nature/10 text-nature rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
                  Ils nous font confiance
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-nature mb-4">Témoignages</h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                  Découvrez les retours de nos clients sur la qualité de nos produits
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  onClick={() => setShowAddTestimonial(true)} 
                  className="mt-6 px-6 sm:px-8 py-3 bg-nature text-white rounded-full font-bold shadow-lg hover:bg-nature/90 transition-all inline-flex items-center gap-2"
                >
                  <Star size={18} />
                  Ajouter votre avis
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.slice(0, 6).map((t, index) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl border border-nature/5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < t.rating ? 'text-egg fill-egg' : 'text-slate-200'} />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">"{t.comment}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nature to-nature/80 text-white flex items-center justify-center font-bold shadow-md">
                        {t.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-nature text-sm">{t.name}</h4>
                        <p className="text-xs text-slate-400">{t.role}</p>
                        <p className="text-[10px] text-slate-300 mt-0.5">{t.date}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-nature/60">Produit: {t.product}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Modal pour ajouter un avis amélioré */}
          <AnimatePresence>
            {showAddTestimonial && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
                onClick={() => setShowAddTestimonial(false)}
              >
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0, y: 20 }} 
                  animate={{ scale: 1, opacity: 1, y: 0 }} 
                  exit={{ scale: 0.95, opacity: 0, y: 20 }} 
                  className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto" 
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-nature">Votre avis</h3>
                      <p className="text-sm text-slate-500 mt-1">Partagez votre expérience avec nos produits</p>
                    </div>
                    <button onClick={() => setShowAddTestimonial(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                      <X size={24} className="text-slate-400" />
                    </button>
                  </div>

                  <form onSubmit={handleAddTestimonial} className="space-y-5">
                    {/* Nom */}
                    <div>
                      <label className="block text-sm font-bold text-nature mb-1">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Ex: Jean Kouassi" 
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-nature focus:ring-4 focus:ring-nature/5 outline-none transition-all" 
                        value={newTestimonial.name} 
                        onChange={e => setNewTestimonial({...newTestimonial, name: e.target.value})} 
                        required 
                      />
                    </div>

                    {/* Rôle */}
                    <div>
                      <label className="block text-sm font-bold text-nature mb-1">
                        Rôle / Profession <span className="text-slate-400 text-xs">(optionnel)</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Ex: Éleveur, Maman, Restaurateur..." 
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-nature focus:ring-4 focus:ring-nature/5 outline-none transition-all" 
                        value={newTestimonial.role} 
                        onChange={e => setNewTestimonial({...newTestimonial, role: e.target.value})} 
                      />
                    </div>

                    {/* Produit */}
                    <div>
                      <label className="block text-sm font-bold text-nature mb-1">
                        Produit concerné <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-nature focus:ring-4 focus:ring-nature/5 outline-none appearance-none bg-white" 
                          value={newTestimonial.product} 
                          onChange={e => setNewTestimonial({...newTestimonial, product: e.target.value})} 
                          required
                        >
                          <option value="">Sélectionnez un produit</option>
                          <option value="Plateaux d'œufs">🥚 Plateaux d'œufs (30 œufs)</option>
                          <option value="Poules Rousses">🐔 Poules Rousses</option>
                          <option value="Poules Blanches">🐓 Poules Blanches</option>
                          <option value="Restaurant">🍗 Restaurant </option>
                        </select>
                        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Note */}
                    <div>
                      <label className="block text-sm font-bold text-nature mb-2">
                        Votre note <span className="text-red-500">*</span>
                      </label>
                      <div className="flex justify-center gap-2 py-2 bg-slate-50 rounded-xl p-3">
                        {[1,2,3,4,5].map(s => (
                          <button 
                            key={s} 
                            type="button" 
                            onClick={() => setNewTestimonial({...newTestimonial, rating: s})} 
                            onMouseEnter={() => setRatingHover(s)} 
                            onMouseLeave={() => setRatingHover(0)}
                            className="focus:outline-none transform hover:scale-110 transition-transform"
                          >
                            <Star 
                              size={32} 
                              className={`transition-all duration-200 ${
                                s <= (ratingHover || newTestimonial.rating) 
                                  ? 'text-egg fill-egg drop-shadow-md' 
                                  : 'text-slate-300 fill-transparent'
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Commentaire */}
                    <div>
                      <label className="block text-sm font-bold text-nature mb-1">
                        Votre commentaire <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        placeholder="Décrivez votre expérience avec nos produits..." 
                        rows={4} 
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-nature focus:ring-4 focus:ring-nature/5 outline-none resize-none" 
                        value={newTestimonial.comment} 
                        onChange={e => setNewTestimonial({...newTestimonial, comment: e.target.value})} 
                        required 
                      />
                    </div>

                    {/* Boutons */}
                    <div className="flex gap-3 pt-2">
                      <button 
                        type="button" 
                        onClick={() => setShowAddTestimonial(false)} 
                        className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all"
                      >
                        Annuler
                      </button>
                      <button 
                        type="submit" 
                        className="flex-1 px-4 py-3 rounded-xl bg-nature text-white font-bold text-sm hover:bg-nature/90 shadow-lg shadow-nature/20 transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={18} />
                        Publier
                      </button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}