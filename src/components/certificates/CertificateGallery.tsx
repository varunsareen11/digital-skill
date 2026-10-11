import { useState } from 'react';
import { certificateAlt } from '../../data/certificates';
import Lightbox from './Lightbox';
import { useCertificates } from './useCertificates';

export default function CertificateGallery() {
  const { visible, images, markMissing } = useCertificates();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="mt-12 flex flex-wrap justify-center gap-6">
        {visible.map((certificate, index) => (
          <li
            key={certificate.image}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            data-aos="fade-up"
            data-aos-delay={(index % 4) * 60}
          >
            <button
              type="button"
              className="group block h-full w-full rounded-2xl border border-slate-200 bg-white p-2 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-300"
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
              <span className="flex items-center justify-between gap-2 px-2 pb-1 pt-3">
                <span className="text-sm font-bold text-brand-950">{certificate.caption}</span>
                <span className="shrink-0 text-xs font-semibold text-slate-500 group-hover:text-accent-700">View</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={images} index={openIndex} onChange={setOpenIndex} />
    </>
  );
}
