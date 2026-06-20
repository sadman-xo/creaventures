"use client";

import { create } from "zustand";
import { mockMoodHistory } from "@/data/moodHistory";

export type MoodId = "calm" | "happy" | "energized" | "anxious" | "sad" | "angry" | "numb" | "confused";

type MoodEntry = {
  date: string;
  mood: MoodId;
  triggers: string[];
  score: number;
};

type MoodState = {
  entries: MoodEntry[];
  addMood: (entry: MoodEntry) => void;
};

export const useMoodStore = create<MoodState>((set) => ({
  entries: mockMoodHistory,
  addMood: (entry) => set((state) => ({ entries: [...state.entries.slice(-6), entry] })),
}));
