import Link from "next/link";
import { ArrowRight, MessageCircle, Moon, ShieldCheck, Sparkles } from "lucide-react";
import { AmbientOrb } from "@/components/layout/AmbientOrb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";

const testimonials = [
  ["DU", "I came for five minutes and stayed because someone actually understood."],
  ["NSU", "No forms. No real name. Just a quiet place to say the true thing."],
  ["BRAC", "The mood tracker made my week visible without making me feel judged."],
];

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-8">
      <AmbientOrb position="top-right" size="lg" />
      <section className="relative z-10 mx-auto grid max-w-6xl gap-14 py-8 md:py-14">
        <div className="max-w-3xl">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-4 py-2 text-sm font-bold text-[#B9BEDD]">
            <Moon size={16} /> MindMate
          </div>
          <h1 className="text-balance font-display text-5xl font-black leading-[0.98] tracking-normal text-white md:text-7xl">
            You don&apos;t have to <span className="bg-gradient-to-r from-lavender to-sage bg-clip-text text-transparent">explain</span> yourself to get support.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#A8ADD0]">Anonymous. Free. For students. A warm late-night room for peer support, mood tracking, and therapist discovery in Bangladesh.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/onboarding"><Button className="w-full sm:w-auto">Get started anonymously <ArrowRight size={18} /></Button></Link>
            <Link href="/home"><Button variant="secondary" className="w-full sm:w-auto">Already have a code?</Button></Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            [ShieldCheck, "Pick a name", "Generate an identity that never asks for your real one."],
            [MessageCircle, "Match a peer", "Find trained student listeners for the pressure you are carrying."],
            [Sparkles, "Talk", "Log moods, book help, or just breathe for a minute."],
          ].map(([Icon, title, copy], index) => (
            <Card key={String(title)} className="relative overflow-hidden">
              <div className="absolute -right-2 -top-8 font-display text-8xl font-black text-white/[0.035]">0{index + 1}</div>
              <Icon className="mb-5 text-lavender" size={28} />
              <h2 className="font-display text-2xl font-black">{String(title)}</h2>
              <p className="mt-2 text-sm leading-6 text-[#A8ADD0]">{String(copy)}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-8">
          <div className="flex flex-wrap items-center gap-5 text-sm font-black uppercase tracking-[0.18em] text-[#666B91]">
            <span>DU</span><span>BUET</span><span>NSU</span><span>BRAC</span><span>IUT</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map(([uni, quote], index) => (
              <Card key={uni}>
                <div className="mb-4 flex items-center gap-3">
                  <Avatar emoji={["🌙", "🌿", "💫"][index]} color={["#9B8BFF", "#5EC4A1", "#F5A623"][index]} />
                  <div>
                    <div className="font-bold">Anonymous student</div>
                    <div className="text-sm text-[#8B90B8]">{uni}</div>
                  </div>
                </div>
                <p className="leading-7 text-[#D6D9F2]">&quot;{quote}&quot;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
