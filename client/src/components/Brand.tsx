import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

/**
 * Brand logo (client-supplied). Transparent PNG, used in the header (light) and
 * — on a white chip for legibility — in the dark footer.
 */
export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  const img = (
    <img
      src="/images/logo.png"
      alt={`${site.name} — 부산 에어컨 청소 강철 · Repair & service`}
      width={640}
      height={403}
      className="h-11 w-auto sm:h-12"
    />
  );

  if (onDark) {
    return (
      <span className={cn("inline-flex rounded-xl bg-white px-3 py-2 shadow-sm", className)}>
        {img}
      </span>
    );
  }
  return <span className={cn("inline-flex items-center", className)}>{img}</span>;
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
