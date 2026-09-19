'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PLANS } from '@/lib/data';
import { useEnquiry } from './EnquiryProvider';

export default function Plans() {
  const [facing, setFacing] = useState('East');
  const { openLightbox } = useEnquiry();

  return (
    <section id="plans" aria-labelledby="plans-title" className="section-pad grid gap-[clamp(34px,4vw,60px)] bg-sand">
      <div className="grid max-w-[60ch] gap-[18px]">
        <span className="eyebrow text-sage">FLOOR PLANS</span>
        <h2 id="plans-title" className="display-h2">East &amp; west facing</h2>
        <p className="lead text-moss">
          Generously proportioned residences of 300 square yards and 3,600 square feet, drawn across three considered
          floors.
        </p>
      </div>

      <div role="tablist" aria-label="Villa orientation" className="flex flex-wrap gap-2.5">
        {['East', 'West'].map((f) => {
          const active = facing === f;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => setFacing(f)}
              className={
                'pill border px-[26px] py-[13px] ' +
                (active
                  ? 'border-forest bg-forest text-cream'
                  : 'border-forest/20 bg-transparent text-forest hover:border-forest')
              }
            >
              {f.toUpperCase()} FACING
            </button>
          );
        })}
      </div>

      <div className="grid gap-[clamp(18px,2.4vw,32px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        {PLANS[facing].map((p) => (
          <figure key={p.floor} className="m-0 grid gap-3.5">
            <button
              type="button"
              onClick={() => openLightbox(p.src)}
              className="relative grid aspect-square cursor-zoom-in place-items-center rounded border border-forest/10 bg-cream p-[clamp(16px,2vw,28px)]"
            >
              <Image src={p.src} alt={p.alt} width={1600} height={1600} sizes="(max-width: 720px) 100vw, 33vw" className="h-full w-full object-contain" />
            </button>
            <figcaption className="text-[9.5px] tracking-[0.26em] text-mist">{p.floor}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
