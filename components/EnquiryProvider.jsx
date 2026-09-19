'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import EnquiryModal from './EnquiryModal';
import Lightbox from './Lightbox';

const Ctx = createContext({ openEnquiry: () => {}, openLightbox: () => {} });
export const useEnquiry = () => useContext(Ctx);

export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const openEnquiry = useCallback(() => setOpen(true), []);
  const openLightbox = useCallback((src) => setLightbox(src), []);

  return (
    <Ctx.Provider value={{ openEnquiry, openLightbox }}>
      {children}
      {open && <EnquiryModal onClose={() => setOpen(false)} />}
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </Ctx.Provider>
  );
}
