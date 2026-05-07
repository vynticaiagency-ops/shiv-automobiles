"use client";
import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-dark mb-6 leading-[0.9] uppercase">
            What Junagadh Farmers <br />
            <span className="text-primary">Say About Us</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 font-bold text-lg">
            We started in 2025. But in just one year, 100+ farmers trusted us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-gray-50 rounded-[4rem] border border-gray-100 relative overflow-hidden group"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <div className="space-y-4 mb-10 relative z-10">
                <p className="text-xl font-black text-dark leading-tight italic">"{item.quote}"</p>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">{item.translation}</p>
              </div>

              <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-black text-dark uppercase tracking-tight">{item.name}</h4>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">{item.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Purchased</p>
                  <p className="text-xs font-black text-primary">{item.model}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
