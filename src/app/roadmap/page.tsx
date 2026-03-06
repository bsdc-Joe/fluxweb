"use client";
import { useState } from "react";

const PASSWORD = "London1811#";

const BLUE = "#3B82F6";
const BLUE_LIGHT = "#60A5FA";
const BLUE_DIM = "#1E3A8A";
const BG = "#020617";
const BG2 = "#0F172A";

const weeks = [
  {
    week: 1,
    label: "ESTABLISH",
    subtitle: "Days 1–7 — Launch everything, build momentum",
    theme: "Launch & Announce",
    goal: "Get first 50 Discord members. First Gumroad sale. Announce everything exists.",
    days: [
      {
        day: 1, label: "Launch Day",
        tiktok: [
          { account: "@flux.fut", content: "Discord is OPEN — screen record tour of all channels, show Premium section. Hook: 'I just opened the best FC26 Discord...' CTA: link in bio" },
          { account: "@moreflux", content: "Trading tip video + end card: 'Full live alerts in my Discord, link in bio'" },
          { account: "@fluxevolutions", content: "Best evolutions this patch — end with Discord CTA" },
        ],
        instagram: "Repost all 3 TikToks as Reels. Story: swipe up to join Discord.",
        youtube: "Upload Discord tour as a YouTube Short (same footage as @flux.fut TikTok)",
        x: "Launch tweet: Discord + Gumroad both live. Drop both links. Pin it to your profile.",
      },
      {
        day: 2, label: "Gumroad Push",
        tiktok: [
          { account: "@flux.fut", content: "Show the brand blueprint guide — screen record the contents page. Hook: 'I wrote down exactly how I built FluxFUT...' CTA: link in bio £15" },
          { account: "@moreflux", content: "Bronze pack method tutorial. End: 'Full trading system in my guide, link in bio'" },
          { account: "@fluxevolutions", content: "Top 3 evolutions under 50k — pure value, no CTA needed today" },
        ],
        instagram: "Repost as Reels. Story: 'Guide is live — link in bio'",
        youtube: "Short: guide preview / flip through the chapters",
        x: "Thread: '11 things I learned building FluxFUT from 0 to 27K followers' — last tweet links to guide",
      },
      {
        day: 3, label: "Value Day",
        tiktok: [
          { account: "@flux.fut", content: "Current meta breakdown — best formation this patch, why it works" },
          { account: "@moreflux", content: "SBC worth doing this week + profit margin" },
          { account: "@fluxevolutions", content: "Underrated evolution nobody is using" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: meta breakdown (repost @flux.fut video)",
        x: "Meta tip tweet — short and punchy, no link needed",
      },
      {
        day: 4, label: "Community",
        tiktok: [
          { account: "@flux.fut", content: "React to a trending FC26 video or news — keep it relevant" },
          { account: "@moreflux", content: "Market crash warning / buy opportunity video" },
          { account: "@fluxevolutions", content: "Evolution comparison — which is actually worth it" },
        ],
        instagram: "Repost as Reels. Story poll: 'Which evo would you pick?'",
        youtube: "Short: evolution comparison",
        x: "Ask a question: 'What's your current formation?' — engagement tweet",
      },
      {
        day: 5, label: "Social Proof",
        tiktok: [
          { account: "@flux.fut", content: "Show Discord growing — screenshot member count, show active channels. 'Join before it gets too big'" },
          { account: "@moreflux", content: "Trading result — show coins made from a method this week" },
          { account: "@fluxevolutions", content: "New evo just dropped reaction" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: trading result",
        x: "Discord milestone tweet — member count, invite link",
      },
      {
        day: 6, label: "Tutorial",
        tiktok: [
          { account: "@flux.fut", content: "Full tactic tutorial — how to set up the meta 4-2-3-1, every setting shown on screen" },
          { account: "@moreflux", content: "Explain the weekend league trading window — buy Friday, sell Sunday" },
          { account: "@fluxevolutions", content: "How to chain evolutions for max value" },
        ],
        instagram: "Repost as Reels. Save-worthy content — push it hard",
        youtube: "Short: tactic tutorial (highest value content of the week — repurpose this)",
        x: "Tactic settings in a tweet — text format, easy to screenshot and save",
      },
      {
        day: 7, label: "Week 1 Recap",
        tiktok: [
          { account: "@flux.fut", content: "Week 1 recap — what happened, what's coming. Show any wins from the community" },
          { account: "@moreflux", content: "Rest day or repost best performing video from the week" },
          { account: "@fluxevolutions", content: "Best evo of the week — community vote result" },
        ],
        instagram: "Story: week recap, ask what content people want next week",
        youtube: "No short needed today",
        x: "Week 1 stats tweet — followers gained, Discord members, anything positive",
      },
    ],
  },
  {
    week: 2,
    label: "GROW",
    subtitle: "Days 8–14 — Double down on what worked in week 1",
    theme: "Double Down",
    goal: "Identify your best performing video format from week 1 and post more of it. Hit 100 Discord members.",
    days: [
      {
        day: 8, label: "Hook Testing",
        tiktok: [
          { account: "@flux.fut", content: "Repost week 1's best performing video with a different hook — same content, new opening line" },
          { account: "@moreflux", content: "New trading method — 'Nobody is talking about this SBC flip'" },
          { account: "@fluxevolutions", content: "Most requested evo from last week's poll" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: new trading method",
        x: "Trading tip tweet — short, no fluff",
      },
      {
        day: 9, label: "Premium Push",
        tiktok: [
          { account: "@flux.fut", content: "Show what Premium members got this week — blur out the actual content but show it exists. FOMO video." },
          { account: "@moreflux", content: "Teaser of a live trading alert — 'Premium members got this 2 hours ago'" },
          { account: "@fluxevolutions", content: "Value video — pure evo tips" },
        ],
        instagram: "Repost as Reels. Story: 'Premium is open — 3 day free trial'",
        youtube: "Short: Premium teaser",
        x: "Tweet showing a blurred Premium alert — 'join to see the full thing'",
      },
      {
        day: 10, label: "Value Day",
        tiktok: [
          { account: "@flux.fut", content: "Patch just dropped? React immediately. If not — predict what EA will change next." },
          { account: "@moreflux", content: "Best budget SBC fodder to buy right now" },
          { account: "@fluxevolutions", content: "Hidden gem evo under 100k" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: patch reaction or prediction",
        x: "Hot take tweet about the current patch — controversial gets engagement",
      },
      {
        day: 11, label: "Collab / Duet",
        tiktok: [
          { account: "@flux.fut", content: "Duet or stitch a popular FC26 creator — agree or disagree with their take" },
          { account: "@moreflux", content: "Market update — what moved this week and why" },
          { account: "@fluxevolutions", content: "Evo tier list — rank this week's evos" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: tier list",
        x: "Reply to a big FC26 account's tweet with your take — gets you in front of their audience",
      },
      {
        day: 12, label: "Tutorial",
        tiktok: [
          { account: "@flux.fut", content: "Skill move tutorial — one move, how to do it, when to use it" },
          { account: "@moreflux", content: "How to read the transfer market — beginner friendly" },
          { account: "@fluxevolutions", content: "Step by step — how to plan your evo path for max chem" },
        ],
        instagram: "Repost as Reels — save-worthy tutorial content",
        youtube: "Short: skill move tutorial",
        x: "Thread: 'How to read the FC26 transfer market in 5 steps'",
      },
      {
        day: 13, label: "Community Win",
        tiktok: [
          { account: "@flux.fut", content: "Feature a community win — if a Discord member got a good result, shout them out (with permission)" },
          { account: "@moreflux", content: "Show your current squad and why you built it this way" },
          { account: "@fluxevolutions", content: "Show your evo chain — full path explained" },
        ],
        instagram: "Repost as Reels. Story: 'Drop your evo in the comments'",
        youtube: "Short: squad breakdown",
        x: "Community shoutout tweet — builds loyalty",
      },
      {
        day: 14, label: "Week 2 Recap",
        tiktok: [
          { account: "@flux.fut", content: "What's working, what's not — be transparent. Builds trust and gets saves/shares." },
          { account: "@moreflux", content: "Best trading method of the week — your personal pick" },
          { account: "@fluxevolutions", content: "Rest or repost best performing content" },
        ],
        instagram: "Story: ask for feedback on content",
        youtube: "No short needed",
        x: "2 week update — follower counts, Discord members, anything positive. Be real.",
      },
    ],
  },
  {
    week: 3,
    label: "SCALE",
    subtitle: "Days 15–21 — Push hardest for virality",
    theme: "Go Viral",
    goal: "One video needs to pop off this week. Post your highest effort content. Push for 500 Discord members.",
    days: [
      {
        day: 15, label: "Big Video",
        tiktok: [
          { account: "@flux.fut", content: "Your highest effort video of the month — full meta guide, best tactics, something genuinely useful. Spend extra time on the hook." },
          { account: "@moreflux", content: "Biggest trading opportunity right now — coins to be made" },
          { account: "@fluxevolutions", content: "Best evo in the game right now — definitive answer" },
        ],
        instagram: "Repost all as Reels — push hard on stories today",
        youtube: "Short: repost the big @flux.fut video",
        x: "Thread version of the big video — text format for people who don't click links",
      },
      {
        day: 16, label: "Trend Jump",
        tiktok: [
          { account: "@flux.fut", content: "Jump on whatever is trending in FC26 today — pack openings, new promo, controversy" },
          { account: "@moreflux", content: "Promo investment guide — what to buy before it launches" },
          { account: "@fluxevolutions", content: "New promo evos reaction" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: trend reaction",
        x: "First to tweet about the trend with your take",
      },
      {
        day: 17, label: "Value Day",
        tiktok: [
          { account: "@flux.fut", content: "Something nobody else is covering — niche tip, underrated player, overlooked mechanic" },
          { account: "@moreflux", content: "Coin making method — specific and actionable" },
          { account: "@fluxevolutions", content: "Underrated evo everyone is sleeping on" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: niche tip",
        x: "Niche tip tweet — the kind people screenshot and save",
      },
      {
        day: 18, label: "Behind Scenes",
        tiktok: [
          { account: "@flux.fut", content: "Behind the scenes of running FluxFUT — show the Discord, show the website, show the work. Builds trust and drives sign ups." },
          { account: "@moreflux", content: "Show your trading spreadsheet or method in detail" },
          { account: "@fluxevolutions", content: "My full evo squad — every card explained" },
        ],
        instagram: "Repost as Reels. Story: 'This is what I've been building'",
        youtube: "Short: behind the scenes",
        x: "Behind the scenes thread — what goes into running FluxFUT",
      },
      {
        day: 19, label: "Controversial",
        tiktok: [
          { account: "@flux.fut", content: "Hot take — something people will agree or disagree with strongly. Engagement bait done right." },
          { account: "@moreflux", content: "Overrated trading method everyone uses that doesn't work" },
          { account: "@fluxevolutions", content: "Most overrated evo this patch — people will comment" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: hot take",
        x: "Controversial tweet — pick a side, don't sit on the fence",
      },
      {
        day: 20, label: "Tutorial",
        tiktok: [
          { account: "@flux.fut", content: "How to defend — most requested topic in FC26. High search volume." },
          { account: "@moreflux", content: "How to flip players for profit — step by step" },
          { account: "@fluxevolutions", content: "How to plan your whole evo path from scratch" },
        ],
        instagram: "Repost as Reels — push saves",
        youtube: "Short: defending tutorial",
        x: "Defending tips thread — practical and specific",
      },
      {
        day: 21, label: "Week 3 Recap",
        tiktok: [
          { account: "@flux.fut", content: "3 week update — be honest about what's working. Show growth." },
          { account: "@moreflux", content: "Rest or repost best performing trading video" },
          { account: "@fluxevolutions", content: "Rest or repost best evo video" },
        ],
        instagram: "Story: 3 week milestone",
        youtube: "No short needed",
        x: "3 week stats — keep it real, people respect honesty",
      },
    ],
  },
  {
    week: 4,
    label: "CONVERT",
    subtitle: "Days 22–30 — Turn followers into members and buyers",
    theme: "Monetise",
    goal: "Push hard for Gumroad sales and Whop sign ups. Every video should have a clear CTA.",
    days: [
      {
        day: 22, label: "Sales Push",
        tiktok: [
          { account: "@flux.fut", content: "Direct sell for the Gumroad guide — testimonials if you have them, show the value, make the offer clear. £15." },
          { account: "@moreflux", content: "Trading tip + 'full system in my guide, link in bio'" },
          { account: "@fluxevolutions", content: "Value video — build trust before tomorrow's push" },
        ],
        instagram: "Repost as Reels. Story: 'Guide is still £15 — not going up anytime soon but just saying'",
        youtube: "Short: guide sell",
        x: "Sales tweet — results you've got from using the methods in the guide",
      },
      {
        day: 23, label: "Premium Push",
        tiktok: [
          { account: "@flux.fut", content: "Show what Premium members got this week — real value, real content, real alerts. Make free members feel like they're missing out." },
          { account: "@moreflux", content: "Live trading alert teaser — 'this went out to Premium 3 hours ago'" },
          { account: "@fluxevolutions", content: "Premium evo pack breakdown teaser" },
        ],
        instagram: "Repost as Reels. Story: '3 day free trial — try it'",
        youtube: "Short: Premium value video",
        x: "Tweet: what Premium members got this week — list it out",
      },
      {
        day: 24, label: "Value Day",
        tiktok: [
          { account: "@flux.fut", content: "Pure value — best video of the month if possible. No sell today. Just give." },
          { account: "@moreflux", content: "Biggest trading opportunity of the month recap" },
          { account: "@fluxevolutions", content: "Best evo of the month — definitive ranking" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: best value video of the month",
        x: "Value thread — no links, just useful information",
      },
      {
        day: 25, label: "Community",
        tiktok: [
          { account: "@flux.fut", content: "Feature the Discord community — show active channels, show members helping each other. 'This is what you're missing'" },
          { account: "@moreflux", content: "Community trading win — someone from Discord made coins using a method" },
          { account: "@fluxevolutions", content: "Community evo showcase" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: community feature",
        x: "Community tweet — shout out active Discord members",
      },
      {
        day: 26, label: "Tutorial",
        tiktok: [
          { account: "@flux.fut", content: "High value tutorial — something people will save and come back to. Evergreen content." },
          { account: "@moreflux", content: "End of month trading reset — what to sell, what to hold" },
          { account: "@fluxevolutions", content: "Month end evo guide — best value picks going into next month" },
        ],
        instagram: "Repost as Reels — push saves hard",
        youtube: "Short: evergreen tutorial",
        x: "Thread: month end FC26 checklist",
      },
      {
        day: 27, label: "Trend / React",
        tiktok: [
          { account: "@flux.fut", content: "React to biggest FC26 news of the month" },
          { account: "@moreflux", content: "Market prediction for next month" },
          { account: "@fluxevolutions", content: "Next month evo predictions" },
        ],
        instagram: "Repost as Reels",
        youtube: "Short: predictions video",
        x: "Predictions tweet — people love to agree/disagree",
      },
      {
        day: 28, label: "Final Push",
        tiktok: [
          { account: "@flux.fut", content: "Month end sell — 'I built all of this in 30 days, here's the guide that shows how'. Direct, confident, link in bio." },
          { account: "@moreflux", content: "Month end trading recap — coins made, methods used" },
          { account: "@fluxevolutions", content: "Month end evo recap — best builds of the month" },
        ],
        instagram: "Repost as Reels. Push stories hard today.",
        youtube: "Short: month recap",
        x: "30 day results tweet — be honest, be specific, link everything",
      },
      {
        day: 29, label: "Rest / Repurpose",
        tiktok: [
          { account: "@flux.fut", content: "Repost your single best performing video of the month with a new hook" },
          { account: "@moreflux", content: "Rest" },
          { account: "@fluxevolutions", content: "Rest" },
        ],
        instagram: "Story only — 'what content do you want next month?'",
        youtube: "No short needed",
        x: "Ask your audience what they want next month",
      },
      {
        day: 30, label: "30 Day Review",
        tiktok: [
          { account: "@flux.fut", content: "30 day honest review — what worked, what didn't, what's coming. Builds massive trust." },
          { account: "@moreflux", content: "30 day trading results — real numbers" },
          { account: "@fluxevolutions", content: "30 day evo recap" },
        ],
        instagram: "Repost all as Reels. Story: 'Month 2 starts tomorrow'",
        youtube: "Short: 30 day review",
        x: "Full 30 day thread — everything you learned, all your links at the end",
      },
    ],
  },
];

function RoadmapContent() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeDay, setActiveDay]   = useState<number | null>(null);
  const week = weeks[activeWeek];
  const day  = activeDay !== null ? week.days[activeDay] : null;

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif", color: "#fff", paddingBottom: 60 }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${BG2} 0%, #0a1628 100%)`, borderBottom: "1px solid rgba(59,130,246,0.2)", padding: "32px 24px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: BLUE, boxShadow: `0 0 10px ${BLUE}` }} />
            <span style={{ color: BLUE_LIGHT, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>FluxFUT — Private</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 6px", letterSpacing: "-0.02em" }}>30-Day Content Roadmap</h1>
          <p style={{ color: "rgba(148,163,184,0.8)", margin: 0, fontSize: 14 }}>TikTok × Instagram × YouTube × X — every platform, every day</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        {/* Week tabs */}
        <div style={{ display: "flex", gap: 8, padding: "24px 0 20px", flexWrap: "wrap" }}>
          {weeks.map((w, i) => (
            <button key={i} onClick={() => { setActiveWeek(i); setActiveDay(null); }}
              style={{ padding: "10px 20px", borderRadius: 8, border: `1px solid ${activeWeek === i ? BLUE : "rgba(59,130,246,0.2)"}`, background: activeWeek === i ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.03)", color: activeWeek === i ? "#fff" : "rgba(148,163,184,0.7)", cursor: "pointer", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>
              WEEK {w.week} — {w.label}
            </button>
          ))}
        </div>

        {/* Week header */}
        <div style={{ background: "linear-gradient(135deg, rgba(30,58,138,0.3) 0%, rgba(59,130,246,0.08) 100%)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>{week.subtitle}</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>Theme: {week.theme}</div>
          <div style={{ fontSize: 13, color: "rgba(148,163,184,0.8)" }}>🎯 {week.goal}</div>
        </div>

        {/* Day grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 8, marginBottom: 24 }}>
          {week.days.map((d, i) => (
            <button key={i} onClick={() => setActiveDay(activeDay === i ? null : i)}
              style={{ padding: "14px 10px", borderRadius: 10, border: `1px solid ${activeDay === i ? BLUE : "rgba(59,130,246,0.15)"}`, background: activeDay === i ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.03)", color: "#fff", cursor: "pointer", textAlign: "center" }}>
              <div style={{ fontSize: 10, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 4 }}>DAY {d.day}</div>
              <div style={{ fontSize: 12, fontWeight: 700 }}>{d.label}</div>
            </button>
          ))}
        </div>

        {/* Day detail */}
        {day && (
          <div>
            <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Day {day.day} — {day.label}</div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "rgba(148,163,184,0.6)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>TikTok</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {day.tiktok.map((t, i) => (
                  <div key={i} style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{t.account}</div>
                    <div style={{ fontSize: 13, color: "rgba(203,213,225,0.9)", lineHeight: 1.6 }}>{t.content}</div>
                  </div>
                ))}
              </div>
            </div>

            {[{ key: "instagram", label: "Instagram" }, { key: "youtube", label: "YouTube" }, { key: "x", label: "X / Twitter" }].map(({ key, label }) => (
              <div key={key} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: "rgba(148,163,184,0.6)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ fontSize: 13, color: "rgba(203,213,225,0.9)", lineHeight: 1.6 }}>{day[key as keyof typeof day] as string}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!day && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "rgba(148,163,184,0.4)", fontSize: 14 }}>
            ↑ Click any day to see the full content plan
          </div>
        )}

        {/* Rules */}
        <div style={{ marginTop: 32, background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 12, padding: "20px 24px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: BLUE_LIGHT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>30-Day Rules</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
            {[
              "Post every single day — no days off in month 1",
              "Film once, post everywhere — same video on all platforms",
              "Every video ends with a CTA — Discord, guide or Premium",
              "Update !meta and !tactics in the bot every patch",
              "Use !alert in Discord at least 3x per week for Premium",
              "Reply to every comment in the first hour after posting",
              "Pin your best comment on every video with your links",
              "X is for engagement — reply to big accounts daily",
            ].map((rule, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: BLUE }} />
                </div>
                <span style={{ fontSize: 13, color: "rgba(203,213,225,0.85)", lineHeight: 1.5 }}>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const [input, setInput]       = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError]       = useState(false);

  const attempt = () => {
    if (input === PASSWORD) {
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 2000);
    }
  };

  if (unlocked) return <RoadmapContent />;

  return (
    <div style={{ background: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ background: BG2, border: "1px solid rgba(59,130,246,0.2)", borderRadius: 16, padding: "40px 36px", width: "100%", maxWidth: 360, textAlign: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>🔒</div>
        <div style={{ fontSize: 11, color: BLUE_LIGHT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>FluxFUT Private</div>
        <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>Content Roadmap</h1>
        <p style={{ color: "rgba(148,163,184,0.6)", fontSize: 13, margin: "0 0 28px" }}>Enter your password to access</p>
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && attempt()}
          placeholder="Password"
          style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1px solid ${error ? "#EF4444" : "rgba(59,130,246,0.25)"}`, background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: 14, outline: "none", marginBottom: 12, boxSizing: "border-box", transition: "border-color 0.2s" }}
        />
        <button onClick={attempt}
          style={{ width: "100%", padding: "12px", borderRadius: 10, border: "none", background: BLUE, color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          Unlock
        </button>
        {error && <p style={{ color: "#EF4444", fontSize: 13, marginTop: 12 }}>Incorrect password</p>}
      </div>
    </div>
  );
}
