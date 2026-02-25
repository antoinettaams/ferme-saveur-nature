"use client";
import { motion } from 'motion/react';
import { Check, ShoppingCart, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';

const poules = [
  {
    id: 1,
    name: "Pondeuses Rouges (ISA Brown)",
    desc: "La référence mondiale pour la ponte. Très rustique, elle s'adapte parfaitement aux conditions climatiques de l'Afrique de l'Ouest. Elle offre une production régulière d'œufs roux de gros calibre.",
    price: "4 500 FCFA / unité",
    availability: "En stock",
    features: ["Production : 300+ œufs/an", "Calibre des œufs : Gros", "Tempérament : Calme", "Âge : 18-20 semaines (prêtes à pondre)"],
    img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800",
    color: "bg-orange-50"
  },
  {
    id: 2,
    name: "Pondeuses Blanches (Leghorn)",
    desc: "Reconnue pour son efficacité alimentaire exceptionnelle. Elle produit des œufs blancs de haute qualité avec une consommation de grain réduite. Idéale pour les élevages intensifs cherchant la rentabilité.",
    price: "4 800 FCFA / unité",
    availability: "Sur commande",
    features: ["Production : 320+ œufs/an", "Calibre des œufs : Moyen à Gros", "Tempérament : Vive", "Âge : 18-20 semaines (prêtes à pondre)"],
    img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800",
    color: "bg-slate-50"
  }
];

export default function Poules() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-nature py-24 md:py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
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
              Nos Poules Pondeuses
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Des souches sélectionnées pour leur performance et leur robustesse. Prêtes à pondre pour votre élevage familial ou professionnel.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {poules.map((poule, i) => (
            <motion.div 
              key={poule.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <motion.div variants={scaleIn} className="w-full lg:w-1/2">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group aspect-[4/3]">
                  <img 
                    src={poule.img} 
                    alt={poule.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-xl">
                    <span className={`font-bold text-sm flex items-center gap-2 ${poule.availability === 'En stock' ? 'text-green-600' : 'text-orange-500'}`}>
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                      {poule.availability}
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="w-full lg:w-1/2 space-y-8">
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{poule.name}</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">{poule.desc}</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {poule.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-cream p-5 rounded-2xl border border-slate-100 hover:border-nature/20 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-nature/10 flex items-center justify-center shrink-0">
                        <Check className="text-nature" size={16} />
                      </div>
                      <span className="font-bold text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Prix unitaire</span>
                    <span className="text-3xl md:text-4xl font-bold text-nature">{poule.price}</span>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <Link href="/contact" className="btn-nature flex-1 sm:flex-none flex items-center justify-center gap-3 py-4 px-8 text-lg shadow-xl shadow-nature/20">
                      <ShoppingCart size={20} /> Commander
                    </Link>
                    <button className="p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all hover:shadow-md" aria-label="Plus d'infos">
                      <Info size={24} className="text-slate-400" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advice Section */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-nature rounded-full blur-3xl"></div>
        </div>
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={scaleIn}
          className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-20 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-egg/20 rounded-3xl flex items-center justify-center shrink-0 rotate-3">
            <Info size={56} className="text-egg" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Besoin de conseils pour votre démarrage ?</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              L'installation d'un nouveau lot de pondeuses demande une préparation minutieuse du bâtiment et une alimentation adaptée. Nos experts sont là pour vous accompagner à chaque étape.
            </p>
            <Link href="/services" className="text-nature font-bold flex items-center justify-center md:justify-start gap-2 hover:gap-4 transition-all text-lg group">
              Découvrir nos services d'accompagnement <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}