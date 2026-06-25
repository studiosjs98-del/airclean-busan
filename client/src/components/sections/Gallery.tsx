import { Reveal } from "@/components/Reveal";

type Shot = { src: string; alt: string; tag: string };

const SHOTS: Shot[] = [
  {
    src: "/images/work-stand.jpg",
    alt: "완전분해 청소 후 조립을 마친 스탠드형 에어컨",
    tag: "스탠드형 · 완전분해",
  },
  {
    src: "/images/work-fanparts.jpg",
    alt: "분해해 세척한 에어컨 송풍팬과 부품들",
    tag: "송풍팬 · 부품 세척",
  },
  {
    src: "/images/work-wall.jpg",
    alt: "청소를 마친 벽걸이형 에어컨 설치 모습",
    tag: "벽걸이형 · 시공 완료",
  },
  {
    src: "/images/work-disassembled.jpg",
    alt: "내부 열교환기까지 완전분해한 스탠드형 에어컨",
    tag: "내부 완전분해",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-20 sm:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">시공 갤러리</p>
          <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            말보다 확실한, 실제 시공 사진
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            강철에어클린이 직접 시공한 현장 사진입니다. 분해부터 마무리까지, 숨기지
            않고 그대로 보여드립니다.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {SHOTS.map((shot, i) => (
            <Reveal as="figure" key={shot.src + i} delay={(i % 4) * 90}>
              <div className="group relative overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#06141a]/85 via-transparent to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent ring-1 ring-accent/25 backdrop-blur">
                    {shot.tag}
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
