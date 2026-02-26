"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

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
            Des produits frais, naturels et un service de restauration d'exception au cœur du Togo. La qualité de la ferme à votre table.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6">Navigation</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-nature transition-colors">Accueil</Link></li>
            <li><Link href="/boutique" className="hover:text-nature transition-colors">Boutique</Link></li>
            <li><Link href="/restauration" className="hover:text-nature transition-colors">Restauration</Link></li>
            <li><Link href="/contact" className="hover:text-nature transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin size={18} className="text-nature shrink-0" />
              <span>Aneho, Landjo</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-nature shrink-0" />
              <span>+228 93 82 35 78</span>
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
                <p>08:00 - 17:00</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="text-nature shrink-0" />
              <div>
                <p className="font-medium text-white">Samedi - Dimanche</p>
                <p>10:00 - 19:00 (Restauration uniquement)</p>
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