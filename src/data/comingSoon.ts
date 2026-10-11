import { Briefcase, CirclePlay, Languages, Layers, Mic, ScrollText, Share2, Sheet, type LucideIcon } from 'lucide-react';

export interface UpcomingCourse {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  topics: string[];
}

// Courses that are not open for enrollment yet. When one launches, move it into courses.ts.
export const comingSoonCourses: UpcomingCourse[] = [
  {
    title: 'Advanced Excel',
    category: 'Data & Productivity',
    description:
      'Learn advanced Excel techniques to organize data, use formulas, create reports, build PivotTables, and improve your data analysis and workplace productivity skills.',
    icon: Sheet,
    topics: ['Advanced Formulas', 'Functions', 'PivotTables', 'Charts', 'Data Cleaning', 'Data Validation', 'Reporting'],
  },
  {
    title: 'Full Stack Web Development',
    category: 'Programming & Technology',
    description:
      'Learn how websites and web applications are built, from designing user interfaces to developing server-side functionality and working with databases.',
    icon: Layers,
    topics: ['HTML', 'CSS', 'JavaScript', 'Frontend Development', 'Backend Fundamentals', 'Databases', 'Website Projects'],
  },
  {
    title: 'Social Media Management',
    category: 'Digital Marketing',
    description:
      'Learn how to plan, manage, and improve social media accounts for businesses and brands through content planning, audience engagement, and performance tracking.',
    icon: Share2,
    topics: ['Content Calendars', 'Social Media Strategy', 'Post Planning', 'Audience Engagement', 'Analytics', 'Brand Growth'],
  },
  {
    title: 'YouTube & Content Creator Mastery',
    category: 'Content Creation',
    description:
      'Learn the fundamentals of creating engaging digital content, planning YouTube videos, developing a channel identity, and improving content quality for online audiences.',
    icon: CirclePlay,
    topics: [
      'Content Ideas',
      'Scriptwriting',
      'Video Planning',
      'Thumbnails',
      'Channel Branding',
      'YouTube SEO Basics',
      'Audience Analytics',
    ],
  },
  {
    title: 'Freelancing & Personal Branding',
    category: 'Freelancing & Entrepreneurship',
    description:
      'Learn how to present your skills professionally, create a portfolio, build a personal brand, find potential clients, and understand the basics of working as a freelancer.',
    icon: Briefcase,
    topics: [
      'Skill Positioning',
      'Portfolio Building',
      'Personal Branding',
      'Client Communication',
      'Proposal Writing',
      'Freelance Platforms',
      'Pricing Basics',
    ],
  },
  {
    title: 'Interview Ready – Communication & Personality Development',
    category: 'Career & Professional Skills',
    description:
      'Build confidence and develop professional communication skills for interviews and workplace situations through practical exercises, interview preparation, and mock interview practice.',
    icon: Mic,
    topics: [
      'Body Language',
      'Communication Skills',
      'Self-Introduction',
      'Confidence Building',
      'HR Interview Questions',
      'Resume Presentation',
      'Professional Etiquette',
      'Mock Interviews',
    ],
  },
  {
    title: 'Sanskrit & Hindi Courses',
    category: 'Languages & Literature',
    description:
      'Explore Sanskrit and Hindi through structured language learning, grammar, reading, writing, literature, and communication activities suitable for different learning levels.',
    icon: Languages,
    topics: [
      'Sanskrit Basics',
      'Sanskrit Grammar',
      'Spoken Sanskrit',
      'Hindi Grammar',
      'Hindi Writing',
      'Literature',
      'Translation',
      'Shloka Meaning',
    ],
  },
  {
    title: 'Digital Sanskrit Content Creation',
    category: 'Indian Knowledge & Digital Skills',
    description:
      'Learn how to create and present Sanskrit-related educational content for digital platforms, combining traditional language knowledge with modern content creation tools.',
    icon: ScrollText,
    topics: [
      'Sanskrit Digital Content',
      'Educational Posts',
      'Video Scripts',
      'Devanagari Typing',
      'Digital Publishing',
      'E-Books',
      'Content Planning',
      'AI-Assisted Workflows',
    ],
  },
];
