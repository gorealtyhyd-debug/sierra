'use client';

import { useEffect, useState } from 'react';

export default function EnquiryModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enquire about Subishi Sierra"
      className="fixed inset-0 z-[120] grid place-items-center bg-forest/55 p-[clamp(12px,3vw,40px)] backdrop-blur-md animate-overlayIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-[min(920px,100%)] overflow-y-auto rounded-md bg-cream p-[clamp(26px,4vw,56px)] animate-sheetIn"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-[clamp(18px,2.4vw,30px)] top-[clamp(18px,2.4vw,30px)] h-[46px] w-[46px] rounded-full border border-forest/20 text-base text-forest transition-all hover:bg-forest hover:text-cream"
        >
          ✕
        </button>

        <div className="mb-[clamp(26px,3vw,42px)] grid gap-1.5">
          <span className="font-display text-[clamp(26px,3vw,38px)] leading-none tracking-[0.3em]">SUBISHI</span>
          <span className="text-[9.5px] tracking-[0.4em] text-mist">SIERRA · LUXURY VILLAS</span>
        </div>

        {submitted ? (
          <div className="grid gap-4 py-[clamp(30px,5vw,64px)]">
            <h2 className="m-0 font-display text-[clamp(26px,3.4vw,44px)] font-light leading-tight">
              Thank you — we&apos;ll be in touch.
            </h2>
            <p className="m-0 max-w-[46ch] text-[15px] font-light leading-relaxed text-moss">
              A Subishi relationship manager will reach out shortly to arrange your site visit at Sierra.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="pill mt-2.5 justify-self-start bg-forest px-[30px] py-[15px] text-cream"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="grid gap-[22px]"
          >
            <label className="grid gap-2.5">
              <span className="field-label">NAME</span>
              <input type="text" name="name" required placeholder="Your full name" className="field" />
            </label>
            <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
              <label className="grid gap-2.5">
                <span className="field-label">NUMBER</span>
                <input type="tel" name="phone" required placeholder="Contact number" className="field" />
              </label>
              <label className="grid gap-2.5">
                <span className="field-label">MAIL</span>
                <input type="email" name="email" placeholder="you@example.com" className="field" />
              </label>
            </div>
            <label className="grid gap-2.5">
              <span className="field-label">UNIT TYPE</span>
              <select name="unit" className="field appearance-none">
                <option>East facing villa · 300 sq. yd · 3600 sft</option>
                <option>West facing villa · 300 sq. yd · 3600 sft</option>
                <option>Not decided yet</option>
              </select>
            </label>
            <label className="grid gap-2.5">
              <span className="field-label">BUDGET RANGE</span>
              <select name="budget" className="field appearance-none">
                <option>Less than ₹3 Cr</option>
                <option>₹3 Cr – ₹4 Cr</option>
                <option>₹4 Cr – ₹5 Cr</option>
                <option>Above ₹5 Cr</option>
              </select>
            </label>
            <label className="grid gap-2.5">
              <span className="field-label">MESSAGE</span>
              <textarea name="message" rows={4} placeholder="Anything you'd like us to know" className="field resize-y" />
            </label>
            <button
              type="submit"
              className="mt-1.5 rounded-full bg-forest p-6 text-[11px] tracking-[0.26em] text-cream transition-colors hover:bg-forest-light"
            >
              SUBMIT ENQUIRY
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
