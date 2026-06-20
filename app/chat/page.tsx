import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { AmbientOrb } from "@/components/layout/AmbientOrb";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { peers } from "@/data/peers";

export default function ChatLobbyPage() {
  return (
    <div className="relative overflow-hidden px-5 py-6 md:px-8">
      <AmbientOrb position="top-right" />
      <div className="relative z-10 mx-auto grid max-w-5xl gap-6">
        <div>
          <h1 className="font-display text-4xl font-black md:text-5xl">Peer support lobby</h1>
          <p className="mt-3 text-[#A8ADD0]">Choose a trained student listener. Your real name never enters the room.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {peers.map((peer) => (
            <Card key={peer.id}>
              <Avatar emoji={peer.emoji} color="#9B8BFF" />
              <h2 className="mt-4 font-display text-2xl font-black">{peer.name}</h2>
              <p className="mt-2 text-sm text-[#A8ADD0]">Focus: {peer.focus}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-sage"><Clock size={16} /> Wait {peer.wait}</div>
              <Link href="/chat/demo-session"><Button className="mt-5 w-full">Connect <ArrowRight size={18} /></Button></Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
