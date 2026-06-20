"use client";

import { Download, Trash2 } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useUserStore } from "@/store/userStore";

export default function ProfilePage() {
  const { identity, language, setLanguage } = useUserStore();
  return (
    <div className="px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-4xl gap-6">
        <Card className="text-center">
          <Avatar emoji={identity.emoji} color={identity.color} className="mx-auto size-24 text-5xl" />
          <h1 className="mt-4 font-display text-4xl font-black">{identity.username}</h1>
          <p className="text-[#8B90B8]">Member since Jun 2026</p>
        </Card>
        <div className="grid gap-4 md:grid-cols-4">
          {["7 days active", "4 mood logs", "2 chats", "1 session booked"].map((stat) => <Card key={stat} className="text-center font-bold">{stat}</Card>)}
        </div>
        <Card>
          <h2 className="font-display text-2xl font-black">Settings</h2>
          <div className="mt-5 grid gap-4">
            <div className="flex items-center justify-between border-b border-border pb-4"><span>Notifications</span><span className="rounded-full bg-sage/15 px-3 py-1 text-sm font-bold text-sage">On</span></div>
            <div className="flex items-center justify-between border-b border-border pb-4"><span>Anonymous mode</span><span className="rounded-full bg-lavender/15 px-3 py-1 text-sm font-bold text-lavender">Always on</span></div>
            <div className="flex items-center justify-between gap-3">
              <span>Language</span>
              <div className="flex rounded-full border border-border p-1">
                {(["English", "বাংলা"] as const).map((option) => <button key={option} onClick={() => setLanguage(option)} className={`rounded-full px-4 py-2 text-sm font-bold ${language === option ? "bg-lavender text-midnight" : "text-[#A8ADD0]"}`}>{option}</button>)}
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <h2 className="font-display text-2xl font-black">Your data</h2>
          <p className="mt-2 text-[#A8ADD0]">We don&apos;t know who you are. Your mood data is stored only on this device.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary"><Download size={18} /> Export my data</Button>
            <Button variant="danger"><Trash2 size={18} /> Delete everything</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
