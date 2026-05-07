import React from "react";
import Link from "next/link";
import { businessInfo, navigationLinks } from "@/data/business";
import { tractors } from "@/data/tractors";
import { MapPin, Phone, MessageSquare, Clock, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter leading-none text-white">
              SHIV AUTOMOBILES
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">
              Authorized Swaraj Dealer
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Shiv Automobiles is an authorized Swaraj Tractor Dealer in Junagadh, Gujarat. Founded in 2025, we have already delivered 100+ tractors to happy farmers across Junagadh, Mendarda, Visavadar and Bhesan.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-black uppercase tracking-widest text-secondary">Quick Links</h4>
          <ul className="space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Models */}
        <div className="space-y-6">
          <h4 className="text-lg font-black uppercase tracking-widest text-secondary">Our Models</h4>
          <ul className="space-y-4">
            {tractors.slice(0, 8).map((tractor) => (
              <li key={tractor.slug}>
                <Link
                  href={`/tractors/${tractor.slug}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {tractor.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-black uppercase tracking-widest text-secondary">Contact Info</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div className="text-gray-400 text-sm leading-relaxed">
                <p className="font-bold text-white mb-1">Showroom Address:</p>
                {businessInfo.address}
                <p className="mt-1 text-secondary font-bold">Opp. Sakkarbaug Zoo</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary shrink-0" />
              <a href={businessInfo.callLink} className="text-gray-400 hover:text-white transition-colors text-sm">
                {businessInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-primary shrink-0" />
              <div className="text-gray-400 text-sm">
                <p>{businessInfo.workingHours}</p>
                <p className="text-red-400">Sunday: {businessInfo.sunday}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-bold uppercase tracking-widest">
        <p>© 2025 Shiv Automobiles. All rights reserved.</p>
        <p className="text-secondary">Authorized Swaraj Tractor Dealer - Junagadh</p>
        <a href="https://www.swarajtractors.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
          swarajtractors.com <ArrowUpRight size={12} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
