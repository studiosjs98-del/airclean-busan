import { faqs } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">자주 묻는 질문</p>
          <h2 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            궁금한 점이 있으신가요?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            고객님들이 자주 물어보시는 질문을 모았습니다. 더 궁금한 점은 편하게
            문의해 주세요.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-sm sm:px-7"
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="py-5 text-base font-bold text-ink hover:no-underline sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
