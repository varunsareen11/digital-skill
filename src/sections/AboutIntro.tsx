import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutParagraphs, aboutSteps, missionVision } from '../data/content';
import IconTile from '../components/ui/IconTile';

export default function AboutIntro({ showLearnMore = true }: { showLearnMore?: boolean }) {
  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="eyebrow">About the Academy</span>
            <h2 id="about-heading" className="section-title">
              Empowering People Through Digital Skills
            </h2>
          </div>
          <div
            className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {showLearnMore && (
            <div className="mt-8" data-aos="fade-up" data-aos-delay="120">
              <Link to="/about" className="btn btn-outline">
                Learn more about us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
        <div className="lg:pt-12">
          <div className="grid gap-5 sm:grid-cols-2">
            {missionVision.map((item, index) => (
              <article
                key={item.title}
                className="card card-hover relative overflow-hidden p-7 sm:p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 ${
                    item.tone === 'accent' ? 'bg-accent-100' : 'bg-brand-100'
                  }`}
                  aria-hidden="true"
                />
                <IconTile icon={item.icon} tone={item.tone} className="relative" />
                <h3 className="relative mt-5 text-xl font-extrabold">{item.title}</h3>
                <p className="relative mt-3 leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3" data-aos="fade-up" data-aos-delay="150">
            {aboutSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-4 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-700">Step {index + 1}</p>
                <p className="mt-1 text-sm font-bold text-brand-950">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
