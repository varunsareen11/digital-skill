export interface Certificate {
  /** Image file inside public/assets/certificates/ */
  image: string;
  caption: string;
}

// Certificates shown in the home page row and the certificates page gallery.
// Save the images in public/assets/certificates/. Entries whose image file is missing are hidden automatically.
export const certificates: Certificate[] = [
  { image: '/assets/certificates/certificate1.svg', caption: 'Sample Certificate — Digital Marketing' },
  { image: '/assets/certificates/certificate2.svg', caption: 'Sample Certificate — Master in Canva' },
  { image: '/assets/certificates/certificate3.svg', caption: 'Sample Certificate — Master in ChatGPT' },
  { image: '/assets/certificates/certificate4.svg', caption: 'Sample Certificate — AI Prompt Engineering' },
  { image: '/assets/certificates/certificate5.svg', caption: 'Sample Certificate — HTML & Web Development' },
  { image: '/assets/certificates/certificate6.svg', caption: 'Sample Certificate — Coding Fundamentals' },
  { image: '/assets/certificates/certificate7.svg', caption: 'Sample Certificate — C++ Programming' },
  { image: '/assets/certificates/certificate8.svg', caption: 'Sample Certificate — Video Editing' },
];

export const certificateAlt = 'Sample course completion certificate from Digital Skills Academy';
