"use client";
import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const ServicesOverview = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-dark mb-6 leading-[0.9] uppercase">
            Complete Tractor Solutions <br />
            <span className="text-primary">Under One Roof</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-bold">
            From buying your first tractor to lifetime service support — we are with you at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 bg-gray-50 rounded-[4rem] border border-gray-100 hover:bg-secondary transition-all duration-700 hover:shadow-2xl hover:shadow-secondary/20"
            >
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm mb-10">
                <service.icon size={40} />
              </div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight group-hover:text-white transition-colors leading-tight">
                {service.title}
              </h4>
              <p className="text-lg font-bold text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
