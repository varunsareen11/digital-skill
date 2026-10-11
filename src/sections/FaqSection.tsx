import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { faqs } from '../data/faqs';
import FaqList from '../components/ui/FaqList';

export default function FaqSection() {
  return (
    <section id="faq" className="section bg-slate-50/80" aria-labelledby="faq-heading">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-lead">Answers to common questions about our online courses, certificates and internships.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="80">
            <Link to="/faq" className="btn btn-outline">
              All FAQs
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Ask a question
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList items={faqs} />
        </div>
      </div>
    </section>
  );
}
