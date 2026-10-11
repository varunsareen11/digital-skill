import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { certificateEligibility, howItWorks } from '../data/content';
import CertificateGallery from '../components/certificates/CertificateGallery';
import CheckList from '../components/ui/CheckList';
import Notice from '../components/ui/Notice';
import PageBanner from '../components/ui/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Seo from '../components/ui/Seo';
import ApproachSection from '../sections/ApproachSection';
import FinalCta from '../sections/FinalCta';

export default function CertificatesPage() {
  return (
    <>
      <Seo
        title="Certificates"
        description="Learners who successfully complete their course and its requirements receive a Course Completion Certificate from Digital Skills Academy. View the certificate and eligibility details."
        path="/certificates"
      />
      <PageBanner
        crumbs={[{ label: 'Certificates' }]}
        eyebrow="Certificates"
        title="Course Completion Certificate"
        lead="Recognition for learners who successfully complete their enrolled course and fulfill the applicable course requirements."
      />

      <section className="section" aria-labelledby="gallery-heading">
        <div className="container-page">
          <SectionHeading
            id="gallery-heading"
            eyebrow="Gallery"
            title="Certificate Showcase"
            lead="Select a certificate to view it in full size."
            center
          />
          <CertificateGallery />
        </div>
      </section>

      <section className="section bg-slate-50/80" aria-labelledby="cert-info-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="max-w-2xl" data-aos="fade-up">
              <span className="eyebrow">Eligibility</span>
              <h2 id="cert-info-heading" className="section-title">
                How Certificates Are Awarded
              </h2>
            </div>
            <div className="mt-6 space-y-6" data-aos="fade-up" data-aos-delay="80">
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Learners who successfully complete their enrolled course and fulfill the applicable course requirements
                will receive a Course Completion Certificate from Digital Skills Academy.
              </p>
              <div>
                <p className="font-bold text-brand-950">Certificate eligibility may depend on:</p>
                <CheckList items={certificateEligibility} className="mt-3" />
              </div>
              <Notice variant="info" title="Important Disclaimer">
                <p className="mt-1">The certificate recognizes successful completion of the training program.</p>
                <p className="mt-1">
                  It does not by itself represent a government license, academic degree, professional qualification or
                  guarantee of employment.
                </p>
              </Notice>
            </div>
          </div>
          <div className="card p-6 sm:p-8" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-extrabold">Your path to a certificate</h3>
            <ol className="mt-6 space-y-5">
              {howItWorks.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-sm font-extrabold text-white">
                    {step.number}
                  </span>
                  <span>
                    <span className="block font-bold text-brand-950">{step.title}</span>
                    <span className="mt-0.5 block text-sm text-slate-600">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="btn btn-outline">
                Choose a course
              </Link>
              <Link to="/apply" className="btn btn-primary">
                Apply Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ApproachSection />
      <FinalCta />
    </>
  );
}
