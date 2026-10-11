import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import Seo from '../components/ui/Seo';
import { site } from '../data/site';
import AboutIntro from '../sections/AboutIntro';
import ApproachSection from '../sections/ApproachSection';
import AudienceSection from '../sections/AudienceSection';
import FinalCta from '../sections/FinalCta';
import FounderSection from '../sections/FounderSection';
import LearnOnlineSection from '../sections/LearnOnlineSection';
import WhyChooseSection from '../sections/WhyChooseSection';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description={`Learn about ${site.name}, its mission and vision, and founder ${site.founder} — making practical digital education accessible and affordable.`}
        path="/about"
      />
      <PageBanner
        crumbs={[{ label: 'About Us' }]}
        eyebrow="About Us"
        title="About Digital Skills Academy"
        lead="Practical, affordable and career-focused online training for students, beginners, professionals, creators, freelancers and aspiring entrepreneurs."
        actions={
          <>
            <Link to="/courses" className="btn btn-primary">
              Explore Courses
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="#founder" className="btn btn-outline">
              Meet the Founder
            </a>
          </>
        }
      />
      <AboutIntro showLearnMore={false} />
      <FounderSection />
      <WhyChooseSection />
      <ApproachSection />
      <AudienceSection />
      <LearnOnlineSection />
      <FinalCta />
    </>
  );
}
