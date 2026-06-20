import { cn } from "@/lib/utils";

export function ChatBubble({ mine, children }: { mine?: boolean; children: React.ReactNode }) {
  return (
    <div className={cn("flex", mine ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[76%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          mine ? "rounded-br-md bg-lavender text-midnight" : "rounded-bl-md border border-border bg-surface-2 text-[#EEF0FF]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
