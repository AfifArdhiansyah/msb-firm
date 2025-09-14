'use client';

import ResizableHeader from './resizable-header';
import Footer from './footer';
import ScrollToTop from '@/components/ui/scroll-to-top';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ResizableHeader />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}