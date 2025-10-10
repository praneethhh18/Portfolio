"use client";

import { useState, useEffect } from 'react';
import { CERTIFICATE_FILES, CertFile } from '@/lib/certificates';
import { Dialog, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';

export default function CertificationsClient() {
  const certs = CERTIFICATE_FILES;
  const [active, setActive] = useState<CertFile | null>(null);
  // no zoom controls — PDFs will be requested to fit the page inside the iframe
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    // reset gallery index whenever a new certificate is opened
    setGalleryIndex(0);
  }, [active]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c.id} className="p-4 border rounded cursor-pointer" onClick={() => setActive(c)}>
            <div>
              <h4 className="font-bold">{c.title}</h4>
              {c.issuer && <p className="text-sm text-muted-foreground">{c.issuer}</p>}
            </div>
            <div className="mt-3">
              {c.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.path} alt={c.title} className="w-full h-48 object-contain" />
              ) : (
                <div className="h-48 flex items-center justify-center bg-muted text-muted-foreground">View</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => { if (!open) setActive(null); }}>
        <DialogContent className="max-w-2xl w-[90%] p-6">
          {active && (
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <DialogTitle className="text-xl font-bold">{active.title}</DialogTitle>
                  {active.issuer && <p className="text-sm text-muted-foreground">{active.issuer}</p>}
                </div>
                <div>
                  <DialogClose className="text-sm">Close</DialogClose>
                </div>
              </div>

              <div className="mt-4">
                {active.type === 'image' ? (
                  active.gallery && active.gallery.length > 0 ? (
                    <div>
                      <div className="relative">
                        {/* Prev/Next buttons */}
                        <button
                          type="button"
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
                          onClick={() => setGalleryIndex((i) => (i - 1 + (active.gallery!.length)) % active.gallery!.length)}
                          aria-label="previous"
                        >
                          ◀
                        </button>
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
                          onClick={() => setGalleryIndex((i) => (i + 1) % active.gallery!.length)}
                          aria-label="next"
                        >
                          ▶
                        </button>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={active.gallery[galleryIndex]} alt={`${active.title} ${galleryIndex + 1}`} className="w-full max-h-[72vh] object-contain" />
                      </div>
                      {/* thumbnails */}
                      <div className="mt-3 flex gap-2 overflow-x-auto">
                        {active.gallery.map((src, idx) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={src}
                            src={src}
                            alt={`thumb-${idx}`}
                            className={`w-20 h-14 object-cover rounded cursor-pointer border ${idx === galleryIndex ? 'ring-2 ring-primary' : 'opacity-80'}`}
                            onClick={() => setGalleryIndex(idx)}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={active.path} alt={active.title} className="w-full max-h-[80vh] object-contain" />
                  )
                ) : (
                  <div className="w-full h-[80vh]">
                    {/* Append a PDF fragment to request a zoom in supporting viewers. */}
                    <iframe
                      src={`${active.path}#zoom=page-fit&view=FitH`}
                      title={active.title}
                      className="w-full h-full border-0"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
