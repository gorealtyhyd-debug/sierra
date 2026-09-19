'use client';

import Image from 'next/image';
import { useEnquiry } from './EnquiryProvider';

export default function Hero() {
  const { openEnquiry } = useEnquiry();
  return (
    <section id="top" className="relative grid min-h-[88vh] grid-rows-[1fr_auto] pt-[120px]">
      <Image
        src="https://framerusercontent.com/images/BXmCJ3Ly1OD1jpQCl9VrLAhQcw.jpg?width=2400"
        alt="Subishi Sierra luxury villa elevation at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,43,33,0.72)_0%,rgba(12,43,33,0.58)_45%,rgba(12,43,33,0.88)_100%)]" />
      <div className="relative flex flex-col justify-end gap-[clamp(18px,3vw,30px)] p-[clamp(24px,5vw,72px)]">
        <p className="m-0 inline-flex items-center gap-2.5 self-start rounded-full border border-cream/40 px-4 py-[9px] text-[9.5px] tracking-[0.24em] text-cream">
          <span className="h-[5px] w-[5px] rounded-full bg-gold-light" />
          TG RERA No. P02400011199
        </p>
        <h1 className="m-0 max-w-[16ch] font-display text-[clamp(38px,7.2vw,104px)] font-light leading-[0.96] tracking-tight text-cream [text-wrap:balance]">
          Crafted for elevated living.
        </h1>
        <div className="flex flex-wrap items-end justify-between gap-7 border-t border-cream/25 pt-[22px]">
          <p className="m-0 max-w-[46ch] text-[clamp(14px,1.15vw,17px)] font-light leading-relaxed text-cream/[0.86]">
            A 36-acre community of 336 luxury villas near Maheshwaram Road, Hyderabad — timeless design, spacious
            layouts, and carefully curated finishes.
          </p>
          <div className="flex items-center gap-[18px]">
            <button
              type="button"
              onClick={openEnquiry}
              className="rounded-full bg-cream px-[30px] py-4 text-[10.5px] tracking-[0.22em] text-forest transition-transform hover:-translate-y-0.5"
            >
              ENQUIRY NOW
            </button>
            <div className="flex items-center gap-2.5 text-[9.5px] tracking-[0.24em] text-cream/70">
              <span className="block h-[26px] w-px bg-cream/45 animate-scrollcue" />
              SCROLL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
