import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const dark = variant === 'dark';
  return (
    <Link
      to="/"
      className={dark ? 'inline-block rounded-xl' : 'shrink-0 rounded-xl'}
      aria-label="Digital Skills Academy — Home"
    >
      <span className="flex items-center gap-2.5">
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${
            dark ? 'bg-white text-brand-900' : 'bg-brand-900 text-white'
          }`}
        >
          <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        </span>
        <span className="leading-none">
          <span className={`block text-xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-brand-900'}`}>
            Digital<span className={dark ? 'text-accent-400' : 'text-accent-600'}>Skills</span>
          </span>
          <span
            className={`mt-1 block text-[10.5px] font-bold uppercase tracking-[0.22em] ${dark ? 'text-brand-200' : 'text-brand-700'}`}
          >
            Academy
          </span>
        </span>
      </span>
    </Link>
  );
}
