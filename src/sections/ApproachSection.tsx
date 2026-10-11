import CertificateCarousel from '../components/certificates/CertificateCarousel';
import LearningJourney from './LearningJourney';

export default function ApproachSection({ showCertificates = false }: { showCertificates?: boolean }) {
  return (
    <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="brand-message-heading">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:22px_22px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-500/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl text-center" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent-300">
              Our Approach
            </span>
            <h2
              id="brand-message-heading"
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              We Don't Just Give Certificates.{' '}
              <span className="text-accent-400">We Help You Build Skills and Gain Experience.</span>
            </h2>
            <p className="sr-only">
              Learning journey: Learn, Practice, Complete, Certificate, Internship Opportunity, Career Preparation.
            </p>
          </div>
          {showCertificates && <CertificateCarousel />}
          <div className="relative mt-14">
            <LearningJourney tone="dark" />
          </div>
          <p className="relative mt-8 text-center text-sm text-brand-100/80" data-aos="fade-up">
            * Internship opportunity for eligible learners, subject to the applicable requirements and availability.
            Internships and jobs are not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
