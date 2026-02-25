"use client";
import { motion } from 'motion/react';
import { Utensils, Clock, MapPin, Star, ArrowRight, Flame, Phone } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp, scaleIn } from '../animations';

const menuItems = [
  {
    category: "Nos Grillades",
    items: [
      { name: "Poulet Braisé Entier", desc: "Mariné 24h, servi avec alloco, attiéké ou frites.", price: "8 500 FCFA" },
      { name: "Demi-Poulet Braisé", desc: "La portion idéale pour une personne.", price: "5 000 FCFA" },
      { name: "Ailes de Poulet Grillées (x6)", desc: "Croustillantes et savoureuses.", price: "3 500 FCFA" }
    ]
  },
  {
    category: "Spécialités Locales",
    items: [
      { name: "Kedjenou de Poulet", desc: "Cuit à l'étouffée dans sa jarre en terre cuite.", price: "6 000 FCFA" },
      { name: "Poulet DG", desc: "Mélange gourmand de poulet, légumes et bananes plantains.", price: "7 500 FCFA" },
      { name: "Soupe de Poulet Fermier", desc: "Riche et réconfortante, aux herbes de la ferme.", price: "4 500 FCFA" }
    ]
  },
  {
    category: "Accompagnements & Boissons",
    items: [
      { name: "Attiéké / Alloco / Frites", desc: "Portion généreuse.", price: "1 000 FCFA" },
      { name: "Jus de Bissap / Gnamakou", desc: "Fait maison, 100% naturel.", price: "1 500 FCFA" },
      { name: "Salade de la Ferme", desc: "Légumes frais du potager.", price: "2 500 FCFA" }
    ]
  }
];

export default function Restauration() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=1920" 
            alt="Restaurant Grillade" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
        <div className="relative z-10 px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Flame className="text-braised mx-auto mb-8" size={72} />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold mb-6 leading-tight">Le Coin Braisé</motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Une cuisine authentique, généreuse et préparée avec les meilleurs produits de notre ferme.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { icon: <Clock className="text-nature" size={28} />, label: "Service", value: "11:00 - 22:00" },
              { icon: <MapPin className="text-nature" size={28} />, label: "Lieu", value: "À la Ferme" },
              { icon: <Star className="text-egg" size={28} />, label: "Note", value: "4.9/5 (200+ avis)" }
            ].map((info, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">{info.label}</p>
                  <p className="font-bold text-lg">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.span variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-braised font-bold tracking-widest uppercase text-sm block mb-4">Notre Carte</motion.span>
            <motion.h2 variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-4xl md:text-6xl font-bold">Saveurs du Terroir</motion.h2>
          </div>

          <div className="space-y-20">
            {menuItems.map((section, idx) => (
              <motion.div 
                key={idx} 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-nature mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-nature/20"></span>
                  {section.category}
                  <span className="flex-grow h-[2px] bg-nature/20"></span>
                </motion.h3>
                <div className="grid grid-cols-1 gap-10">
                  {section.items.map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={fadeInUp}
                      className="flex flex-col md:flex-row md:items-start justify-between gap-4 group"
                    >
                      <div className="flex-grow max-w-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl md:text-2xl font-bold group-hover:text-braised transition-colors">{item.name}</h4>
                          <div className="flex-grow border-b border-dotted border-slate-300 translate-y-[-4px] hidden md:block"></div>
                        </div>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-braised bg-braised/5 px-4 py-1 rounded-xl">{item.price}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={scaleIn}
            className="mt-24 p-8 md:p-16 bg-white rounded-[3rem] shadow-2xl border border-slate-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-braised"></div>
            <h3 className="text-3xl font-bold mb-6">Envie de manger chez vous ?</h3>
            <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Nous proposons également un service de vente à emporter et de livraison dans un rayon de 10km pour que vous puissiez savourer nos plats où que vous soyez.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:+2250102030405" className="btn-braised flex items-center justify-center gap-3 text-lg py-4 px-10 shadow-xl shadow-braised/20">
                <Phone size={20} /> Commander par téléphone
              </a>
              <Link href="/contact" className="px-10 py-4 rounded-full border-2 border-nature text-nature font-bold hover:bg-nature hover:text-white transition-all text-lg text-center">
                Nous Contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1594221708779-94832f4320d1?auto=format&fit=crop&q=80&w=400"
            ].map((img, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="aspect-square rounded-[2rem] overflow-hidden shadow-lg group"
              >
                <img 
                  src={img} 
                  alt="Plat" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}