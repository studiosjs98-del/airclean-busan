import { stats, type Stat } from "@/lib/site";
import { useCountUp } from "@/hooks/useReveal";
import { Check } from "lucide-react";

// Each stat gets its own hue from the brand spectrum.
const HUES = [
  { ink: "text-azure-ink", chip: "bg-azure-soft" },
  { ink: "text-aqua-ink", chip: "bg-aqua-soft" },
  { ink: "text-mint-ink", chip: "bg-mint-soft" },
  { ink: "text-iris-ink", chip: "bg-iris-soft" },
];

function StatItem({ stat, hue }: { stat: Stat; hue: (typeof HUES)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  const display = value.toLocaleString("ko-KR", {
    minimumFractionDigits: stat.decimals ?? 0,
    maximumFractionDigits: stat.decimals ?? 0,
  });

  return (
    <div className="text-center">
      <span className={`mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full ${hue.chip}`}>
        <Check className={`h-5 w-5 ${hue.ink}`} strokeWidth={3} aria-hidden="true" />
      </span>
      <div className="tnum text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        {stat.prefix}
        <span ref={ref}>{display}</span>
        <span className={hue.ink}>{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">{stat.label}</p>
    </div>
  );
}

export function TrustBand() {
  return (
    <section className="border-y border-border bg-secondary py-16 sm:py-20">
      <div className="container">
        <h2 className="sr-only">강철에어클린 신뢰 지표</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} hue={HUES[i % HUES.length]} />
          ))}
        </dl>
      </div>
    </section>
  );
}
