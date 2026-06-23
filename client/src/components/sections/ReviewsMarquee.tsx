import { reviews, type Review } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/ui/marquee";
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

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="relative mx-3 flex w-[300px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:w-[360px]">
      <Quote
        className="absolute right-5 top-5 h-7 w-7 text-accent/15"
        strokeWidth={2.4}
        aria-hidden="true"
      />
      <Stars />
      <blockquote className="mt-4 line-clamp-4 text-[0.95rem] leading-relaxed text-ink">
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
    </figure>
  );
}

export function ReviewsMarquee() {
  const half = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, half);
  const rowB = reviews.slice(half);

  return (
    <section id="reviews" className="overflow-hidden bg-secondary py-20 sm:py-24">
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
      </div>

      {/* Two opposing marquee rows with edge fades (21st.dev Marquee). */}
      <div className="relative mt-12">
        <Marquee
          pauseOnHover
          speed={45}
          className="mt-0 sm:mt-0"
          aria-label="고객 후기 1"
        >
          {rowA.map((r) => (
            <ReviewCard key={r.name + r.region} r={r} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          direction="right"
          speed={45}
          className="mt-4 sm:mt-4"
          aria-label="고객 후기 2"
        >
          {rowB.map((r) => (
            <ReviewCard key={r.name + r.region} r={r} />
          ))}
        </Marquee>

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent sm:w-32" />
      </div>
    </section>
  );
}
