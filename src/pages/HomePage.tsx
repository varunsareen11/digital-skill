import Seo from '../components/ui/Seo';
import AboutIntro from '../sections/AboutIntro';
import ApproachSection from '../sections/ApproachSection';
import AudienceSection from '../sections/AudienceSection';
import BenefitsSection from '../sections/BenefitsSection';
import CertificateSection from '../sections/CertificateSection';
import ComingSoonSection from '../sections/ComingSoonSection';
import ContactSection from '../sections/ContactSection';
import CoursesSection from '../sections/CoursesSection';
import FaqSection from '../sections/FaqSection';
import FinalCta from '../sections/FinalCta';
import FounderSection from '../sections/FounderSection';
import HomeHero from '../sections/HomeHero';
import InternshipSection from '../sections/InternshipSection';
import LearnOnlineSection from '../sections/LearnOnlineSection';
import StepsSection from '../sections/StepsSection';
import WhyChooseSection from '../sections/WhyChooseSection';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Digital Skills Academy | Learn Digital Skills. Build Your Future."
        fullTitle
        description="Digital Skills Academy offers practical, affordable, 100% online courses in Digital Marketing, AI, ChatGPT, Canva, Coding, C++, Video Editing, Content Writing and Graphic Design."
        path="/"
      />
      <HomeHero />
      <AboutIntro />
      <WhyChooseSection />
      <CoursesSection />
      <ApproachSection showCertificates />
      <ComingSoonSection />
      <BenefitsSection />
      <FounderSection />
      <CertificateSection />
      <InternshipSection />
      <AudienceSection />
      <LearnOnlineSection />
      <StepsSection />
      <FaqSection />
      <ContactSection />
      <FinalCta />
    </>
  );
}
