import { Link } from 'react-router-dom';
import { ArrowRight, Award, Check, ChevronRight, GraduationCap, Sparkles } from 'lucide-react';
import { getCourse, type Course } from '../data/courses';
import { heroHighlights, heroStats } from '../data/content';
import IconTile from '../components/ui/IconTile';

const previewCourses = ['digital-marketing', 'master-in-chatgpt', 'graphic-designing', 'cpp-programming']
  .map((slug) => getCourse(slug))
  .filter((course): course is Course => Boolean(course));

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-40 h-[24rem] w-[24rem] rounded-full bg-accent-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-14 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-7">
          <div data-aos="fade-up">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Digital Skills Academy
            </span>
          </div>
          <h1
            className="mt-5 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-[4.25rem]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            Learn Digital Skills.
            <br />
            <span className="text-gradient inline-block pb-1">Build Your Future.</span>
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Practical, affordable and career-focused online training designed to help learners build valuable digital
            skills for today's digital world.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-aos="fade-up" data-aos-delay="180">
            <Link to="/courses" className="btn btn-primary btn-lg">
              Explore Courses
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link to="/apply" className="btn btn-secondary btn-lg">
              Apply Now
            </Link>
          </div>
          <ul
            className="mt-10 grid gap-x-6 gap-y-3 text-[15px] font-semibold text-brand-950 sm:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="240"
            aria-label="Key highlights"
          >
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          data-aos="fade-left"
          data-aos-delay="150"
          aria-hidden="true"
        >
          <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-200 via-white to-accent-200 blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-white bg-white/90 p-5 shadow-lift backdrop-blur sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-900 text-white">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-brand-950">Your learning path</p>
                  <p className="text-xs text-slate-500">100% online &middot; practical &middot; guided</p>
                </div>
              </div>
              <span className="badge bg-emerald-50 text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Online
              </span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {previewCourses.map((course) => (
                <li
                  key={course.slug}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3"
                >
                  <IconTile icon={course.icon} tone={course.tone} className="h-10 w-10" iconClassName="h-5 w-5" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-brand-950">{course.title}</span>
                    <span className="block truncate text-xs text-slate-500">
                      {course.curriculum.slice(0, 2).join(' · ')}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-lg bg-white px-2 py-1 text-[11px] font-bold text-brand-700 ring-1 ring-slate-200">
                    {course.duration}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between gap-2 rounded-2xl bg-brand-950 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
              <span>Learn</span>
              <ChevronRight className="h-3.5 w-3.5 text-accent-400" />
              <span>Practice</span>
              <ChevronRight className="h-3.5 w-3.5 text-accent-400" />
              <span>Certificate</span>
            </div>
          </div>
          <div className="absolute -left-4 -top-5 hidden animate-float items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3.5 py-2.5 text-sm font-bold text-brand-950 shadow-lift sm:flex lg:-left-10">
            <IconTile icon={Sparkles} tone="accent" className="h-8 w-8 rounded-lg" iconClassName="h-4 w-4" />
            AI-Powered Learning
          </div>
          <div className="absolute -bottom-6 -right-2 hidden animate-float-slow items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3.5 py-2.5 text-sm font-bold text-brand-950 shadow-lift sm:flex lg:-right-6">
            <IconTile icon={Award} tone="brand" className="h-8 w-8 rounded-lg" iconClassName="h-4 w-4" />
            Course Certificate
          </div>
        </div>
      </div>
      <div className="container-page relative pb-14">
        <dl
          className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-soft backdrop-blur sm:grid-cols-4 sm:p-6"
          data-aos="fade-up"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col text-center">
              <dt className="order-2 mt-1 text-xs font-medium text-slate-500 sm:text-sm">{stat.label}</dt>
              <dd className="order-1 text-2xl font-extrabold text-brand-900 sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
