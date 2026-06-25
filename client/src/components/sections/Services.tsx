import { services } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PhoneButton } from "@/components/Brand";
import { AirVent, Wind, Building2, Sparkles, Check } from "lucide-react";

const ICONS = [Wind, AirVent, Building2, Sparkles];
const HUES = [
  { chip: "bg-azure-soft", ink: "text-azure-ink", border: "hover:border-azure/50" },
  { chip: "bg-aqua-soft", ink: "text-aqua-ink", border: "hover:border-aqua/50" },
  { chip: "bg-iris-soft", ink: "text-iris-ink", border: "hover:border-iris/50" },
  { chip: "bg-coral-soft", ink: "text-coral-ink", border: "hover:border-coral/50" },
];

export function Services() {
  return (
    <section id="services" className="bg-aqua-soft/40 py-20 sm:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">서비스 안내</p>
          <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            정직하고 투명한 가격
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            완전분해 청소와 살균까지 모두 기본 포함. 추가 비용 없이 처음 안내한
            금액 그대로 시공합니다.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => {
            const Icon = ICONS[i];
            const hue = HUES[i % HUES.length];
            return (
              <Reveal as="article" key={svc.title} delay={i * 90}>
                <div
                  className={`group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${hue.border}`}
                >
                  <div className={`grid h-12 w-12 place-items-center rounded-xl ${hue.chip} ${hue.ink}`}>
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink">{svc.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {svc.desc}
                  </p>
                  <div className="mt-5 border-t border-border pt-4">
                    <span className="text-xs font-medium text-muted-foreground">시공비</span>
                    <p className="tnum text-xl font-extrabold text-ink">
                      {svc.price}
                      {svc.price.includes("원") && (
                        <span className="ml-1 text-sm font-semibold text-muted-foreground">
                          부터
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="flex items-center gap-2 text-sm font-medium text-ink sm:text-base">
            <Check className="h-5 w-5 shrink-0 text-accent-2" strokeWidth={2.6} />
            여러 대 시공 · 정기관리는 추가 할인이 적용됩니다. 편하게 문의하세요.
          </p>
          <PhoneButton className="w-full shrink-0 sm:w-auto" label="견적 문의" />
        </Reveal>
      </div>
    </section>
  );
}
