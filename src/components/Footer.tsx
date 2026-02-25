"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-nature rounded-lg flex items-center justify-center text-white font-bold text-xl">
              SN
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none">Saveur Nature</span>
              <span className="text-[10px] uppercase tracking-widest font-medium opacity-70">Ferme Avicole</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Des produits frais, naturels et un service de restauration d'exception au cœur de l'Afrique de l'Ouest. La qualité de la ferme à votre table.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nature transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nature transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nature transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6">Navigation</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-nature transition-colors">Accueil</Link></li>
            <li><Link href="/poules" className="hover:text-nature transition-colors">Nos Poules</Link></li>
            <li><Link href="/oeufs" className="hover:text-nature transition-colors">Nos Oeufs</Link></li>
            <li><Link href="/restauration" className="hover:text-nature transition-colors">Restauration</Link></li>
            <li><Link href="/services" className="hover:text-nature transition-colors">Services & Conseils</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin size={18} className="text-nature shrink-0" />
              <span>Route de la Ferme, Zone Agricole, Afrique de l'Ouest</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-nature shrink-0" />
              <span>+225 01 02 03 04 05</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-nature shrink-0" />
              <span>contact@fermesaveurnature.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6">Horaires</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <Clock size={18} className="text-nature shrink-0" />
              <div>
                <p className="font-medium text-white">Lundi - Samedi</p>
                <p>08:00 - 19:00</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="text-nature shrink-0" />
              <div>
                <p className="font-medium text-white">Dimanche</p>
                <p>09:00 - 15:00 (Restauration uniquement)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Ferme Saveur Nature. Tous droits réservés. Design by Agence Web Senior.</p>
      </div>
    </footer>
  );
}