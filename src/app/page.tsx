"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import FadeIn from "./components/FadeIn";
import StaggerContainer from "./components/StaggerContainer";
import FadeUp from "./components/FadeUp";
import FollowerCounter from "./components/FollowerCounter";
import DiscordCounter from "./components/DiscordCounter";
import SectionDivider from "./components/SectionDivider";
import Particles from "./components/Particles";

export default function Home() {
  return (
    <main className="relative text-white pt-20 overflow-hidden">

      {/* TRUE FLUX BLUE GRADIENT BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* Base Navy */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Animated Gradient */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(37,99,235,0.5), transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(59,130,246,0.45), transparent 45%),
              radial-gradient(circle at 50% 50%, rgba(29,78,216,0.4), transparent 50%)
            `,
            backgroundSize: "200% 200%"
          }}
        />

      </div>
<Particles />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 gap-10 overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="w-[700px] h-[700px] bg-blue-500/[0.08] rounded-full blur-3xl"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative text-6xl md:text-8xl font-semibold tracking-tight"
        >
          CONTROL THE META.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="relative text-xl md:text-2xl text-blue-100/80 max-w-3xl"
        >
          Elite EAFC tactics, market strategies and competitive gameplay.
        </motion.p>

        <div className="flex gap-6">
          <Link href="/discord">
            <Button>Join Free Discord</Button>
          </Link>

          <Link href="/store">
            <Button variant="outline">Unlock Premium</Button>
          </Link>
        </div>

      </section>

      <SectionDivider />

      {/* SOCIAL PROOF */}
      <section className="py-20 text-center border-y border-blue-400/10">

        <FadeIn>
          <p className="text-xl md:text-2xl text-blue-100/80">
            Trusted by <span className="text-white font-semibold">425,000+</span> EAFC players worldwide
          </p>
        </FadeIn>

      </section>

      <SectionDivider />

      {/* COMMUNITY */}
      <section className="py-32 px-6 text-center">

        <FadeIn>

          <h2 className="text-4xl md:text-5xl font-semibold mb-10">
            Global Community
          </h2>

          <p className="text-6xl font-semibold text-white mb-6">
            <FollowerCounter target={425000} />+
          </p>

          <p className="text-blue-100/70 text-lg">
            Players learning tactics, trading and competitive strategy.
          </p>

        </FadeIn>

      </section>

      <SectionDivider />

      {/* SOCIAL NETWORK */}
      <section className="py-40 px-6 text-center">

        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16">
            The FluxFut Network
          </h2>
        </FadeIn>

        <StaggerContainer>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">

            {[
              { name: "TikTok – Tactics", link: "https://tiktok.com" },
              { name: "TikTok – Trading", link: "https://tiktok.com" },
              { name: "TikTok – Competitive", link: "https://tiktok.com" },
              { name: "Instagram", link: "https://instagram.com" },
              { name: "YouTube", link: "https://youtube.com" },
              { name: "Twitter / X", link: "https://twitter.com" }
            ].map((item) => (

              <FadeUp key={item.name}>

                <a
                  href={item.link}
                  target="_blank"
                  className="p-10 border border-blue-400/10 rounded-2xl bg-gradient-to-b from-blue-500/[0.08] to-transparent transition duration-300 hover:scale-[1.04] hover:border-blue-400/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                >
                  <p className="text-lg font-medium text-white/80">
                    {item.name}
                  </p>
                </a>

              </FadeUp>

            ))}

          </div>

        </StaggerContainer>

      </section>

      <SectionDivider />

      {/* DISCORD */}
      <section className="py-40 px-6 text-center">

        <FadeIn>

          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Join The Community
          </h2>

          <DiscordCounter serverId="YOUR_SERVER_ID_HERE" />

        </FadeIn>

        <StaggerContainer>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

            <FadeUp>

              <div className="p-12 border border-blue-400/10 rounded-2xl bg-gradient-to-b from-blue-500/[0.08] to-transparent transition duration-300 hover:scale-[1.04] hover:border-blue-400/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">

                <h3 className="text-2xl mb-8">
                  Free Discord
                </h3>

                <ul className="space-y-4 text-blue-100/70 text-lg mb-8">
                  <li>Community chat</li>
                  <li>Weekly tips</li>
                  <li>Meta updates</li>
                  <li>Basic tactics</li>
                </ul>

                <Link href="/discord">
                  <Button>Join Free</Button>
                </Link>

              </div>

            </FadeUp>

            <FadeUp>

              <div className="p-12 border border-blue-400/20 rounded-2xl bg-blue-500/[0.05] transition duration-300 hover:scale-[1.04] hover:border-blue-400/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">

                <h3 className="text-2xl mb-8">
                  Premium Discord
                </h3>

                <ul className="space-y-4 text-blue-100/80 text-lg mb-8">
                  <li>Advanced custom tactics</li>
                  <li>Live trading alerts</li>
                  <li>Squad builders</li>
                  <li>Patch breakdowns</li>
                  <li>Private strategy channels</li>
                </ul>

                <Link href="/discord">
                  <Button variant="outline">
                    Unlock Premium
                  </Button>
                </Link>

              </div>

            </FadeUp>

          </div>

        </StaggerContainer>

      </section>

      <SectionDivider />

      {/* FINAL CTA */}
      <section className="py-40 px-6 text-center border-t border-blue-400/10">

        <FadeIn>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready to Dominate EAFC?
          </h2>

          <p className="text-blue-100/70 text-lg mb-10 max-w-xl mx-auto">
            Join the FluxFut ecosystem and gain the tactical edge over your competition.
          </p>

          <div className="flex justify-center gap-6">

            <Link href="/discord">
              <Button>
                Join the Discord
              </Button>
            </Link>

            <Link href="/store">
              <Button variant="outline">
                View Products
              </Button>
            </Link>

          </div>

        </FadeIn>

      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-blue-400/10 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

          <div>

           

          </div>

          <div>

            <h4 className="font-medium mb-4">
              Socials
            </h4>

            <ul className="space-y-2 text-blue-100/60">
              <li><a href="https://tiktok.com">TikTok</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://youtube.com">YouTube</a></li>
              <li><a href="https://twitter.com">Twitter / X</a></li>
            </ul>

          </div>

          <div>

            <h4 className="font-medium mb-4">
              Community
            </h4>

            <ul className="space-y-2 text-blue-100/60">
              <li><Link href="/discord">Discord</Link></li>
              <li><Link href="/store">Digital Products</Link></li>
            </ul>

          </div>

        </div>

        <p className="text-center text-blue-100/50 text-sm mt-12">
          © {new Date().getFullYear()} FluxFut. All rights reserved.
        </p>

      </footer>

    </main>
  );
}