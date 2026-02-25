"use client";
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Quote, Utensils, Award, Phone } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp, fadeIn, scaleIn } from '../animations';

const testimonials = [
  { 
    name: "Moussa Traoré",
    role: "Restaurateur",
    content: "Les poulets de Saveur Nature sont d'une qualité exceptionnelle. Mes clients adorent le goût authentique du poulet braisé.",
    stars: 5
  },
  {
    name: "Awa Koné",
    role: "Mère de famille",
    content: "Je n'achète mes œufs que chez Saveur Nature. Ils sont toujours frais et les enfants sentent la différence au petit-déjeuner.",
    stars: 5
  },
  {
    name: "Jean-Pierre Kouassi",
    role: "Éleveur",
    content: "Leurs conseils en élevage m'ont permis de doubler ma production en seulement 6 mois. Une expertise précieuse.",
    stars: 5
  }
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-[80px] md:pt-[100px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1920"
            alt="Ferme Avicole"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-xl md:max-w-2xl text-white"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-3 sm:px-4 py-1 bg-egg/20 backdrop-blur-sm border border-egg/30 rounded-full text-egg font-semibold text-xs sm:text-sm mb-4 sm:mb-6"
            >
              Élevage 100% Naturel
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Des œufs frais et des poulets élevés <span className="text-egg whitespace-nowrap">naturellement</span> pour votre santé.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-lg lg:max-w-xl"
            >
              Découvrez l'excellence de l'aviculture moderne en Afrique de l'Ouest. Qualité, fraîcheur et saveur authentique garanties.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="mb-4 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="/poules" className="btn-egg flex items-center justify-center gap-2 group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                <span>Nos Produits</span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/restauration" className="btn-nature !bg-transparent border-2 border-white hover:!bg-white hover:text-nature text-center text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                Notre Restaurant
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator - hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Presentation Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[500px] xl:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800"
                alt="Notre Ferme"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-nature/10 rounded-full -z-0 blur-2xl lg:blur-3xl"></div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-egg p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg z-20 hidden md:block"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">15+</p>
              <p className="text-[10px] sm:text-xs font-medium text-slate-700">Années d'Expérience</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2"
          >
            <motion.span variants={fadeInUp} className="text-nature font-bold tracking-widest uppercase text-xs sm:text-sm block">Qui sommes-nous ?</motion.span>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Une passion pour la terre et le vivant</motion.h2>
            <motion.p variants={fadeInUp} className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Située au cœur de l'Afrique de l'Ouest, la <strong>Ferme Saveur Nature</strong> est née d'une vision simple : offrir aux familles et aux professionnels des produits avicoles d'une qualité irréprochable, élevés dans le respect de l'environnement.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Nous combinons techniques modernes et savoir-faire traditionnel pour garantir des poulets vigoureux et des œufs riches en nutriments. Notre engagement envers la santé de nos clients est au centre de tout ce que nous faisons.
            </motion.p>
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 pt-2 sm:pt-3 lg:pt-4">
              {[
                "Alimentation 100% végétale",
                "Sans hormones de croissance",
                "Hygiène rigoureuse",
                "Traçabilité complète"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-nature/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-nature" size={12} />
                  </div>
                  <span className="font-medium text-slate-700 text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-nature font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2 sm:mb-4"
          >
            Nos Incontournables
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2"
          >
            Produits Vedettes
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            {
              title: "Pondeuses Rouges",
              desc: "Excellentes pondeuses, robustes et adaptées au climat local.",
              img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=400",
              price: "4 500 FCFA",
              link: "/poules"
            },
            {
              title: "Plateau d'Œufs Frais",
              desc: "30 œufs extra-frais récoltés le matin même.",
              img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=400",
              price: "2 500 FCFA",
              link: "/oeufs"
            },
            {
              title: "Poulet Braisé Spécial",
              desc: "Mariné aux épices secrètes de la ferme et braisé au feu de bois.",
              img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=400",
              price: "5 000 FCFA",
              link: "/restauration"
            }
          ].map((product, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100"
            >
              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden relative">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-nature text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                  Populaire
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-nature transition-colors line-clamp-1">{product.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 leading-relaxed line-clamp-2">{product.desc}</p>
                <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-slate-50">
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-nature">{product.price}</span>
                  <Link href={product.link} className="text-nature font-bold flex items-center gap-1 hover:gap-2 transition-all text-xs sm:text-sm">
                    <span>Voir plus</span>
                    <ArrowRight size={14} className="sm:w-[16px] sm:h-[16px]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Restauration Preview */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920"
            alt="Restaurant"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Utensils className="mx-auto text-egg mb-4 sm:mb-6 lg:mb-8 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">Le Goût de l'Authenticité</motion.h2>
            <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed px-4">
              Venez déguster nos grillades et plats locaux préparés avec les produits frais de notre ferme. Une expérience culinaire inoubliable.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/restauration" className="btn-braised inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4">
                <span>Découvrir le Menu</span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.span variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-nature font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2 sm:mb-4">Témoignages</motion.span>
            <motion.h2 variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">Ce que disent nos clients</motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-cream border border-slate-100 relative hover:shadow-xl transition-all duration-500"
              >
                <Quote className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 text-nature/10 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[56px] lg:h-[56px]" />
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 lg:mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-[16px] sm:h-[16px] fill-egg text-egg" />
                  ))}
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 italic mb-4 sm:mb-6 lg:mb-10 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-nature/10 flex items-center justify-center text-nature font-bold text-sm sm:text-base lg:text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm sm:text-base">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-nature font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-nature text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-egg/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl lg:blur-3xl"></div>
        
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center relative z-10 px-2">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Award className="mx-auto text-egg mb-4 sm:mb-6 lg:mb-8 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[64px] lg:h-[64px]" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">Prêt à commander des produits d'exception ?</motion.h2>
            <motion.p variants={fadeInUp} className="text-sm sm:text-base lg:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-xl lg:max-w-2xl mx-auto px-4">
              Que vous soyez un particulier, un restaurateur ou un revendeur, nous avons des solutions adaptées à vos besoins.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 px-4">
              <a href="tel:+2250102030405" className="btn-egg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 whitespace-nowrap">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]" />
                <span>Appeler Maintenant</span>
              </a>
              <Link href="/contact" className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full border-2 border-white font-bold hover:bg-white hover:text-nature transition-all text-sm sm:text-base lg:text-lg text-center whitespace-nowrap">
                Nous Écrire
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}