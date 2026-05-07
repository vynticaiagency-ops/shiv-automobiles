"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";
import { businessInfo } from "@/data/business";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8"
        >
          🚜 Authorized Swaraj Dealer in Junagadh
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-dark mb-8"
        >
          JUNAGADH'S NEWEST <br />
          <span className="text-primary">SWARAJ DEALER.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-12"
        >
          {businessInfo.name} — Your trusted partner for Swaraj Tractors in Junagadh, Mendarda, Visavadar & Bhesan. Founded in 2025. 100+ tractors delivered in our first year.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/tractors" className="btn btn-primary w-full sm:w-auto">
            View Our Tractors <ArrowRight size={20} />
          </Link>
          <a href={businessInfo.whatsappLink} className="btn btn-secondary w-full sm:w-auto">
            <MessageSquare size={20} /> WhatsApp Us
          </a>
          <a href={businessInfo.callLink} className="btn btn-outline w-full sm:w-auto">
            <Phone size={20} /> Call Now
          </a>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
