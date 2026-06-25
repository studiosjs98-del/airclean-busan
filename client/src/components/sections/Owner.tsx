import { Reveal } from "@/components/Reveal";
import { PhoneButton } from "@/components/Brand";
import { ShieldCheck, Camera, HeartHandshake, Wallet } from "lucide-react";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "형제가 직접 시공",
    desc: "외주 없이 형제가 모든 현장을 책임지고 시공합니다. 사람이 자주 바뀌지 않아 믿을 수 있습니다.",
  },
  {
    icon: Camera,
    title: "작업 사진 전송",
    desc: "분해 → 세척 → 살균 전 과정을 사진으로 찍어 보내드립니다. 보이지 않는 곳까지 정직하게.",
  },
  {
    icon: Wallet,
    title: "100% 환불보장",
    desc: "결과에 만족하지 못하시면 100% 환불해 드립니다. 그만큼 시공 품질에 자신 있습니다.",
  },
];

export function Owner() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(45,212,191,0.18), transparent 70%)" }}
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* photo */}
        <Reveal className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-60"
            style={{ background: "radial-gradient(60% 60% at 40% 40%, rgba(45,212,191,0.25), transparent 70%)" }}
          />
          <figure className="overflow-hidden rounded-3xl border border-accent/20 shadow-2xl">
            <img
              src="/images/work-disassembled.jpg"
              alt="스탠드형 에어컨을 완전분해해 내부 열교환기와 송풍팬까지 청소하는 강철에어클린 실제 시공 모습"
              width={800}
              height={1421}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>

        {/* story */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="eyebrow">강철에어클린 이야기</p>
          <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            믿을 수 있는 형제에게
            <br />
            맡겨주세요
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            강철에어클린은 형제가 함께 운영하는 에어컨 완전분해 청소 전문 업체입니다.
            내 집, 내 가족이 쓰는 에어컨이라는 마음으로 단 한 대도 대충 하지 않습니다.
            보이지 않는 내부까지 분해해 정직하게 시공합니다.
          </p>

          <ul className="mt-8 space-y-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-ink ring-1 ring-accent/20">
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-3">
            <PhoneButton size="lg" />
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent-ink" strokeWidth={2.2} />
              전북 어디든 출장
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
