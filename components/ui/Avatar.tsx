import { cn } from "@/lib/utils";

export function Avatar({ emoji, initials, color, className }: { emoji?: string; initials?: string; color: string; className?: string }) {
  return (
    <div
      className={cn("grid size-12 shrink-0 place-items-center rounded-full text-xl font-black text-[#0D0F1A] shadow-glow", className)}
      style={{ background: `linear-gradient(135deg, ${color}, #EEF0FF)` }}
    >
      {emoji ?? initials}
    </div>
  );
}
