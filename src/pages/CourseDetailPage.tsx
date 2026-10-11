import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award, Briefcase, Clock, Laptop, Target, type LucideIcon } from 'lucide-react';
import { applyPath, coursePath, courses, getCourse } from '../data/courses';
import { whatsappHref } from '../data/site';
import CourseCard from '../components/courses/CourseCard';
import CheckList from '../components/ui/CheckList';
import IconTile from '../components/ui/IconTile';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Seo from '../components/ui/Seo';
import BenefitsSection from '../sections/BenefitsSection';
import FinalCta from '../sections/FinalCta';
import NotFoundPage from './NotFoundPage';

const RELATED_COUNT = 3;

export default function CourseDetailPage() {
  const { slug = '' } = useParams();
  const course = getCourse(slug);
  if (!course) return <NotFoundPage />;

  const index = courses.indexOf(course);
  const previous = courses[(index - 1 + courses.length) % courses.length];
  const next = courses[(index + 1) % courses.length];
  const related = Array.from({ length: RELATED_COUNT }, (_, offset) => courses[(index + 1 + offset) % courses.length]);

  const glance: { label: string; value: string; icon: LucideIcon }[] = [
    { label: 'Duration', value: course.duration, icon: Clock },
    { label: 'Mode', value: '100% Online Classes', icon: Laptop },
    { label: 'Certificate', value: 'Course Completion Certificate on meeting course requirements', icon: Award },
    {
      label: 'Internship',
      value: 'Opportunity for eligible learners, subject to requirements and availability',
      icon: Briefcase,
    },
  ];

  return (
    <>
      <Seo
        title={`${course.title} Course (${course.duration}, Online)`}
        description={`${course.title} — ${course.duration} online course at Digital Skills Academy. ${course.description}`}
        path={coursePath(course)}
      />
      <PageBanner
        crumbs={[{ label: 'Courses', to: '/courses' }, { label: course.title }]}
        eyebrow={
          <>
            <course.icon className="h-3.5 w-3.5" aria-hidden="true" />
            Online Course
          </>
        }
        title={course.title}
        lead={course.description}
        actions={
          <>
            <Link to={applyPath(course)} className="btn btn-primary btn-lg">
              Apply Now
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={whatsappHref(
                `Hello Digital Skills Academy, I would like to know more about the ${course.title} course and the enrollment process.`,
              )}
              target="_blank"
              rel="noopener"
              className="btn btn-outline btn-lg"
            >
              Ask on WhatsApp
            </a>
          </>
        }
        aside={
          <div className="card p-6 sm:p-7">
            <h2 className="text-lg font-extrabold">Course at a glance</h2>
            <dl className="mt-5 space-y-4">
              {glance.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <dt className="contents">
                    <IconTile icon={item.icon} tone="brand" className="h-10 w-10" iconClassName="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </dt>
                  <dd>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500" aria-hidden="true">
                      {item.label}
                    </span>
                    <span className="block font-bold text-brand-950">{item.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <Link to={applyPath(course)} className="btn btn-primary mt-6 w-full">
              Apply for {course.title}
            </Link>
          </div>
        }
      />

      <section className="section" aria-labelledby="learn-heading">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="max-w-2xl" data-aos="fade-up">
              <span className="eyebrow">Curriculum</span>
              <h2 id="learn-heading" className="section-title">
                What You'll Learn
              </h2>
            </div>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {course.curriculum.map((topic, topicIndex) => (
                <li
                  key={topic}
                  className="card flex items-center gap-4 p-4"
                  data-aos="fade-up"
                  data-aos-delay={(topicIndex % 2) * 60}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-sm font-extrabold text-white">
                    {String(topicIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="font-bold text-brand-950">{topic}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5">
            <div
              className="card relative overflow-hidden p-6 sm:p-8 lg:sticky lg:top-28"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent-100"
                aria-hidden="true"
              />
              <IconTile icon={Target} tone="accent" className="relative" />
              <h2 className="relative mt-5 text-2xl font-extrabold">Course Outcomes</h2>
              <p className="relative mt-2 font-semibold text-slate-700">{course.outcomesIntro}</p>
              <CheckList items={course.outcomes} variant="outcome" className="relative mt-5 text-slate-700" />
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection muted />

      <section className="section" aria-label="Certificate and internship information">
        <div className="container-page grid gap-5 md:grid-cols-2">
          <article className="card p-6 sm:p-8" data-aos="fade-up">
            <IconTile icon={Award} tone="brand" />
            <h2 className="mt-5 text-xl font-extrabold">Course Completion Certificate</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Learners who successfully complete their enrolled course and fulfill the applicable course requirements will
              receive a Course Completion Certificate from Digital Skills Academy.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              The certificate recognizes successful completion of the training program. It does not by itself represent a
              government license, academic degree, professional qualification or guarantee of employment.
            </p>
            <Link
              to="/certificates"
              className="mt-6 inline-flex items-center gap-2 font-bold text-brand-700 hover:text-brand-900"
            >
              Certificate details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
          <article className="card p-6 sm:p-8" data-aos="fade-up" data-aos-delay="80">
            <IconTile icon={Briefcase} tone="accent" />
            <h2 className="mt-5 text-xl font-extrabold">Internship Opportunity</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              After successfully completing the course, eligible learners may receive an internship opportunity, subject to
              the applicable requirements and availability.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Course completion does not automatically guarantee an internship or employment.
            </p>
            <Link
              to="/internship"
              className="mt-6 inline-flex items-center gap-2 font-bold text-brand-700 hover:text-brand-900"
            >
              Internship eligibility
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="section bg-slate-50/80" aria-labelledby="related-heading">
        <div className="container-page">
          <SectionHeading id="related-heading" eyebrow="Keep Exploring" title="Other Courses You May Like" center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, relatedIndex) => (
              <CourseCard key={item.slug} course={item} delay={relatedIndex * 70} />
            ))}
          </div>
          <nav className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between" aria-label="Course navigation">
            <Link to={coursePath(previous)} className="btn btn-outline justify-start">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>
                <span className="sr-only">Previous course: </span>
                {previous.title}
              </span>
            </Link>
            <Link to="/courses" className="btn btn-outline">
              All courses
            </Link>
            <Link to={coursePath(next)} className="btn btn-outline justify-end">
              <span>
                <span className="sr-only">Next course: </span>
                {next.title}
              </span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </section>

      <FinalCta withTopPadding />
    </>
  );
}
