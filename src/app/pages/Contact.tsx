"use client";
import React, { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { staggerContainer,fadeInUp,scaleIn } from '../animations';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Notre équipe vous contactera très prochainement.");
  }; 
  
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
              Parlons de votre projet
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Que vous soyez un éleveur débutant, un restaurateur ou une famille, nous sommes à votre écoute.
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
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8">Nos Coordonnées</motion.h2>
                <div className="space-y-6">
                  {[
                    { icon: <Phone className="text-nature" />, label: "Téléphone / WhatsApp", value: "+225 01 02 03 04 05" },
                    { icon: <Mail className="text-nature" />, label: "Email", value: "contact@fermesaveurnature.com" },
                    { icon: <MapPin className="text-nature" />, label: "Localisation", value: "Route de Dabou, KM 15, Côte d'Ivoire" },
                    { icon: <Clock className="text-nature" />, label: "Horaires", value: "Lun - Sam : 08h00 - 18h00" }
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-nature/10 flex items-center justify-center shrink-0 group-hover:bg-nature group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="font-bold text-lg text-slate-800">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <motion.h3 variants={fadeInUp} className="text-xl font-bold mb-6">Suivez-nous</motion.h3>
                <motion.div variants={fadeInUp} className="flex gap-4">
                  {[
                    { icon: <Facebook />, link: "#" },
                    { icon: <Instagram />, link: "#" },
                    { icon: <MessageCircle />, link: "#" }
                  ].map((social, i) => (
                    <a key={i} href={social.link} className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 hover:text-nature hover:shadow-lg transition-all border border-slate-100">
                      {social.icon}
                    </a>
                  ))}
                </motion.div>
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
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-nature"></div>
                <h2 className="text-3xl font-bold mb-10">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Nom complet</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-nature focus:bg-white focus:ring-4 focus:ring-nature/5 outline-none transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-nature focus:bg-white focus:ring-4 focus:ring-nature/5 outline-none transition-all"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Sujet</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-nature focus:bg-white focus:ring-4 focus:ring-nature/5 outline-none transition-all appearance-none cursor-pointer">
                      <option>Achat de poules pondeuses</option>
                      <option>Commande d'œufs</option>
                      <option>Réservation restaurant</option>
                      <option>Conseils & Services</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-nature focus:bg-white focus:ring-4 focus:ring-nature/5 outline-none transition-all resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-nature w-full py-5 text-lg flex items-center justify-center gap-3 shadow-xl shadow-nature/20">
                    <Send size={20} /> Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center p-12">
            <MapPin size={64} className="text-nature mx-auto mb-6 opacity-20" />
            <p className="text-slate-400 font-bold uppercase tracking-widest">Carte Interactive (Google Maps)</p>
            <p className="text-slate-400 text-sm mt-2">Route de Dabou, KM 15, Côte d'Ivoire</p>
          </div>
        </div>
        {/* In a real app, replace this with a Google Maps iframe or component */}
        <div className="absolute inset-0 opacity-30 grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920" 
            alt="Map Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}
