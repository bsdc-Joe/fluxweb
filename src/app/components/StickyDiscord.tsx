"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DISCORD_FREE = "https://discord.gg/REPLACE"; // ← update this

export default function StickyDiscord() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Expanded label */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0d1117] border border-blue-400/20 rounded-2xl p-4 shadow-2xl w-56"
              >
                <p className="text-white font-semibold text-sm mb-1">Join FluxFut Discord</p>
                <p className="text-blue-100/60 text-xs mb-3 leading-relaxed">
                  Free access to the most active EAFC community.
                </p>
                <a
                  href={DISCORD_FREE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-blue-500 text-white text-xs font-medium hover:bg-blue-400 transition-colors duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <DiscordIcon className="w-3.5 h-3.5" />
                  Join Free
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded((v) => !v)}
            className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:bg-blue-400 transition-colors duration-200 relative"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <CloseIcon className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="discord" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <DiscordIcon className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}>
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className ?? "w-5 h-5"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
