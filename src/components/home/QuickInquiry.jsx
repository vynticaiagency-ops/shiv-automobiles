"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";
import { tractors } from "@/data/tractors";

const districts = ["Junagadh", "Mendarda", "Visavadar", "Bhesan", "Other"];

const QuickInquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "Junagadh",
    model: "Swaraj 744 FE",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Shiv Automobiles, I am interested in Swaraj Tractors.
Name: ${formData.name}
Phone: ${formData.phone}
District: ${formData.district}
Model: ${formData.model}
Message: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918980907778?text=${encodedText}`, "_blank");
  };

  return (
    <section id="inquiry" className="py-24 px-6 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
            Interested in a <br />
            <span className="text-secondary">Swaraj Tractor?</span>
          </h2>
          <p className="text-xl text-gray-400 font-bold mb-12 max-w-lg">
            Fill in your details and our team will contact you within 1 hour. No obligation, just honest guidance.
          </p>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-secondary border border-white/10">
                <MessageSquare size={32} />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-1">Quick Response</h4>
                <p className="text-gray-500 font-bold">We reply faster on WhatsApp than anywhere else.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rameshbhai Patel"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-0 transition-all font-bold"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="10 digit mobile number"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-0 transition-all font-bold"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Your District</label>
                <select
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-0 transition-all font-bold appearance-none"
                  onChange={(e) => setFormData({...formData, district: e.target.value})}
                >
                  {districts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Interested Model</label>
                <select
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-0 transition-all font-bold appearance-none"
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                >
                  {tractors.map(t => <option key={t.slug} value={t.name}>{t.name}</option>)}
                  <option value="Need Guidance">Not Sure - Need Guidance</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Your Message (Optional)</label>
              <textarea
                placeholder="Tell us about your farm or requirements..."
                rows="4"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-0 transition-all font-bold resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-secondary/20"
            >
              Send Inquiry via WhatsApp <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickInquiry;
