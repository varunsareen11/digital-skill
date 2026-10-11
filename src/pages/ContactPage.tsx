import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, User } from 'lucide-react';
import { emailHref, phoneHref, site, whatsappHref } from '../data/site';
import LeadForm from '../components/forms/LeadForm';
import IconTile from '../components/ui/IconTile';
import PageBanner from '../components/ui/PageBanner';
import Seo from '../components/ui/Seo';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import FaqSection from '../sections/FaqSection';
import FinalCta from '../sections/FinalCta';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact Digital Skills Academy for course information and enrollment. Call ${site.phone} or email ${site.email}.`}
        path="/contact"
      />
      <PageBanner
        crumbs={[{ label: 'Contact' }]}
        eyebrow="Contact Us"
        title="Have Questions?"
        lead="Our team is available to help you with course information, enrollment and other queries."
      />

      <section className="section" aria-label="Contact details and enquiry form">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-5">
            <h2 className="text-2xl font-extrabold" data-aos="fade-up">
              Contact Information
            </h2>
            <ul className="space-y-4">
              <li className="card flex items-center gap-4 p-5" data-aos="fade-up">
                <IconTile icon={User} tone="brand" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Founder</span>
                  <span className="block text-lg font-extrabold text-brand-950">{site.founder}</span>
                </span>
              </li>
              <li data-aos="fade-up" data-aos-delay="60">
                <a href={phoneHref} className="card card-hover flex items-center gap-4 p-5">
                  <IconTile icon={Phone} tone="accent" />
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone</span>
                    <span className="block text-lg font-extrabold text-brand-950">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="120">
                <a href={emailHref} className="card card-hover flex items-center gap-4 p-5">
                  <IconTile icon={Mail} tone="brand" />
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email</span>
                    <span className="block break-words text-lg font-extrabold text-brand-950">{site.email}</span>
                  </span>
                </a>
              </li>
            </ul>
            <div className="pt-2" data-aos="fade-up">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={phoneHref} className="btn btn-secondary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a href={emailHref} className="btn btn-outline">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Us
                </a>
                <Link to="/apply" className="btn btn-primary">
                  Apply Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="card bg-gradient-to-br from-white to-green-50/60 p-5" data-aos="fade-up">
              <p className="font-bold text-brand-950">Prefer WhatsApp?</p>
              <p className="mt-1 text-sm text-slate-600">
                Send us a message and our team will get back to you about courses and enrollment.
              </p>
              <div className="mt-4">
                <a href={whatsappHref()} target="_blank" rel="noopener" className="btn btn-whatsapp">
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-8" data-aos="fade-up" data-aos-delay="80">
              <h2 className="text-2xl font-extrabold">Send an Enquiry</h2>
              <p className="mt-2 text-slate-600">
                Share your question and contact details, and our team will get back to you.
              </p>
              <div className="mt-8">
                <LeadForm variant="enquiry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <FinalCta withTopPadding />
    </>
  );
}
