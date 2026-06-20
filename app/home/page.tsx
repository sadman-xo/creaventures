"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle, ShieldAlert } from "lucide-react";
import { AmbientOrb } from "@/components/layout/AmbientOrb";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MoodChart } from "@/components/mood/MoodChart";
import { useUserStore } from "@/store/userStore";
import { useMoodStore } from "@/store/moodStore";

export default function HomePage() {
  const { identity } = useUserStore();
  const { entries } = useMoodStore();
  const hour = new Date().getHours();
  const greeting = hour >= 23 || hour < 4 ? "It's late. You showed up anyway. That matters." : "You showed up today. That matters.";

  return (
    <div className="relative overflow-hidden px-5 py-6 md:px-8">
      <AmbientOrb position="top-right" size="md" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-6">
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <Badge>Private dashboard</Badge>
            <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">{greeting}</h1>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/75 p-3">
            <Avatar emoji={identity.emoji} color={identity.color} />
            <div>
              <div className="font-bold">{identity.username}</div>
              <div className="text-sm text-[#8B90B8]">Anonymous mode always on</div>
            </div>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Card>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-black">Mood this week</h2>
                <p className="text-sm text-[#8B90B8]">Just for you. Private. Honest.</p>
              </div>
              <Link href="/mood"><Button variant="secondary">Check in</Button></Link>
            </div>
            <MoodChart data={entries} />
          </Card>
          <Card className="grid content-between gap-6 bg-lavender/[0.06]">
            <div>
              <Badge>Matched now</Badge>
              <h2 className="mt-4 font-display text-3xl font-black">A peer listener is free.</h2>
              <p className="mt-3 text-[#A8ADD0]">JadeRiver#2048 has helped with exam anxiety and family pressure this week.</p>
            </div>
            <Link href="/chat/demo-session"><Button className="w-full"><MessageCircle size={18} /> Start anonymous chat</Button></Link>
          </Card>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <Card><Calendar className="mb-4 text-sage" /><h3 className="font-display text-xl font-black">Next session</h3><p className="mt-2 text-sm text-[#A8ADD0]">Dr. Farzana, Jun 21, 7:00 PM</p></Card>
          <Card><ShieldAlert className="mb-4 text-rose" /><h3 className="font-display text-xl font-black">Crisis support</h3><p className="mt-2 text-sm text-[#A8ADD0]">One tap away from every screen.</p></Card>
          <Card><ArrowRight className="mb-4 text-amber" /><h3 className="font-display text-xl font-black">আজ একটু ধীরে</h3><p className="mt-2 text-sm text-[#A8ADD0]">A small Bangla reminder for a hard day.</p></Card>
        </div>
      </div>
    </div>
  );
}
