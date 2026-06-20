import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mm-panel rounded-2xl p-5 transition hover:border-[#363B5E]", className)} {...props} />;
}
