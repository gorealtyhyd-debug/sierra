'use client';

import { useEnquiry } from './EnquiryProvider';

export default function Footer() {
  const { openEnquiry } = useEnquiry();
  return (
    <footer className="grid gap-[clamp(36px,4vw,60px)] bg-forest px-[clamp(20px,5vw,72px)] pb-[34px] pt-[clamp(56px,7vw,110px)] text-cream">
      <div className="grid items-start gap-[clamp(30px,4vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        <div className="grid content-start gap-4">
          <span className="font-display text-[clamp(26px,2.6vw,34px)] font-light tracking-[0.3em]">SUBISHI</span>
          <span className="text-[10px] tracking-[0.36em] text-cream/75">SIERRA · MAHESHWARAM ROAD</span>
        </div>
        <nav aria-label="Footer" className="grid content-start gap-4 text-[15px] font-light">
          <a href="#top" className="text-cream/[0.86] hover:text-cream">Home</a>
          <a href="https://subishi.com/luxury-villas-and-apartments/" target="_blank" rel="noopener noreferrer" className="text-cream/[0.86] hover:text-cream">All projects</a>
          <a href="#map" className="text-cream/[0.86] hover:text-cream">Visit the site</a>
          <button type="button" onClick={openEnquiry} className="justify-self-start text-cream/[0.86] hover:text-cream">Contact us</button>
        </nav>
        <div className="grid content-start justify-items-start gap-6">
          <p className="m-0 max-w-[38ch] text-[15px] font-light leading-relaxed text-cream/[0.86]">
            Last few villas available. Talk to our sales team about pricing and payment options.
          </p>
          <button
            type="button"
            onClick={openEnquiry}
            className="rounded-full border border-cream/45 px-8 py-4 text-[11px] tracking-[0.22em] text-cream transition-all hover:bg-cream hover:text-forest"
          >
            ENQUIRY NOW
          </button>
        </div>
      </div>
      <div className="grid gap-5 border-t border-cream/20 pt-[26px]">
        <div className="flex flex-wrap items-center justify-between gap-x-[34px] gap-y-4 text-[11px] tracking-[0.14em] text-cream/75">
          <span>© 2026 Subishi Engineers. All rights reserved.</span>
          <span>TG RERA P02400011199</span>
        </div>
        <p className="m-0 max-w-[110ch] text-[11.5px] font-light leading-relaxed text-cream/[0.72]">
          Disclaimer: This website is meant only for information purposes. It should not be considered/ claimed as an
          official site. This website belongs to authorized channel partner.
        </p>
      </div>
    </footer>
  );
}
