import { Info, Mail, Phone } from 'lucide-react';
import { howItWorks } from '../data/content';
import { emailHref, phoneHref, site, whatsappHref } from '../data/site';
import LeadForm from '../components/forms/LeadForm';
import Notice from '../components/ui/Notice';
import PageBanner from '../components/ui/PageBanner';
import Seo from '../components/ui/Seo';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';

export default function ApplyPage() {
  return (
    <>
      <Seo
        title="Apply Now"
        description="Apply online for a Digital Skills Academy course. Choose your course, submit your details and our team will contact you regarding enrollment."
        path="/apply"
      />
      <PageBanner
        crumbs={[{ label: 'Apply Now' }]}
        eyebrow="Apply Now"
        title="Ready to Build Your Digital Skills?"
        lead="Join Digital Skills Academy and learn practical, career-focused digital skills through 100% online classes."
      />

      <section className="section pt-10 sm:pt-12 lg:pt-14" aria-label="Course application">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="card p-6 sm:p-8 lg:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-extrabold sm:text-3xl">Course Application Form</h2>
              <p className="mt-2 text-slate-600">
                Choose your course, submit your details and our team will contact you regarding enrollment.
              </p>
              <div className="mt-8">
                <LeadForm variant="application" />
              </div>
            </div>
          </div>
          <aside className="space-y-5 lg:col-span-5 xl:col-span-4" aria-label="Application information">
            <div className="card p-6" data-aos="fade-up" data-aos-delay="80">
              <h2 className="text-lg font-extrabold">What happens next?</h2>
              <ol className="mt-5 space-y-4">
                {howItWorks.map((step) => (
                  <li key={step.number} className="flex gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-extrabold text-brand-800">
                      {step.number}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-brand-950">{step.title}</span>
                      <span className="block text-sm text-slate-600">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-6" data-aos="fade-up" data-aos-delay="120">
              <h2 className="text-lg font-extrabold">Need help choosing?</h2>
              <p className="mt-2 text-sm text-slate-600">Talk to our team about the right course for your goals.</p>
              <div className="mt-4 grid gap-2">
                <a href={phoneHref} className="btn btn-outline justify-start">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </a>
                <a href={emailHref} className="btn btn-outline justify-start break-all">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
                <a href={whatsappHref()} target="_blank" rel="noopener" className="btn btn-whatsapp">
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="160">
              <Notice variant="info" icon={Info}>
                <p>
                  Submitting this form is an application, not a confirmed enrollment. Our team will contact you with
                  enrollment details for your selected course.
                </p>
              </Notice>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
