import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { finalCtaHighlights } from '../data/content';

/** Use `withTopPadding` when the section above has a background colour, so the card does not touch it. */
export default function FinalCta({ withTopPadding = false }: { withTopPadding?: boolean }) {
  return (
    <section
      className={`pb-16 sm:pb-20 lg:pb-24 ${withTopPadding ? 'pt-16 sm:pt-20 lg:pt-24' : ''}`}
      aria-labelledby="final-cta-heading"
    >
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900 px-6 py-14 text-center sm:px-12 lg:py-20"
          data-aos="zoom-in-up"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:44px_44px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl">
            <h2
              id="final-cta-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Start Learning. Start Creating. <span className="text-accent-400">Start Growing.</span>
            </h2>
            <p className="mt-5 text-lg text-brand-100">Build practical digital skills with Digital Skills Academy.</p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Highlights">
              {finalCtaHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/courses" className="btn btn-white btn-lg">
                Explore Courses
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link to="/apply" className="btn btn-primary btn-lg">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
