import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { AmbientOrb } from "@/components/layout/AmbientOrb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { resources } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <div className="relative overflow-hidden px-5 py-6 md:px-8">
      <AmbientOrb position="top-right" color="sage" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-6">
        <div>
          <h1 className="font-display text-4xl font-black md:text-5xl">Small tools for loud moments.</h1>
          <p className="mt-3 text-[#A8ADD0]">CBT exercises, grounding, and breathing flows designed for student days.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <Card key={resource.slug}>
              <BookOpen className="text-lavender" />
              <div className="mt-4 flex gap-2"><Badge>{resource.type}</Badge><Badge>{resource.minutes} min</Badge></div>
              <h2 className="mt-4 font-display text-3xl font-black">{resource.title}</h2>
              <p className="mt-2 text-[#A8ADD0]">For {resource.tag.toLowerCase()} days, with no judgment and no streak pressure.</p>
              <Link href={resource.slug === "breathing-room" ? "/resources/breathing-room" : "/resources/breathing-room"}><Button variant="secondary" className="mt-5">Open <ArrowRight size={18} /></Button></Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
