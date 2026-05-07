"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, Send, Globe } from "lucide-react";
import { businessInfo } from "@/data/business";
import { tractors } from "@/data/tractors";

const ContactPage = () => {
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
    <div className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-dark mb-8 uppercase leading-[0.9]">
            Get In <br />
            <span className="text-primary">Touch</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-bold">
            We are here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MapPin, title: "Visit Us", info: businessInfo.address, sub: "Opp. Sakkarbaug Zoo", link: businessInfo.mapsLink, label: "Get Directions" },
            { icon: Phone, title: "Call Us", info: businessInfo.phone, sub: "Mon-Sat, 9 AM to 7 PM", link: businessInfo.callLink, label: "Call Now" },
            { icon: MessageSquare, title: "WhatsApp", info: businessInfo.whatsapp, sub: "Quick response 24/7", link: businessInfo.whatsappLink, label: "Chat Now" },
            { icon: Clock, title: "Hours", info: businessInfo.workingHours, sub: "Sunday: Closed", link: "#", label: "View Hours" },
          ].map((card, i) => (
            <div key={i} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform shadow-sm">
                <card.icon size={28} />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors">{card.title}</h4>
              <p className="text-sm font-bold text-gray-500 group-hover:text-white/80 leading-relaxed mb-6 h-12">
                {card.info}
              </p>
              <a 
                href={card.link}
                className="mt-auto px-6 py-3 bg-white text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-sm"
              >
                {card.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl">
            <h3 className="text-4xl font-black text-dark tracking-tighter uppercase mb-4">Send Your Inquiry</h3>
            <p className="text-gray-500 font-bold mb-12">Fill in your details and our team will contact you within 1 hour.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input
                    required type="text" placeholder="e.g. Rameshbhai Patel"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none font-bold"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                  <input
                    required type="tel" placeholder="10 digit mobile number"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none font-bold"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Your District</label>
                  <select
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none font-bold appearance-none"
                    onChange={(e) => setFormData({...formData, district: e.target.value})}
                  >
                    {["Junagadh", "Mendarda", "Visavadar", "Bhesan", "Other"].map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Interested Model</label>
                  <select
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none font-bold appearance-none"
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                  >
                    {tractors.map(t => <option key={t.slug} value={t.name}>{t.name}</option>)}
                    <option value="Need Guidance">Not Sure - Need Guidance</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message (Optional)</label>
                <textarea
                  placeholder="Your farming needs, land size, etc." rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary outline-none font-bold resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button type="submit" className="w-full bg-secondary text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-secondary/90 shadow-xl shadow-secondary/20">
                Send via WhatsApp <Send size={20} />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px] bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14809.8378775494!2d70.4485545!3d21.5222222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958022b7942792d%3A0x6b772c916298151!2sDolatpara%2C%20Junagadh%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714986423456!5m2!1sen!2sin"
              className="w-full h-full grayscale border-0"
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
