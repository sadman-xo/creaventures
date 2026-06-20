import Link from "next/link";
import { Star } from "lucide-react";
import { AmbientOrb } from "@/components/layout/AmbientOrb";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { therapists } from "@/data/therapists";

export default function TherapistsPage() {
  return (
    <div className="relative overflow-hidden px-5 py-6 md:px-8">
      <AmbientOrb position="top-left" color="amber" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-6">
        <div>
          <h1 className="font-display text-4xl font-black md:text-5xl">Therapists who understand student life.</h1>
          <p className="mt-3 text-[#A8ADD0]">Affordable sessions, Bangla and English, demo-ready bKash booking.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {therapists.map((therapist) => (
            <Card key={therapist.id}>
              <div className="flex items-start justify-between gap-3">
                <Avatar initials={therapist.initials} color={therapist.avatarColor} />
                <Badge><Star size={13} className="mr-1 fill-amber text-amber" /> {therapist.rating}</Badge>
              </div>
              <h2 className="mt-4 font-display text-2xl font-black">{therapist.name}</h2>
              <p className="text-sm text-[#8B90B8]">{therapist.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">{therapist.specializations.map((item) => <Badge key={item}>{item}</Badge>)}</div>
              <p className="mt-4 text-sm leading-6 text-[#A8ADD0]">{therapist.bio}</p>
              <Link href={`/therapists/${therapist.id}`}><Button className="mt-5 w-full">View profile · ৳{therapist.sessionFee}</Button></Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
