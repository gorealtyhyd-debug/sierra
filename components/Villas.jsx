import Image from 'next/image';

const VILLAS = [
  {
    src: 'https://framerusercontent.com/images/BXmCJ3Ly1OD1jpQCl9VrLAhQcw.jpg?width=1800',
    alt: 'East facing luxury villa at Subishi Sierra',
    label: 'EAST FACING VILLA'
  },
  {
    src: 'https://framerusercontent.com/images/K8E1wi6nQ0ghcfNXo1B58M4XM.png?width=1800',
    alt: 'West facing luxury villa at Subishi Sierra',
    label: 'WEST FACING VILLA'
  }
];

export default function Villas() {
  return (
    <section aria-labelledby="villas-title" className="section-pad grid gap-[clamp(36px,5vw,72px)]">
      <div className="section-head">
        <div className="grid gap-[18px]">
          <span className="eyebrow text-sage">THE VILLAS</span>
          <h2 id="villas-title" className="display-h2 max-w-[20ch]">Timeless design, quietly confident.</h2>
        </div>
        <p className="lead text-moss">
          Spacious layouts and carefully curated finishes come together to create homes that are both elegant and
          inviting. Every detail has been thoughtfully designed for a lifestyle of effortless luxury.
        </p>
      </div>
      <div className="grid gap-[clamp(18px,2.4vw,32px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        {VILLAS.map((v) => (
          <figure key={v.label} className="m-0 grid gap-3.5">
            <div className="group relative aspect-[16/10] overflow-hidden rounded bg-shell">
              <Image src={v.src} alt={v.alt} fill sizes="(max-width: 780px) 100vw, 50vw" className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.045]" />
            </div>
            <figcaption className="flex justify-between text-[9.5px] tracking-[0.26em] text-mist">
              {v.label} <span>300 SQYDS · 3600 SFT</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
