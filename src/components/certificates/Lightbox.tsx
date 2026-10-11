import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
}

export default function Lightbox({ images, index, onChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const isOpen = index !== null && images.length > 0;
  const current = isOpen ? images[index % images.length] : null;
  const hasNav = images.length > 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const step = (direction: number) => {
    if (index === null) return;
    onChange((index + direction + images.length) % images.length);
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox m-auto w-[min(94vw,1100px)] max-w-none overflow-visible bg-transparent p-0"
      aria-label="Certificate image viewer"
      onClose={() => {
        document.documentElement.style.overflow = '';
        onChange(null);
        openerRef.current?.focus();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          dialogRef.current?.close();
          return;
        }
        if (!hasNav) return;
        if (event.key === 'ArrowLeft') step(-1);
        if (event.key === 'ArrowRight') step(1);
      }}
    >
      {current && (
        <div className="relative">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-white">{current.caption}</p>
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-950 shadow-lg transition hover:bg-brand-50"
              aria-label="Close image viewer"
              onClick={() => dialogRef.current?.close()}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[78vh] w-full rounded-xl bg-white object-contain shadow-2xl"
          />
          {hasNav && (
            <div className="mt-3 flex items-center justify-center gap-3">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-950"
                aria-label="Previous image"
                onClick={() => step(-1)}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-950"
                aria-label="Next image"
                onClick={() => step(1)}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
