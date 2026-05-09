"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { tractors } from "@/data/tractors";
import { ArrowRight, MessageSquare, ShieldCheck, Tractor } from "lucide-react";
import { businessInfo } from "@/data/business";

const EvergreenModels = () => {
  const evergreenModels = tractors.filter((t) => t.evergreen);

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            ⭐ Our Bestsellers
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-dark mb-6 leading-[0.9] uppercase">
            5 Evergreen Models — <br />
            <span className="text-secondary">Loved by Junagadh Farmers</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 font-bold text-lg">
            These 5 Swaraj tractor models are the most popular and most sold tractors in our region. Trusted by maximum farmers in Junagadh, Mendarda, Visavadar and Bhesan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {evergreenModels.map((model, i) => (
            <motion.div
              key={model.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[3rem] border border-gray-100 overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col"
            >
              {/* Tractor Image */}
              <div className="aspect-[4/3] bg-white relative flex items-center justify-center overflow-hidden group">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-contain p-8 relative z-10"
                />
                
                {/* Decorative Background Element */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-0" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-accent/20 z-20">
                  <ShieldCheck size={14} /> Evergreen
                </div>

                {/* Category Floating Badge */}
                <div className="absolute top-6 left-6 z-20">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-white/90 backdrop-blur-sm border border-primary/10 px-4 py-2 rounded-xl shadow-sm">
                    {model.category}
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex-grow flex flex-col">
                <div className="mb-6">
                  <h4 className="text-3xl font-black text-dark mb-1 uppercase tracking-tighter italic">{model.name}</h4>
                  <p className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">{model.tagline}</p>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div className="text-center bg-gray-50 rounded-2xl px-6 py-3 border border-gray-100">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Power</p>
                    <p className="text-xl font-black text-primary">{model.hp} HP</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Starting Range</p>
                    <p className="text-lg font-black text-dark">{model.priceRange.split("-")[0]}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm font-bold leading-relaxed mb-10 line-clamp-3">
                  {model.shortDesc}
                </p>

                <div className="mt-auto flex flex-col gap-3">
                  <Link 
                    href={`/tractors/${model.slug}`}
                    className="w-full bg-dark text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary transition-all group/btn"
                  >
                    View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href={`https://wa.me/918980907778?text=Hello%20Shiv%20Automobiles%2C%20I%20am%20interested%20in%20${model.name}%20(${model.hp}%20HP).%20Please%20share%20price%20details.`}
                    className="w-full bg-secondary/10 text-secondary py-4 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-all"
                  >
                    <MessageSquare size={16} /> Inquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvergreenModels;
