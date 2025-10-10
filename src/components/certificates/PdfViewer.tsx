"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Use the CDN worker (falls back if local worker isn't available)
// Use an explicit https URL for the pdf.worker to avoid mixed-protocol failures in some environments.
// Use unpkg which provides a compatible UMD build for the worker.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ src, title }: { src: string; title?: string }) {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState<number>(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(800);

  useEffect(() => {
    setScale(1.0);
    setLoadError(null);
  }, [src]);

  useEffect(() => {
    function update() {
      const w = containerRef.current?.clientWidth || 800;
      setContainerWidth(w);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function onDocumentLoadSuccess({ numPages: n }: { numPages: number }) {
    setNumPages(n);
    setLoadError(null);
  }

  function onDocumentLoadError(error: any) {
    console.error("PdfViewer: document load error", error);
    setLoadError(String(error?.message || error));
  }

  // compute page width based on container and scale; ensures fit-to-width
  const pageWidth = Math.max(200, Math.floor(containerWidth * scale));

  return (
    <div className="w-full h-[88vh] flex flex-col">
      <div className="flex items-center justify-between gap-2 p-2 bg-muted">
        <div className="text-sm font-medium">{title}</div>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded bg-white/10" onClick={() => setScale((s) => Math.max(0.25, +(s - 0.25).toFixed(2)))}>-</button>
          <button className="px-2 py-1 rounded bg-white/10" onClick={() => setScale((s) => Math.min(4, +(s + 0.25).toFixed(2)))}>+</button>
          <button className="px-2 py-1 rounded bg-white/10" onClick={() => setScale(1.0)}>Reset</button>
          <button className="px-2 py-1 rounded bg-white/10" onClick={() => { setScale(1.0); /* fit width is default behavior since we use container width */ }}>Fit width</button>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 overflow-auto bg-white">
        {loadError ? (
          <div className="p-6">
            <div className="text-sm text-red-600">Failed to load PDF file: {loadError}</div>
            <div className="mt-4">Falling back to native viewer.</div>
            <div className="mt-2 h-[70vh]">
              <iframe src={src} title={title} className="w-full h-full border-0" />
            </div>
          </div>
        ) : (
          <Document file={src} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError} loading={<div className="p-6">Loading PDF…</div>}>
            {Array.from(new Array(numPages || 1), (_el, index) => (
              <div key={`page_${index + 1}`} className="flex justify-center py-4">
                <Page pageNumber={index + 1} width={pageWidth} renderAnnotationLayer={false} />
              </div>
            ))}
          </Document>
        )}
      </div>
    </div>
  );
}
