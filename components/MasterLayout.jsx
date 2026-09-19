'use client';

import Image from 'next/image';
import { ZONES } from '@/lib/data';
import { useEnquiry } from './EnquiryProvider';

export default function MasterLayout() {
  const { openEnquiry } = useEnquiry();
  return (
    <section id="master-layout" aria-labelledby="master-title" className="section-pad grid gap-[clamp(26px,3vw,44px)]">
      <div className="flex flex-wrap items-baseline justify-between gap-6 border-b border-forest/[0.16] pb-5">
        <span className="eyebrow text-sage">SITE PLAN</span>
        <span className="text-[9.5px] tracking-[0.22em] text-sage">36 ACRES · 336 VILLAS</span>
      </div>
      <div className="grid items-end gap-[clamp(24px,4vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <h2 id="master-title" className="display-h2 max-w-[16ch]">A community, drawn in balance.</h2>
        <p className="lead text-moss">
          Roads, greens, and villas flow together across thirty-six acres — every plot placed for light, air, and
          quiet. Request the layout to see plot-level detail.
        </p>
      </div>

      <div className="grid gap-[clamp(14px,1.6vw,22px)] rounded-md bg-forest p-[clamp(14px,1.6vw,22px)]">
        <div className="flex flex-wrap items-center justify-between gap-[18px] px-[clamp(6px,1vw,14px)] pt-1.5 text-cream">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
            <span className="text-[9.5px] tracking-[0.24em] text-cream/[0.72]">MASTER LAYOUT — SHARED ON REQUEST</span>
          </div>
          <button
            type="button"
            onClick={openEnquiry}
            className="rounded-full border border-cream/40 px-[22px] py-3 text-[10px] tracking-[0.2em] text-cream transition-all hover:bg-cream hover:text-forest"
          >
            REQUEST PLOT AVAILABILITY
          </button>
        </div>

        <button
          type="button"
          onClick={openEnquiry}
          className="relative block aspect-[16/10] w-full overflow-hidden rounded bg-sand"
        >
          <Image
            src="https://framerusercontent.com/images/17PMmM2sRL5dUOTLQKWXcCchzs.png?width=2400"
            alt="Subishi Sierra master layout, blurred — available on request"
            fill
            sizes="100vw"
            className="scale-[1.08] object-cover blur-[16px] saturate-[0.9]"
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,43,33,0.42)_0%,rgba(12,43,33,0.66)_100%)]" />
          <span className="absolute inset-0 grid place-content-center justify-items-center gap-4 p-[clamp(20px,3vw,40px)] text-center">
            <span className="grid h-[52px] w-[52px] place-items-center rounded-full border border-cream/50 text-lg text-cream">⌾</span>
            <span className="font-display text-[clamp(24px,3vw,42px)] font-light leading-tight text-cream">
              Master layout available on request
            </span>
            <span className="max-w-[44ch] text-[clamp(13px,1vw,15px)] font-light leading-relaxed text-cream/[0.85]">
              Share a few details and we&apos;ll send the full plan with plot availability.
            </span>
            <span className="mt-1.5 rounded-full bg-cream px-[30px] py-3.5 text-[10px] tracking-[0.22em] text-forest">
              UNLOCK THE PLAN
            </span>
          </span>
        </button>

        <div className="flex flex-wrap gap-[clamp(14px,2vw,32px)] px-[clamp(6px,1vw,14px)] pb-1.5 text-[9.5px] tracking-[0.2em] text-cream/55">
          <span>EAST &amp; WEST FACING</span>
          <span>300 SQYDS · 3600 SFT</span>
          <span>60 FT AVENUES</span>
          <span>4 PARK POCKETS</span>
        </div>
      </div>

      <dl className="m-0 grid gap-px border border-forest/[0.12] bg-forest/[0.12] [grid-template-columns:repeat(auto-fit,minmax(min(50%,200px),1fr))]">
        {ZONES.map((z) => (
          <div key={z.label} className="grid content-start gap-2.5 bg-cream px-[clamp(16px,2vw,26px)] py-[clamp(20px,2.4vw,34px)]">
            <dd className="m-0 font-display text-[clamp(24px,2.4vw,34px)] font-light leading-none">{z.value}</dd>
            <dt className="text-[9.5px] tracking-[0.24em] text-sage">{z.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
