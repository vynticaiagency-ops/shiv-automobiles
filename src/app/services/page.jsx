"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Calculator, ArrowRight, MessageSquare } from "lucide-react";

const ServicesPage = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [tenure, setTenure] = useState(5);
  const [interest, setInterest] = useState(10);

  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const r = interest / 12 / 100;
    const n = tenure * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi || 0);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-dark mb-8 uppercase leading-[0.9]">
            Complete <br />
            <span className="text-secondary">Solutions</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-bold">
            From buying your first tractor to lifetime service support — we are with you at every step.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 bg-gray-50 rounded-[4rem] border border-gray-100 hover:bg-primary transition-all duration-700"
            >
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm mb-10">
                <service.icon size={40} />
              </div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight group-hover:text-white transition-colors">
                {service.title}
              </h4>
              <p className="text-lg font-bold text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-24 px-6 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                <Calculator size={16} className="text-accent" /> EMI Estimator
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
                Estimate Your <br />
                <span className="text-accent">Tractor EMI</span>
              </h2>
              <p className="text-xl text-gray-400 font-bold mb-12 max-w-lg">
                Get a rough estimate of your monthly EMI. For exact calculations and best rates, contact our finance desk directly.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Monthly EMI</p>
                <p className="text-6xl md:text-7xl font-black text-accent">₹ {calculateEMI().toLocaleString()}</p>
                <p className="mt-6 text-xs text-gray-500 font-bold uppercase tracking-widest">
                  * Based on {interest}% interest rate for {tenure} years.
                </p>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[4rem] text-dark space-y-10 shadow-2xl">
              <div className="space-y-4">
                <div className="flex justify-between font-black uppercase tracking-tight">
                  <label>Tractor Price</label>
                  <span className="text-primary text-xl">₹ {loanAmount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="300000" max="1000000" step="10000"
                  value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between font-black uppercase tracking-tight">
                  <label>Down Payment</label>
                  <span className="text-secondary text-xl">₹ {downPayment.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="50000" max={loanAmount * 0.7} step="10000"
                  value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-secondary"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block font-black uppercase tracking-tight text-xs text-gray-400">Tenure (Years)</label>
                  <select 
                    value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 font-black text-primary outline-none"
                  >
                    {[3, 4, 5, 6, 7].map(y => <option key={y} value={y}>{y} Years</option>)}
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="block font-black uppercase tracking-tight text-xs text-gray-400">Interest Rate (%)</label>
                  <select 
                    value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 font-black text-primary outline-none"
                  >
                    {[8, 9, 10, 11, 12, 13, 14].map(r => <option key={r} value={r}>{r}%</option>)}
                  </select>
                </div>
              </div>

              <button className="w-full bg-secondary text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20">
                Get Exact Finance Details <MessageSquare size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
