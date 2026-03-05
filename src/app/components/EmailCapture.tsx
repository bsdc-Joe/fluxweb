"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    // Simulated submit — replace with your email provider (Mailchimp, ConvertKit, etc.)
    // Example: await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) })
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  };

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-500/[0.09] via-transparent to-transparent p-10 sm:p-14 text-center overflow-hidden"
        >
          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400/[0.07] rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Free Meta Updates
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
              Stay Ahead of the Meta.
            </h2>
            <p className="text-blue-100/60 mb-8 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              Get weekly FC26 meta updates, top player picks and market tips delivered straight to your inbox. Free, forever.
            </p>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-xl">
                    ✓
                  </div>
                  <p className="text-white font-medium">You're in!</p>
                  <p className="text-blue-100/50 text-sm">First update lands in your inbox next week.</p>
                </motion.div>
              ) : (
                <motion.div key="form" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setStatus("idle"); setErrorMsg(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-blue-400/20 text-white placeholder-blue-100/30 text-sm outline-none focus:border-blue-400/50 focus:bg-white/[0.07] transition-all duration-200"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-400 transition-colors duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Joining...
                      </span>
                    ) : "Get Updates"}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {status === "error" && (
              <p className="text-red-400/80 text-xs mt-3">{errorMsg}</p>
            )}

            <p className="text-blue-100/30 text-xs mt-5">No spam. Unsubscribe any time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
