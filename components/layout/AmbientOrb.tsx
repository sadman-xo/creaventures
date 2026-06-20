type AmbientOrbProps = {
  color?: "lavender" | "amber" | "rose" | "sage";
  position?: "top-right" | "top-left" | "center" | "bottom-left";
  size?: "sm" | "md" | "lg";
};

const colors = {
  lavender: "rgba(155,139,255,0.75)",
  amber: "rgba(245,166,35,0.68)",
  rose: "rgba(255,123,156,0.68)",
  sage: "rgba(94,196,161,0.68)",
};

const sizes = { sm: 320, md: 520, lg: 720 };
const positions = {
  "top-right": { right: -180, top: -180 },
  "top-left": { left: -180, top: -160 },
  center: { left: "45%", top: "22%" },
  "bottom-left": { left: -220, bottom: -220 },
};

export function AmbientOrb({ color = "lavender", position = "top-right", size = "md" }: AmbientOrbProps) {
  return (
    <div
      className="ambient-orb"
      style={{
        width: sizes[size],
        height: sizes[size],
        background: `radial-gradient(circle, ${colors[color]}, transparent 70%)`,
        ...positions[position],
      } as React.CSSProperties}
    />
  );
}
