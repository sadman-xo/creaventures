import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  children: ReactNode;
};

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-amber text-[#15110A] shadow-amber hover:-translate-y-0.5 hover:scale-[1.01]",
        variant === "secondary" && "border border-border bg-surface-2 text-white hover:border-[#363B5E]",
        variant === "ghost" && "text-[#A8ADD0] hover:bg-white/5 hover:text-white",
        variant === "danger" && "bg-rose/15 text-rose ring-1 ring-rose/35 hover:bg-rose/20",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
