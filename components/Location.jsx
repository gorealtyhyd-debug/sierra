import Image from 'next/image';
import { TIERS } from '@/lib/data';

export default function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="section-pad grid gap-[clamp(34px,4vw,60px)] bg-forest text-cream">
      <div className="section-head">
        <div className="grid gap-[18px]">
          <span className="eyebrow text-cream/55">LOCATION</span>
          <h2 id="location-title" className="display-h2 max-w-[16ch]">Life in the fast lane.</h2>
        </div>
        <p className="lead text-cream/[0.78]">
          Effortlessly connected — moments from the city&apos;s essentials, yet set apart in calm. Drive times across
          four considered tiers.
        </p>
      </div>
      <Image
        src="https://framerusercontent.com/images/67KlfQjNUjZfKRQq078qQk4I8ac.webp?width=2400"
        alt="Connectivity map showing Subishi Sierra relative to ORR, NH44 and Hyderabad landmarks"
        width={2400}
        height={1350}
        sizes="100vw"
        className="h-auto w-full rounded"
      />
      <div className="grid gap-px bg-cream/[0.16] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
        {TIERS.map((t) => (
          <div key={t.label} className="grid content-start gap-5 bg-forest px-[clamp(18px,2vw,28px)] py-[clamp(22px,2.6vw,36px)]">
            <div className="grid gap-2">
              <span className="font-display text-[clamp(26px,2.6vw,38px)] font-light leading-none">{t.time}</span>
              <h3 className="m-0 text-[9.5px] font-normal tracking-[0.26em] text-cream/55">{t.label}</h3>
            </div>
            <ul className="m-0 grid list-none gap-[9px] p-0">
              {t.places.map((p) => (
                <li key={p} className="text-[13.5px] font-light text-cream/[0.86]">{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
