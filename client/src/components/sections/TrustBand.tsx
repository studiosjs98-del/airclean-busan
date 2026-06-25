import { stats, type Stat } from "@/lib/site";
import { useCountUp } from "@/hooks/useReveal";
import { Check } from "lucide-react";

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  const display = value.toLocaleString("ko-KR", {
    minimumFractionDigits: stat.decimals ?? 0,
    maximumFractionDigits: stat.decimals ?? 0,
  });

  return (
    <div className="text-center">
      <Check className="mx-auto mb-2 h-5 w-5 text-accent-ink" strokeWidth={3} aria-hidden="true" />
      <div className="tnum text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        {stat.prefix}
        <span ref={ref}>{display}</span>
        <span className="text-accent-ink">{stat.suffix}</span>
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
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}
