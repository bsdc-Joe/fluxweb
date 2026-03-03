"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = {
    socials: [
      "TikTok – Tactics",
      "TikTok – Trading",
      "TikTok – Competitive",
      "Instagram",
      "YouTube",
      "Twitter / X",
    ],
    store: ["All Digital Products"],
    discord: ["Free Access", "Premium Access"],
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl" : "bg-black"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div
        ref={navRef}
        className={`max-w-6xl mx-auto flex justify-center px-6 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="flex items-center gap-6">

          {/* Logo */}
          <div
            className={`flex items-center gap-3 transition-all duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
          >
            <Image
              src="/fluxfut.logo.png"
              alt="FluxFut Logo"
              width={44}
              height={44}
              priority
            />
          </div>

          {/* Hover Links */}
          <div className="flex gap-8 text-sm text-gray-300">
            {["socials", "store", "discord"].map((menu) => (
              <div
                key={menu}
                onMouseEnter={() => setOpenMenu(menu)}
                className="relative cursor-pointer hover:text-white transition-colors duration-300"
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DROPDOWN */}
      {openMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 w-full bg-[#111] border-t border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6 py-4">

            <AnimatePresence mode="wait">
              <motion.div
                key={openMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className={`mx-auto w-fit grid ${
  openMenu === "socials"
    ? "grid-cols-3"
    : openMenu === "discord"
    ? "grid-cols-2"
    : "grid-cols-1"
} gap-x-10 gap-y-2 text-center`}
              >
                {menuItems[openMenu as keyof typeof menuItems].map(
                  (item) => (
                    <div
                      key={item}
                      className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium leading-5 tracking-tight"
                    >
                      {item}
                    </div>
                  )
                )}
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </nav>
  );
}