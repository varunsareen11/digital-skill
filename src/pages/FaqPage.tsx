import { faqs } from '../data/faqs';
import FaqList from '../components/ui/FaqList';
import PageBanner from '../components/ui/PageBanner';
import Seo from '../components/ui/Seo';
import ContactSection from '../sections/ContactSection';
import FinalCta from '../sections/FinalCta';

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to frequently asked questions about Digital Skills Academy: online classes, eligibility, certificates, internships, job guarantees, applying and contact details."
        path="/faq"
      />
      <PageBanner
        crumbs={[{ label: 'FAQ' }]}
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        lead="Everything you need to know about our online courses, certificates, internships and how to apply."
      />
      <section className="section" aria-label="Questions and answers">
        <div className="container-page max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </section>
      <ContactSection muted />
      <FinalCta withTopPadding />
    </>
  );
}
