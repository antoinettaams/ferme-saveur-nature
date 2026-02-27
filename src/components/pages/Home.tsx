"use client";
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Quote, Utensils, Award, Phone } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp, fadeIn, scaleIn } from '@/app/animations';


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-[70px] md:pt-[60px] overflow-hidden">
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
              <Link href="/boutique" className="btn-egg flex items-center justify-center gap-2 group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                <span>Nos Produits</span>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/restauration" className="btn-nature !bg-transparent border-2 border-white hover:text-nature text-center text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
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
                src="https://i.postimg.cc/7bvGPmym/Gemini-Generated-Image-1tlz4h1tlz4h1tlz.png"
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
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">20+</p>
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
              price: "3 500 FCFA",
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
              img: "https://i.pinimg.com/1200x/8a/1e/ee/8a1eee6c06ff887086bf322c26ca1917.jpg",
              price: "7 000 FCFA",
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

      {/* Section Témoignages */}
<section className="py-12 sm:py-16 md:py-20 bg-cream">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* En-tête */}
    <div className="text-center mb-8 sm:mb-10 md:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-2 bg-nature/10 text-nature rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">
          Ils nous font confiance
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nature mb-3">
          Témoignages de nos clients
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
          Découvrez ce que nos clients pensent de nos poules et de nos œufs frais.
        </p>
      </motion.div>
    </div>

    {/* Grille de témoignages */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {[
         {
    id: 1,
    name: "Koffi A.",
    role: "Éleveur - Lomé",
    avatar: "KA",
    comment: "J'ai acheté 10 poules rousse chez Saveur Nature. Elles sont en pleine forme et pondent bien ! Le taux de ponte est excellent, je recommande vivement ces souches.",
    rating: 5,
    date: "Il y a 2 semaines",
    product: "Poules Rousses (ISA Brown)"
  },
  {
    id: 2,
    name: "Ama T.",
    role: "Maman - Kpalimé",
    avatar: "AT",
    comment: "Depuis que j'achète mes œufs ici, mes enfants ne veulent plus ceux du marché. Le jaune est bien orangé et le goût est incomparable. Je prends 2 plateaux par semaine !",
    rating: 5,
    date: "Il y a 1 mois",
    product: "Œufs frais (Plateau 30)"
  },
  {
    id: 3,
    name: "Jean-Marc K.",
    role: "Restaurateur - Tsévié",
    avatar: "JK",
    comment: "Je suis restaurateur et j'utilise exclusivement les poules de Saveur Nature pour mon poulet braisé. La qualité de la chair est exceptionnelle. Mes clients sont conquis !",
    rating: 5,
    date: "Il y a 3 semaines",
    product: "Poules Sussex"
  },
      ].map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 relative group"
        >
          {/* Guillemets décoratifs */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-5xl sm:text-6xl text-nature/5 font-serif group-hover:text-nature/10 transition-colors">
            "
          </div>

          {/* Étoiles */}
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  i < testimonial.rating ? 'text-egg fill-egg' : 'text-slate-200 fill-slate-200'
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Commentaire */}
          <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed relative z-10 line-clamp-4">
            "{testimonial.comment}"
          </p>

          {/* Produit acheté */}
          <div className="inline-block px-2 py-1 bg-nature/5 text-nature rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider mb-3">
            Achat : {testimonial.product}
          </div>

          {/* Auteur */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-nature to-nature/80 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
              {testimonial.avatar}
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-nature">{testimonial.name}</h4>
              <p className="text-[8px] sm:text-[10px] text-slate-400">{testimonial.role}</p>
              <p className="text-[7px] sm:text-[8px] text-slate-300 mt-0.5">{testimonial.date}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Statistiques */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
    >
      {[
        { number: "500+", label: "Clients satisfaits" },
        { number: "98%", label: "Recommandent nos produits" },
        { number: "1000+", label: "Poules vendues" },
        { number: "4.9/5", label: "Note moyenne" }
      ].map((stat, i) => (
        <div key={i} className="bg-white p-3 sm:p-4 rounded-xl text-center shadow-sm">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-nature">{stat.number}</p>
          <p className="text-[8px] sm:text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
        </div>
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
              <a href="tel:+22893823578" className="btn-egg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 whitespace-nowrap">
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