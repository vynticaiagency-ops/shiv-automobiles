"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { businessInfo, navigationLinks } from "@/data/business";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span className={cn(
            "text-xl md:text-2xl font-black tracking-tighter leading-none transition-colors",
            scrolled ? "text-primary" : "text-primary" 
          )}>
            SHIV AUTOMOBILES
          </span>
          <span className={cn(
            "text-[10px] font-bold tracking-[0.2em] uppercase transition-colors",
            scrolled ? "text-secondary" : "text-secondary/80"
          )}>
            Authorized Swaraj Dealer
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-all hover:text-primary relative group",
                pathname === link.href ? "text-primary" : "text-dark/80"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={businessInfo.callLink}
            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone size={18} />
            {businessInfo.phone}
          </a>
          <a
            href={businessInfo.whatsappLink}
            className="bg-secondary text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-lg shadow-secondary/20"
          >
            <MessageSquare size={16} />
            Inquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl p-6 flex flex-col gap-6 lg:hidden"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-black uppercase tracking-tight",
                  pathname === link.href ? "text-primary" : "text-dark"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
              <a
                href={businessInfo.callLink}
                className="flex items-center gap-3 text-lg font-bold text-primary"
              >
                <Phone size={20} />
                {businessInfo.phone}
              </a>
              <a
                href={businessInfo.whatsappLink}
                className="bg-secondary text-white w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest"
              >
                <MessageSquare size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
