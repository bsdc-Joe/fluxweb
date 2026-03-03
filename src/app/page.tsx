"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import FadeIn from "./components/FadeIn";
import StaggerContainer from "./components/StaggerContainer";
import FadeUp from "./components/FadeUp";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <main className="bg-black text-white pt-20">

      <Navbar />

     {/* HERO */}
<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 gap-10 overflow-hidden">

  {/* Parallax Glow Background */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <motion.div
  initial={{ y: 0 }}
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  className="w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-3xl"
/>
    
  </div>

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="relative text-6xl md:text-8xl font-semibold tracking-tight leading-[1.05]"
  >
    CONTROL THE META.
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1.2 }}
    className="relative text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed"
  >
    Elite EAFC26 tactics. Market dominance. Competitive advantage.
  </motion.p>

  <div className="relative mt-6 flex gap-6">
    <Button>Join Free Discord</Button>
    <Button variant="outline">Unlock Premium</Button>
  </div>
</section>

      {/* FEATURE SHOWCASE */}
      <section className="py-40 px-6 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-16">
            Built for Competitive Players.
          </h2>

          <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-16">
            <p className="text-xl text-white/70 leading-relaxed">
              FluxFut combines tactical precision, market intelligence,
              and competitive structure into one unified ecosystem.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* NETWORK SECTION */}
      <section id="network" className="py-40 px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            The FluxFut Network
          </h2>
        </FadeIn>

        <StaggerContainer>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              "TikTok – Tactics",
              "TikTok – Trading",
              "TikTok – Competitive Clips",
              "Instagram – Highlights",
              "YouTube – Deep Breakdowns",
            ].map((item) => (
              <FadeUp key={item}>
                <div className="p-10 border border-white/10 rounded-2xl transition duration-300 hover:bg-white/5">
                  <p className="text-lg font-medium text-white/80">
                    {item}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* DISCORD SECTION */}
      <section id="discord" className="py-40 px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            The Inner Circle Wins More.
          </h2>
        </FadeIn>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <FadeUp>
              <div className="p-12 border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-medium mb-8 text-white">
                  Free Access
                </h3>
                <ul className="space-y-4 text-white/60 text-lg">
                  <li>Meta updates</li>
                  <li>Community chat</li>
                  <li>Weekly tips</li>
                  <li>Basic tactics</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="p-12 border border-white/20 rounded-2xl bg-white/5">
                <h3 className="text-2xl font-medium mb-8 text-white">
                  Premium Access
                </h3>
                <ul className="space-y-4 text-white/70 text-lg">
                  <li>Advanced custom tactics</li>
                  <li>Live trading alerts</li>
                  <li>Squad builders</li>
                  <li>Patch breakdowns</li>
                  <li>Private strategy channels</li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </StaggerContainer>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-40 px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            Digital Assets Built for Results
          </h2>
        </FadeIn>

        <StaggerContainer>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              "Meta Tactics Pack",
              "Elite Trading Blueprint",
              "Weekend League System",
            ].map((product) => (
              <FadeUp key={product}>
                <div className="p-10 border border-white/10 rounded-2xl transition duration-300 hover:bg-white/5">
                  <p className="text-lg font-medium text-white/80 mb-6">
                    {product}
                  </p>
                  <Button variant="outline">Unlock</Button>
                </div>
              </FadeUp>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} FluxFut. All rights reserved.
      </footer>

    </main>
  );
}