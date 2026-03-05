"use client";

import { useEffect, useState } from "react";

export default function DiscordCounter({ serverId }: { serverId: string }) {
  const [members, setMembers] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const res = await fetch(
          `https://discord.com/api/guilds/${serverId}/widget.json`
        );

        const data = await res.json();

        setMembers(data.presence_count);
      } catch (err) {
        console.error("Discord fetch error", err);
      }
    }

    fetchMembers();
  }, [serverId]);

  if (!members) return null;

  return (
    <p className="text-white/60 text-lg mt-4">
      {members.toLocaleString()} players online in FluxFut
    </p>
  );
}