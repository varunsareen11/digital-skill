import { Link } from 'react-router-dom';
import { Mail, Phone, User } from 'lucide-react';
import { emailHref, legalLinks, navLinks, phoneHref, site, whatsappHref } from '../../data/site';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import Logo from './Logo';

const quickLinks = [...navLinks, { to: '/apply', label: 'Apply Now' }];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo variant="dark" />
          <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.18em] text-white">{site.name}</p>
          <p className="mt-2 text-sm text-brand-100/80">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={whatsappHref()} target="_blank" rel="noopener" className="btn btn-sm btn-ghost-light">
              <WhatsAppIcon />
              WhatsApp
            </a>
            <Link to="/apply" className="btn btn-sm btn-primary">
              Apply Now
            </Link>
          </div>
        </div>
        <nav aria-label="Quick links" className="lg:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link className="footer-link" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal" className="lg:col-span-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Legal</h2>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link className="footer-link" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <User className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
              <span>Founder: {site.founder}</span>
            </li>
            <li>
              <a className="footer-link flex items-start gap-3" href={phoneHref}>
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                <span>Phone: {site.phone}</span>
              </a>
            </li>
            <li>
              <a className="footer-link flex items-start gap-3 break-all" href={emailHref}>
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                <span>Email: {site.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 pb-24 text-xs text-brand-100/70 sm:flex-row sm:items-center sm:justify-between sm:pb-6 sm:pr-24">
          <p>
            &copy; {site.copyrightYear} {site.name}. All Rights Reserved.
          </p>
          <p>100% Online Classes &middot; Practical Learning &middot; Course Certificate</p>
        </div>
      </div>
    </footer>
  );
}
