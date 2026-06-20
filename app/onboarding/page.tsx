"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, RotateCw } from "lucide-react";
import { motion } from "framer-motion";
import { AmbientOrb } from "@/components/layout/AmbientOrb";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useUserStore } from "@/store/userStore";
import { cn } from "@/lib/utils";

const needs = ["Overwhelmed", "Anxious", "Lonely", "Numb", "Burned out", "Just exploring"];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const { identity, shuffleIdentity, supportNeeds, toggleNeed } = useUserStore();

  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-8">
      <AmbientOrb position="top-left" size="md" />
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-64px)] max-w-2xl place-items-center">
        <Card className="w-full p-6 md:p-8">
          <div className="mb-8">
            <div className="mb-2 text-sm font-bold text-[#A8ADD0]">Step {step} of 3</div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div className="h-full rounded-full bg-lavender" animate={{ width: `${(step / 3) * 100}%` }} />
            </div>
          </div>

          {step === 1 && (
            <div className="grid gap-6">
              <h1 className="font-display text-4xl font-black leading-tight">Your identity here is totally anonymous.</h1>
              <div className="rounded-3xl border border-lavender/35 bg-lavender/[0.06] p-6">
                <div className="flex items-center gap-4">
                  <Avatar emoji={identity.emoji} color={identity.color} className="size-16 text-3xl" />
                  <div className="font-display text-3xl font-black">{identity.username}</div>
                </div>
                <Button variant="secondary" className="mt-5" onClick={shuffleIdentity}><RotateCw size={17} /> Shuffle</Button>
              </div>
              <p className="text-[#A8ADD0]">This is the only name anyone will see. Not your real name. Ever.</p>
              <Button onClick={() => setStep(2)}>I like this name <ArrowRight size={18} /></Button>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-6">
              <h1 className="font-display text-4xl font-black leading-tight">So we can match you with the right kind of support.</h1>
              <div className="grid grid-cols-2 gap-3">
                {needs.map((need) => (
                  <button key={need} onClick={() => toggleNeed(need)} className={cn("rounded-full border border-border px-4 py-3 text-sm font-bold transition", supportNeeds.includes(need) && "border-lavender bg-lavender/10 text-white")}>
                    {need}
                  </button>
                ))}
              </div>
              <p className="text-sm text-[#8B90B8]">Select all that apply.</p>
              <Button onClick={() => setStep(3)}>Continue <ArrowRight size={18} /></Button>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-6 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-sage text-midnight"><Check size={30} /></div>
              <h1 className="font-display text-4xl font-black leading-tight">You&apos;re ready. No real name, no pressure.</h1>
              <p className="text-[#A8ADD0]">We matched your first peer lane and prepared your private mood space.</p>
              <Link href="/home"><Button className="w-full">Enter MindMate <ArrowRight size={18} /></Button></Link>
            </div>
          )}
        </Card>
      </section>
    </main>
  );
}
