"use client";

import { create } from "zustand";
import { defaultIdentity, generateAnonymousIdentity, type Identity } from "@/lib/anonymousId";

type UserState = {
  identity: Identity;
  supportNeeds: string[];
  language: "English" | "বাংলা";
  setIdentity: (identity: Identity) => void;
  shuffleIdentity: () => void;
  toggleNeed: (need: string) => void;
  setLanguage: (language: "English" | "বাংলা") => void;
};

export const useUserStore = create<UserState>((set) => ({
  identity: defaultIdentity,
  supportNeeds: ["Anxious"],
  language: "English",
  setIdentity: (identity) => set({ identity }),
  shuffleIdentity: () => set({ identity: generateAnonymousIdentity() }),
  toggleNeed: (need) =>
    set((state) => ({
      supportNeeds: state.supportNeeds.includes(need)
        ? state.supportNeeds.filter((item) => item !== need)
        : [...state.supportNeeds, need],
    })),
  setLanguage: (language) => set({ language }),
}));
