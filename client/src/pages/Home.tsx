import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { TrustBand } from "@/components/sections/TrustBand";
import { Owner } from "@/components/sections/Owner";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { Services } from "@/components/sections/Services";
import { ReviewsMarquee } from "@/components/sections/ReviewsMarquee";
import { Estimate } from "@/components/sections/Estimate";
import { Faq } from "@/components/sections/Faq";
import { Location } from "@/components/sections/Location";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { MobileBar } from "@/components/sections/MobileBar";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        본문 바로가기
      </a>

      <SiteHeader />

      <main>
        <Hero />
        <BeforeAfter />
        <TrustBand />
        <Owner />
        <Process />
        <Gallery />
        <Services />
        <ReviewsMarquee />
        <Estimate />
        <Faq />
        <Location />
      </main>

      <SiteFooter />

      {/* spacer so the fixed mobile bar never covers footer content */}
      <div aria-hidden="true" className="h-20 md:hidden" />
      <MobileBar />
    </div>
  );
}
