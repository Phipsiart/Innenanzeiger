import { Metadata } from "next"
import "../styles/globals.css";
import {Roboto} from "next/font/google"
const roboto = Roboto({
  subsets: ['latin'],
  weight: "300"
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
        <body className={roboto.className}>
          {/* Layout UI */}
          <div className="__innenanzeiger" >{children}</div>
        </body>
      </html>
    )
  }