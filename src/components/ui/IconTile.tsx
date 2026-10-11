import type { LucideIcon } from 'lucide-react';
import type { Tone } from '../../data/courses';

const toneClasses: Record<Tone | 'muted', string> = {
  accent: 'bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-100',
  brand: 'bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100',
  muted: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200',
};

interface IconTileProps {
  icon: LucideIcon;
  tone?: Tone | 'muted';
  /** Extra classes for the tile, e.g. a different size. */
  className?: string;
  iconClassName?: string;
}

export default function IconTile({ icon: Icon, tone = 'brand', className = '', iconClassName = 'h-6 w-6' }: IconTileProps) {
  return (
    <span className={`icon-tile ${toneClasses[tone]} ${className}`}>
      <Icon className={iconClassName} aria-hidden="true" />
    </span>
  );
}
