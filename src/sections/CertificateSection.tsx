import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { certificateEligibility } from '../data/content';
import CheckList from '../components/ui/CheckList';
import Notice from '../components/ui/Notice';
import Lightbox, { type LightboxImage } from '../components/certificates/Lightbox';

const sample: LightboxImage = {
  src: '/assets/certificates/certificate1.svg',
  alt: 'Sample Certificate of Completion from Digital Skills Academy for the Digital Marketing course',
  caption: 'Sample Certificate — Digital Marketing',
};

export default function CertificateSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="certificate" className="section" aria-labelledby="certificate-heading">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="eyebrow">Certification</span>
            <h2 id="certificate-heading" className="section-title">
              Course Completion Certificate
            </h2>
          </div>
          <div className="mt-6 space-y-6" data-aos="fade-up" data-aos-delay="80">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Learners who successfully complete their enrolled course and fulfill the applicable course requirements will
              receive a Course Completion Certificate from Digital Skills Academy.
            </p>
            <div>
              <p className="font-bold text-brand-950">Certificate eligibility may depend on:</p>
              <CheckList items={certificateEligibility} className="mt-3" />
            </div>
            <Notice variant="info" title="Important Disclaimer">
              <p className="mt-1">The certificate recognizes successful completion of the training program.</p>
              <p className="mt-1">
                It does not by itself represent a government license, academic degree, professional qualification or
                guarantee of employment.
              </p>
            </Notice>
          </div>
          <div className="mt-8" data-aos="fade-up">
            <Link to="/certificates" className="btn btn-outline">
              View certificate gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-brand-100 via-white to-accent-100 sm:-inset-5"
              aria-hidden="true"
            />
            <figure className="relative" data-aos="zoom-in-up">
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-soft transition hover:shadow-lift sm:p-3"
                aria-label={`View larger image: ${sample.caption}`}
                onClick={() => setOpen(0)}
              >
                <img
                  src={sample.src}
                  width={1500}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  alt={sample.alt}
                  className="aspect-[3/2] w-full rounded-xl object-contain"
                />
                <span
                  className="absolute inset-2 flex items-center justify-center rounded-xl bg-brand-950/0 opacity-0 transition group-hover:bg-brand-950/40 group-hover:opacity-100 group-focus-visible:bg-brand-950/40 group-focus-visible:opacity-100 sm:inset-3"
                  aria-hidden="true"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-950 shadow-lg">
                    <ZoomIn className="h-4 w-4" />
                    View larger
                  </span>
                </span>
              </button>
              <figcaption className="mt-3 text-center text-sm font-semibold text-slate-600">{sample.caption}</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Lightbox images={[sample]} index={open} onChange={setOpen} />
    </section>
  );
}
