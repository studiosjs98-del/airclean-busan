import { steps } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Wrench, Droplets, ShieldCheck, ClipboardCheck } from "lucide-react";

const ICONS = [Wrench, Droplets, ShieldCheck, ClipboardCheck];

export function Process() {
  return (
    <section id="process" className="bg-secondary/60 py-20 sm:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">완전분해 청소 과정</p>
          <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            겉만 닦으면, 곰팡이는 그대로입니다
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            분해부터 살균까지 4단계로, 에어컨 속 깊은 곳의 곰팡이와 냄새까지
            확실하게 없애드립니다.
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          {/* connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-accent-2/30 via-accent/40 to-accent-2/30 md:block"
          />
          {steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal as="li" key={step.no} delay={i * 110} className="relative">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-md ring-4 ring-secondary/60">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="tnum text-sm font-bold text-accent-ink">{step.no}</span>
                    <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
