"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Tractors Delivered", sub: "In Our First Year" },
  { value: "4", label: "Districts Served", sub: "Junagadh | Mendarda | Visavadar | Bhesan" },
  { value: "8", label: "Models Available", sub: "All Top Swaraj Models" },
  { value: "4.9★", label: "Customer Rating", sub: "Rated by Happy Farmers" },
  { value: "2025", label: "Year Founded", sub: "Fresh Start. Strong Foundation." },
  { value: "100%", label: "Genuine Products", sub: "Authorized Swaraj Dealer" },
];

const StatsCounter = () => {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
            Numbers That Speak Trust
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm"
            >
              <h3 className="text-5xl font-black text-accent mb-2">{stat.value}</h3>
              <p className="text-xl font-black text-white uppercase tracking-tight mb-1">{stat.label}</p>
              <p className="text-sm text-white/60 font-bold tracking-wide">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
