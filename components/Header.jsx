'use client';

import { useEnquiry } from './EnquiryProvider';

const LINKS = [
  ['#overview', 'OVERVIEW'],
  ['#master-layout', 'MASTER LAYOUT'],
  ['#plans', 'PLANS'],
  ['#amenities', 'AMENITIES'],
  ['#location', 'LOCATION'],
  ['#specifications', 'SPECS'],
  ['#gallery', 'GALLERY']
];

export default function Header() {
  const { openEnquiry } = useEnquiry();
  return (
    <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between gap-6 border-b border-forest/10 bg-cream/[0.82] px-[clamp(20px,4vw,56px)] py-[18px] backdrop-blur-lg backdrop-saturate-150">
      <a href="#top" className="flex flex-none flex-col gap-1">
        <span className="font-display text-[22px] leading-none tracking-[0.34em] text-forest">SUBISHI</span>
        <span className="whitespace-nowrap text-[8.5px] tracking-[0.42em] text-mist">SIERRA · LUXURY VILLAS</span>
      </a>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-[clamp(12px,1.6vw,26px)]">
        <nav aria-label="Primary" className="flex min-w-0 shrink items-center gap-[clamp(12px,1.6vw,26px)] overflow-x-auto py-0.5 [scrollbar-width:none]">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="whitespace-nowrap text-[10.5px] tracking-[0.16em] text-ink">
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={openEnquiry}
          className="flex-none whitespace-nowrap rounded-full bg-forest px-[22px] py-[13px] text-[10.5px] tracking-[0.18em] text-cream transition-all hover:-translate-y-px hover:bg-forest-light"
        >
          ENQUIRY NOW
        </button>
      </div>
    </header>
  );
}
