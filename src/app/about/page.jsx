"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tractor, Handshake, MapPin, Trophy, ShieldCheck, Star } from "lucide-react";

const achievements = [
  { num: "100+", label: "Tractors Delivered", icon: Tractor, desc: "100+ Swaraj tractors delivered to farmers across 4 districts in our very first year." },
  { num: "4", label: "Districts Served", icon: MapPin, desc: "We serve Junagadh, Mendarda, Visavadar and Bhesan — bringing Swaraj tractors closer to more farmers." },
  { num: "5", label: "Evergreen Models", icon: Star, desc: "717 ES, 733 FE, 735 FE, 742 XT and 744 FE — our 5 best selling models loved by local farmers." },
  { num: "4.9★", label: "Customer Rating", icon: Trophy, desc: "Our farmers rate us 4.9 out of 5 for service, honesty, price and after-sale support." },
  { num: "1", label: "Year. 100+ Sales.", icon: Trophy, desc: "100+ tractors sold in just the first year of business. A record built on farmer trust." },
  { num: "100%", label: "Genuine Products", icon: ShieldCheck, desc: "Every tractor we sell is 100% genuine Swaraj with full manufacturer warranty." },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-40 pb-24 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">🌱 Our Journey</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-dark mb-8 uppercase leading-[0.9]">
            Delivering Trust <br />
            <span className="text-secondary">Since 2025</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-bold">
            Junagadh's Newest and Most Trusted Swaraj Tractor Dealer.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-4xl font-black text-dark tracking-tight uppercase">Our Journey — From Day One to 100+ Tractors</h2>
          <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed">
            <p>
              Shiv Automobiles was founded in 2025 with one clear purpose — to bring the trusted Swaraj tractor brand to the doorstep of every hardworking farmer in Junagadh, Mendarda, Visavadar and Bhesan.
            </p>
            <p>
              We started with a simple showroom on Rajkot Highway, Dolatpara, Junagadh — right opposite the famous Sakkarbaug Zoological Park.
            </p>
            <p>
              In just our very first year of operation, we have already delivered 100+ Swaraj tractors to farmers across 4 districts. 100+ families now have a tractor that works their land and supports their future. That trust is our greatest achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/30"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <ach.icon size={24} />
                </div>
                <h3 className="text-4xl font-black text-primary mb-2">{ach.num}</h3>
                <h4 className="text-lg font-black text-dark uppercase tracking-tight mb-4">{ach.label}</h4>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">{ach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Disclaimer */}
      <section className="py-24 px-6 md:px-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12">Our Honest Story</h2>
          <div className="space-y-8 text-xl font-medium leading-relaxed opacity-90">
            <p>We want to be completely honest with you. We did not start in 2005. We started in 2025. We are a fresh, new business building our reputation day by day, farmer by farmer.</p>
            <p>But we have already sold 100+ tractors in our first year because we believe honesty builds the strongest foundation. Our goal is simple: When you think of buying a tractor in Junagadh, you think of Shiv Automobiles.</p>
          </div>
          <div className="mt-16 text-2xl font-black text-accent uppercase tracking-widest">
            — Shiv Automobiles Family
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
