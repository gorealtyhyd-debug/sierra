export default function MapSection() {
  return (
    <section id="map" aria-labelledby="map-title" className="grid gap-[clamp(24px,3vw,40px)] px-[clamp(20px,5vw,72px)] py-[clamp(56px,7vw,110px)]">
      <div className="grid items-end gap-[clamp(24px,4vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div className="grid gap-[18px]">
          <span className="eyebrow text-sage">GETTING HERE</span>
          <h2 id="map-title" className="display-h2 max-w-[16ch]">ORR Exit 15 to Sierra.</h2>
        </div>
        <p className="lead text-moss">
          A straight run down Maheshwaram Road — roughly 15 minutes from ORR Exit 15 to the gates at Kalwakole.
        </p>
      </div>
      <div className="overflow-hidden rounded-md border border-forest/[0.16] bg-sand">
        <div className="flex flex-wrap gap-[clamp(16px,3vw,48px)] border-b border-forest/[0.14] bg-cream px-[clamp(18px,2.4vw,32px)] py-[clamp(18px,2vw,26px)]">
          <div className="flex min-w-0 items-start gap-3.5">
            <span className="mt-[5px] h-[9px] w-[9px] flex-none rounded-full border-[1.5px] border-forest" />
            <span className="text-[13.5px] font-light text-ink">ORR Exit 15, 693X+FC, Chinna Golconda</span>
          </div>
          <div className="flex min-w-0 items-start gap-3.5">
            <span className="mt-1 h-[11px] w-[9px] flex-none rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-forest" />
            <address className="not-italic text-[13.5px] font-light text-ink">Subishi Sierra, 48RJ+97, Kalwakole, Telangana</address>
          </div>
          <a
            href="https://www.google.com/maps/dir/ORR+Exit+15,+Hyderabad/Subishi+Sierra,+Kalwakole,+Telangana"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto self-center whitespace-nowrap rounded-full bg-forest px-[22px] py-3 text-[10px] tracking-[0.2em] text-cream transition-colors hover:bg-forest-light hover:text-cream"
          >
            OPEN IN MAPS ↗
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps?q=Subishi+Sierra,+Kalwakole,+Telangana&t=k&z=14&output=embed"
          title="Map showing the location of Subishi Sierra at Kalwakole, Telangana"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[min(70vh,620px)] w-full border-0"
        />
      </div>
    </section>
  );
}
