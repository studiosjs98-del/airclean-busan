import { site } from "@/lib/site";
import { PhoneButton, KakaoButton } from "@/components/Brand";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MapPin, Check, Star } from "lucide-react";

// Real, verifiable trust signals only — no logos.
const CHIPS = [
  "사업자등록 완료",
  "친환경 폐수 100% 처리",
  "100% 환불보장",
  "당일 예약 가능",
];

export function Hero() {
  return (
    <section id="top" className="clean-air relative overflow-hidden">
      {/* 21st.dev aurora — animated clean-air background layer */}
      <AuroraBackground className="absolute inset-0" />

      {/* decorative steel grid sheen, non-interactive */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0f1b1e 1px, transparent 1px), linear-gradient(90deg, #0f1b1e 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(75% 60% at 50% 25%, black, transparent 78%)",
        }}
      />

      <div className="container relative grid items-center gap-12 pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left — copy */}
        <div className="text-center lg:text-left">
          <p
            className="eyebrow rise justify-center lg:justify-start"
            style={{ ["--rise-delay" as string]: "0ms" }}
          >
            <MapPin className="h-4 w-4" strokeWidth={2.2} />
            {site.serviceAreaLabel} · 에어컨 완전분해 청소 전문
          </p>

          <h1
            className="rise mx-auto mt-5 max-w-[18ch] text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-5xl md:text-[3.5rem] lg:mx-0"
            style={{ ["--rise-delay" as string]: "90ms" }}
          >
            곰팡이 냄새 없는
            <br />
            <span className="bg-gradient-to-r from-cobalt via-iris to-azure-ink bg-clip-text text-transparent">
              깨끗하고 건강한 공기.
            </span>
          </h1>

          <p
            className="rise mx-auto mt-5 max-w-[42ch] text-base leading-[1.7] text-muted-foreground sm:text-lg lg:mx-0"
            style={{ ["--rise-delay" as string]: "180ms" }}
          >
            에어컨 속 곰팡이와 묵은 냄새를 말끔히. 더 시원한 바람으로 전기료까지
            아껴드립니다. 믿을 수 있는 형제가 한 대 한 대 정성껏 청소합니다.
          </p>

          <div
            className="rise mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start"
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
            className="rise mx-auto mt-9 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 lg:mx-0"
            style={{ ["--rise-delay" as string]: "420ms" }}
          >
            {CHIPS.map((label) => (
              <li
                key={label}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-3 text-sm font-semibold text-ink shadow-sm"
              >
                <Check className="h-[1.15rem] w-[1.15rem] shrink-0 text-primary" strokeWidth={2.6} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — owner portrait */}
        <div
          className="rise relative mx-auto w-full max-w-sm lg:max-w-none"
          style={{ ["--rise-delay" as string]: "200ms" }}
        >
          {/* turquoise glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-80"
            style={{
              background:
                "radial-gradient(55% 55% at 75% 25%, rgba(46,139,230,0.40), transparent 70%)," +
                "radial-gradient(55% 55% at 25% 80%, rgba(91,75,214,0.32), transparent 70%)",
            }}
          />
          <figure className="relative overflow-hidden rounded-3xl border border-azure/30 bg-card shadow-2xl">
            <img
              src="/images/owner.jpg"
              alt="강철에어클린 대표 기사 — 에어컨 완전분해 청소 전문가"
              width={900}
              height={745}
              className="aspect-[5/4] w-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
            />
            {/* bottom gradient for caption legibility */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#06141a] via-[#06141a]/70 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <div>
                <p className="text-xs font-semibold tracking-wide text-accent">대표 기사 직접 시공</p>
                <p className="text-lg font-bold text-white">믿고 맡기는 형제, 강철에어클린</p>
              </div>
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-sm font-bold text-white backdrop-blur">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
                4.9
              </span>
            </figcaption>
          </figure>

          {/* floating experience badge */}
          <div className="absolute -left-3 top-6 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="tnum text-2xl font-extrabold text-ink">15년</p>
            <p className="text-xs font-medium text-muted-foreground">현장 경력</p>
          </div>
        </div>
      </div>
    </section>
  );
}
