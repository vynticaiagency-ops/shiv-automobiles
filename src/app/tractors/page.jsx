"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { tractors } from "@/data/tractors";
import { ArrowRight, MessageSquare, ShieldCheck, Tractor as TractorIcon } from "lucide-react";

const TractorsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredTractors = tractors.filter((t) => {
    if (filter === "All") return true;
    if (filter === "Evergreen") return t.evergreen;
    if (filter === "Mini") return t.hp < 30;
    if (filter === "Medium") return t.hp >= 30 && t.hp < 40;
    if (filter === "Heavy") return t.hp >= 40;
    return true;
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-dark mb-8 uppercase leading-[0.9]">
            Our Swaraj <br />
            <span className="text-primary">Tractors</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-bold">
            Browse our complete range of 8 Swaraj tractor models available in Junagadh.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 px-6 sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {["All", "Evergreen", "Mini", "Medium", "Heavy"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                filter === f ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {f === "Mini" ? "< 30 HP" : f === "Medium" ? "30-40 HP" : f === "Heavy" ? "40+ HP" : f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTractors.map((model, i) => (
            <motion.div
              layout
              key={model.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-[3rem] border border-gray-100 overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  <TractorIcon size={180} className="text-primary" />
                </div>
                <div className="relative z-10 text-center p-8">
                  <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block">{model.category}</span>
                  <h4 className="text-3xl font-black text-dark mb-1">{model.name}</h4>
                  <p className="text-sm font-bold text-secondary uppercase tracking-tight">{model.tagline}</p>
                </div>
                {model.evergreen && (
                  <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                    <ShieldCheck size={14} /> Bestseller
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-6">
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
                    <MessageSquare size={16} /> WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* External Link Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 relative z-10">
            Looking for other Swaraj models?
          </h2>
          <p className="text-lg opacity-80 font-bold mb-10 relative z-10">
            Visit the official Swaraj website for the complete range of tractors and implements.
          </p>
          <a 
            href="https://www.swarajtractors.com" 
            target="_blank"
            className="btn btn-accent inline-flex relative z-10 mx-auto"
          >
            Visit swarajtractors.com <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default TractorsPage;
