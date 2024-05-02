import { Metadata } from "next"
import "./layout.css";
import {Inter} from "next/font/google"
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import NextTopLoader from 'nextjs-toploader'
const inter = Inter({
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: 'Innenanzeiger',
}
export default function RootLayout({
  children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" >
        <link rel="icon" href="/logo/logo.svg" />
        <body className={inter.className}>
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
          <div className="__innenanzeiger" >{children}</div>
          <div className="fixed bottom-1 right-2 text-[0.7rem] flex z-[100] ">
  <Link href="/disclaimer" className="text-red-500 font-bold ">Disclaimer</Link>
  <Link href="https://github.com/Phipsiart/Innenanzeiger" className="ml-2">Source Code</Link>
  <p className="ml-2 text-red-500 font-bold">All data without warranty.</p>
</div>

        </body>
      </html>
    )
  }