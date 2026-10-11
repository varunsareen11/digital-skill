import { Check, CircleCheck } from 'lucide-react';

interface CheckListProps {
  items: string[];
  className?: string;
  /** "circle" = orange circled tick, "outcome" = green circled tick, "tick" = plain green tick. */
  variant?: 'circle' | 'outcome' | 'tick';
}

export default function CheckList({ items, className = '', variant = 'circle' }: CheckListProps) {
  const Icon = variant === 'tick' ? Check : CircleCheck;
  const color = variant === 'circle' ? 'text-accent-600' : 'text-emerald-600';
  return (
    <ul className={`check-list ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${color}`} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
