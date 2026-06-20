"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertTriangle, BookOpen, CalendarCheck, HeartHandshake, Home, MessageCircle, Moon, SmilePlus, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/chat", label: "Chat", icon: MessageCircle },
  { href: "/mood", label: "Mood", icon: SmilePlus },
  { href: "/therapists", label: "Therapy", icon: HeartHandshake },
  { href: "/sessions", label: "Sessions", icon: CalendarCheck },
  { href: "/resources", label: "Resources", icon: BookOpen },
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/crisis", label: "Crisis", icon: AlertTriangle, crisis: true },
];

const mobileItems = navItems.filter((item) => ["Home", "Chat", "Mood", "Therapy", "Profile"].includes(item.label));

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/" || pathname === "/onboarding";

  if (isLanding) return <>{children}</>;

  return (
    <div className="relative min-h-screen">
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-[232px] border-r border-border bg-[#0D0F1A]/88 px-4 py-5 backdrop-blur-xl lg:block">
        <Link href="/home" className="mb-8 flex items-center gap-3 px-2 font-display text-2xl font-black">
          <span className="grid size-10 place-items-center rounded-full bg-lavender text-lg text-midnight"><Moon size={19} /></span>
          MindMate
        </Link>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-[#A8ADD0] transition hover:bg-white/[0.05] hover:text-white",
                  active && "bg-lavender/12 text-white ring-1 ring-lavender/25",
                  item.crisis && "mt-5 text-rose",
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="relative z-10 min-h-screen pb-24 lg:ml-[232px] lg:pb-0">{children}</main>
      <nav className="fixed bottom-0 left-0 z-30 grid w-full grid-cols-5 border-t border-border bg-surface/90 px-2 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:hidden">
        {mobileItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className={cn("grid place-items-center gap-1 rounded-xl py-2 text-[11px] font-bold text-[#8B90B8]", active && "text-white")}>
              <span className={cn("h-1 w-1 rounded-full", active ? "bg-lavender" : "bg-transparent")} />
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
