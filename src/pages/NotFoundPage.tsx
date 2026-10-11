import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/ui/Seo';

export default function NotFoundPage() {
  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <section className="section">
        <div className="container-page max-w-2xl text-center">
          <p className="text-7xl font-extrabold text-brand-100">404</p>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Page not found</h1>
          <p className="mt-4 text-lg text-slate-600">
            The page you are looking for may have moved. Try one of these instead:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn btn-secondary">
              Go to Home
            </Link>
            <Link to="/courses" className="btn btn-outline">
              Explore Courses
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
