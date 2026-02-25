"use client";
import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle2, ShieldCheck, Truck, Zap } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';

const eggProducts = [
  {
    id: 1,
    name: "Plateau de 30 Œufs Frais",
    desc: "Idéal pour la consommation familiale hebdomadaire. Œufs de calibre moyen à gros.",
    price: "2 500 FCFA",
    img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=600",
    tag: "Le plus vendu"
  },
  {
    id: 2,
    name: "Carton de 12 Plateaux (360 Œufs)",
    desc: "Format économique pour les restaurateurs, pâtissiers et revendeurs.",
    price: "28 000 FCFA",
    img: "https://images.unsplash.com/photo-1587486914432-03d1fef47488?auto=format&fit=crop&q=80&w=600",
    tag: "Format Pro"
  },
  {
    id: 3,
    name: "Abonnement Mensuel (4 Plateaux)",
    desc: "Recevez 1 plateau par semaine directement chez vous. Fraîcheur garantie.",
    price: "9 500 FCFA / mois",
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600",
    tag: "Abonnement"
  }
];

export default function Oeufs() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-egg py-24 md:py-32 text-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Nos Œufs Frais du Jour
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
            >
              Récoltés chaque matin, nos œufs sont riches en nutriments et d'une fraîcheur incomparable. Directement de la ferme à votre cuisine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { icon: <Zap className="text-egg" size={28} />, title: "Récolte Matinale", desc: "Moins de 24h" },
              { icon: <ShieldCheck className="text-nature" size={28} />, title: "Contrôle Qualité", desc: "Normes strictes" },
              { icon: <CheckCircle2 className="text-nature" size={28} />, title: "100% Naturel", desc: "Sans additifs" },
              { icon: <Truck className="text-braised" size={28} />, title: "Livraison Rapide", desc: "Zone urbaine" }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center gap-4 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-2 group-hover:bg-egg/10 transition-colors group-hover:scale-110 duration-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-cream">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {eggProducts.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-nature text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {product.tag}
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-nature transition-colors">{product.name}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{product.desc}</p>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-auto pt-6 border-t border-slate-50 gap-4">
                  <span className="text-2xl font-bold text-nature">{product.price}</span>
                  <Link href="/contact" className="btn-nature !py-3 !px-8 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-nature/10">
                    <ShoppingCart size={18} /> Commander
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-10 leading-tight">Pourquoi choisir nos œufs ?</motion.h2>
            <div className="space-y-8">
              {[
                { title: "Richesse en Oméga-3", desc: "Grâce à une alimentation équilibrée à base de céréales sélectionnées." },
                { title: "Jaune Intense", desc: "Signe d'une poule en bonne santé et d'une alimentation naturelle." },
                { title: "Coquille Solide", desc: "Moins de casse lors du transport et une meilleure conservation." },
                { title: "Zéro Stockage", desc: "Nous ne stockons pas nos œufs. Ce qui est récolté est livré." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-2xl bg-egg/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-egg group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={20} className="text-egg group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={scaleIn}
            className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[700px] relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=80&w=800" 
              alt="Qualité des oeufs" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}