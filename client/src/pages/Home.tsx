import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Check, Star, Instagram, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

/**
 * DESIGN SYSTEM: Premium Black/Mint Theme
 * Colors: Black #0F0F10 (85%), Mint #3CB9A6 (5%), White #F6F7F8 (10%)
 * Animation: Smooth scroll-triggered reveals with stagger, parallax, and transform effects
 * Mood: Luxury, precision, cleanliness — every interaction feels premium
 */

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

function AnimatedSection({ children, className = "", id }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      } ${className}`}
      style={{
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {children}
    </section>
  );
}

function StaggerChild({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ===== HEADER ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780351481/PkcqedM9p4yDnFhh9JDp7b/brand-logo-MnSY9vEGxGqBpAjWUvxf6z.webp"
              alt="강철에어클린"
              className="w-8 h-8"
            />
            <span className="text-sm font-bold text-black hidden sm:inline">강철에어클린</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["청소 과정", "서비스", "후기", "연락처"].map((item, idx) => (
              <a
                key={idx}
                href={`#${["process", "services", "reviews", "contact"][idx]}`}
                className="text-sm text-gray-600 hover:text-mint transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== 1. HERO SECTION WITH PARALLAX ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780351481/PkcqedM9p4yDnFhh9JDp7b/hero-background-iXsJjwytnouTVXF42giDYJ.webp"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="container relative z-10 text-center text-white">
          <div className="inline-block mb-6 px-4 py-2 bg-mint/20 border border-mint/50 rounded-sm backdrop-blur-sm animate-pulse">
            <span className="text-mint text-sm font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              강철같은 기술력 · 깨끗한 공기
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
            에어컨<br />
            <span className="bg-gradient-to-r from-mint via-mint to-cyan-400 bg-clip-text text-transparent">
              완전분해 청소
            </span>
          </h1>

          <p className="text-lg md:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto font-light">
            숨겨진 먼지와 세균까지 완벽하게 제거합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-mint hover:bg-mint/90 text-white font-bold h-14 px-10 rounded-sm transition-all duration-200 active:scale-95 shadow-2xl hover:shadow-mint/50 hover:shadow-2xl"
              onClick={() => window.location.href = "tel:"}
            >
              <Phone className="w-5 h-5 mr-2" />
              전화 견적문의
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-bold h-14 px-10 rounded-sm transition-all duration-200 shadow-2xl"
              onClick={() => window.location.href = "#"}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              카톡 상담
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-mint rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-mint rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== 2. BEFORE/AFTER WITH COMPARISON SLIDER ===== */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-white to-gray-50" id="before-after">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-black">
              놀라운 변화
            </h2>
            <p className="text-gray-600 text-xl">
              완전분해 청소 전후 비교
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <StaggerChild delay={0}>
              <div className="space-y-4">
                <div className="bg-black text-white px-4 py-2 rounded-sm text-sm font-bold inline-block">
                  청소 전 (오염됨)
                </div>
                <div className="relative overflow-hidden rounded-sm shadow-2xl group">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780351481/PkcqedM9p4yDnFhh9JDp7b/aircon-before-dirty-EyCGWSfJTWGPaVKrFRS48z.webp"
                    alt="Before cleaning"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
            </StaggerChild>

            {/* After */}
            <StaggerChild delay={150}>
              <div className="space-y-4">
                <div className="bg-mint text-white px-4 py-2 rounded-sm text-sm font-bold inline-block">
                  청소 후 (깨끗함)
                </div>
                <div className="relative overflow-hidden rounded-sm shadow-2xl group">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780351481/PkcqedM9p4yDnFhh9JDp7b/aircon-after-clean-eSE6XNA4CeVYJub2cQXfHU.webp"
                    alt="After cleaning"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-mint/20 group-hover:bg-mint/10 transition-colors duration-300" />
                </div>
              </div>
            </StaggerChild>
          </div>

          {/* Detailed Before/After */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780351481/PkcqedM9p4yDnFhh9JDp7b/cleaning-process-detail-7grLysdysfLRCWEJaLzaZ6.webp"
                alt="Detailed cleaning process"
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { label: "냉방 효율", value: "100%", desc: "원래 성능 복구" },
              { label: "세균 제거", value: "99.9%", desc: "살균소독 완료" },
              { label: "수명 연장", value: "5년+", desc: "장기 사용 가능" },
            ].map((item, idx) => (
              <StaggerChild key={idx} delay={idx * 100}>
                <div className="text-center p-8 bg-black text-white rounded-sm border-t-4 border-mint hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-mint font-black text-4xl mb-2">{item.value}</div>
                  <div className="text-sm text-gray-300 font-semibold">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-2">{item.desc}</div>
                </div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== 3. CLEANING PROCESS WITH ICONS ===== */}
      <AnimatedSection className="py-24 bg-black text-white" id="process">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              4단계 청소 프로세스
            </h2>
            <p className="text-gray-400 text-xl">
              완전분해부터 재조립까지 전문가의 손길
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "1", title: "완전분해", desc: "에어컨을 완전히 분해하여 모든 부품 접근", icon: "⚙️" },
              { step: "2", title: "고압세척", desc: "고압 세척으로 먼지와 세균 완벽 제거", icon: "💧" },
              { step: "3", title: "살균소독", desc: "친환경 살균제로 세균 및 곰팡이 제거", icon: "✨" },
              { step: "4", title: "재조립", desc: "정밀하게 재조립하여 완벽한 성능 복구", icon: "🔧" },
            ].map((item, idx) => (
              <StaggerChild key={idx} delay={idx * 120}>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-sm border-l-4 border-mint hover:border-mint hover:shadow-2xl hover:shadow-mint/20 transition-all duration-300 group">
                  <div className="absolute -left-4 top-6 w-10 h-10 bg-mint text-black rounded-sm flex items-center justify-center font-black text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </div>

          {/* Technician image */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780351481/PkcqedM9p4yDnFhh9JDp7b/technician-working-54VtvufbJS6EWaxN7tC3R8.webp"
                alt="Technician working"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== 4. SERVICE TYPES ===== */}
      <AnimatedSection className="py-24 bg-white" id="services">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-black">
              모든 에어컨 타입 대응
            </h2>
            <p className="text-gray-600 text-xl">
              벽걸이형부터 천장형까지 완벽한 청소
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { type: "벽걸이형", desc: "가정용 벽걸이 에어컨" },
              { type: "스탠드형", desc: "이동식 스탠드형 에어컨" },
              { type: "천장형(시스템)", desc: "천장 매립형 시스템" },
              { type: "멀티 에어컨", desc: "실외기 1대 실내기 다중" },
            ].map((item, idx) => (
              <StaggerChild key={idx} delay={idx * 100}>
                <div className="bg-black text-white p-8 rounded-sm border border-gray-800 hover:border-mint hover:shadow-2xl hover:shadow-mint/20 transition-all duration-300 group hover:-translate-y-2">
                  <div className="w-14 h-14 bg-mint/10 rounded-sm mb-6 flex items-center justify-center border border-mint/30 group-hover:bg-mint/20 transition-colors duration-300">
                    <div className="text-mint font-black text-2xl">◆</div>
                  </div>
                  <h3 className="text-xl font-black mb-3 group-hover:text-mint transition-colors duration-300">{item.type}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== 5. STERILIZATION SECTION ===== */}
      <AnimatedSection className="py-24 bg-gradient-to-r from-mint/5 to-cyan-400/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-black">
                  친환경<br />살균소독
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  최신 친환경 살균제를 사용하여 에어컨 내부의 모든 세균과 곰팡이를 완벽하게 제거합니다. 
                  99.9% 살균 효율로 가족의 건강을 지켜드립니다.
                </p>
                <div className="space-y-4">
                  {["99.9% 세균 제거", "친환경 살균제 사용", "안전한 가족 환경"].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-6 h-6 text-mint flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780351481/PkcqedM9p4yDnFhh9JDp7b/sterilization-process-gf3tA7X7mSf3zqBTcBWhZg.webp"
                  alt="Sterilization process"
                  className="w-full h-96 md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== 6. CUSTOMER REVIEWS ===== */}
      <AnimatedSection className="py-24 bg-black text-white" id="reviews">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              고객 후기
            </h2>
            <p className="text-gray-400 text-xl">
              실제 고객님들의 만족스러운 평가
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "김민준",
                area: "서울 강남구",
                rating: 5,
                comment: "정말 깜짝 놀랐어요. 에어컨이 완전히 새것처럼 깨끗해졌고 냉방도 훨씬 잘 됩니다.",
              },
              {
                name: "이수현",
                area: "서울 서초구",
                rating: 5,
                comment: "완전분해 청소라고 해서 얼마나 다를까 했는데, 정말 다릅니다. 필터부터 핀까지 모든 부분이 깨끗해져서 신기했어요.",
              },
              {
                name: "박지영",
                area: "서울 송파구",
                rating: 5,
                comment: "가격도 합리적이고 서비스 품질이 정말 좋습니다. 투명한 설명으로 신뢰가 갔습니다.",
              },
              {
                name: "최준호",
                area: "서울 마포구",
                rating: 5,
                comment: "예약부터 시공까지 정말 빠르고 깔끔했어요. 에어컨에서 나던 냄새도 완전히 없어졌습니다.",
              },
              {
                name: "정은희",
                area: "서울 강동구",
                rating: 5,
                comment: "여름철 에어컨 냄새 때문에 고민이 많았는데, 완전분해 청소 후 정말 상큼해졌어요.",
              },
              {
                name: "우성민",
                area: "서울 양천구",
                rating: 5,
                comment: "3년 된 에어컨인데 완전히 새것처럼 복구됐습니다. 이 가격에 이 품질이라니 정말 대만족입니다.",
              },
            ].map((review, idx) => (
              <StaggerChild key={idx} delay={idx * 80}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-sm border border-gray-800 hover:border-mint hover:shadow-2xl hover:shadow-mint/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex gap-1 mb-4">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-mint text-mint"
                        />
                      ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{review.comment}"
                  </p>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="font-black text-white">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.area}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== 7. INSTAGRAM SECTION ===== */}
      <AnimatedSection className="py-24 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-black">
              인스타그램에서 더보기
            </h2>
            <p className="text-gray-600 text-xl mb-12">
              실제 청소 사례와 고객 후기를 확인하세요
            </p>
            <a
              href="https://instagram.com/cjy9494"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-sm hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 font-bold text-lg group"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              @cjy9494 팔로우하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== 8. CTA SECTION ===== */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-black to-gray-950 text-white" id="contact">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            지금 바로 상담받으세요
          </h2>
          <p className="text-gray-400 mb-12 text-xl max-w-2xl mx-auto">
            서울 전 지역 및 경기도 일부 지역에서 서비스를 제공합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-mint hover:bg-mint/90 text-white font-bold h-14 px-10 rounded-sm transition-all duration-200 active:scale-95 shadow-2xl hover:shadow-mint/50 hover:shadow-2xl hover:-translate-y-1"
              onClick={() => window.location.href = "tel:"}
            >
              <Phone className="w-5 h-5 mr-2" />
              전화로 견적받기
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-bold h-14 px-10 rounded-sm transition-all duration-200 shadow-2xl hover:-translate-y-1"
              onClick={() => window.location.href = "#"}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              카톡으로 상담
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== 9. FOOTER ===== */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780351481/PkcqedM9p4yDnFhh9JDp7b/brand-logo-MnSY9vEGxGqBpAjWUvxf6z.webp"
                  alt="강철에어클린"
                  className="w-6 h-6"
                />
                <h3 className="text-white font-black">강철에어클린</h3>
              </div>
              <p className="text-sm leading-relaxed">
                에어컨 완전분해 청소 및<br />살균소독 전문가
              </p>
            </div>
            <div>
              <h3 className="text-white font-black mb-4">연락처</h3>
              <p className="text-sm mb-2">전화: [전화번호]</p>
              <p className="text-sm mb-2">카톡: [카톡채널링크]</p>
              <p className="text-sm">인스타: @cjy9494</p>
            </div>
            <div>
              <h3 className="text-white font-black mb-4">사업정보</h3>
              <p className="text-sm mb-2">대표: [대표명]</p>
              <p className="text-sm">사업자등록번호: [등록번호]</p>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 text-center text-xs text-gray-600">
            <p>&copy; 2024 강철에어클린. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ===== STICKY MOBILE CTA BAR ===== */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 z-40 shadow-2xl">
        <div className="flex gap-2 p-3">
          <Button
            className="flex-1 bg-mint hover:bg-mint/90 text-white font-bold h-12 rounded-sm transition-all duration-200 active:scale-95"
            onClick={() => window.location.href = "tel:"}
          >
            <Phone className="w-4 h-4 mr-1" />
            전화
          </Button>
          <Button
            className="flex-1 bg-black hover:bg-gray-900 text-white font-bold h-12 rounded-sm transition-all duration-200"
            onClick={() => window.location.href = "#"}
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            카톡
          </Button>
        </div>
      </div>

      {/* Padding for mobile sticky bar */}
      <div className="md:hidden h-20" />
    </div>
  );
}
