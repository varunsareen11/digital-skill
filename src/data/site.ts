// Contact details and site-wide settings. Change them here and they update everywhere.

export const site = {
  name: 'Digital Skills Academy',
  tagline: 'Learn Digital Skills. Build Your Future.',
  url: 'https://www.example.com',
  founder: 'Varun Sareen',
  phone: '9876543210',
  /** Country code + number, digits only. Used for WhatsApp links. */
  whatsappNumber: '919876543210',
  email: 'info@example.com',
  copyrightYear: 2026,
};

/**
 * Form service URLs (for example Formspree or Getform). While a value is empty, the form checks the
 * visitor's details and then offers to send them via WhatsApp or email instead — nothing is faked.
 */
export const formEndpoints = {
  application: '',
  enquiry: '',
};

export const phoneHref = `tel:${site.phone}`;
export const emailHref = `mailto:${site.email}`;

export function whatsappHref(message = 'Hello Digital Skills Academy, I would like to know more about your courses and enrollment process.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/courses', label: 'Courses' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/internship', label: 'Internship' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
  { to: '/refund-policy', label: 'Refund/Cancellation Policy' },
];
