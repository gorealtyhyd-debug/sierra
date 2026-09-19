import Image from 'next/image';
import { STATS } from '@/lib/data';

export default function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="section-pad grid gap-[clamp(40px,6vw,80px)] bg-forest text-cream">
      <div className="section-head">
        <div className="grid gap-[18px]">
          <span className="eyebrow text-cream/55">PROJECT OVERVIEW</span>
          <h2 id="overview-title" className="display-h2 max-w-[18ch]">Designed for a lifetime.</h2>
        </div>
        <p className="lead text-cream/[0.78]">
          Thirty-six acres of considered planning — homes, open spaces, and amenities arranged for a life of ease and
          belonging. Surrounded by lush landscapes and peaceful streets, this is a community designed for life&apos;s
          quieter moments.
        </p>
      </div>
      <dl className="m-0 grid gap-px bg-cream/[0.16] [grid-template-columns:repeat(auto-fit,minmax(min(50%,180px),1fr))]">
        {STATS.map((s) => (
          <div key={s.label} className="grid gap-2.5 bg-forest px-[clamp(18px,2vw,32px)] py-[clamp(22px,3vw,40px)]">
            <dd className="m-0 font-display text-[clamp(40px,4.6vw,68px)] font-light leading-none">{s.value}</dd>
            <dt className="text-[9.5px] tracking-[0.28em] text-cream/60">{s.label}</dt>
          </div>
        ))}
      </dl>
      <Image
        src="https://framerusercontent.com/images/17PMmM2sRL5dUOTLQKWXcCchzs.png?width=2400"
        alt="Aerial view of the Subishi Sierra villa community"
        width={2400}
        height={1350}
        sizes="100vw"
        className="h-auto w-full rounded"
      />
    </section>
  );
}
