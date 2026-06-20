import Link from "next/link";
import { CalendarCheck, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function SessionsPage() {
  return (
    <div className="px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-4xl gap-6">
        <h1 className="font-display text-4xl font-black md:text-5xl">My booked sessions</h1>
        <Card className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex gap-4">
            <div className="grid size-12 place-items-center rounded-full bg-sage/15 text-sage"><CalendarCheck /></div>
            <div>
              <h2 className="font-display text-2xl font-black">Dr. Farzana Islam</h2>
              <p className="text-[#A8ADD0]">Jun 21, 7:00 PM · 50 minutes · Paid via bKash</p>
            </div>
          </div>
          <Button variant="secondary"><Video size={18} /> Join room</Button>
        </Card>
        <Link href="/therapists"><Button>Book another session</Button></Link>
      </div>
    </div>
  );
}
