import { Headphones, Phone } from 'lucide-react';
import { phoneHref, site, whatsappHref } from '../../data/site';
import WhatsAppIcon from '../ui/WhatsAppIcon';

export default function CourseHelpCard() {
  return (
    <aside
      className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 p-6 text-white sm:col-span-2 sm:p-8"
      data-aos="fade-up"
      aria-label="Help choosing a course"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative">
        <span className="icon-tile bg-white/10 text-accent-300 ring-1 ring-inset ring-white/15">
          <Headphones className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold text-white">Not sure which course is right for you?</h3>
        <p className="mt-2 max-w-lg text-brand-100">
          Talk to our team about your goals and current skills, and we will help you choose a suitable course.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={phoneHref} className="btn btn-white">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {site.phone}
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener" className="btn btn-ghost-light">
            <WhatsAppIcon />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}
