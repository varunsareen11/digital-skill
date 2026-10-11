import { ChevronRight } from 'lucide-react';
import { learningJourney } from '../data/content';

/** The 6-step journey. "dark" sits inside the Our Approach panel; "light" is used on the internship page. */
export default function LearningJourney({ tone }: { tone: 'dark' | 'light' }) {
  const dark = tone === 'dark';
  return (
    <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6" aria-label="Learning journey">
      {learningJourney.map((step, index) => (
        <li key={step.title} className="relative" data-aos="fade-up" data-aos-delay={index * 60}>
          <div
            className={`flex h-full flex-col items-center rounded-2xl border p-4 text-center ${
              dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-soft'
            }`}
          >
            <span className={`text-[11px] font-bold tracking-widest ${dark ? 'text-accent-300' : 'text-accent-700'}`}>
              STEP {index + 1}
            </span>
            <span
              className={`mt-2 inline-flex h-12 w-12 items-center justify-center rounded-full ${
                dark ? 'bg-white text-brand-900' : 'bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100'
              }`}
            >
              <step.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className={`mt-3 text-sm font-extrabold leading-snug ${dark ? 'text-white' : 'text-brand-950'}`}>
              {step.title}
              {step.footnote && <span aria-hidden="true">*</span>}
            </span>
          </div>
          {index < learningJourney.length - 1 && (
            <span
              className={`absolute -right-[1.15rem] top-1/2 z-10 hidden -translate-y-1/2 lg:block ${
                dark ? 'text-accent-400' : 'text-accent-500'
              }`}
              aria-hidden="true"
            >
              <ChevronRight className="h-5 w-5" />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
