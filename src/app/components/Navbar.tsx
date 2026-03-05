"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
        scrolled
          ? "backdrop-blur-xl bg-black/20 border-b border-blue-400/10"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div
        ref={navRef}
        className={`max-w-6xl mx-auto flex justify-center px-6 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="flex items-center gap-8">

         {/* Logo (Home Button) */}
<Link
  href="/"
  className="group"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>

  <div
    className={`flex items-center gap-3 transition-all duration-300 cursor-pointer ${
      scrolled ? "scale-90" : "scale-100"
    }`}
  >

    <Image
      src="/fluxfut.logo.png"
      alt="FluxFut Logo"
      width={44}
      height={44}
      priority
      className="drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
    />

  </div>

</Link>

          {/* Navigation Links */}
          <div className="flex gap-8 text-sm">

            {["socials", "store", "discord"].map((menu) => {

              const isActive = pathname === `/${menu}`;

              return (
                <Link key={menu} href={`/${menu}`}>

                  <div
                    onMouseEnter={() => setOpenMenu(menu)}
                    className={`relative cursor-pointer transition-colors duration-300 group ${
                      isActive
                        ? "text-blue-400"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    {menu.charAt(0).toUpperCase() + menu.slice(1)}

                    {/* Underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />

                  </div>

                </Link>
              );
            })}

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
          className="absolute top-full left-0 w-full backdrop-blur-xl bg-black/30 border-t border-blue-400/10"
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

                {menuItems[openMenu as keyof typeof menuItems].map((item) => (

                  <Link
                    key={item}
                    href={`/${openMenu}`}
                    className="text-blue-100 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {item}
                  </Link>

                ))}

              </motion.div>

            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </nav>
  );
}