export type Identity = {
  username: string;
  emoji: string;
  color: string;
};

const ADJECTIVES = ["Silver", "Indigo", "Coral", "Golden", "Misty", "Lunar", "Crystal", "Ember", "Cobalt", "Jade"];
const NOUNS = ["Moon", "Leaf", "Wave", "Dawn", "Star", "River", "Peak", "Flame", "Cloud", "Pine"];
const EMOJIS = ["🌙", "⭐", "🌊", "🦋", "🌸", "🔥", "🌿", "💫"];
const COLORS = ["#9B8BFF", "#5EC4A1", "#F5A623", "#FF7B9C", "#6B8EAD", "#C484FF"];

function colorFromSeed(seed: string) {
  return COLORS[Array.from(seed).reduce((sum, char) => sum + char.charCodeAt(0), 0) % COLORS.length];
}

export function generateAnonymousIdentity(): Identity {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const num = Math.floor(1000 + Math.random() * 9000);
  const seed = `${adj}${noun}`;
  return {
    username: `${seed}#${num}`,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    color: colorFromSeed(seed),
  };
}

export const defaultIdentity: Identity = {
  username: "LunarMoon#4821",
  emoji: "🌙",
  color: "#9B8BFF",
};
