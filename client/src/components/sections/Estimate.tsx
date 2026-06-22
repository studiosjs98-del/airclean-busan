import { useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PhoneButton, KakaoButton } from "@/components/Brand";
import { MapPin, Phone, Clock, CheckCircle2, Loader2 } from "lucide-react";

const AC_TYPES = ["벽걸이형", "스탠드형", "천장형 시스템", "기타 / 잘 모르겠어요"];

type Errors = { name?: string; phone?: string };

export function Estimate() {
  const [form, setForm] = useState({ name: "", phone: "", type: AC_TYPES[0], note: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "성함을 입력해 주세요.";
    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) e.phone = "연락처를 입력해 주세요.";
    else if (digits.length < 9 || digits.length > 11)
      e.phone = "올바른 연락처를 입력해 주세요. (예: 010-1234-5678)";
    return e;
  };

  const onBlur = (field: keyof Errors) => {
    const e = validate();
    setErrors((prev) => ({ ...prev, [field]: e[field] }));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = document.getElementById(e.name ? "est-name" : "est-phone");
      first?.focus();
      return;
    }
    setStatus("loading");
    // No backend in this static build — simulate, then confirm.
    // Wire this to an email/CRM/Kakao webhook before launch.
    setTimeout(() => setStatus("done"), 900);
  };

  const fieldBase =
    "min-h-[48px] w-full rounded-xl border bg-card px-4 text-ink shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <section id="estimate" className="bg-background py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left — context + service area + contact */}
          <Reveal>
            <p className="eyebrow">견적 문의</p>
            <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
              30초면 충분합니다,
              <br />
              무료 견적 받아보세요
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              에어컨 종류와 연락처만 남겨주시면, 가장 빠른 일정과 정확한 견적을
              안내해 드립니다. 전화·카카오톡 상담도 언제나 환영합니다.
            </p>

            <dl className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent-2">
                  <MapPin className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-ink">서비스 지역</dt>
                  <dd className="text-sm text-muted-foreground">
                    {site.serviceAreaLabel} (출장비 무료)
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent-2">
                  <Phone className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-ink">전화 상담</dt>
                  <dd>
                    <a
                      href={site.phoneHref}
                      className="tnum text-sm font-bold text-ink transition-colors hover:text-accent-ink"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent-2">
                  <Clock className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-ink">운영 시간</dt>
                  <dd className="text-sm text-muted-foreground">{site.hours}</dd>
                </div>
              </div>
            </dl>
          </Reveal>

          {/* Right — form card */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-secondary/40 p-6 shadow-sm sm:p-8">
              {status === "done" ? (
                <div
                  className="flex min-h-[360px] flex-col items-center justify-center text-center"
                  role="status"
                  aria-live="polite"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-2/15 text-accent-2">
                    <CheckCircle2 className="h-9 w-9" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">견적 신청이 접수되었습니다</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    빠른 시간 내에 <strong className="text-ink">{form.name}</strong> 님께 연락드리겠습니다.
                    급하시다면 아래로 바로 상담하실 수 있습니다.
                  </p>
                  <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                    <PhoneButton className="w-full sm:w-auto" />
                    <KakaoButton className="w-full sm:w-auto" />
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="est-name" className="mb-1.5 block text-sm font-semibold text-ink">
                      성함 <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="est-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onBlur={() => onBlur("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "est-name-err" : undefined}
                      placeholder="홍길동"
                      className={cn(fieldBase, errors.name ? "border-destructive" : "border-border")}
                    />
                    {errors.name && (
                      <p id="est-name-err" role="alert" className="mt-1.5 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="est-phone" className="mb-1.5 block text-sm font-semibold text-ink">
                      연락처 <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="est-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onBlur={() => onBlur("phone")}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "est-phone-err" : undefined}
                      placeholder="010-1234-5678"
                      className={cn(fieldBase, errors.phone ? "border-destructive" : "border-border")}
                    />
                    {errors.phone && (
                      <p id="est-phone-err" role="alert" className="mt-1.5 text-sm text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="est-type" className="mb-1.5 block text-sm font-semibold text-ink">
                      에어컨 종류
                    </label>
                    <select
                      id="est-type"
                      name="type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className={cn(fieldBase, "border-border appearance-none bg-[length:0]")}
                    >
                      {AC_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="est-note" className="mb-1.5 block text-sm font-semibold text-ink">
                      요청사항 <span className="font-normal text-muted-foreground">(선택)</span>
                    </label>
                    <textarea
                      id="est-note"
                      name="note"
                      rows={3}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="대수, 희망 날짜, 궁금한 점 등을 자유롭게 적어주세요."
                      className={cn(fieldBase, "min-h-[88px] resize-none border-border py-3 leading-relaxed")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> 신청 중…
                      </>
                    ) : (
                      "무료 견적 신청하기"
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    남겨주신 정보는 견적 상담 목적으로만 사용됩니다.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
