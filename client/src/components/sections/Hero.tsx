import { site } from "@/lib/site";
import { PhoneButton, KakaoButton } from "@/components/Brand";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MapPin, ShieldCheck, Sparkles, BadgeCheck, Clock } from "lucide-react";

const CHIPS = [
  { icon: ShieldCheck, label: "99.9% 살균소독" },
  { icon: Sparkles, label: "완전분해 청소" },
  { icon: BadgeCheck, label: "100% 환불보장" },
  { icon: Clock, label: "당일 예약 가능" },
];

export function Hero() {
  return (
    <section id="top" className="clean-air relative overflow-hidden">
      {/* 21st.dev aurora — animated clean-air background layer */}
      <AuroraBackground className="absolute inset-0" />

      {/* decorative steel grid sheen, non-interactive */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent 75%)",
        }}
      />

      <div className="container relative flex flex-col items-center pt-28 pb-16 text-center sm:pt-32 md:pt-40 md:pb-24">
        <p className="eyebrow rise" style={{ ["--rise-delay" as string]: "0ms" }}>
          <MapPin className="h-4 w-4" strokeWidth={2.2} />
          {site.serviceAreaLabel} · 에어컨 완전분해 청소 전문
        </p>

        <h1
          className="rise mt-5 max-w-[18ch] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-5xl md:text-[3.5rem]"
          style={{ ["--rise-delay" as string]: "90ms" }}
        >
          에어컨 속까지,
          <br />
          <span className="bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent">
            강철처럼 깨끗하게.
          </span>
        </h1>

        <p
          className="rise mt-5 max-w-[42ch] text-base leading-[1.7] text-muted-foreground sm:text-lg"
          style={{ ["--rise-delay" as string]: "180ms" }}
        >
          완전분해 청소와 99.9% 살균소독으로, 보이지 않던 곰팡이와 묵은 냄새까지
          완벽하게 제거합니다. 눈으로 직접 확인하는 정직한 시공.
        </p>

        <div
          className="rise mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          style={{ ["--rise-delay" as string]: "270ms" }}
        >
          <PhoneButton size="lg" className="w-full sm:w-auto" />
          <KakaoButton size="lg" className="w-full sm:w-auto" />
        </div>

        <p
          className="rise mt-4 text-sm text-muted-foreground"
          style={{ ["--rise-delay" as string]: "330ms" }}
        >
          출장비 무료 · 상담은 언제나 무료입니다 · {site.hours}
        </p>

        <ul
          className="rise mt-10 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          style={{ ["--rise-delay" as string]: "420ms" }}
        >
          {CHIPS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-3 py-3 text-sm font-semibold text-ink shadow-sm backdrop-blur-sm"
            >
              <Icon className="h-[1.15rem] w-[1.15rem] shrink-0 text-accent-2" strokeWidth={2.2} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
