"use client";

import { Send } from "lucide-react";
import { AmbientOrb } from "@/components/layout/AmbientOrb";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ChatBubble } from "@/components/chat/ChatBubble";
import { TypingIndicator } from "@/components/chat/TypingIndicator";

export default function ChatSessionPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-5 py-6 md:px-8">
      <AmbientOrb position="bottom-left" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <Card className="grid min-h-[calc(100vh-64px)] grid-rows-[auto_1fr_auto] p-0">
          <header className="flex items-center gap-3 border-b border-border p-4">
            <Avatar emoji="🌿" color="#5EC4A1" />
            <div>
              <h1 className="font-display text-xl font-black">JadeRiver#2048</h1>
              <p className="text-sm text-sage">Online now · trained peer supporter</p>
            </div>
          </header>
          <div className="grid content-end gap-3 p-4">
            <ChatBubble>Hey. I&apos;m here with you. What feels heaviest right now?</ChatBubble>
            <ChatBubble mine>I have exams and I can&apos;t start. Everything feels loud.</ChatBubble>
            <ChatBubble>That sounds exhausting. We can make it smaller. What is one chapter, not the whole exam?</ChatBubble>
            <ChatBubble mine>Maybe statistics. I keep avoiding it.</ChatBubble>
            <TypingIndicator />
          </div>
          <div className="border-t border-border p-4">
            <div className="flex gap-3 rounded-full border border-border bg-midnight p-2">
              <input className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#666B91]" placeholder="Type something... (anonymous)" />
              <Button className="size-11 p-0" aria-label="Send"><Send size={18} /></Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
