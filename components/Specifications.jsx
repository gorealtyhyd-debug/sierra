import { SPECS } from '@/lib/data';

const pad = (n) => (n < 10 ? '0' + n : String(n));

export default function Specifications() {
  return (
    <section id="specifications" aria-labelledby="specs-title" className="section-pad grid gap-[clamp(34px,4vw,60px)]">
      <div className="section-head">
        <div className="grid gap-[18px]">
          <span className="eyebrow text-sage">SPECIFICATIONS</span>
          <h2 id="specs-title" className="display-h2 max-w-[18ch]">Quality without compromise.</h2>
        </div>
        <p className="lead text-moss">
          Robust red brick walls, precision-engineered aluminium windows, premium fittings, and carefully curated
          finishes create residences as durable as they are beautiful.
        </p>
      </div>
      <div className="grid border-t border-forest/[0.18]">
        {SPECS.map((s, i) => (
          <article
            key={s.title}
            className="flex flex-wrap gap-[clamp(20px,4vw,64px)] border-b border-forest/[0.18] px-[clamp(10px,1.4vw,20px)] py-[clamp(26px,3vw,46px)] transition-colors hover:bg-sand"
          >
            <div className="flex min-w-[min(100%,220px)] flex-1 basis-60 items-start gap-[clamp(14px,1.6vw,24px)]">
              <span className="font-display text-[clamp(34px,4vw,64px)] font-light leading-[0.85] text-gold">{pad(i + 1)}</span>
              <h3 className="m-0 max-w-[12ch] font-display text-[clamp(24px,2.6vw,38px)] font-light leading-[1.06]">{s.title}</h3>
            </div>
            <ul className="m-0 min-w-0 flex-[3_1_min(100%,420px)] list-none p-0 [column-gap:clamp(20px,3vw,48px)] [columns:2_260px]">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-3 break-inside-avoid pb-3">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gold" />
                  <span className="text-[clamp(13.5px,1vw,15px)] font-light leading-relaxed text-moss">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
