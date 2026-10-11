import PageBanner from '../components/ui/PageBanner';
import Seo from '../components/ui/Seo';
import BenefitsSection from '../sections/BenefitsSection';
import ComingSoonSection from '../sections/ComingSoonSection';
import CoursesSection from '../sections/CoursesSection';
import FinalCta from '../sections/FinalCta';
import StepsSection from '../sections/StepsSection';

export default function CoursesPage() {
  return (
    <>
      <Seo
        title="Courses"
        description="Explore 10 practical online courses: Digital Marketing, Master in Canva, Master in ChatGPT, AI Prompt Engineering, HTML & Web Development, Coding Fundamentals, C++ Programming, Video Editing, Content Writing and Graphic Designing."
        path="/courses"
      />
      <PageBanner
        crumbs={[{ label: 'Courses' }]}
        eyebrow="100% Online Courses"
        title="Learn In-Demand Digital Skills"
        lead="Choose from 10 practical online courses in marketing, AI, design, coding and content creation — plus 8 new courses coming soon."
        actions={
          <>
            <a href="#courses" className="btn btn-primary">
              Available Courses
            </a>
            <a href="#coming-soon" className="btn btn-outline">
              Coming Soon
            </a>
          </>
        }
      />
      <CoursesSection variant="detailed" />
      <BenefitsSection muted />
      <ComingSoonSection />
      <StepsSection muted />
      <FinalCta withTopPadding />
    </>
  );
}
