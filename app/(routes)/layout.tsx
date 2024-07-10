import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Speedy Freight Solutions',
  description: 'A transport company based in Australia',
};

export default function StaticLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='translate-y-[70px] bg-blue-300'>{children}</div>
    </>
  );
}
