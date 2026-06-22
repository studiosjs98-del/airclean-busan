import { stats, type Stat } from "@/lib/site";
import { useCountUp } from "@/hooks/useReveal";

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  const display = value.toLocaleString("ko-KR", {
    minimumFractionDigits: stat.decimals ?? 0,
    maximumFractionDigits: stat.decimals ?? 0,
  });

  return (
    <div className="text-center">
      <div className="tnum text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {stat.prefix}
        <span ref={ref}>{display}</span>
        <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">{stat.label}</p>
    </div>
  );
}

export function TrustBand() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 15% 0%, rgba(6,182,212,0.18), transparent 60%)," +
            "radial-gradient(45% 55% at 90% 100%, rgba(13,148,136,0.16), transparent 60%)",
        }}
      />
      <div className="container relative">
        <h2 className="sr-only">강철에어클린 성과 지표</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}
