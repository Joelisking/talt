import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/shared/navbar';
import BackToTop from '@/components/shared/navbar/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TALT - Atakora Leadership Trust',
  description:
    'Developing transformational global leaders in Ghana through character-based scholarships and leadership mentoring programs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
