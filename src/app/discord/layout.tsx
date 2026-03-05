import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord | FluxFut",
  description: "Join the FluxFut Discord — free community access or premium for £9.99/mo. Custom tactics, live trading alerts, coaching and weekly live sessions.",
  openGraph: {
    title: "FluxFut Discord — Join the Community",
    description: "Free access or Premium for £9.99/mo. Custom tactics packs, live trading alerts, 1-on-1 coaching and more.",
    url: "https://fluxfut.com/discord",
  },
  twitter: {
    card: "summary_large_image",
    title: "FluxFut Discord — Join the Community",
    description: "Free or Premium FC26 Discord. Custom tactics, live alerts, coaching and weekly live sessions.",
  },
};

export default function DiscordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
