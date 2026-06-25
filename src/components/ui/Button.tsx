import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Button({
  href,
  variant = "primary",
  children,
  icon,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: "download" | "none";
}) {
  const isPrimary = variant === "primary";
  const baseClass = "inline-flex items-center gap-2 px-[18px] py-[10px] rounded-lg text-sm font-medium transition-all duration-150";
  const primaryClass = "bg-[var(--color-text-primary)] text-white hover:bg-[#27272A]";
  const secondaryClass = "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:border-[var(--color-text-primary)]";
  
  const className = `${baseClass} ${isPrimary ? primaryClass : secondaryClass}`;

  return (
    <Link href={href} className={className}>
      {children}
      {icon === "download" && <ArrowDown size={14} />}
    </Link>
  );
}
