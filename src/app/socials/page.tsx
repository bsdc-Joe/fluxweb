"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import FadeUp from "../components/FadeUp";
import StaggerContainer from "../components/StaggerContainer";
import SectionDivider from "../components/SectionDivider";
import Particles from "../components/Particles";
import CountUp from "../components/CountUp";

const LINKS = {
  fluxfut:        "https://www.tiktok.com/@flux.fut",
  moreflux:       "https://www.tiktok.com/@moreflux",
  fluxevolutions: "https://www.tiktok.com/@fluxevolutions",
  instagram:      "https://instagram.com/fluxfut",   // update if different
  youtube:        "https://youtube.com/@fluxfut",    // update if different
  twitter:        "https://twitter.com/fluxfut",     // update if different
};

// TikTok accounts — grouped under one section
const tiktokAccounts = [
  {
    id: "fluxfut-tiktok",
    handle: "@flux.fut",
    label: "FluxFut",
    followers: "100",
    href: LINKS.fluxfut,
    tag: "Meta & Players",
    desc: "The main FluxFut account. Best meta cards to use, Top 3 players for every budget at every position, and Top 10 best players in the game — position by position.",
    stats: [{ label: "Focus", val: "Meta" }, { label: "Style", val: "Top Lists" }, { label: "Pace", val: "Daily" }],
  },
  {
    id: "moreflux-tiktok",
    handle: "@moreflux",
    label: "MoreFlux",
    followers: "100",
    href: LINKS.moreflux,
    tag: "Fun & Series",
    desc: "The fun side of FluxFut. Series content covering EAFC26 and throwbacks to past games — viral formats, nostalgia, and everything in between.",
    stats: [{ label: "Focus", val: "Series" }, { label: "Style", val: "Viral" }, { label: "Pace", val: "Weekly" }],
  },
  {
    id: "fluxevo-tiktok",
    handle: "@fluxevolutions",
    label: "FluxEvolutions",
    followers: "100",
    href: LINKS.fluxevolutions,
    tag: "Evolutions",
    desc: "The go-to account for FC26 Evolutions. Which evos are worth it, best paths, hidden gems and value picks — everything evo-related in one place.",
    stats: [{ label: "Focus", val: "Evolutions" }, { label: "Style", val: "Guides" }, { label: "Pace", val: "Every evo" }],
  },
];

// Other platforms
const otherPlatforms = [
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@FluxFut",
    label: "Instagram",
    followers: "9K",
    followersNum: 9000,
    href: LINKS.instagram,
    accent: "rgba(249,115,22,0.3)",
    tag: "Reels + Posts",
    desc: "All three TikTok accounts' content as Reels — plus exclusive static posts: squad builds, card ratings, meta tier lists and daily FC26 updates.",
    stats: [{ label: "Reels", val: "Daily" }, { label: "Posts", val: "Regular" }, { label: "Stories", val: "Active" }],
    icon: <InstagramIcon />,
  },
  {
    id: "youtube",
    platform: "YouTube",
    handle: "FluxFut",
    label: "YouTube",
    followers: "18K",
    followersNum: 18000,
    href: LINKS.youtube,
    accent: "rgba(220,38,38,0.35)",
    tag: "Shorts + Long-form",
    desc: "YouTube Shorts mirror all three TikTok channels. Long-form videos go deeper — full position guides, squad builder walkthroughs and evolution deep-dives.",
    stats: [{ label: "Shorts", val: "Daily" }, { label: "Long-form", val: "Weekly" }, { label: "Avg Views", val: "15K" }],
    icon: <YouTubeIcon />,
  },
  {
    id: "twitter",
    platform: "Twitter / X",
    handle: "@FluxFut",
    label: "Twitter / X",
    followers: "100",
    followersNum: 100,
    href: LINKS.twitter,
    accent: "rgba(14,165,233,0.3)",
    tag: "Leaks & News",
    desc: "First place for FC26 leaks, meta card reveals, SBC solutions and breaking news. Real-time reactions to every patch, promo and server update.",
    stats: [{ label: "Focus", val: "Leaks" }, { label: "SBCs", val: "Instant" }, { label: "Pace", val: "Real-time" }],
    icon: <XIcon />,
  },
];

export default function SocialsPage() {
  return (
    <main className="relative text-white pt-20 overflow-hidden">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(circle at 20% 30%, rgba(37,99,235,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.45), transparent 45%), radial-gradient(circle at 50% 50%, rgba(29,78,216,0.4), transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>
      <Particles />
      <Navbar />

      {/* ── HERO ── */}
      <section id="top" className="relative min-h-[55vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-blue-500/[0.07] rounded-full blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Follow the Flux
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-tight">
          Everywhere<br /><span className="text-blue-400">We Play.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-100/70 max-w-2xl">
          6 channels. 3 TikTok accounts. One mission — dominate your FC26 knowledge.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-2">
          {["3 TikTok Accounts", "27K+ Followers", "Daily Content"].map((l) => (
            <span key={l} className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-blue-400/15 text-blue-100/60 text-sm">
              <span className="text-blue-400 mr-1.5 text-xs">◈</span>{l}
            </span>
          ))}
        </motion.div>
      </section>

      <SectionDivider />

      {/* ── LIVE COUNTERS ── */}
      <section className="py-16 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "TikTok", target: 300 },
              { label: "Instagram", target: 9000 },
              { label: "YouTube", target: 18000 },
              { label: "X / Twitter", target: 100 },
            ].map((s) => (
              <div key={s.label} className="p-5 sm:p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.07] to-transparent text-center hover:border-blue-400/25 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-semibold text-white mb-1"><CountUp target={s.target} suffix="+" /></p>
                <p className="text-xs text-blue-100/50 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ── TIKTOK SECTION ── */}
      <section id="tiktok" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-blue-300">
                <TikTokIcon />
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold">TikTok</h2>
            </div>
            <p className="text-center text-blue-100/50 mb-4 max-w-xl mx-auto">
              Three accounts, each with a distinct focus. Combined 300+ followers across the network.
            </p>
            <p className="text-center text-blue-100/30 text-sm mb-16">
              Combined: <span className="text-white font-medium">300+</span> followers
            </p>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-6">
              {tiktokAccounts.map((acc) => (
                <FadeUp key={acc.id}>
                  <div id={acc.id} className="group relative flex flex-col h-full p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent overflow-hidden hover:border-pink-400/30 hover:shadow-[0_0_50px_rgba(236,72,153,0.1)] transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background: `radial-gradient(circle at 0% 0%, rgba(236,72,153,0.25), transparent 60%)` }} />
                    <div className="relative z-10 flex flex-col h-full gap-4">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-pink-300">
                          <TikTokIcon />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-300 text-xs font-medium">{acc.tag}</span>
                      </div>
                      <div>
                        <p className="text-xs text-blue-100/40 uppercase tracking-widest mb-0.5">TikTok</p>
                        <h3 className="text-xl font-semibold text-white">{acc.label}</h3>
                        <p className="text-sm text-pink-400/80">{acc.handle}</p>
                      </div>
                      <p className="text-blue-100/55 text-sm leading-relaxed flex-1">{acc.desc}</p>
                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-blue-400/10">
                        {acc.stats.map((st) => (
                          <div key={st.label} className="text-center">
                            <p className="text-sm font-semibold text-white">{st.val}</p>
                            <p className="text-xs text-blue-100/40">{st.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-semibold text-white">{acc.followers}</p>
                          <p className="text-xs text-blue-100/40">followers</p>
                        </div>
                        <a href={acc.href} target="_blank" rel="noopener noreferrer">
                          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
                            className="px-4 py-2 rounded-xl bg-pink-500/15 border border-pink-400/25 text-pink-200 text-sm font-medium hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all duration-200 flex items-center gap-2">
                            <TikTokIcon /> Follow
                          </motion.div>
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* ── YOUTUBE ── */}
      <section id="youtube" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-red-400">
                <YouTubeIcon />
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold">YouTube</h2>
            </div>
            <p className="text-center text-blue-100/50 mb-16 max-w-xl mx-auto">
              Shorts mirroring all three TikTok channels, plus long-form deep-dives you won't find anywhere else.
            </p>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { label: "YouTube Shorts", desc: "Every TikTok from all three accounts — meta cards, fun series and evo guides — posted daily as Shorts.", tag: "Daily Shorts", stat1: { l: "Frequency", v: "Daily" }, stat2: { l: "Source", v: "All 3 TikToks" } },
                { label: "Long-form Videos", desc: "In-depth position guides, full evolution walkthroughs, squad builder breakdowns and everything that needs more than 60 seconds.", tag: "Deep-dives", stat1: { l: "Length", v: "10–30m" }, stat2: { l: "Frequency", v: "Weekly" } },
              ].map((item) => (
                <FadeUp key={item.label}>
                  <div className="group relative flex flex-col h-full p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent overflow-hidden hover:border-red-400/30 hover:shadow-[0_0_50px_rgba(220,38,38,0.1)] transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background: `radial-gradient(circle at 0% 0%, rgba(220,38,38,0.25), transparent 60%)` }} />
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-red-400"><YouTubeIcon /></div>
                        <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-400/20 text-red-300 text-xs font-medium">{item.tag}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                      <p className="text-blue-100/55 text-sm leading-relaxed">{item.desc}</p>
                      <div className="grid grid-cols-2 gap-3 py-3 border-y border-blue-400/10">
                        <div className="text-center"><p className="text-sm font-semibold text-white">{item.stat1.v}</p><p className="text-xs text-blue-100/40">{item.stat1.l}</p></div>
                        <div className="text-center"><p className="text-sm font-semibold text-white">{item.stat2.v}</p><p className="text-xs text-blue-100/40">{item.stat2.l}</p></div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </StaggerContainer>
          <FadeIn>
            <div className="text-center mt-10">
              <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-red-500/15 border border-red-400/25 text-red-200 font-medium hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-200">
                  <YouTubeIcon /> Subscribe · 18K
                </motion.div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* ── INSTAGRAM ── */}
      <section id="instagram" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-orange-400">
                <InstagramIcon />
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold">Instagram</h2>
            </div>
            <p className="text-center text-blue-100/50 mb-16 max-w-xl mx-auto">
              Reels from all three TikTok accounts, plus Instagram-exclusive posts with squad builds, card ratings and tier lists.
            </p>
          </FadeIn>
          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Reels", desc: "Meta guides, evo content and fun series from all three TikTok channels — posted as Reels daily.", tag: "Video", stat1: { l: "Frequency", v: "Daily" }, stat2: { l: "Source", v: "All TikToks" } },
                { label: "Posts & Stories", desc: "Exclusive static content: squad builds, player card ratings, position tier lists, meta updates and FC26 news.", tag: "Exclusive", stat1: { l: "Type", v: "Cards & Lists" }, stat2: { l: "Stories", v: "Active" } },
              ].map((item) => (
                <FadeUp key={item.label}>
                  <div className="group relative flex flex-col h-full p-7 rounded-2xl border border-blue-400/10 bg-gradient-to-b from-blue-500/[0.06] to-transparent overflow-hidden hover:border-orange-400/30 hover:shadow-[0_0_50px_rgba(249,115,22,0.1)] transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background: `radial-gradient(circle at 0% 0%, rgba(249,115,22,0.25), transparent 60%)` }} />
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-orange-400"><InstagramIcon /></div>
                        <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-300 text-xs font-medium">{item.tag}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                      <p className="text-blue-100/55 text-sm leading-relaxed">{item.desc}</p>
                      <div className="grid grid-cols-2 gap-3 py-3 border-y border-blue-400/10">
                        <div className="text-center"><p className="text-sm font-semibold text-white">{item.stat1.v}</p><p className="text-xs text-blue-100/40">{item.stat1.l}</p></div>
                        <div className="text-center"><p className="text-sm font-semibold text-white">{item.stat2.v}</p><p className="text-xs text-blue-100/40">{item.stat2.l}</p></div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </StaggerContainer>
          <FadeIn>
            <div className="text-center mt-10">
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-orange-500/15 border border-orange-400/25 text-orange-200 font-medium hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200">
                  <InstagramIcon /> Follow · 9K
                </motion.div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* ── X / TWITTER ── */}
      <section id="twitter" className="py-16 px-4 sm:px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto relative rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/[0.08] via-transparent to-transparent p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-sky-400"><XIcon /></div>
                <h2 className="text-3xl sm:text-4xl font-semibold">Twitter / X</h2>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-medium mb-6">Leaks & Breaking News</span>
              <p className="text-blue-100/60 mb-4 leading-relaxed">
                The first place for FC26 leaks and meta card reveals. SBC solutions posted the moment they drop, instant patch reactions and all-round FC26 content that keeps you ahead of the meta.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
                {["FC26 Leaks", "Meta Card Reveals", "SBC Solutions", "Patch Reactions", "Breaking News"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/15 text-sky-300/80">{tag}</span>
                ))}
              </div>
              <a href={LINKS.twitter} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-sky-500/15 border border-sky-400/25 text-sky-200 font-medium hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-200">
                  <XIcon /> Follow · 100
                </motion.div>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ── FOOTER CTA ── */}
      <section className="py-24 px-4 sm:px-6 text-center border-t border-blue-400/10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Never Miss a Drop.</h2>
          <p className="text-blue-100/60 text-lg mb-10 max-w-md mx-auto">
            Follow every channel. Stay ahead of every patch, promo and meta shift.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "@flux.fut", href: LINKS.fluxfut, icon: <TikTokIcon />, color: "border-pink-400/20 bg-pink-500/[0.07] text-pink-200 hover:bg-pink-500/20 hover:text-white" },
              { label: "@moreflux", href: LINKS.moreflux, icon: <TikTokIcon />, color: "border-pink-400/20 bg-pink-500/[0.07] text-pink-200 hover:bg-pink-500/20 hover:text-white" },
              { label: "@fluxevolutions", href: LINKS.fluxevolutions, icon: <TikTokIcon />, color: "border-pink-400/20 bg-pink-500/[0.07] text-pink-200 hover:bg-pink-500/20 hover:text-white" },
              { label: "Instagram", href: LINKS.instagram, icon: <InstagramIcon />, color: "border-orange-400/20 bg-orange-500/[0.07] text-orange-200 hover:bg-orange-500/20 hover:text-white" },
              { label: "YouTube", href: LINKS.youtube, icon: <YouTubeIcon />, color: "border-red-400/20 bg-red-500/[0.07] text-red-200 hover:bg-red-500/20 hover:text-white" },
              { label: "Twitter / X", href: LINKS.twitter, icon: <XIcon />, color: "border-sky-400/20 bg-sky-500/[0.07] text-sky-200 hover:bg-sky-500/20 hover:text-white" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-2 ${s.color}`}>
                  <span className="w-4 h-4">{s.icon}</span>{s.label}
                </motion.div>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16 border-t border-blue-400/10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold text-white mb-2">FluxFut</p>
            <p className="text-blue-100/40 text-xs leading-relaxed max-w-[180px]">Elite EAFC tactics, trading & competitive gameplay.</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">TikTok</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={LINKS.fluxfut} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@flux.fut</a></li>
              <li><a href={LINKS.moreflux} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@moreflux</a></li>
              <li><a href={LINKS.fluxevolutions} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@fluxevolutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">More Socials</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a></li>
              <li><a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">YouTube</a></li>
              <li><a href={LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Twitter / X</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Community</h4>
            <ul className="space-y-2 text-blue-100/50">
              <li><a href="/discord" className="hover:text-blue-400 transition-colors">Discord</a></li>
              <li><a href="/store" className="hover:text-blue-400 transition-colors">Store</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-blue-100/30 text-xs mt-12">© {new Date().getFullYear()} FluxFut. All rights reserved.</p>
      </footer>

    </main>
  );
}

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>;
}
function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
}
function YouTubeIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
}
function XIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.734l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>;
}
