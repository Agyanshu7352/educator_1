import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Educator - A Brighter Future Begins Here | Top Colleges & Guidance',
  description:
    'Explore the right colleges. Get expert guidance. Build the career you deserve with Educator - trusted by 10,000+ students across India.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable}`}>
      <body className="font-sans min-h-screen bg-[#FDFDFE] text-slate-800 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
