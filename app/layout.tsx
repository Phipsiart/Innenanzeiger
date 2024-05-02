import { Metadata } from "next"
import "./layout.css";
import {Inter} from "next/font/google"
import { Toaster } from "@/components/ui/toaster";
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
          <Toaster />
          {/* Layout UI */}
          <div className="__innenanzeiger" >{children}</div>
        </body>
      </html>
    )
  }