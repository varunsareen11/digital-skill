import { Info } from 'lucide-react';
import { learningBenefits } from '../data/content';
import IconTile from '../components/ui/IconTile';
import Notice from '../components/ui/Notice';

export default function BenefitsSection({ muted = false }: { muted?: boolean }) {
  return (
    <section className={`section ${muted ? 'bg-slate-50/80' : ''}`} aria-labelledby="benefits-heading">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="eyebrow">Course Benefits</span>
            <h2 id="benefits-heading" className="section-title">
              What Your Learning Can Include
            </h2>
            <p className="section-lead">Depending on the individual course, learners may receive the following benefits.</p>
          </div>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
            <Notice variant="warn" icon={Info} title="Course benefits may vary by program.">
              <p>Please check the details of your chosen course or contact us before enrolling.</p>
            </Notice>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {learningBenefits.map((item, index) => (
            <li
              key={item.title}
              className="card card-hover flex items-center gap-4 p-4 sm:p-5"
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 50}
            >
              <IconTile icon={item.icon} tone={item.tone} className="h-11 w-11" iconClassName="h-5 w-5" />
              <span className="font-bold text-brand-950">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
