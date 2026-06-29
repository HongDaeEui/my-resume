import type { Metadata } from "next";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import "./globals.css";


export const metadata: Metadata = {
  title: "홍대의 — Frontend Engineer",
  description: "데이터 시각화 · B2G 공공 도메인 · React/Next.js 프론트엔드 엔지니어",
  openGraph: {
    title: "홍대의 — Frontend Engineer",
    description: "데이터 시각화 · B2G 공공 도메인 · React/Next.js 프론트엔드 엔지니어",
    siteName: "홍대의 이력서",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "홍대의 — Frontend Engineer",
    description: "데이터 시각화 · B2G 공공 도메인 · React/Next.js 프론트엔드 엔지니어",
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
