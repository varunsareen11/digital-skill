import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { howItWorks } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';

export default function StepsSection({ muted = false }: { muted?: boolean }) {
  return (
    <section className={`section ${muted ? 'bg-slate-50/80' : ''}`} aria-labelledby="steps-heading">
      <div className="container-page">
        <SectionHeading id="steps-heading" eyebrow="How It Works" title="Simple 4-Step Learning Journey" center />
        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <li
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-brand-200 lg:block"
            aria-hidden="true"
          />
          {howItWorks.map((step, index) => (
            <li key={step.number} className="relative" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="flex h-full flex-col items-center text-center">
                <span
                  className={`relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-lift ring-8 ${
                    muted ? 'ring-slate-50' : 'ring-white'
                  }`}
                >
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="card mt-5 w-full flex-1 p-6">
                  <p className="text-sm font-extrabold tracking-widest text-accent-700">{step.number}</p>
                  <h3 className="mt-1 text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap justify-center gap-3" data-aos="fade-up">
          <Link to="/courses#courses" className="btn btn-outline">
            Choose your course
          </Link>
          <Link to="/apply" className="btn btn-primary">
            Apply Online
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
