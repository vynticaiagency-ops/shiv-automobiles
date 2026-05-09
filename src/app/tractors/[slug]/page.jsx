"use client";
import React from "react";
import { tractors } from "@/data/tractors";
import { motion } from "framer-motion";
import { 
  Tractor, MessageSquare, ShieldCheck, 
  ChevronRight, ArrowLeft, CheckCircle2, 
  Zap, Settings2, Weight
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// This is a client component, so we use params directly
const TractorDetail = ({ params }) => {
  const model = tractors.find((t) => t.slug === params.slug);

  if (!model) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="pt-24 px-6 md:px-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <Link href="/tractors" className="hover:text-primary">Tractors</Link>
          <ChevronRight size={12} />
          <span className="text-dark">{model.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square lg:aspect-[4/3] bg-white rounded-[4rem] border border-gray-100 shadow-2xl relative flex items-center justify-center p-12 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
            
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              src={model.image}
              alt={model.name}
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />

            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            {model.evergreen && (
              <div className="absolute top-10 right-10 bg-accent text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-accent/20 z-20">
                <ShieldCheck size={18} /> Bestseller
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-4 block">Swaraj {model.hp} HP Class</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-dark mb-2 leading-none uppercase italic">{model.name}</h1>
              <p className="text-xl font-bold text-secondary uppercase tracking-tight mb-8">{model.tagline}</p>
              
              <h2 className="text-xl font-black text-dark tracking-tight uppercase mb-4 border-b-2 border-primary w-fit">Overview</h2>
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                {model.detailedDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex-1 min-w-[150px]">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Power</p>
                <p className="text-3xl font-black text-primary">{model.hp} HP</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex-1 min-w-[150px]">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Engine</p>
                <p className="text-xl font-black text-dark">{model.specs.cylinders} Cylinders</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/918980907778?text=Hello%20Shiv%20Automobiles%2C%20I%20am%20interested%20in%20${model.name}%20(${model.hp}%20HP).%20Please%20share%20price%20and%20finance%20details.`}
                className="btn btn-secondary flex-1"
              >
                <MessageSquare size={20} /> Inquire Price via WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline flex-1">
                Visit Showroom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-black text-dark tracking-tighter uppercase mb-12 flex items-center gap-4">
              <Settings2 size={32} className="text-primary" /> Technical Specifications
            </h3>
            <div className="bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden">
              {Object.entries(model.specs).map(([key, value], i) => (
                <div 
                  key={key} 
                  className={`flex flex-wrap justify-between items-center p-6 md:p-8 border-b border-gray-200 gap-2 ${i % 2 === 0 ? "bg-white/50" : "bg-transparent"}`}
                >
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-xl md:text-2xl font-black text-dark uppercase tracking-tight">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-black text-dark tracking-tighter uppercase mb-10 flex items-center gap-4">
                <Zap size={32} className="text-secondary" /> Key Features
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {model.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <CheckCircle2 size={24} className="text-secondary shrink-0 mt-1" />
                    <p className="text-lg font-bold text-gray-700 leading-tight">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-black text-dark tracking-tighter uppercase mb-10 flex items-center gap-4">
                <Weight size={32} className="text-accent" /> Best Suited For
              </h3>
              <div className="flex flex-wrap gap-3">
                {model.bestSuited.map((tag, i) => (
                  <span key={i} className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Models */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-black text-dark tracking-tighter uppercase mb-12">Other Popular Models</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tractors.filter(t => t.slug !== model.slug).slice(0, 4).map((related) => (
              <Link key={related.slug} href={`/tractors/${related.slug}`} className="group">
                <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:scale-105 transition-all overflow-hidden">
                  <div className="aspect-video bg-gray-50 rounded-2xl mb-4 flex items-center justify-center p-4">
                    <img src={related.image} alt={related.name} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-1">{related.hp} HP Class</p>
                  <h4 className="text-xl font-black text-dark group-hover:text-primary transition-colors italic">{related.name}</h4>
                  <p className="mt-4 text-[10px] font-black text-gray-400 group-hover:text-dark transition-colors flex items-center gap-2 uppercase tracking-widest">
                    View Specs <ChevronRight size={12} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TractorDetail;
