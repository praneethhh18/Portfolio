export type CertFile = {
  id: string;
  title: string;
  issuer?: string;
  gallery?: string[];
  path: string; // public path or external URL
  type: 'pdf' | 'image';
};

// Example initial certificates (place your files under /public/certs or use external URLs)
export const CERTIFICATE_FILES: CertFile[] = [
  {
    id: 'c1',
    title: 'Google AI & ML',
    issuer: 'Google for Developers',
    path: '/certs/google-ai-ml.pdf',
    type: 'pdf',
  },
  {
    id: 'c2',
    title: 'IT Specialist - Artificial Intelligence',
    issuer: 'Certiport',
    path: '/certs/artificial-intelligence.pdf',
    type: 'pdf',
  },
  {
    id: 'c3',
    title: 'Process Mining Fundamentals',
    issuer: 'Celonis',
    path: '/certs/celonis.pdf',
    type: 'pdf',
  },
  {
    id: 'c4',
    title: 'Palo Alto Cybersecurity',
    issuer: 'Palo Alto Networks',
    path: '/certs/palo-1.jpg',
    type: 'image',
    gallery: ['/certs/palo-1.jpg', '/certs/palo-2.jpg', '/certs/palo-3.jpg', '/certs/palo-4.jpg'],
  },
  {
    id: 'c5',
    title: 'AWS Cloud Academy Graduate',
    issuer: 'AWS Academy',
    path: '/certs/Aws-1.jpg',
    type: 'image',
    gallery: ['/certs/Aws-1.jpg', '/certs/Aws-2.jpg'],
  },
  {
    id: 'c6',
    title: 'AWS Cloud Virtual Internship',
    issuer: 'AWS Academy-EduSkills',
    path: '/certs/aws-vir.pdf',
    type: 'pdf',
  },
   {
    id: 'c7',
    title: 'Artificial Intelligence, Data Analytics, HTML5 AD, Data Structure using C',
    issuer: 'Ethnotech Academic Solutions',
    path: '/certs/eth1.jpeg',
    type: 'image',
    gallery: ['/certs/eth1.jpeg', '/certs/eth2.jpeg', '/certs/eth3.jpeg', '/certs/eth4.jpeg'],
  },
  {
    id: 'c8',
    title: 'Google Cloud career readiness ACE track ',
    issuer: 'Google Cloud',
    path: '/certs/Google Cloud Career Readiness Certificate - h712J363 - Praneeth P K.pdf',
    type: 'pdf',
  },
  
  {
    id: 'c9',
    title: ' Contentstack for Developers - TechSurf',
    issuer: 'Contentstack',
    path: '/certs/techsurf.pdf',
    type: 'pdf',
  },
];
