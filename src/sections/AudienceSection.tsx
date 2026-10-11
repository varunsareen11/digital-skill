import { Info } from 'lucide-react';
import { audience } from '../data/content';
import IconTile from '../components/ui/IconTile';
import SectionHeading from '../components/ui/SectionHeading';

export default function AudienceSection() {
  return (
    <section className="section" aria-labelledby="audience-heading">
      <div className="container-page">
        <SectionHeading
          id="audience-heading"
          eyebrow="Who Can Join?"
          title="Who Can Join Our Courses?"
          lead="Our courses are suitable for:"
          center
        />
        <ul className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((item, index) => (
            <li
              key={item.title}
              className={`card card-hover flex items-center gap-4 p-4 ${
                index === audience.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 50}
            >
              <IconTile icon={item.icon} tone={item.tone} className="h-11 w-11" iconClassName="h-5 w-5" />
              <span className="font-bold text-brand-950">{item.title}</span>
            </li>
          ))}
        </ul>
        <p
          className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-center text-sm font-semibold text-emerald-800"
          data-aos="fade-up"
        >
          <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
          No prior experience is required for selected beginner-level courses.
        </p>
      </div>
    </section>
  );
}
