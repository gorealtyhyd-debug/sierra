'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AMENITIES, FEATURED } from '@/lib/data';

const pad = (n) => (n < 10 ? '0' + n : String(n));

export default function Amenities() {
  const [i, setI] = useState(0);
  const active = FEATURED[i];

  return (
    <section id="amenities" aria-labelledby="amenities-title" className="section-pad grid gap-[clamp(34px,4vw,64px)]">
      <div className="section-head">
        <div className="grid gap-[18px]">
          <span className="eyebrow text-sage">AMENITIES</span>
          <h2 id="amenities-title" className="display-h2 max-w-[16ch]">Live exceptionally.</h2>
        </div>
        <p className="lead text-moss">
          From the clubhouse to the fitness center, every space encourages balance, wellness, and connection — the
          gentle heart of the community.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-lg bg-shell shadow-[0_30px_70px_-40px_rgba(12,43,33,0.55)]">
        <div className="relative aspect-video min-h-[340px]">
          {FEATURED.map((a, idx) => (
            <Image
              key={a.tab}
              src={a.img}
              alt={a.title + ' at Subishi Sierra'}
              fill
              sizes="100vw"
              priority={idx === 0}
              className={'object-cover transition-opacity duration-700 ' + (idx === i ? 'opacity-100' : 'opacity-0')}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,43,33,0.42)_0%,rgba(12,43,33,0)_34%,rgba(12,43,33,0.86)_100%)]" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 grid gap-3.5 p-[clamp(20px,3.4vw,52px)]">
            <span className="justify-self-start rounded-full border border-gold-light/70 px-4 py-2 text-[9.5px] tracking-[0.26em] text-[#E4D6AE]">
              SIGNATURE AMENITY
            </span>
            <h3 className="m-0 font-display text-[clamp(28px,4vw,58px)] font-light leading-[1.04] text-cream">{active.title}</h3>
            <p className="m-0 max-w-[56ch] text-[clamp(13.5px,1.05vw,16px)] font-light leading-relaxed text-cream/90">{active.text}</p>
          </div>

          <div className="absolute right-[clamp(16px,2vw,28px)] top-[clamp(16px,2vw,28px)] rounded-full bg-forest/[0.72] px-4 py-[9px] text-[10px] tracking-[0.2em] text-cream">
            {pad(i + 1)} / {pad(FEATURED.length)}
          </div>

          <button
            type="button"
            aria-label="Previous amenity"
            onClick={() => setI((i + FEATURED.length - 1) % FEATURED.length)}
            className="absolute left-[clamp(12px,2vw,26px)] top-1/2 h-[clamp(46px,4vw,62px)] w-[clamp(46px,4vw,62px)] -translate-y-1/2 rounded-full border border-cream/35 bg-forest/55 text-lg text-cream backdrop-blur transition-colors hover:bg-forest"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next amenity"
            onClick={() => setI((i + 1) % FEATURED.length)}
            className="absolute right-[clamp(12px,2vw,26px)] top-1/2 h-[clamp(46px,4vw,62px)] w-[clamp(46px,4vw,62px)] -translate-y-1/2 rounded-full border border-cream/35 bg-forest/55 text-lg text-cream backdrop-blur transition-colors hover:bg-forest"
          >
            →
          </button>
        </div>

        <div className="flex flex-wrap gap-px bg-forest/[0.14]">
          {FEATURED.map((a, idx) => (
            <button
              key={a.tab}
              type="button"
              onClick={() => setI(idx)}
              aria-current={idx === i}
              className="flex flex-1 basis-[140px] items-center justify-center gap-2.5 bg-cream px-3.5 py-4 transition-colors hover:bg-[#F0E6CE]"
            >
              <span className="text-[9px] tracking-[0.16em] text-[#A9B5AB]">{pad(idx + 1)}</span>
              <span className="whitespace-nowrap text-[10.5px] tracking-[0.16em] text-ink">{a.tab}</span>
            </button>
          ))}
        </div>
      </div>

      <ul className="m-0 flex list-none flex-wrap gap-2.5 border-t border-forest/[0.16] p-0 pt-[clamp(24px,3vw,40px)]">
        {AMENITIES.map((a) => (
          <li key={a} className="rounded-full border border-forest/20 px-5 py-[11px] text-[11px] font-light tracking-[0.08em] text-ink">
            {a}
          </li>
        ))}
      </ul>
    </section>
  );
}
