"use client";
import { useState } from "react";

const PASSWORD = "London1811#";
const BLUE = "#3B82F6";
const BLUE_LIGHT = "#60A5FA";
const BG = "#020617";
const BG2 = "#0F172A";

const ACCOUNTS = [
  {
    handle: "@flux.fut",
    focus: "Meta & Tactics",
    color: "#3B82F6",
    topics: [
      "5 things broken in this patch",
      "Best formation right now (and why)",
      "This tactic setting changes everything",
      "How to defend properly this patch",
      "Rate my squad + what I'd change",
      "Meta tier list — best formations ranked",
      "Skill move tutorial — one move, how + when",
      "Patch reaction — what EA actually changed",
      "Hot take — this formation is overrated",
      "Behind the scenes of running FluxFUT",
    ],
  },
  {
    handle: "@moreflux",
    focus: "Trading & Coins",
    color: "#22C55E",
    topics: [
      "3 SBCs worth doing this week",
      "Buy these players before the promo",
      "How I made 100K coins in 1 hour",
      "Trading method nobody is using",
      "Weekend league trading window explained",
      "Market crash incoming — here's why",
      "Best budget SBC fodder right now",
      "How to read the transfer market",
      "Overrated trading method to avoid",
      "Month end trading reset — sell or hold?",
    ],
  },
  {
    handle: "@fluxevolutions",
    focus: "Evolutions",
    color: "#F59E0B",
    topics: [
      "Best evos under 50K right now",
      "Evo tier list — ranked this patch",
      "This evo is broken (here's why)",
      "Chain these 3 evos for a monster card",
      "Most underrated evo everyone is sleeping on",
      "Evo mistakes everyone makes",
      "How to plan your full evo path",
      "Best evo for each position this patch",
      "Hidden gem evo under 100K",
      "Evo comparison — which is actually worth it",
    ],
  },
];

const STRUCTURE = [
  { slide: "Slide 1", label: "HOOK", desc: "Bold statement or question. Big text. Makes them swipe.", example: '"THIS FORMATION IS BROKEN"', color: BLUE },
  { slide: "Slide 2", label: "POINT 1", desc: "First value point. Keep it short — one idea per slide.", example: '"4-2-3-1 Narrow is dominating this patch"', color: BLUE_LIGHT },
  { slide: "Slide 3", label: "POINT 2", desc: "Second value point. Build on slide 2.", example: '"High press + depth 70 = unstoppable"', color: BLUE_LIGHT },
  { slide: "Slide 4", label: "POINT 3", desc: "Third value point. Keep momentum going.", example: '"CDM stays back — always"', color: BLUE_LIGHT },
  { slide: "Slide 5", label: "POINT 4", desc: "Final value point or bonus tip.", example: '"Wingers cut inside for easy finesse"', color: BLUE_LIGHT },
  { slide: "Slide 6", label: "CTA", desc: "Always the last slide. Same layout every time.", example: '"Join Discord • Get Blueprint • Go Premium"', color: "#22C55E" },
];

const RULES = [
  "Post 1 carousel per TikTok account every day — 3 total",
  "Immediately repost each carousel to Instagram",
  "Post the same carousel to YouTube Community tab",
  "Every carousel ends with the CTA slide — no exceptions",
  "Use the same template every time — consistency builds brand",
  "Make all 3 in one sitting — takes 30-45 mins max",
  "Reply to every comment in the first hour after posting",
  "Pin a comment with your Discord link on every post",
  "Update content topics when a patch drops — stay relevant",
  "When you hit 10K on any account — start mixing in 60s videos",
];

const CTA_SCRIPT = `Want more?

Join the Discord  ->  discord.gg/HJCn7YZCC3
Get the Blueprint ->  fluxfut.com/store
Premium Access    ->  whop.com/fluxfut
Website           ->  fluxfut.com

Follow @[account] for daily FC26 content`;

const MILESTONES = [
  { followers: "0 -> 1K", action: "Post daily carousels. Focus on hooks. Test different topics each day." },
  { followers: "1K -> 5K", action: "Double down on your best performing topic. Post 2x per day if possible." },
  { followers: "5K -> 10K", action: "Start teasing Premium content. Build FOMO. Push Discord hard." },
  { followers: "10K", action: "Apply for Creator Rewards Program. Start mixing in 60s videos alongside carousels." },
  { followers: "10K -> 50K", action: "Video + carousel combo daily. Repurpose everything across all platforms." },
];

function RoadmapContent() {
  const [tab, setTab] = useState(0);
  const tabs = ["Accounts", "Carousel Structure", "Daily Routine", "Milestones", "CTA Template"];

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif", color: "#fff", paddingBottom: 80 }}>
      <div style={{ background: `linear-gradient(135deg, ${BG2} 0%, #0a1628 100%)`, borderBottom: "1px solid rgba(59,130,246,0.2)", padding: "28px 24px 22px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: BLUE, boxShadow: `0 0 8px ${BLUE}` }} />
            <span style={{ color: BLUE_LIGHT, fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>FluxFUT — Private</span>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>Content Strategy & Roadmap</h1>
          <p style={{ color: "rgba(148,163,184,0.7)", margin: 0, fontSize: 13 }}>Carousel-first strategy to 10K on all 3 TikToks then Creator Rewards</p>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", gap: 6, padding: "20px 0 18px", flexWrap: "wrap" }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)}
              style={{ padding: "9px 16px", borderRadius: 8, border: `1px solid ${tab === i ? BLUE : "rgba(59,130,246,0.2)"}`, background: tab === i ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.03)", color: tab === i ? "#fff" : "rgba(148,163,184,0.7)", cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
              {t}
            </button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {ACCOUNTS.map((acc, i) => (
              <div key={i} style={{ background: BG2, border: "1px solid rgba(59,130,246,0.15)", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: "18px 22px 14px", borderBottom: "1px solid rgba(59,130,246,0.1)", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: acc.color, boxShadow: `0 0 10px ${acc.color}` }} />
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 800 }}>{acc.handle}</div>
                    <div style={{ fontSize: 11, color: "rgba(148,163,184,0.6)", marginTop: 1 }}>{acc.focus}</div>
                  </div>
                </div>
                <div style={{ padding: "16px 22px" }}>
                  <div style={{ fontSize: 10, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Carousel Topics — rotate through these</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 8 }}>
                    {acc.topics.map((topic, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: acc.color, marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "rgba(203,213,225,0.85)", lineHeight: 1.5 }}>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 12, padding: "16px 20px", marginBottom: 4 }}>
              <div style={{ fontSize: 13, color: "rgba(203,213,225,0.8)", lineHeight: 1.7 }}>
                Every carousel is <strong style={{ color: "#fff" }}>6 slides</strong>. Same structure every time. Hook then 4 value points then CTA. Use the same dark navy Canva template — consistency builds brand recognition fast.
              </div>
            </div>
            {STRUCTURE.map((s, i) => (
              <div key={i} style={{ background: BG2, border: "1px solid rgba(59,130,246,0.12)", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ background: "rgba(59,130,246,0.15)", border: `1px solid ${s.color}40`, borderRadius: 8, padding: "6px 12px", flexShrink: 0, textAlign: "center" }}>
                  <div style={{ fontSize: 10, color: "rgba(148,163,184,0.5)", fontWeight: 700 }}>{s.slide}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: s.color }}>{s.label}</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "rgba(203,213,225,0.9)", marginBottom: 6 }}>{s.desc}</div>
                  <div style={{ fontSize: 12, color: BLUE_LIGHT, fontStyle: "italic" }}>{s.example}</div>
                </div>
              </div>
            ))}
            <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 12, padding: "16px 20px", marginTop: 4 }}>
              <div style={{ fontSize: 11, color: "#22C55E", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Canva Setup</div>
              <div style={{ fontSize: 13, color: "rgba(203,213,225,0.8)", lineHeight: 1.9 }}>
                1. Canva — New Design — TikTok Post (1080x1920)<br />
                2. Background: #020617 — white text — blue accents (#3B82F6)<br />
                3. Make the template once — save as template<br />
                4. Duplicate it every day, swap the text, download as PNG slides<br />
                5. Upload to TikTok as carousel, repost to Instagram same day
              </div>
            </div>
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: BG2, border: "1px solid rgba(59,130,246,0.15)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Every Day — 30-45 mins total</div>
              {[
                "Open Canva — duplicate your template 3 times (one per account)",
                "Pick today's topic for each account from the Accounts tab",
                "Swap the text on each slide — hook, 4 points, CTA stays the same",
                "Download all 3 carousels as PNG slides",
                "Upload to @flux.fut TikTok as carousel",
                "Upload to @moreflux TikTok as carousel",
                "Upload to @fluxevolutions TikTok as carousel",
                "Repost all 3 to Instagram as carousels immediately",
                "Post to YouTube Community tab",
                "Reply to all comments within the first hour — algorithm boost",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 6, padding: "3px 10px", flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: BLUE_LIGHT }}>Step {i + 1}</span>
                  </div>
                  <span style={{ fontSize: 13, color: "rgba(203,213,225,0.85)", lineHeight: 1.6, paddingTop: 2 }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ background: BG2, border: "1px solid rgba(59,130,246,0.15)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Rules</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
                {RULES.map((rule, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: BLUE }} />
                    </div>
                    <span style={{ fontSize: 13, color: "rgba(203,213,225,0.85)", lineHeight: 1.5 }}>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {MILESTONES.map((m, i) => (
              <div key={i} style={{ background: BG2, border: "1px solid rgba(59,130,246,0.15)", borderRadius: 12, padding: "18px 22px", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 10, padding: "10px 16px", flexShrink: 0, textAlign: "center", minWidth: 100 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: BLUE_LIGHT }}>{m.followers}</div>
                  <div style={{ fontSize: 10, color: "rgba(148,163,184,0.5)", marginTop: 2 }}>followers</div>
                </div>
                <span style={{ fontSize: 14, color: "rgba(203,213,225,0.85)", lineHeight: 1.6 }}>{m.action}</span>
              </div>
            ))}
            <div style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 12, padding: "18px 22px", marginTop: 4 }}>
              <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>TikTok Creator Rewards Requirements</div>
              <div style={{ fontSize: 13, color: "rgba(203,213,225,0.8)", lineHeight: 1.9 }}>
                10,000 followers<br />
                100,000 video views in the last 30 days<br />
                Account must be 18+ and in an eligible country<br />
                No community guideline violations<br /><br />
                <strong style={{ color: "#fff" }}>Hit this on all 3 accounts = 3x Creator Rewards income</strong>
              </div>
            </div>
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: BG2, border: "1px solid rgba(59,130,246,0.15)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Last Slide CTA — use this every carousel</div>
              <pre style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 10, padding: "18px 20px", fontSize: 13, color: "rgba(203,213,225,0.9)", lineHeight: 1.9, whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{CTA_SCRIPT}</pre>
            </div>
            <div style={{ background: BG2, border: "1px solid rgba(59,130,246,0.15)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Video CTA Script — when you start filming</div>
              <div style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 10, padding: "18px 20px", fontSize: 14, color: "rgba(203,213,225,0.9)", lineHeight: 1.9, fontStyle: "italic" }}>
                "Link in bio — join the Discord for free, grab the brand blueprint guide, or go Premium for live alerts. All at fluxfut.com."
              </div>
              <div style={{ fontSize: 12, color: "rgba(148,163,184,0.5)", marginTop: 10 }}>5 seconds. Every video. No exceptions.</div>
            </div>
            <div style={{ background: BG2, border: "1px solid rgba(59,130,246,0.15)", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Bio Template — all accounts</div>
              {[
                { account: "@flux.fut", bio: "Elite FC26 meta & tactics\nJoin Discord -> discord.gg/HJCn7YZCC3\nBrand Blueprint -> fluxfut.com/store\nWebsite -> fluxfut.com" },
                { account: "@moreflux", bio: "FC26 trading & coins\nLive alerts -> discord.gg/HJCn7YZCC3\nWebsite -> fluxfut.com" },
                { account: "@fluxevolutions", bio: "FC26 evolutions daily\nJoin Discord -> discord.gg/HJCn7YZCC3\nWebsite -> fluxfut.com" },
              ].map((b, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: BLUE_LIGHT, marginBottom: 6 }}>{b.account}</div>
                  <pre style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 8, padding: "12px 16px", fontSize: 12, color: "rgba(203,213,225,0.8)", lineHeight: 1.8, whiteSpace: "pre-wrap", fontFamily: "monospace", margin: 0 }}>{b.bio}</pre>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const attempt = () => {
    if (input === PASSWORD) { setUnlocked(true); }
    else { setError(true); setInput(""); setTimeout(() => setError(false), 2000); }
  };

  if (unlocked) return <RoadmapContent />;

  return (
    <div style={{ background: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ background: BG2, border: "1px solid rgba(59,130,246,0.2)", borderRadius: 16, padding: "40px 36px", width: "100%", maxWidth: 360, textAlign: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>🔒</div>
        <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>FluxFUT Private</div>
        <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>Content Roadmap</h1>
        <p style={{ color: "rgba(148,163,184,0.6)", fontSize: 13, margin: "0 0 28px" }}>Enter your password to access</p>
        <input type="password" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && attempt()} placeholder="Password"
          style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1px solid ${error ? "#EF4444" : "rgba(59,130,246,0.25)"}`, background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: 14, outline: "none", marginBottom: 12, boxSizing: "border-box" as const }} />
        <button onClick={attempt} style={{ width: "100%", padding: "12px", borderRadius: 10, border: "none", background: BLUE, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Unlock</button>
        {error && <p style={{ color: "#EF4444", fontSize: 13, marginTop: 12 }}>Incorrect password</p>}
      </div>
    </div>
  );
}
