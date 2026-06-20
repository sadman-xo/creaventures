"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { therapists } from "@/data/therapists";
import { cn } from "@/lib/utils";

export default function TherapistProfilePage() {
  const therapist = therapists[0];
  const [slot, setSlot] = useState("19:00");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <Avatar initials={therapist.initials} color={therapist.avatarColor} className="size-20 text-2xl" />
          <h1 className="mt-5 font-display text-4xl font-black">{therapist.name}</h1>
          <p className="text-[#8B90B8]">{therapist.title}</p>
          <p className="mt-5 leading-7 text-[#A8ADD0]">{therapist.bio}</p>
          <div className="mt-5 flex flex-wrap gap-2">{therapist.specializations.map((item) => <Badge key={item}>{item}</Badge>)}</div>
        </Card>
        <Card>
          <h2 className="font-display text-3xl font-black">Book a 50 minute session</h2>
          <p className="mt-2 text-[#A8ADD0]">Pay ৳{therapist.sessionFee} via bKash after choosing a time.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {therapist.availableSlots.map((time) => (
              <button key={time} onClick={() => setSlot(time)} className={cn("rounded-xl border border-border px-4 py-4 font-bold transition", slot === time && "border-amber bg-amber/10 text-amber")}>{time}</button>
            ))}
          </div>
          <Button className="mt-6 w-full" onClick={() => setConfirmed(true)}>Pay ৳{therapist.sessionFee} via bKash</Button>
          {confirmed && (
            <div className="mt-5 rounded-2xl border border-sage/35 bg-sage/10 p-4 text-sage">
              <div className="flex items-center gap-2 font-bold"><CheckCircle2 size={20} /> Your session is confirmed.</div>
              <p className="mt-2 text-sm text-[#BEEBD9]">Showing up for yourself is not a small thing. {slot}, Jun 21.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
