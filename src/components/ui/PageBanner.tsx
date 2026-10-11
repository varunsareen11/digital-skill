import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

interface PageBannerProps {
  /** Breadcrumb trail after "Home". The last item is the current page. */
  crumbs: Crumb[];
  eyebrow: ReactNode;
  title: string;
  lead?: ReactNode;
  actions?: ReactNode;
  /** Optional right-hand column (used on course pages). */
  aside?: ReactNode;
}

export default function PageBanner({ crumbs, eyebrow, title, lead, actions, aside }: PageBannerProps) {
  const trail: Crumb[] = [{ label: 'Home', to: '/' }, ...crumbs];

  const content = (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                {isLast || !crumb.to ? (
                  <span aria-current={isLast ? 'page' : undefined} className="font-semibold text-brand-900">
                    {crumb.label}
                  </span>
                ) : (
                  <Link className="rounded hover:text-brand-900 hover:underline" to={crumb.to}>
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <div data-aos="fade-up">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{lead}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </>
  );

  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-brand-50/70 via-white to-white">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      {aside ? (
        <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">{content}</div>
          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="100">
            {aside}
          </div>
        </div>
      ) : (
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">{content}</div>
        </div>
      )}
    </section>
  );
}
