import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronRight, Menu, Phone, X } from 'lucide-react';
import { navLinks, phoneHref, site } from '../../data/site';
import Logo from './Logo';

const SCROLL_CLOSE_DISTANCE = 32;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const openedAtY = useRef(0);
  const location = useLocation();

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Close after navigating, including links to a section on the same page.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (!open) return;
    openedAtY.current = window.scrollY;

    const onScroll = () => {
      if (Math.abs(window.scrollY - openedAtY.current) > SCROLL_CLOSE_DISTANCE) close();
    };
    const onClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) close();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close(true);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onDesktop);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [open, close]);

  const raised = scrolled || open;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        raised
          ? 'border-slate-200 shadow-[0_1px_2px_rgba(7,38,37,0.04),0_8px_24px_-8px_rgba(7,38,37,0.1)]'
          : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink className="nav-link" to={link.to} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/apply" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Apply Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-900 transition hover:bg-brand-50 lg:hidden"
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        className="collapse-panel absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-lift lg:hidden"
        data-open={open}
      >
        <div>
          <nav
            aria-label="Mobile"
            className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain py-4"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) close();
            }}
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink className="mobile-nav-link" to={link.to} end={link.to === '/'}>
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4 sm:grid-cols-2">
              <Link to="/apply" className="btn btn-primary">
                Apply Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={phoneHref} className="btn btn-outline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {site.phone}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
