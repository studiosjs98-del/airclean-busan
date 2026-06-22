import { reviews } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Star, Quote } from "lucide-react";

function Stars() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="별점 5점 만점에 5점">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/60 py-20 sm:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">고객 후기</p>
          <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            고객님이 직접 남긴 후기
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            부산·경남 지역 고객님들의 솔직한 후기입니다. 다시 찾아주시는 이유가
            있습니다.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="figure" key={r.name + r.region} delay={(i % 3) * 90}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Quote
                  className="absolute right-5 top-5 h-7 w-7 text-accent/15"
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
                <Stars />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {r.initial}
                  </span>
                  <span className="text-sm">
                    <span className="block font-bold text-ink">{r.name}</span>
                    <span className="block text-muted-foreground">
                      {r.region} · {r.type}
                    </span>
                  </span>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
