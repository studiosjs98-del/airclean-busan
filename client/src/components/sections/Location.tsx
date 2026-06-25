import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PhoneButton, KakaoButton } from "@/components/Brand";
import { MapPin } from "lucide-react";

// Keyless Google Maps embed (output=embed) — no API key. Override per-deploy
// with VITE_MAPS_EMBED_URL (e.g. a Maps Embed API URL) in .env.
const MAP_URL =
  (import.meta.env.VITE_MAPS_EMBED_URL as string | undefined) ?? site.mapsEmbedFallback;

export function Location() {
  return (
    <section id="location" className="bg-background py-20 sm:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">오시는 길 · 서비스 지역</p>
          <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            전북 어디든 찾아갑니다
          </h2>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <MapPin className="h-5 w-5 shrink-0 text-accent-ink" strokeWidth={2.2} />
            {site.serviceAreaLabel} · 출장비 무료
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <div className="relative aspect-video w-full">
              <iframe
                src={MAP_URL}
                title="강철에어클린 서비스 지역 지도 — 전북"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <p className="text-sm text-muted-foreground">
              방문 예약은 전화 또는 카카오톡으로 편하게 문의하세요.
            </p>
            <div className="flex gap-3">
              <PhoneButton />
              <KakaoButton />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
