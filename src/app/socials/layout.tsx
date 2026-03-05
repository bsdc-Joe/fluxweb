import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials | FluxFut",
  description: "Follow FluxFut across TikTok (@flux.fut, @moreflux, @fluxevolutions), YouTube, Instagram and Twitter/X. 27K+ FC26 players in the network.",
  openGraph: {
    title: "FluxFut Socials — Follow the Network",
    description: "Three TikTok accounts, YouTube, Instagram and X. Meta cards, evolutions, fun series and FC26 leaks — all in one place.",
    url: "https://fluxfut.com/socials",
  },
  twitter: {
    card: "summary_large_image",
    title: "FluxFut Socials — Follow the Network",
    description: "Three TikTok accounts, YouTube, Instagram and X. Meta cards, evolutions and FC26 content daily.",
  },
};

export default function SocialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
