export const mockMoodHistory: Array<{ date: string; mood: "calm" | "happy" | "energized" | "anxious" | "sad" | "angry" | "numb" | "confused"; triggers: string[]; score: number }> = [
  { date: "2026-06-14", mood: "anxious", triggers: ["Exams", "Family"], score: 3 },
  { date: "2026-06-15", mood: "sad", triggers: ["Loneliness"], score: 2 },
  { date: "2026-06-16", mood: "calm", triggers: [], score: 7 },
  { date: "2026-06-17", mood: "numb", triggers: ["Other"], score: 4 },
  { date: "2026-06-18", mood: "anxious", triggers: ["Exams"], score: 3 },
  { date: "2026-06-19", mood: "happy", triggers: [], score: 8 },
  { date: "2026-06-20", mood: "energized", triggers: [], score: 9 },
];
