import { Clock, Hourglass } from 'lucide-react';
import type { UpcomingCourse } from '../../data/comingSoon';
import IconTile from '../ui/IconTile';

export default function ComingSoonCard({ course, delay = 0 }: { course: UpcomingCourse; delay?: number }) {
  return (
    <article className="card relative flex h-full flex-col p-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="flex items-start justify-between gap-3">
        <IconTile icon={course.icon} tone="muted" />
        <span className="badge bg-accent-100 text-accent-800 ring-1 ring-inset ring-accent-200">
          <Hourglass className="h-3.5 w-3.5" aria-hidden="true" />
          Coming Soon
        </span>
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-600">
        <span className="sr-only">Category: </span>
        {course.category}
      </p>
      <h3 className="mt-1.5 text-lg font-extrabold leading-snug">{course.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{course.description}</p>
      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">Key topics</p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {course.topics.map((topic) => (
          <li key={topic} className="chip">
            {topic}
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-6">
        <span className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-600">
          <Clock className="h-4 w-4" aria-hidden="true" />
          Coming Soon
        </span>
      </p>
    </article>
  );
}
