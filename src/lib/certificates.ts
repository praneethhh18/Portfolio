export type CertFile = {
  id: string;
  title: string;
  path: string; // public path or external URL
  type: 'pdf' | 'image';
};

// Example initial certificates (place your files under /public/certs or use external URLs)
export const CERTIFICATE_FILES: CertFile[] = [
  {
    id: 'c1',
    title: 'Google AI & ML',
    path: '/certs/google-ai-ml.pdf',
    type: 'pdf',
  },
  {
    id: 'c2',
    title: 'AWS Cloud',
    path: '/certs/aws-cloud.png',
    type: 'image',
  },
];
