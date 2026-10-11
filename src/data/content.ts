import {
  Award,
  BookOpen,
  Briefcase,
  CircleCheck,
  ClipboardCheck,
  Eye,
  Folder,
  GraduationCap,
  Headphones,
  Heart,
  Laptop,
  Lightbulb,
  RefreshCw,
  Rocket,
  Search,
  Send,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Video,
  Wallet,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import type { Tone } from './courses';

export interface IconItem {
  title: string;
  icon: LucideIcon;
  tone: Tone;
  text?: string;
}

export const heroHighlights = [
  '100% Online Classes',
  'Practical Learning',
  'Affordable Fees',
  'Course Certificate',
  'Internship Opportunity for Eligible Learners',
];

export const heroStats = [
  { value: '10', label: 'Courses open for enrollment' },
  { value: '8', label: 'New courses coming soon' },
  { value: '100%', label: 'Online classes' },
  { value: '2–8', label: 'Weeks per course' },
];

export const finalCtaHighlights = [
  '100% Online Classes',
  'Affordable Learning',
  'Practical Skills',
  'Certificate',
  'Internship Opportunity for Eligible Learners',
];

export const aboutParagraphs = [
  'Digital Skills Academy is focused on helping students, beginners, professionals, creators, freelancers and aspiring entrepreneurs develop practical digital skills.',
  'We provide 100% online courses in Digital Marketing, AI, Design, Coding, Content Creation and other in-demand digital skills.',
  'Our approach focuses on learning concepts, practicing skills and applying knowledge through practical projects.',
];

export const missionVision = [
  {
    title: 'Our Mission',
    text: 'To make quality digital education accessible and affordable while helping learners develop practical skills for the modern digital world.',
    tone: 'accent' as Tone,
    icon: Target,
  },
  {
    title: 'Our Vision',
    text: 'To build a community of skilled, confident and digitally empowered individuals who are prepared to pursue their career goals.',
    tone: 'brand' as Tone,
    icon: Eye,
  },
];

export const aboutSteps = ['Learn concepts', 'Practice skills', 'Apply knowledge'];

export const whyChooseUs: IconItem[] = [
  { title: '100% Online Classes', text: 'Learn from anywhere without needing to attend a physical classroom.', icon: Laptop, tone: 'accent' },
  { title: 'Affordable Learning', text: 'Access practical, career-focused courses at affordable fees.', icon: Wallet, tone: 'brand' },
  {
    title: 'Practical Skill Development',
    text: 'Learn by applying concepts through exercises, assignments and projects.',
    icon: Wrench,
    tone: 'accent',
  },
  { title: 'Industry-Relevant Skills', text: "Develop skills relevant to today's digital environment.", icon: TrendingUp, tone: 'brand' },
  {
    title: 'AI-Powered Learning',
    text: 'Learn how modern AI tools can support productivity, creativity and digital work.',
    icon: Sparkles,
    tone: 'accent',
  },
  {
    title: 'Career-Focused Approach',
    text: 'Build practical skills, experience and confidence for your career journey.',
    icon: Target,
    tone: 'brand',
  },
];

export const learningBenefits: IconItem[] = [
  { title: '100% Online Classes', icon: Laptop, tone: 'accent' },
  { title: 'Practical Learning', icon: Lightbulb, tone: 'brand' },
  { title: 'Hands-On Assignments', icon: ClipboardCheck, tone: 'accent' },
  { title: 'Practical Projects', icon: Folder, tone: 'brand' },
  { title: 'Trainer Guidance', icon: Headphones, tone: 'accent' },
  { title: 'Course Completion Certificate', icon: Award, tone: 'brand' },
  { title: 'Portfolio Development', icon: Briefcase, tone: 'accent' },
  { title: 'AI Tools & Modern Workflows', icon: Sparkles, tone: 'brand' },
  { title: 'Internship Opportunity for Eligible Learners', icon: Rocket, tone: 'accent' },
];

export const audience: IconItem[] = [
  { title: 'Students', icon: GraduationCap, tone: 'brand' },
  { title: 'Beginners', icon: Lightbulb, tone: 'accent' },
  { title: 'Working Professionals', icon: Briefcase, tone: 'brand' },
  { title: 'Entrepreneurs', icon: Rocket, tone: 'accent' },
  { title: 'Freelancers', icon: Laptop, tone: 'brand' },
  { title: 'Content Creators', icon: Video, tone: 'accent' },
  { title: 'Business Owners', icon: Store, tone: 'brand' },
  { title: 'Career Changers', icon: RefreshCw, tone: 'accent' },
  { title: 'Anyone interested in developing digital skills', icon: Heart, tone: 'brand' },
];

export const onlineBenefits = [
  'Learn from anywhere.',
  'No physical classroom required.',
  'Structured online training.',
  'Practical assignments.',
  'Trainer guidance.',
  'Digital learning resources.',
  'Course projects.',
  'Flexible access to learning materials, where applicable.',
];

export const howItWorks = [
  { number: '01', title: 'Choose Your Course', text: 'Select the digital skill you want to learn.', icon: Search },
  { number: '02', title: 'Apply Online', text: 'Submit your application through our website.', icon: Send },
  { number: '03', title: 'Learn & Practice', text: 'Attend online classes and complete practical assignments/projects.', icon: Laptop },
  {
    number: '04',
    title: 'Complete & Grow',
    text: 'Complete the course requirements, receive your certificate and, if eligible, access the internship opportunity.',
    icon: Award,
  },
];

export const learningJourney = [
  { title: 'Learn', icon: BookOpen },
  { title: 'Practice', icon: Wrench },
  { title: 'Complete', icon: CircleCheck },
  { title: 'Certificate', icon: Award },
  { title: 'Internship Opportunity', icon: Briefcase, footnote: true },
  { title: 'Career Preparation', icon: Rocket },
];

export const certificateEligibility = [
  'Course completion',
  'Required participation/attendance',
  'Completion of assignments or practical projects',
  'Applicable assessment requirements',
];

export const internshipEligibility = [
  'Successfully complete the course.',
  'Complete required assignments/projects.',
  'Maintain satisfactory participation.',
  'Complete applicable assessments.',
  'Follow internship rules and guidelines.',
];
