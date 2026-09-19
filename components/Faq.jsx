import { FAQS } from '@/lib/data';

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-pad grid gap-[clamp(30px,4vw,56px)] bg-sand">
      <div className="section-head">
        <div className="grid gap-[18px]">
          <span className="eyebrow text-sage">QUESTIONS</span>
          <h2 id="faq-title" className="display-h2 max-w-[16ch]">Good to know.</h2>
        </div>
        <p className="lead text-moss">
          The details buyers ask us most often about Subishi Sierra — location, sizes, approvals and availability.
        </p>
      </div>
      <div className="grid gap-px border-y border-forest/[0.18] bg-forest/[0.18]">
        {FAQS.map((f) => (
          <details key={f.q} className="group bg-sand px-[clamp(10px,1.4vw,20px)] py-[clamp(20px,2.4vw,32px)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[clamp(20px,2.2vw,30px)] font-light leading-[1.15] marker:hidden">
              {f.q}
              <span className="mt-1 flex-none text-[18px] text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="m-0 max-w-[72ch] pt-3.5 text-[clamp(14px,1vw,15.5px)] font-light leading-relaxed text-moss">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
