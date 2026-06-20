"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { AmbientOrb } from "@/components/layout/AmbientOrb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MoodChart } from "@/components/mood/MoodChart";
import { MoodWheel, moods } from "@/components/mood/MoodWheel";
import { useMoodStore } from "@/store/moodStore";

export default function MoodPage() {
  const { entries, addMood } = useMoodStore();
  const [selected, setSelected] = useState(moods[0]);
  const [logged, setLogged] = useState(false);

  return (
    <div className="relative overflow-hidden px-5 py-6 md:px-8">
      <AmbientOrb position="center" color="sage" size="md" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h1 className="font-display text-4xl font-black">Just for you. Private. Honest.</h1>
          <p className="mt-3 text-[#A8ADD0]">Tap the wheel. No one else sees this.</p>
          <div className="mt-6"><MoodWheel onSelect={setSelected} /></div>
          <Button
            className="mt-6 w-full"
            onClick={() => {
              addMood({ date: "2026-06-20", mood: selected.id, score: selected.score, triggers: ["Today"], });
              setLogged(true);
            }}
          >
            <CheckCircle2 size={18} /> Log {selected.label}
          </Button>
          {logged && <p className="mt-4 rounded-xl bg-sage/10 p-3 text-sm font-bold text-sage">Logged. You noticed how you feel today. That&apos;s the whole point.</p>}
        </Card>
        <div className="grid gap-5">
          <Card>
            <h2 className="font-display text-2xl font-black">Seven day history</h2>
            <MoodChart data={entries} />
          </Card>
          <Card>
            <h2 className="font-display text-2xl font-black">Common triggers</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Exams", "Family", "Loneliness", "Health", "Sleep", "Other"].map((tag) => <span key={tag} className="rounded-full border border-border px-4 py-2 text-sm font-bold text-[#B9BEDD]">{tag}</span>)}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
