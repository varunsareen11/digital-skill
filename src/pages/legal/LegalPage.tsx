import type { ReactNode } from 'react';
import { emailHref, phoneHref, site } from '../../data/site';
import PageBanner from '../../components/ui/PageBanner';
import Seo from '../../components/ui/Seo';

interface LegalPageProps {
  title: string;
  lead: string;
  description: string;
  path: string;
  children: ReactNode;
}

export default function LegalPage({ title, lead, description, path, children }: LegalPageProps) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <PageBanner crumbs={[{ label: title }]} eyebrow="Legal" title={title} lead={lead} />
      <section className="section pt-10 sm:pt-12 lg:pt-14">
        <div className="container-page">
          <article className="prose-legal">
            {children}
            <h2>Contact Us</h2>
            <p>For any questions about this policy, please contact {site.name}:</p>
            <ul>
              <li>Founder: {site.founder}</li>
              <li>
                Phone: <a href={phoneHref}>{site.phone}</a>
              </li>
              <li>
                Email: <a href={emailHref}>{site.email}</a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
