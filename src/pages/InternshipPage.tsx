import { Link } from 'react-router-dom';
import { internshipFaqs } from '../data/faqs';
import FaqList from '../components/ui/FaqList';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Seo from '../components/ui/Seo';
import FinalCta from '../sections/FinalCta';
import InternshipSection from '../sections/InternshipSection';
import LearningJourney from '../sections/LearningJourney';

export default function InternshipPage() {
  return (
    <>
      <Seo
        title="Internship Opportunity"
        description="After successfully completing a course, eligible learners may receive an internship opportunity, subject to requirements and availability. Read the eligibility criteria and disclaimers."
        path="/internship"
      />
      <PageBanner
        crumbs={[{ label: 'Internship' }]}
        eyebrow="Internship"
        title="Internship Opportunity for Eligible Learners"
        lead="After successfully completing the course, eligible learners may receive an internship opportunity, subject to the applicable requirements and availability."
        actions={
          <>
            <a href="#eligibility" className="btn btn-primary">
              Check eligibility
            </a>
            <Link to="/courses" className="btn btn-outline">
              Explore Courses
            </Link>
          </>
        }
      />
      <InternshipSection showDetailsLink={false} />

      <section className="section bg-slate-50/80" aria-labelledby="internship-journey-heading">
        <div className="container-page">
          <SectionHeading
            id="internship-journey-heading"
            eyebrow="Where It Fits"
            title="From Learning to Practical Experience"
            lead="The internship opportunity comes after you have learned, practiced and successfully completed your course requirements."
            center
          />
          <div className="mt-12">
            <LearningJourney tone="light" />
          </div>
          <p className="mt-8 text-center text-sm text-slate-500" data-aos="fade-up">
            * For eligible learners, subject to the applicable requirements and availability.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="internship-faq-heading">
        <div className="container-page max-w-3xl">
          <SectionHeading id="internship-faq-heading" eyebrow="FAQ" title="Common Questions" center />
          <div className="mt-10">
            <FaqList items={internshipFaqs} />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
