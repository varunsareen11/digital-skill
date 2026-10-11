import { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AOS from 'aos';
import Footer from './Footer';
import Header from './Header';
import WhatsAppFloat from './WhatsAppFloat';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Layout() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    AOS.init({ once: true, duration: 650, easing: 'ease-out-cubic', offset: 40, disable: prefersReducedMotion });
    // Images and fonts can shift layout after the first paint; recalculate trigger points once loaded.
    const refresh = () => AOS.refresh();
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  // New pages bring new animated elements; AOS has to pick them up after they render.
  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  // Start each new page at the top, or at the section named in the address (e.g. /about#founder).
  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, search, hash]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-brand-900 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
