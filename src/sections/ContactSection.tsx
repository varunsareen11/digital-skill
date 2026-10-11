import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, User } from 'lucide-react';
import { emailHref, phoneHref, site } from '../data/site';
import IconTile from '../components/ui/IconTile';
import SectionHeading from '../components/ui/SectionHeading';

export default function ContactSection({ muted = false }: { muted?: boolean }) {
  const cards = [
    { label: 'Founder', value: site.founder, icon: User, tone: 'brand' as const },
    { label: 'Phone', value: site.phone, icon: Phone, tone: 'accent' as const, href: phoneHref },
    { label: 'Email', value: site.email, icon: Mail, tone: 'brand' as const, href: emailHref },
  ];

  return (
    <section id="contact" className={`section ${muted ? 'bg-slate-50/80' : ''}`} aria-labelledby="contact-heading">
      <div className="container-page">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact Us"
          title="Have Questions?"
          lead="Our team is available to help you with course information, enrollment and other queries."
          center
        />
        <div className="mx-auto mt-12 max-w-5xl">
          <ul className="grid gap-4 sm:grid-cols-3">
            {cards.map((card, index) => {
              const body = (
                <>
                  <IconTile icon={card.icon} tone={card.tone} />
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{card.label}</span>
                    <span className="mt-0.5 block break-words text-lg font-extrabold text-brand-950">{card.value}</span>
                  </span>
                </>
              );
              return (
                <li key={card.label} data-aos="fade-up" data-aos-delay={index * 70}>
                  {card.href ? (
                    <a href={card.href} className="card card-hover flex h-full items-center gap-4 p-5">
                      {body}
                    </a>
                  ) : (
                    <div className="card flex h-full items-center gap-4 p-5">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-8 flex justify-center" data-aos="fade-up">
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
      </div>
    </section>
  );
}
