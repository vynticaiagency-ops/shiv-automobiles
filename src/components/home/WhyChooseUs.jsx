"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, Tractor, IndianRupee, Landmark, 
  Wrench, MapPin, Handshake, RefreshCcw 
} from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Authorized Swaraj Dealer",
    desc: "We are an officially authorized dealer of Swaraj Tractors in Junagadh. Every tractor you buy from us is 100% genuine."
  },
  {
    icon: Tractor,
    title: "All Top Models Available",
    desc: "Our showroom stocks all popular Swaraj models including our evergreen bestsellers — 717 ES, 733 FE, 735 FE/XT, 742 XT, 744 FE/XT."
  },
  {
    icon: IndianRupee,
    title: "Best Price in Junagadh",
    desc: "We offer highly competitive prices on all Swaraj tractor models. We keep you informed about manufacturer schemes and subsidies."
  },
  {
    icon: Landmark,
    title: "Easy Finance & Loan Help",
    desc: "Bank loan processing, Kisan Credit Card assistance, easy EMI with low down payment — we handle everything."
  },
  {
    icon: Wrench,
    title: "Genuine Service Support",
    desc: "After-sale service support with genuine Swaraj spare parts. Regular maintenance help, warranty claims and any tractor issue."
  },
  {
    icon: MapPin,
    title: "Serving 4 Districts",
    desc: "We actively serve Junagadh, Mendarda, Visavadar and Bhesan. We deliver tractors to your location and provide support."
  },
  {
    icon: Handshake,
    title: "Honest & Personal Service",
    desc: "We are a family business. When you call or visit — you talk to real people who care. No corporate coldness."
  },
  {
    icon: RefreshCcw,
    title: "Old Tractor Exchange",
    desc: "Have an old tractor to exchange? We offer fair valuation and exchange bonus so you can upgrade to a new Swaraj."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            💚 Why Choose Shiv Automobiles
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-dark mb-6 leading-[0.9]">
            WE ARE NOT JUST A TRACTOR DEALER. <br />
            <span className="text-primary">WE ARE YOUR FARMING PARTNER.</span>
          </h2>
          <p className="max-w-3xl text-gray-600 font-bold text-lg leading-relaxed">
            There are many tractor dealers. But M/S Shiv Automobiles is different. Here is why 100+ farmers in Junagadh region chose us in our very first year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-primary hover:text-white transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <reason.icon size={28} />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{reason.title}</h4>
              <p className="text-sm font-bold text-gray-500 group-hover:text-white/80 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
