import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Phone, Wrench } from 'lucide-react';
import { phoneHref, site } from '../data/site';
import IconTile from '../components/ui/IconTile';

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="section bg-gradient-to-b from-white via-brand-50/50 to-white"
      aria-labelledby="founder-heading"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none" data-aos="fade-right">
          <div
            className="absolute -inset-3 rotate-2 rounded-[2.25rem] bg-gradient-to-br from-accent-300 via-accent-100 to-brand-300 sm:-inset-4"
            aria-hidden="true"
          />
          <img
            src="/assets/founder-placeholder.svg"
            width={600}
            height={800}
            loading="lazy"
            decoding="async"
            alt={`Placeholder for a photo of ${site.founder}`}
            className="relative aspect-[3/4] w-full rounded-[1.75rem] object-cover shadow-lift"
          />
          <figcaption className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-lift backdrop-blur sm:left-6 sm:right-auto sm:min-w-[16rem]">
            <span className="block text-base font-extrabold text-brand-950">{site.founder}</span>
            <span className="block text-sm text-slate-600">Founder — {site.name}</span>
          </figcaption>
        </figure>
        <div className="pt-6 lg:col-span-7 lg:pt-0">
          <div data-aos="fade-up">
            <span className="eyebrow">Meet the Founder</span>
            <h2 id="founder-heading" className="section-title">
              {site.founder}
            </h2>
            <p className="mt-2 text-lg font-bold text-accent-700">Founder — {site.name}</p>
          </div>
          <div
            className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <p>
              Digital Skills Academy was founded with the vision of making practical digital education accessible
              and affordable.
            </p>
            <p>
              The academy focuses on helping learners move beyond theoretical knowledge and develop practical skills that
              can be applied in real-world situations.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="140">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <IconTile icon={Lightbulb} tone="accent" className="h-10 w-10" iconClassName="h-5 w-5" />
              <span className="text-sm font-bold text-brand-950">Practical, accessible digital education</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <IconTile icon={Wrench} tone="brand" className="h-10 w-10" iconClassName="h-5 w-5" />
              <span className="text-sm font-bold text-brand-950">Skills applied in real-world situations</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="180">
            <Link to="/contact" className="btn btn-secondary">
              Contact the Academy
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={phoneHref} className="btn btn-outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
