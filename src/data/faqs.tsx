import type { ReactNode } from 'react';
import { emailHref, phoneHref, site } from './site';

export interface Faq {
  question: string;
  answer: ReactNode;
}

const linkClass = 'font-semibold text-brand-700 underline decoration-accent-400 underline-offset-2 hover:text-brand-900';

export const faqs: Faq[] = [
  {
    question: 'Are the classes online?',
    answer: 'Yes. All courses are conducted through 100% online classes.',
  },
  {
    question: 'Who can join the courses?',
    answer:
      'Students, beginners, professionals, entrepreneurs, freelancers, creators and anyone interested in digital skills can join suitable courses.',
  },
  {
    question: 'Do I need prior experience?',
    answer: 'Selected beginner-level courses do not require prior experience.',
  },
  {
    question: 'Will I receive a certificate?',
    answer: 'Learners who successfully complete the course requirements are eligible for a Course Completion Certificate.',
  },
  {
    question: 'Is an internship guaranteed after completing a course?',
    answer:
      'Internship opportunities are available for eligible learners, subject to the applicable requirements and availability. Course completion does not automatically guarantee an internship.',
  },
  {
    question: 'Is a job guaranteed after completing a course?',
    answer:
      'No. The courses are designed for skill development and career preparation. Employment is not guaranteed unless specifically stated in writing for a particular program.',
  },
  {
    question: 'How do I apply?',
    answer: 'Select your preferred course and complete the online application form.',
  },
  {
    question: 'How can I contact the academy?',
    answer: (
      <>
        Call{' '}
        <a className={linkClass} href={phoneHref}>
          {site.phone}
        </a>{' '}
        or email{' '}
        <a className={linkClass} href={emailHref}>
          {site.email}
        </a>
        .
      </>
    ),
  },
];

/** The three questions shown on the Internship page. */
export const internshipFaqs = [faqs[4], faqs[5], faqs[3]];
