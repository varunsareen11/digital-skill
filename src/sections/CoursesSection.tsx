import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/courses/CourseCard';
import CourseHelpCard from '../components/courses/CourseHelpCard';

/** "summary" is the home page version; "detailed" (courses page) lists every topic and the outcomes. */
export default function CoursesSection({ variant = 'summary' }: { variant?: 'summary' | 'detailed' }) {
  return (
    <section id="courses" className="section" aria-labelledby="courses-heading">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="eyebrow">Available Courses</span>
            <h2 id="courses-heading" className="section-title">
              Courses Open for Enrollment
            </h2>
            <p className="section-lead">
              Practical, 100% online programs in marketing, AI, design, coding and content creation. Choose a course to
              see what you will learn and the outcomes you can expect.
            </p>
          </div>
          {variant === 'summary' && (
            <Link to="/courses" className="btn btn-outline shrink-0" data-aos="fade-up">
              View all course details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={course.slug} course={course} variant={variant} delay={(index % 3) * 70} />
          ))}
          <CourseHelpCard />
        </div>
      </div>
    </section>
  );
}
