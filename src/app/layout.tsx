import type { Metadata } from "next";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import "./globals.css";


export const metadata: Metadata = {
  title: "김민재 — Frontend Engineer",
  description: "AI 도구로 더 빠르게 만드는 React/Next.js 프론트엔드 엔지니어 · 5년차",
  openGraph: {
    title: "김민재 — Frontend Engineer",
    description: "AI 도구로 더 빠르게 만드는 React/Next.js 프론트엔드 엔지니어 · 5년차",
    url: "https://minjae.dev",
    siteName: "김민재 이력서",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "김민재 — Frontend Engineer",
    description: "AI 도구로 더 빠르게 만드는 React/Next.js 프론트엔드 엔지니어",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <NoiseOverlay />
        <SmoothScroll>
          {children}
          <CommandPalette />
        </SmoothScroll>
      </body>
    </html>
  );
}
