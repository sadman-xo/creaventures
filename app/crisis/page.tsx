import Link from "next/link";
import { HeartHandshake, Phone, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function CrisisPage() {
  return (
    <div className="px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-4xl gap-6">
        <div className="rounded-3xl border border-rose/30 bg-rose/[0.08] p-6">
          <ShieldAlert className="text-rose" size={34} />
          <h1 className="mt-4 font-display text-4xl font-black md:text-5xl">You are not alone.</h1>
          <p className="mt-3 max-w-2xl text-[#E6B8C5]">If you&apos;re having thoughts of hurting yourself, please reach out now.</p>
        </div>
        {[
          ["Kaan Pete Roi (Bangla)", "01779-554391", "Available: 5PM-11PM daily"],
          ["Kirori (NIMH helpline)", "16789", "24/7 Government line"],
        ].map(([name, phone, time]) => (
          <Card key={name}>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-2xl font-black">{name}</h2>
                <p className="mt-1 text-2xl font-black text-white">{phone}</p>
                <p className="text-[#A8ADD0]">{time}</p>
              </div>
              <a href={`tel:${phone}`}><Button variant="danger"><Phone size={18} /> Call now</Button></a>
            </div>
          </Card>
        ))}
        <Card>
          <h2 className="font-display text-2xl font-black">Right now</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <Link href="/resources/breathing-room"><Button variant="secondary" className="w-full">Deep breathing</Button></Link>
            <Link href="/resources"><Button variant="secondary" className="w-full">5-4-3-2-1 grounding</Button></Link>
            <Link href="/chat"><Button variant="secondary" className="w-full"><HeartHandshake size={18} /> Talk to a peer</Button></Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
