import { Metadata } from 'next';
import './layout.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';
import Footer from '@/components/core/Footer'
import Script from 'next/script';
const inter = Inter({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Innenanzeiger',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo/logo.svg" />
      <body className={inter.className}>
      <Script
        strategy="afterInteractive" 
        src={`https://${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`} 
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_SITE_ID || ''} 
        async 
      />
        <NextTopLoader
          color="#22c55e"
          initialPosition={0.08}
          crawlSpeed={0}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={800}
          shadow="0 0 10px #22c55e,0 0 5px #22c55e"
        />
        <Toaster />
        {/* Layout UI */}
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow __innenanzeiger">{children}</div> {/* This will grow to fill remaining space */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
