import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Praneeth P K | AI & ML Developer',
  description: 'AI & ML Enthusiast | Researcher | Vibe Coder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className="dark" suppressHydrationWarning={true}>
      <head>
        {/* Favicon / PWA assets */}
  <link rel="icon" href="/icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111827" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111827" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
  <body suppressHydrationWarning={true} className={cn("font-body antialiased", "bg-background")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
