"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function BreathingRoomPage() {
  const [done, setDone] = useState(false);
  return (
    <div className="grid min-h-screen place-items-center px-5 py-6 md:px-8">
      <Card className="w-full max-w-2xl text-center">
        <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#A8ADD0]"><ArrowLeft size={16} /> Back</Link>
        <div className="mx-auto grid size-48 place-items-center rounded-full border border-lavender/30 bg-lavender/10" style={{ animation: "breathe 4s ease-in-out infinite" }}>
          <div>
            <div className="font-display text-3xl font-black">Breathe</div>
            <div className="mt-1 text-sm text-[#A8ADD0]">in · hold · out</div>
          </div>
        </div>
        <h1 className="mt-8 font-display text-4xl font-black">Breathing room</h1>
        <p className="mx-auto mt-3 max-w-md text-[#A8ADD0]">Follow the circle for four rounds. Let your body arrive before your thoughts do.</p>
        <Button className="mt-8" onClick={() => setDone(true)}><CheckCircle2 size={18} /> Mark complete</Button>
        {done && <p className="mt-4 font-bold text-sage">Saved to your activity history.</p>}
      </Card>
    </div>
  );
}
