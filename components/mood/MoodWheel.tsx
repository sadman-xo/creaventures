"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MoodId } from "@/store/moodStore";

export const moods: Array<{ id: MoodId; label: string; emoji: string; color: string; score: number }> = [
  { id: "calm", label: "Calm", emoji: "😌", color: "#5EC4A1", score: 7 },
  { id: "happy", label: "Happy", emoji: "😊", color: "#F5A623", score: 8 },
  { id: "energized", label: "Energized", emoji: "⚡", color: "#FF8A5B", score: 9 },
  { id: "anxious", label: "Anxious", emoji: "😰", color: "#FF7B9C", score: 3 },
  { id: "sad", label: "Sad", emoji: "😢", color: "#6B8EAD", score: 2 },
  { id: "angry", label: "Angry", emoji: "😤", color: "#C44B4B", score: 2 },
  { id: "numb", label: "Numb", emoji: "😐", color: "#8B90B8", score: 4 },
  { id: "confused", label: "Confused", emoji: "😕", color: "#9B8BFF", score: 5 },
];

export function MoodWheel({ onSelect }: { onSelect?: (mood: (typeof moods)[number]) => void }) {
  const [selected, setSelected] = useState(moods[0]);
  const radius = 120;
  const center = 150;

  function point(angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return [center + radius * Math.cos(rad), center + radius * Math.sin(rad)];
  }

  return (
    <div className="grid gap-5">
      <div className="relative mx-auto size-[300px]">
        <svg viewBox="0 0 300 300" className="size-full overflow-visible">
          {moods.map((mood, index) => {
            const start = index * 45;
            const end = start + 45;
            const [x1, y1] = point(start);
            const [x2, y2] = point(end);
            const active = selected.id === mood.id;
            return (
              <motion.path
                key={mood.id}
                d={`M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                fill={mood.color}
                initial={false}
                animate={{ opacity: active ? 0.94 : 0.2, scale: active ? 1.045 : 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="cursor-pointer origin-center stroke-[#0D0F1A] stroke-[3]"
                onClick={() => {
                  setSelected(mood);
                  onSelect?.(mood);
                }}
              />
            );
          })}
          <circle cx="150" cy="150" r="74" fill="#141626" stroke="#262A45" strokeWidth="2" />
        </svg>
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
          <motion.div key={selected.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-4xl">{selected.emoji}</div>
            <div className="mt-2 font-display text-2xl font-black">{selected.label}</div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#8B90B8]">tap to change</div>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => {
              setSelected(mood);
              onSelect?.(mood);
            }}
            className={cn(
              "rounded-xl border border-border bg-white/[0.03] px-2 py-2 text-xs font-bold text-[#B9BEDD] transition",
              selected.id === mood.id && "border-lavender bg-lavender/10 text-white",
            )}
          >
            {mood.emoji} {mood.label}
          </button>
        ))}
      </div>
    </div>
  );
}
