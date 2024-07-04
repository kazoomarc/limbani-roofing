import type { Metadata } from 'next';
import { Teko, Inter } from 'next/font/google';
import './globals.css';

const teko = Teko({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Limbani Roofing',
  description:
    'Limbani roofing service, we offer various services including commercial roofing, residential roofing and siding',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={teko.className}>{children}</body>
    </html>
  );
}
