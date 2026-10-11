import type { ReactNode } from 'react';
import { CircleAlert, ShieldCheck, type LucideIcon } from 'lucide-react';

interface NoticeProps {
  variant: 'info' | 'warn';
  title?: string;
  icon?: LucideIcon;
  children: ReactNode;
}

export default function Notice({ variant, title, icon, children }: NoticeProps) {
  const Icon = icon ?? (variant === 'info' ? ShieldCheck : CircleAlert);
  return (
    <div className={`notice ${variant === 'info' ? 'notice-info' : 'notice-warn'}`} role="note">
      <Icon
        className={`mt-0.5 h-5 w-5 shrink-0 ${variant === 'info' ? 'text-brand-700' : 'text-accent-700'}`}
        aria-hidden="true"
      />
      <div>
        {title && <p className="font-bold">{title}</p>}
        {children}
      </div>
    </div>
  );
}
