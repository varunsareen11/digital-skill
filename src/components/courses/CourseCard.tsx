import { Link } from 'react-router-dom';
import { Check, ChevronDown, Clock } from 'lucide-react';
import { applyPath, coursePath, type Course } from '../../data/courses';
import IconTile from '../ui/IconTile';

interface CourseCardProps {
  course: Course;
  /** "summary" shows 4 key skills; "detailed" shows the full curriculum and expandable outcomes. */
  variant?: 'summary' | 'detailed';
  delay?: number;
}

const KEY_SKILLS_SHOWN = 4;

export default function CourseCard({ course, variant = 'summary', delay = 0 }: CourseCardProps) {
  const detailed = variant === 'detailed';
  const skills = detailed ? course.curriculum : course.curriculum.slice(0, KEY_SKILLS_SHOWN);
  const hiddenCount = course.curriculum.length - skills.length;

  return (
    <article className="card card-hover group flex h-full flex-col p-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="flex items-start justify-between gap-4">
        <IconTile icon={course.icon} tone={course.tone} className="transition duration-300 group-hover:scale-110" />
        <span className="badge bg-brand-50 text-brand-800 ring-1 ring-inset ring-brand-100">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span>
            <span className="sr-only">Duration: </span>
            {course.duration}
          </span>
        </span>
      </div>
      <h3 className="mt-5 text-xl font-extrabold">
        <Link to={coursePath(course)} className="rounded hover:text-brand-700">
          {course.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{course.description}</p>
      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
        {detailed ? "What you'll learn" : 'Key skills'}
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li key={skill} className="chip">
            {skill}
          </li>
        ))}
        {hiddenCount > 0 && <li className="chip border-dashed bg-white text-slate-500">+{hiddenCount} more</li>}
      </ul>
      {detailed && (
        <details className="group/out mt-5 rounded-xl border border-slate-200 bg-slate-50/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-bold text-brand-900 [&::-webkit-details-marker]:hidden">
            Course outcomes
            <ChevronDown className="h-4 w-4 transition group-open/out:rotate-180" aria-hidden="true" />
          </summary>
          <div className="px-4 pb-4 text-sm text-slate-600">
            <p className="mb-3 font-semibold text-slate-700">{course.outcomesIntro}</p>
            <ul className="check-list !space-y-2">
              {course.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </details>
      )}
      <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
        <Link to={coursePath(course)} className="btn btn-outline btn-sm" aria-label={`View course: ${course.title}`}>
          View Course
        </Link>
        <Link to={applyPath(course)} className="btn btn-primary btn-sm" aria-label={`Apply now for ${course.title}`}>
          Apply Now
        </Link>
      </div>
    </article>
  );
}
