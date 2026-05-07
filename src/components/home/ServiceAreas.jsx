"use client";
import React from "react";
import { motion } from "framer-motion";
import { districts } from "@/data/testimonials";
import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-dark mb-6 leading-[0.9] uppercase">
            We Serve 4 Districts <br />
            <span className="text-secondary">In Junagadh Region</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 font-bold text-lg">
            No matter which district you are from — we bring Swaraj tractors and service to your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {districts.map((district, i) => (
            <motion.div
              key={district.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/40 group hover:bg-primary transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-white group-hover:scale-110 transition-all">
                <MapPin size={24} />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-white transition-colors">
                {district.name}
              </h4>
              <p className="text-sm font-bold text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">
                {district.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
