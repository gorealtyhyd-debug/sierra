'use client';

import Image from 'next/image';
import { GALLERY } from '@/lib/data';
import { useEnquiry } from './EnquiryProvider';

export default function Gallery() {
  const { openLightbox } = useEnquiry();
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section-pad grid gap-[clamp(34px,4vw,56px)] bg-sand">
      <div className="section-head">
        <div className="grid gap-[18px]">
          <span className="eyebrow text-sage">GALLERY</span>
          <h2 id="gallery-title" className="display-h2 max-w-[16ch]">A closer look.</h2>
        </div>
        <p className="lead text-moss">
          The elevations, streetscapes, and shared spaces that shape everyday life here.
        </p>
      </div>
      <div className="grid gap-[clamp(14px,1.6vw,22px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {GALLERY.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => openLightbox(src)}
            className="group relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded bg-[#E7DCC2]"
          >
            <Image
              src={src}
              alt={'Subishi Sierra villa community view ' + (i + 1)}
              fill
              sizes="(max-width: 720px) 100vw, 33vw"
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
