import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { MoveHorizontal } from "lucide-react";

/**
 * Drag-to-compare before/after slider — the highest-converting element for a
 * cleaning service. Pointer + touch drag, plus full keyboard support (←/→).
 *
 * Ships with styled placeholder panels. To use real photos, pass
 * `beforeSrc` / `afterSrc` (client's actual 청소 전/후 사진).
 */

function FinTexture({ tone }: { tone: "dirty" | "clean" }) {
  const dirty = tone === "dirty";
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        background: dirty
          ? "linear-gradient(160deg, #6b6f5a 0%, #4f5346 55%, #3c4035 100%)"
          : "linear-gradient(160deg, #eafbff 0%, #d2f1f6 45%, #b9e7ee 100%)",
      }}
    >
      {/* heat-exchanger fins */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${
            dirty ? "rgba(20,24,16,0.55)" : "rgba(20,41,58,0.16)"
          } 0 2px, transparent 2px 9px)`,
        }}
      />
      {dirty ? (
        // grime, dust haze & mold blotches
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(18% 22% at 28% 35%, rgba(40,46,24,0.85), transparent 60%)," +
              "radial-gradient(14% 18% at 62% 60%, rgba(54,44,20,0.8), transparent 60%)," +
              "radial-gradient(20% 24% at 78% 30%, rgba(30,38,22,0.7), transparent 60%)," +
              "radial-gradient(120% 120% at 50% 120%, rgba(0,0,0,0.45), transparent 60%)",
          }}
        />
      ) : (
        // fresh sheen
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 35% at 30% 20%, rgba(255,255,255,0.85), transparent 60%)," +
              "radial-gradient(50% 40% at 80% 80%, rgba(6,182,212,0.18), transparent 60%)",
          }}
        />
      )}
    </div>
  );
}

interface BeforeAfterProps {
  beforeSrc?: string;
  afterSrc?: string;
}

export function BeforeAfter({ beforeSrc, afterSrc }: BeforeAfterProps) {
  const [pos, setPos] = useState(50); // 0..100, width of "before" reveal
  const frameRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const endDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPos((p) => Math.max(0, p - 4));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setPos((p) => Math.min(100, p + 4));
      e.preventDefault();
    } else if (e.key === "Home") {
      setPos(0);
    } else if (e.key === "End") {
      setPos(100);
    }
  };

  return (
    <section id="proof" className="bg-background py-20 sm:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">시공 사례</p>
          <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            직접 확인하세요, 청소 전과 후
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            손잡이를 좌우로 움직여 보세요. 완전분해 청소가 만드는 차이를 두 눈으로
            직접 확인하실 수 있습니다.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-4xl">
          <div
            ref={frameRef}
            className="group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl border border-border shadow-xl sm:aspect-[16/10]"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
          >
            {/* AFTER (clean) — base layer */}
            <div className="absolute inset-0">
              {afterSrc ? (
                <img
                  src={afterSrc}
                  alt="에어컨 완전분해 청소 후 — 깨끗하게 세척된 열교환기"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <FinTexture tone="clean" />
              )}
              <span className="absolute right-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-accent-ink shadow-sm backdrop-blur">
                청소 후
              </span>
            </div>

            {/* BEFORE (dirty) — clipped to the left of the handle */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              {beforeSrc ? (
                <img
                  src={beforeSrc}
                  alt="에어컨 청소 전 — 곰팡이와 먼지로 오염된 내부"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <FinTexture tone="dirty" />
              )}
              <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur">
                청소 전
              </span>
            </div>

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(11,22,32,0.15)]"
              style={{ left: `${pos}%` }}
            >
              <div
                role="slider"
                aria-label="청소 전후 비교 슬라이더"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                aria-valuetext={`청소 전 ${Math.round(pos)}% 표시`}
                tabIndex={0}
                onKeyDown={onKeyDown}
                className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-primary shadow-lg ring-1 ring-black/5 transition-transform duration-150 group-hover:scale-105 focus-visible:scale-105"
              >
                <MoveHorizontal className="h-5 w-5" strokeWidth={2.4} />
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            ← 손잡이를 드래그하거나 방향키로 비교해 보세요 →
          </p>
        </Reveal>
      </div>
    </section>
  );
}
