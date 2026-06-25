"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FileText, Mail, Moon, Sun, Monitor, Briefcase, Code, User, Copy, Download } from "lucide-react";
import { profile } from "@/data/profile";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[10vh]" onClick={() => setOpen(false)}>
      <Command
        className="w-[90vw] max-w-[540px] bg-[var(--color-bg-card)] border border-[var(--color-border-strong)] rounded-xl shadow-2xl overflow-hidden text-[var(--color-text-primary)] font-sans"
        onClick={(e) => e.stopPropagation()}
        label="Global Command Menu"
        loop
      >
        <Command.Input 
          autoFocus
          placeholder="검색하거나 명령을 실행하세요..." 
          className="w-full text-[16px] px-5 py-4 border-b border-[var(--color-border)] bg-transparent outline-none placeholder:text-[var(--color-text-faint)]"
        />
        <Command.List className="max-h-[300px] overflow-y-auto p-2 overscroll-contain">
          <Command.Empty className="py-6 text-center text-[14px] text-[var(--color-text-muted)]">검색 결과가 없습니다.</Command.Empty>

          <Command.Group heading="네비게이션" className="text-[11px] font-semibold text-[var(--color-text-faint)] px-2 py-1.5 uppercase tracking-wider [&>[cmdk-group-heading]]:mb-1.5 [&>[cmdk-group-heading]]:px-2">
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => router.push("/"))}>
              <User size={16} className="mr-2" /> 메인 (Home)
            </Command.Item>
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => router.push("/#experience"))}>
              <Briefcase size={16} className="mr-2" /> 경력 (Experience)
            </Command.Item>
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => router.push("/#work-projects"))}>
              <Code size={16} className="mr-2" /> 프로젝트 (Projects)
            </Command.Item>
          </Command.Group>

          <Command.Group heading="테마 변경" className="text-[11px] font-semibold text-[var(--color-text-faint)] px-2 py-1.5 uppercase tracking-wider [&>[cmdk-group-heading]]:mb-1.5 [&>[cmdk-group-heading]]:px-2 mt-2">
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun size={16} className="mr-2" /> 라이트 모드
            </Command.Item>
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon size={16} className="mr-2" /> 다크 모드
            </Command.Item>
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => setTheme("system"))}>
              <Monitor size={16} className="mr-2" /> 시스템 설정
            </Command.Item>
          </Command.Group>

          <Command.Group heading="액션" className="text-[11px] font-semibold text-[var(--color-text-faint)] px-2 py-1.5 uppercase tracking-wider [&>[cmdk-group-heading]]:mb-1.5 [&>[cmdk-group-heading]]:px-2 mt-2">
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => window.open(profile.resumeUrl, "_blank"))}>
              <Download size={16} className="mr-2" /> PDF 이력서 다운로드
            </Command.Item>
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => {
              navigator.clipboard.writeText(profile.email);
              alert("이메일이 복사되었습니다.");
            })}>
              <Copy size={16} className="mr-2" /> 이메일 주소 복사
            </Command.Item>
            <Command.Item className="cmdk-item" onSelect={() => runCommand(() => window.open(`mailto:${profile.email}`, "_blank"))}>
              <Mail size={16} className="mr-2" /> 이메일 보내기
            </Command.Item>
          </Command.Group>

        </Command.List>
      </Command>
    </div>
  );
}
