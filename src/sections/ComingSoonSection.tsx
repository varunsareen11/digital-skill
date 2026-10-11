import { comingSoonCourses } from '../data/comingSoon';
import ComingSoonCard from '../components/courses/ComingSoonCard';
import SectionHeading from '../components/ui/SectionHeading';

export default function ComingSoonSection() {
  return (
    <section
      id="coming-soon"
      className="section bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="coming-soon-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="coming-soon-heading"
          eyebrow="Coming Soon"
          title="Coming Soon — New Skills, New Opportunities"
          lead="Explore our upcoming courses designed to help you develop practical skills, improve your professional confidence, and prepare for new opportunities."
          center
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {comingSoonCourses.map((course, index) => (
            <ComingSoonCard key={course.title} course={course} delay={(index % 4) * 60} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500" data-aos="fade-up">
          Enrollment for these courses is not open yet. Course details will be shared when each course is launched.
        </p>
      </div>
    </section>
  );
}
