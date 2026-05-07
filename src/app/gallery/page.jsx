"use client";
import React from "react";
import { motion } from "framer-motion";
import { Camera, MessageSquare, MapPin } from "lucide-react";
import Link from "next/link";
import { businessInfo } from "@/data/business";

const GalleryPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-dark mb-8 uppercase leading-[0.9]">
            Our <br />
            <span className="text-secondary">Gallery</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-bold">
            Happy moments from our showroom and delivery experiences.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-32 h-32 bg-secondary/10 text-secondary rounded-[2.5rem] flex items-center justify-center mx-auto mb-12"
          >
            <Camera size={48} />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-dark mb-8 uppercase">
            Gallery Coming Soon
          </h2>
          
          <div className="space-y-6 text-xl text-gray-500 font-medium leading-relaxed mb-16">
            <p>
              We are currently building our photo gallery with real moments — tractor deliveries, happy farmers, showroom events and more.
            </p>
            <p>
              As a new dealership founded in 2025, we are capturing these special moments every day and will update this gallery soon.
            </p>
            <p>
              In the meantime, you can see our latest photos and updates on our WhatsApp or visit our showroom in person.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={businessInfo.whatsappLink}
              className="btn btn-secondary w-full sm:w-auto"
            >
              <MessageSquare size={20} /> WhatsApp for Latest Photos
            </a>
            <Link 
              href="/contact"
              className="btn btn-outline w-full sm:w-auto"
            >
              <MapPin size={20} /> Visit Our Showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder Grid */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["All", "Deliveries", "Showroom", "Happy Farmers", "Events"].map((cat) => (
              <span key={cat} className="px-8 py-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400">
                {cat}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-20 filter grayscale blur-[2px]">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-[3rem]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
