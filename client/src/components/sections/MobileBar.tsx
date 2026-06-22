import { site } from "@/lib/site";
import { KakaoIcon } from "@/components/Brand";
import { Phone } from "lucide-react";

/**
 * Always-reachable contact bar on mobile. Hidden on md+ (header CTA covers it).
 * Sits above the iOS home indicator via safe-area padding.
 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div
        className="grid grid-cols-2 gap-2 px-3 pt-2"
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={site.phoneHref}
          aria-label={`전화 상담 ${site.phoneDisplay}`}
          className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-primary font-semibold text-white shadow-sm transition-transform active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" strokeWidth={2.4} />
          전화 상담
        </a>
        <a
          href={site.kakaoHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡 견적 문의"
          className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-kakao font-semibold text-kakao-foreground shadow-sm transition-transform active:scale-[0.98]"
        >
          <KakaoIcon className="h-5 w-5" />
          카카오톡 견적
        </a>
      </div>
    </div>
  );
}
