import { useEffect, useState } from 'react';
import { whatsappHref } from '../../data/site';
import WhatsAppIcon from '../ui/WhatsAppIcon';

const isFormField = (element: EventTarget | null) =>
  element instanceof Element && element.matches('form input, form select, form textarea');

export default function WhatsAppFloat() {
  // Hidden while a form field has focus so it never covers what the visitor is typing.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onFocusIn = (event: FocusEvent) => {
      if (isFormField(event.target)) setHidden(true);
    };
    const onFocusOut = (event: FocusEvent) => {
      if (isFormField(event.target) && !isFormField(event.relatedTarget)) setHidden(false);
    };
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);
    return () => {
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener"
      className={`group fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#189D4E] text-white shadow-[0_10px_30px_-6px_rgba(24,157,78,0.6)] ring-4 ring-white transition hover:-translate-y-0.5 hover:bg-[#13843F] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 ${
        hidden ? 'pointer-events-none translate-y-4 opacity-0' : ''
      }`}
      aria-label="Chat with Digital Skills Academy on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <span
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-brand-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block"
        aria-hidden="true"
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
