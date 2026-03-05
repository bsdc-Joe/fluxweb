"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const menuItems: Record<string, { label: string; href: string }[]> = {
    socials: [
      { label: "TikTok",    href: "/socials#tiktok" },
      { label: "YouTube",   href: "/socials#youtube" },
      { label: "Instagram", href: "/socials#instagram" },
    ],
    store: [
      { label: "1-on-1 Coaching", href: "/store#coaching" },
      { label: "Video Courses",   href: "/store#courses" },
      { label: "Trading Guides",  href: "/store#trading" },
    ],
    discord: [
      { label: "Free Access",    href: "/discord#free" },
      { label: "Premium Access", href: "/discord#premium" },
    ],
  };

  const navLinks = ["socials", "store", "discord"] as const;

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-black/20 border-b border-blue-400/10" : "bg-transparent"
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div
          ref={navRef}
          className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className={`flex items-center gap-3 transition-all duration-300 cursor-pointer ${scrolled ? "scale-90" : "scale-100"}`}>
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

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8 text-sm">
            {navLinks.map((menu) => {
              const isActive = pathname === `/${menu}`;
              return (
                <Link key={menu} href={`/${menu}`}>
                  <div
                    onMouseEnter={() => setOpenMenu(menu)}
                    className={`relative cursor-pointer transition-colors duration-300 group ${
                      isActive ? "text-blue-400" : "text-white hover:text-blue-400"
                    }`}
                  >
                    {menu.charAt(0).toUpperCase() + menu.slice(1)}
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://discord.gg/REPLACE"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/15 border border-blue-400/25 text-blue-200 text-sm font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200"
          >
            <DiscordIcon className="w-4 h-4" />
            Join Discord
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white rounded-full block origin-center"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white rounded-full block"
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white rounded-full block origin-center"
            />
          </button>
        </div>

        {/* Desktop dropdown */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="hidden md:block absolute top-full left-0 w-full backdrop-blur-xl bg-black/30 border-t border-blue-400/10"
            >
              <div className="max-w-6xl mx-auto px-6 py-4">
                <motion.div
                  key={openMenu}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="mx-auto w-fit grid grid-cols-3 gap-x-10 gap-y-2 text-center"
                >
                  {menuItems[openMenu as keyof typeof menuItems].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-blue-100 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#080f1f] border-l border-blue-400/10 flex flex-col md:hidden"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-blue-400/10">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image src="/fluxfut.logo.png" alt="FluxFut" width={36} height={36} />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-blue-100/60 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav sections */}
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((menu) => (
                  <MobileSection
                    key={menu}
                    menu={menu}
                    items={menuItems[menu]}
                    isActive={pathname === `/${menu}`}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="px-4 py-6 border-t border-blue-400/10 space-y-3">
                <a
                  href="https://discord.gg/REPLACE"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-400 transition-colors duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <DiscordIcon className="w-4 h-4" />
                  Join Free Discord
                </a>
                <Link
                  href="/store"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-xl border border-blue-400/25 text-blue-200 text-sm font-medium hover:bg-blue-500/10 transition-colors duration-200"
                >
                  View Store
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileSection({
  menu,
  items,
  isActive,
  onClose,
}: {
  menu: string;
  items: { label: string; href: string }[];
  isActive: boolean;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="flex items-center justify-between">
        <Link
          href={`/${menu}`}
          onClick={onClose}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            isActive ? "text-blue-400" : "text-white/80 hover:text-white"
          }`}
        >
          {menu.charAt(0).toUpperCase() + menu.slice(1)}
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="px-3 py-3 text-blue-100/40 hover:text-blue-300 transition-colors"
        >
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-2 text-sm text-blue-100/60 hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-500/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}>
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
    </svg>
  );
}
