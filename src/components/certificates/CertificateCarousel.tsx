import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { certificateAlt } from '../../data/certificates';
import Lightbox from './Lightbox';
import { useCertificates } from './useCertificates';

export default function CertificateCarousel() {
  const { visible, images, markMissing } = useCertificates();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [scroll, setScroll] = useState({ atStart: true, atEnd: true });

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setScroll({ atStart: track.scrollLeft <= 4, atEnd: track.scrollLeft >= max - 4 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, [update, visible.length]);

  const step = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: reduced ? 'auto' : 'smooth' });
  };

  const fitsWithoutScrolling = scroll.atStart && scroll.atEnd;

  return (
    <div className="relative mt-12" data-aos="fade-up">
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-lg font-extrabold text-white sm:text-xl">Certificates from Digital Skills Academy</h3>
        <div className={`hidden shrink-0 gap-2 sm:flex ${fitsWithoutScrolling ? 'invisible' : ''}`}>
          <button
            type="button"
            className="carousel-btn"
            aria-label="Previous certificates"
            disabled={scroll.atStart}
            onClick={() => step(-1)}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="carousel-btn"
            aria-label="Next certificates"
            disabled={scroll.atEnd}
            onClick={() => step(1)}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul
        ref={trackRef}
        onScroll={update}
        className="no-scrollbar -mx-6 mt-5 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0 lg:gap-5"
      >
        {visible.map((certificate, index) => (
          <li
            key={certificate.image}
            className="w-[80%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.84rem)] xl:w-[calc(25%-0.94rem)]"
          >
            <button
              type="button"
              className="group block h-full w-full rounded-2xl bg-white p-2 text-left shadow-lg transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-400"
              onClick={() => setOpenIndex(index)}
            >
              <img
                src={certificate.image}
                alt={certificateAlt}
                loading="lazy"
                decoding="async"
                onError={() => markMissing(certificate.image)}
                className="aspect-[4/3] w-full rounded-xl bg-slate-50 object-contain"
              />
              <span className="block px-2 pb-1 pt-3 text-sm font-bold text-brand-950">{certificate.caption}</span>
            </button>
          </li>
        ))}
      </ul>
      {!fitsWithoutScrolling && (
        <p className="mt-3 text-xs text-brand-100/70 sm:hidden" aria-hidden="true">
          Swipe to see more →
        </p>
      )}
      <div className="mt-5 text-center sm:text-left">
        <Link to="/certificates" className="text-sm font-bold text-accent-300 underline-offset-4 hover:underline">
          View all certificates →
        </Link>
      </div>
      <Lightbox images={images} index={openIndex} onChange={setOpenIndex} />
    </div>
  );
}
