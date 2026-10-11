import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck } from 'lucide-react';
import { internshipEligibility } from '../data/content';
import CheckList from '../components/ui/CheckList';
import IconTile from '../components/ui/IconTile';
import Notice from '../components/ui/Notice';

export default function InternshipSection({ showDetailsLink = true }: { showDetailsLink?: boolean }) {
  return (
    <section id="internship" className="section bg-slate-50/80" aria-labelledby="internship-heading">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="eyebrow">Internship Opportunity</span>
            <h2 id="internship-heading" className="section-title">
              Gain Practical Experience
            </h2>
            <p className="section-lead">
              After successfully completing the course, eligible learners may receive an internship opportunity, subject
              to the applicable requirements and availability.
            </p>
          </div>
          <p className="mt-4 leading-relaxed text-slate-600" data-aos="fade-up" data-aos-delay="60">
            The internship is intended to provide practical exposure and work-related experience that complements the
            learner's training.
          </p>
          {showDetailsLink && (
            <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
              <Link to="/internship" className="btn btn-outline">
                Internship details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
        <div id="eligibility" className="space-y-5">
          <div className="card p-6 sm:p-8" data-aos="fade-up">
            <div className="flex items-center gap-3">
              <IconTile icon={ClipboardCheck} tone="accent" />
              <h3 className="text-xl font-extrabold">Internship Eligibility</h3>
            </div>
            <p className="mt-5 font-semibold text-slate-700">Learners may need to:</p>
            <CheckList items={internshipEligibility} className="mt-3 text-slate-600" />
          </div>
          <div data-aos="fade-up" data-aos-delay="80">
            <Notice variant="warn" title="Important Disclaimer">
              <p className="mt-1">Course completion does not automatically guarantee an internship or employment.</p>
              <p className="mt-1">
                Where an internship is offered, the learner will receive information about the internship duration, role,
                responsibilities, working arrangements and applicable terms before the internship begins.
              </p>
            </Notice>
          </div>
        </div>
      </div>
    </section>
  );
}
