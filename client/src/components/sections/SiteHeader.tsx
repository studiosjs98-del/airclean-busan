import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Logo, PhoneButton } from "@/components/Brand";

const NAV = [
  { href: "#process", label: "청소 과정" },
  { href: "#proof", label: "시공 사례" },
  { href: "#reviews", label: "고객 후기" },
  { href: "#faq", label: "자주 묻는 질문" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label={`${site.name} 홈`} className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden text-right text-sm leading-tight sm:block">
            <span className="block text-[0.7rem] font-medium tracking-wide text-muted-foreground">
              {site.hours.split(" · ")[0]} 상담
            </span>
            <a
              href={site.phoneHref}
              className="tnum font-bold text-ink transition-colors hover:text-accent-ink"
            >
              {site.phoneDisplay}
            </a>
          </span>
          <PhoneButton className="hidden sm:inline-flex" />
          {/* Compact phone CTA on the smallest screens */}
          <PhoneButton className="sm:hidden" label="전화" />
        </div>
      </div>
    </header>
  );
}
