import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

/**
 * 강철에어클린 logo mark — a self-contained gradient "squircle" with a clean
 * airflow glyph + sparkle (clean/cool air). SVG only, scales crisply, used for
 * the header/footer lockup and the favicon.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label={`${site.name} 로고`}>
      <defs>
        <linearGradient id="kac-mark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00E5AC" />
          <stop offset="1" stopColor="#00B589" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#kac-mark)" />
      <g
        fill="none"
        stroke="#04231C"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* circulating fresh-air lines */}
        <path d="M10 15.5h12.5a3.6 3.6 0 1 0-3.6-3.6" />
        <path d="M10 20h8.5" />
        <path d="M10 24.5h14a3.6 3.6 0 1 1-3.6 3.6" />
      </g>
      {/* sparkle — "clean / fresh" */}
      <path
        d="M30.2 7c.45 2.3 1 2.85 3.3 3.3-2.3.45-2.85 1-3.3 3.3-.45-2.3-1-2.85-3.3-3.3 2.3-.45 2.85-1 3.3-3.3Z"
        fill="#04231C"
      />
    </svg>
  );
}

/** Full logo lockup — mark + stacked wordmark. */
export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0 drop-shadow-[0_2px_10px_rgba(0,214,160,0.35)]" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.0625rem] font-extrabold tracking-tight",
            onDark ? "text-white" : "text-ink",
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.22em]",
            onDark ? "text-accent" : "text-accent-ink",
          )}
        >
          Aircon Cleaning
        </span>
      </span>
    </span>
  );
}

/** KakaoTalk speech-bubble glyph (brand-correct simplified mark). */
export function KakaoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.48 3 2 6.58 2 10.99c0 2.84 1.92 5.33 4.8 6.73-.21.74-.76 2.7-.87 3.12-.14.52.19.51.4.37.17-.11 2.66-1.81 3.74-2.54.62.09 1.26.14 1.93.14 5.52 0 10-3.58 10-7.99C22 6.58 17.52 3 12 3z" />
    </svg>
  );
}

type CtaProps = { className?: string; size?: "md" | "lg"; label?: string };

/** Primary action — steel fill, white text (≈14:1 contrast). */
export function PhoneButton({ className, size = "md", label = "전화 상담" }: CtaProps) {
  return (
    <a
      href={site.phoneHref}
      aria-label={`${label} ${site.phoneDisplay}`}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-accent-foreground shadow-[0_6px_24px_-6px_rgba(45,212,191,0.55)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_30px_-6px_rgba(45,212,191,0.7)] active:scale-[0.98]",
        size === "lg" ? "min-h-[52px] px-7 text-base" : "min-h-[48px] px-5 text-[0.95rem]",
        className,
      )}
    >
      <Phone className="h-[1.15em] w-[1.15em]" strokeWidth={2.4} />
      {label}
    </a>
  );
}

/** Secondary action — official Kakao yellow + near-black text (brand rule). */
export function KakaoButton({ className, size = "md", label = "카카오톡 견적" }: CtaProps) {
  return (
    <a
      href={site.kakaoHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-kakao font-semibold text-kakao-foreground shadow-sm transition-all duration-200 hover:brightness-95 hover:shadow-md active:scale-[0.98]",
        size === "lg" ? "min-h-[52px] px-7 text-base" : "min-h-[48px] px-5 text-[0.95rem]",
        className,
      )}
    >
      <KakaoIcon className="h-[1.2em] w-[1.2em]" />
      {label}
    </a>
  );
}
