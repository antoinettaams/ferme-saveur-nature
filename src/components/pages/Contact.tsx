"use client";
import React, { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { staggerContainer,fadeInUp,scaleIn } from '@/app/animations';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Notre équipe vous contactera très prochainement.");
  }; 
  
  return (
    <div>
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
              Contactez - Nous
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Nous sommes à votre écoute. Que vous soyez préoccupé par la qualité de vos produits ou que vous cherchiez simplement à en savoir plus sur notre ferme, n'hésitez pas à nous contacter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
           {/* Contact Info */}
           <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-8 md:space-y-12"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 px-4 lg:px-0">
                Nos Coordonnées
              </motion.h2>
              <div className="space-y-4 md:space-y-6 px-4 lg:px-0">
                {[
                  { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, label: "Téléphone / WhatsApp", value: "+228 93 82 35 78" },
                  { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, label: "Email", value: "contact@fermesaveurnature.com" },
                  { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, label: "Localisation", value: "Aneho, Landjo" },
                  { 
                    icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />, 
                    label: "Horaires", 
                    value: (
                      <div className="space-y-1.5 md:space-y-2">
                        <div className="flex flex-col xs:flex-row xs:items-baseline gap-1 xs:gap-2">
                          <span className="font-medium text-slate-800 whitespace-nowrap text-sm md:text-base">Lundi - Samedi :</span>
                          <span className="text-slate-600 text-sm md:text-base">08h00 - 17h00</span>
                        </div>
                        <div className="flex flex-col xs:flex-row xs:items-baseline gap-1 xs:gap-2">
                          <span className="font-medium text-slate-800 whitespace-nowrap text-sm md:text-base">Dimanche :</span>
                          <span className="text-slate-600 text-sm md:text-base">10h00 - 19h00 (Restauration)</span>
                        </div>
                      </div>
                    )
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp} 
                    className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-nature/10 flex items-center justify-center shrink-0 text-nature">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">
                        {item.label}
                      </p>
                      <div className="font-bold text-base md:text-lg text-slate-800 break-words">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={scaleIn}
              className="lg:col-span-7"
            >
              <div className="bg-white p-8 md:p-11 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-nature"></div>
                <h2 className="text-3xl font-bold mb-10">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Nom complet</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-2 rounded-2xl bg-slate-50 border border-slate-100 focus:border-nature focus:bg-white focus:ring-4 focus:ring-nature/5 outline-none transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-4 py-2 rounded-2xl bg-slate-50 border border-slate-100 focus:border-nature focus:bg-white focus:ring-4 focus:ring-nature/5 outline-none transition-all"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Sujet</label>
                    <select className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 focus:border-nature focus:bg-white focus:ring-4 focus:ring-nature/5 outline-none transition-all appearance-none cursor-pointer">
                      <option>Achat de poules pondeuses</option>
                      <option>Commande d'œufs</option>
                      <option>Réservation restaurant</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full px-2 py-2 rounded-2xl bg-slate-50 border border-slate-100 focus:border-nature focus:bg-white focus:ring-4 focus:ring-nature/5 outline-none transition-all resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-nature w-full py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-nature/20">
                    <Send size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" /> 
                    <span>Envoyer le message</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
