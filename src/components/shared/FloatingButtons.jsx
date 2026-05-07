"use client";
import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";
import { businessInfo } from "@/data/business";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Call Button - Bottom Left */}
      <a
        href={businessInfo.callLink}
        className="fixed bottom-6 left-6 z-40 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-3 overflow-hidden"
      >
        <Phone size={24} />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap overflow-hidden">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button - Bottom Right */}
      <a
        href={businessInfo.whatsappLink}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-3 overflow-hidden"
      >
        <MessageSquare size={24} />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap overflow-hidden">
          WhatsApp Us
        </span>
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 bg-white text-primary p-3 rounded-full shadow-xl border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
