import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheck, Globe } from 'lucide-react';
import { onlineBenefits } from '../data/content';
import IconTile from '../components/ui/IconTile';

export default function LearnOnlineSection() {
  return (
    <section className="section bg-gradient-to-br from-brand-50 via-white to-accent-50/60" aria-labelledby="online-heading">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="eyebrow">100% Online</span>
            <h2 id="online-heading" className="section-title">
              Learn From Anywhere
            </h2>
            <p className="section-lead">All courses are delivered through 100% online classes.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="80">
            <Link to="/courses" className="btn btn-secondary">
              Browse courses
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="card p-6 sm:p-8" data-aos="fade-up" data-aos-delay="80">
          <div className="flex items-center gap-3">
            <IconTile icon={Globe} tone="brand" />
            <h3 className="text-xl font-extrabold">Online Learning Benefits</h3>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {onlineBenefits.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
