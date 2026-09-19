'use client';

import { useEffect } from 'react';

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[130] grid cursor-zoom-out place-items-center bg-forest/90 p-[clamp(16px,4vw,64px)] animate-overlayIn"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Enlarged view of Subishi Sierra" className="max-h-full max-w-full rounded object-contain animate-sheetIn" />
    </div>
  );
}
