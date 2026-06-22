import { site } from "@/lib/site";
import { Logo, PhoneButton, KakaoButton } from "@/components/Brand";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      {/* Final CTA band */}
      <div className="border-b border-white/10">
        <div className="container flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              깨끗한 공기, 지금 시작하세요
            </h2>
            <p className="mt-2 text-white/70">
              상담은 무료입니다. 부담 없이 문의해 주세요.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <PhoneButton size="lg" className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto" />
            <KakaoButton size="lg" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo onDark />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            {site.tagline}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">연락처</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href={site.phoneHref} className="tnum transition-colors hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">서비스 지역</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {site.serviceAreaLabel}
            <br />
            (해당 지역 출장비 무료)
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">사업자 정보</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            상호: {site.name}
            <br />
            사업자등록번호: {site.businessNumber}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
