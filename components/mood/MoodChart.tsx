"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function MoodChart({ data }: { data: Array<{ date: string; score: number; mood: string }> }) {
  const chartData = data.map((entry) => ({
    ...entry,
    day: new Date(`${entry.date}T00:00:00`).toLocaleDateString("en", { weekday: "short" }),
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <AreaChart data={chartData} margin={{ left: -18, right: 8, top: 12, bottom: 0 }}>
          <defs>
            <linearGradient id="moodFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#9B8BFF" stopOpacity={0.55} />
              <stop offset="100%" stopColor="#9B8BFF" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#8B90B8", fontSize: 12 }} />
          <YAxis domain={[0, 10]} axisLine={false} tickLine={false} tick={{ fill: "#8B90B8", fontSize: 12 }} />
          <Tooltip contentStyle={{ background: "#1C1F35", border: "1px solid #363B5E", borderRadius: 12, color: "#EEF0FF" }} />
          <Area type="monotone" dataKey="score" stroke="#9B8BFF" strokeWidth={3} fill="url(#moodFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
