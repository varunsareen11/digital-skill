import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Faq } from '../../data/faqs';

export default function FaqList({ items }: { items: Faq[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const isOpen = open.has(index);
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;
        return (
          <div key={faq.question} className="card overflow-hidden" data-aos="fade-up" data-aos-delay={Math.min(index * 40, 160)}>
            <h3 className="text-base sm:text-lg">
              <button
                type="button"
                id={buttonId}
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-brand-950 transition hover:bg-slate-50 sm:px-6 sm:py-5"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-800 transition duration-300 group-aria-expanded:rotate-180 group-aria-expanded:bg-accent-500 group-aria-expanded:text-brand-950">
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="collapse-panel" data-open={isOpen}>
              <div>
                <p className="px-5 pb-5 leading-relaxed text-slate-600 sm:px-6 sm:pb-6">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
