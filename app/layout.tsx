import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "MindMate",
  description: "Anonymous peer mental health support for university students in Bangladesh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ "--font-display": "Bricolage Grotesque, Arial, sans-serif", "--font-body": "DM Sans, Arial, sans-serif" } as React.CSSProperties}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
