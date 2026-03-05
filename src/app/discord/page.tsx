"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import FadeUp from "../components/FadeUp";
import StaggerContainer from "../components/StaggerContainer";
import SectionDivider from "../components/SectionDivider";
import Particles from "../components/Particles";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";
import CountUp from "../components/CountUp";

// ── REPLACE THESE ──────────────────────────────────────────────────────────
const LINKS = {
  discordFree:    "https://discord.gg/REPLACE",
  discordPremium: "https://whop.com/REPLACE",
};
// ──────────────────────────────────────────────────────────────────────────

const freePerks = [
  { perk:"Community chat", desc:"Discuss tactics & meta with 10K+ members" },
  { perk:"Weekly tips", desc:"Curated advice dropped every week" },
  { perk:"Meta updates", desc:"Patch notes explained in plain English" },
  { perk:"Basic tactics", desc:"Formation guides open to all members" },
  { perk:"Market news", desc:"Market shifts and trend alerts" },
  { perk:"SBC alerts", desc:"Profitable SBC notifications as they drop" },
];

const premiumPerks = [
  { perk:"Custom tactics packs", desc:"Full tactic files you can import directly" },
  { perk:"Live trading alerts", desc:"Real-time buy/sell signals in your pocket" },
  { perk:"Advanced squad builders", desc:"Chemistry-optimised squads for every budget" },
  { perk:"Patch breakdowns", desc:"Deep analysis within hours of every patch" },
  { perk:"1-on-1 coaching access", desc:"Direct sessions with FluxFut coaches" },
  { perk:"Private strategy channels", desc:"Exclusive channels not visible to free members" },
  { perk:"Early access to content", desc:"Videos, guides and tactics before public release" },
  { perk:"Weekly live sessions", desc:"Live Q&A and tactical breakdowns every week" },
];

export default function DiscordPage() {
  return (
    <PageTransition>
    <main className="relative text-white pt-20 overflow-hidden">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <motion.div
          animate={{ backgroundPosition:["0% 50%","100% 50%","0% 50%"] }}
          transition={{ duration:18, repeat:Infinity, ease:"linear" }}
          className="absolute inset-0 opacity-90"
          style={{ background:`radial-gradient(circle at 20% 30%, rgba(37,99,235,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.45), transparent 45%), radial-gradient(circle at 50% 50%, rgba(29,78,216,0.4), transparent 50%)`, backgroundSize:"200% 200%" }}
        />
      </div>
      <Particles />
      <Navbar />

      {/* HERO */}
      <section id="top" className="relative min-h-[55vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div animate={{ y:[0,-16,0] }} transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
            className="w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-blue-500/[0.07] rounded-full blur-3xl" />
        </div>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Community
        </motion.div>
        <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
          Join the<br /><span className="text-blue-400">Flux Discord.</span>
        </motion.h1>
        <motion.p initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-100/70 max-w-2xl">
          The most active EAFC community on Discord. Free access or full premium — your choice.
        </motion.p>
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.4 }}
          className="flex flex-col sm:flex-row gap-4">
          <a href={LINKS.discordFree} target="_blank" rel="noopener noreferrer"><Button>Join Free</Button></a>
          <a href={LINKS.discordPremium} target="_blank" rel="noopener noreferrer"><Button variant="outline">Unlock Premium · £9.99/mo</Button></a>
        </motion.div>
      </section>

      <SectionDivider />

      {/* STATS */}
      <section id="stats" className="py-16 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { val:10000, suffix:"+", label:"Members" },
              { val:2, suffix:" Tiers", label:"Free & Premium" },
              { val:24, suffix:"/7", label:"Active Chat" },
              { val:100, suffix:"%", label:"EAFC Focused" },
            ].map((s) => (
              <div key={s.label} className="p-5 sm:p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.07] to-transparent text-center hover:border-blue-400/25 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-semibold text-white mb-1">
                  <CountUp target={s.val} suffix={s.suffix} />
                </p>
                <p className="text-xs text-blue-100/50 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* TIER COMPARISON */}
      <section id="tiers" className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-4">Pick Your Tier</h2>
            <p className="text-center text-blue-100/50 mb-16 max-w-xl mx-auto">
              Start free, upgrade when you're ready. Premium unlocks everything.
            </p>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-6">

              {/* FREE */}
              <FadeUp>
                <div id="free" className="flex flex-col h-full p-8 sm:p-10 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium tracking-wide mb-6 w-fit">Free Forever</span>
                  <div className="flex items-end gap-2 mb-2">
                    <p className="text-5xl font-semibold text-white">£0</p>
                    <p className="text-blue-100/50 mb-1">/month</p>
                  </div>
                  <p className="text-blue-100/50 text-sm mb-8">No card required. Join instantly.</p>
                  <ul className="space-y-4 flex-1 mb-10">
                    {freePerks.map((p) => (
                      <li key={p.perk} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-xs flex-shrink-0 mt-0.5">✓</span>
                        <div>
                          <p className="text-sm font-medium text-blue-100/80">{p.perk}</p>
                          <p className="text-xs text-blue-100/40">{p.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a href={LINKS.discordFree} target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                      className="w-full py-3.5 rounded-xl bg-blue-500/10 border border-blue-400/25 text-blue-200 font-medium text-center hover:bg-blue-500/20 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                      <DiscordIcon className="w-4 h-4" /> Join Free on Discord
                    </motion.div>
                  </a>
                </div>
              </FadeUp>

              {/* PREMIUM */}
              <FadeUp>
                <div id="premium" className="flex flex-col h-full p-8 sm:p-10 rounded-2xl border border-blue-400/30 bg-gradient-to-b from-blue-500/[0.14] to-blue-500/[0.03] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.5)]">✦ Premium</span>
                      <span className="text-xs text-blue-300/60">Most popular</span>
                    </div>
                    <div className="flex items-end gap-2 mb-2">
                      <p className="text-5xl font-semibold text-white">£9.99</p>
                      <p className="text-blue-100/50 mb-1">/month</p>
                    </div>
                    <p className="text-blue-100/50 text-sm mb-8">Cancel anytime. Instant access.</p>
                    <ul className="space-y-4 flex-1 mb-10">
                      {premiumPerks.map((p) => (
                        <li key={p.perk} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-blue-500/30 border border-blue-400/50 flex items-center justify-center text-blue-300 text-xs flex-shrink-0 mt-0.5">✓</span>
                          <div>
                            <p className="text-sm font-medium text-blue-100/90">{p.perk}</p>
                            <p className="text-xs text-blue-100/45">{p.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <a href={LINKS.discordPremium} target="_blank" rel="noopener noreferrer">
                      <motion.div whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                        className="w-full py-3.5 rounded-xl bg-blue-500 text-white font-medium text-center hover:bg-blue-400 transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 cursor-pointer">
                        <WhopIcon className="w-4 h-4" /> Unlock Premium on Whop
                      </motion.div>
                    </a>
                  </div>
                </div>
              </FadeUp>

            </div>
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* WHY PREMIUM CALLOUT */}
      <section className="py-16 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto relative rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.1] via-transparent to-transparent p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs text-blue-300/60 tracking-widest uppercase mb-4">Why Premium?</p>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">The edge is in the details.</h2>
              <p className="text-blue-100/60 max-w-lg mx-auto mb-8">
                Free gives you the community. Premium gives you the tools. Live alerts, private channels, coaching and tactics packs — everything that separates good players from elite ones.
              </p>
              <a href={LINKS.discordPremium} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-400 transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer">
                  Get Premium for £9.99/mo →
                </motion.div>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-4">FAQs</h2>
            <p className="text-center text-blue-100/50 mb-16 max-w-md mx-auto">
              Everything you need to know before joining.
            </p>
          </FadeIn>
          <StaggerContainer>
            <div className="space-y-3">
              {[
                {
                  q: "What's the difference between Free and Premium?",
                  a: "Free gives you access to the community, weekly tips, meta updates, basic tactics, market news and SBC alerts. Premium unlocks everything else — custom tactics packs, live trading alerts, advanced squad builders, patch breakdowns, 1-on-1 coaching, private strategy channels, early content access and weekly live sessions.",
                },
                {
                  q: "Can I cancel my Premium subscription at any time?",
                  a: "Yes, completely. Cancel any time via Whop and you won't be charged again. You keep access until the end of your current billing period.",
                },
                {
                  q: "How do I access the Premium Discord after paying?",
                  a: "After subscribing on Whop, you'll be given instant access to the private Premium channels within the FluxFut Discord server. The whole process takes under 2 minutes.",
                },
                {
                  q: "Is the Premium Discord worth £9.99/mo?",
                  a: "One good trade tip or tactic from the Premium channels can easily save or make you hundreds of thousands of coins per month. Most members say it pays for itself within the first week.",
                },
                {
                  q: "How often is content updated in the server?",
                  a: "Free channels are updated regularly throughout the week. Premium channels are active daily — live trading alerts go out within minutes of market shifts, and tactics are updated within hours of every major patch.",
                },
                {
                  q: "I'm new to EAFC — is this suitable for beginners?",
                  a: "Absolutely. The Free Discord is a great starting point with beginner-friendly tactics and tips. Premium is built to accelerate improvement at every level, from newcomers to Weekend League players.",
                },
              ].map((faq, i) => (
                <FadeUp key={i}>
                  <FAQItem q={faq.q} a={faq.a} />
                </FadeUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* FOOTER CTA */}
      <section className="py-24 px-4 sm:px-6 text-center border-t border-blue-400/10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Ready to Join?</h2>
          <p className="text-blue-100/60 text-lg mb-10 max-w-md mx-auto">
            Start free, upgrade when you want. The FluxFut Discord is where the best players learn fastest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={LINKS.discordFree} target="_blank" rel="noopener noreferrer"><Button>Join Free Discord</Button></a>
            <a href={LINKS.discordPremium} target="_blank" rel="noopener noreferrer"><Button variant="outline">Unlock Premium</Button></a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-blue-400/10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold text-white mb-2">FluxFut</p>
            <p className="text-blue-100/40 text-xs leading-relaxed max-w-[180px]">Elite EAFC tactics, trading & competitive gameplay.</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Community</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={LINKS.discordFree} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Free Discord</a></li>
              <li><a href={LINKS.discordPremium} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Premium Discord</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Products</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href="/store" className="hover:text-blue-400 transition-colors">Whop Store</a></li>
              <li><a href="/store" className="hover:text-blue-400 transition-colors">Gumroad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Socials</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href="/socials" className="hover:text-blue-400 transition-colors">All Channels</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-blue-100/30 text-xs mt-12">© {new Date().getFullYear()} FluxFut. All rights reserved.</p>
      </footer>

    </main>
    </PageTransition>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
        open ? "border-blue-400/30 bg-blue-500/[0.07]" : "border-blue-400/10 bg-blue-500/[0.03] hover:border-blue-400/20"
      }`}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <p className="text-sm sm:text-base font-medium text-white/90 text-left">{q}</p>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-sm text-blue-100/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>;
}
function WhopIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className ?? "w-5 h-5"}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
}